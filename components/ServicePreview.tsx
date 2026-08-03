"use client";
import { useId, useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ServicePreview } from "@/data/service-details";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { formatMetric, parseMetric } from "@/lib/metric-format";

const ease = [0.22, 1, 0.36, 1] as const;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const donutColors = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100"];
const Y_AXIS_TICKS = [20, 45, 70, 95] as const;
const Y_TOP = Y_AXIS_TICKS[0];
const Y_BOTTOM = Y_AXIS_TICKS[Y_AXIS_TICKS.length - 1];
const CHART_LEFT_MARGIN = 40;
const CHART_BOTTOM_MARGIN = 14;
const DONUT_R = 15.9155;

function parsePoints(line: string) {
  return line.trim().split(/\s+/).map((pair) => {
    const [x, y] = pair.split(",").map(Number);
    return { x, y };
  });
}

function valueAtY(y: number, baseNum: number) {
  const t = (Y_BOTTOM - y) / (Y_BOTTOM - Y_TOP);
  return baseNum * (0.82 + t * 0.36);
}

const VIEWBOX_X = -CHART_LEFT_MARGIN;
const VIEWBOX_W = 320 + CHART_LEFT_MARGIN;
const VIEWBOX_H = 100 + CHART_BOTTOM_MARGIN;
const toLeftPct = (x: number) => ((x - VIEWBOX_X) / VIEWBOX_W) * 100;
const toTopPct = (y: number) => (y / VIEWBOX_H) * 100;

export function DashboardBody({ uid, title, preview, prefersReduced }: { uid: string; title: string; preview: ServicePreview; prefersReduced: boolean | null }) {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [activeBar, setActiveBar] = useState<number | null>(null);
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  const points = useMemo(() => parsePoints(preview.line), [preview.line]);
  const pointLabels = useMemo(() => months.slice(0, points.length), [points.length]);
  const baseMetric = useMemo(() => parseMetric(preview.metrics[0][1]), [preview.metrics]);

  const formatBase = (num: number) =>
    baseMetric ? `${baseMetric.prefix}${formatMetric(num, baseMetric.decimals, baseMetric.hasCommas)}${baseMetric.suffix}` : null;

  const pointValues = useMemo(() => {
    if (!baseMetric) return points.map(() => null as string | null);
    return points.map((p) => formatBase(valueAtY(p.y, baseMetric.num)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, baseMetric]);

  const yAxisLabels = useMemo(() => {
    if (!baseMetric) return Y_AXIS_TICKS.map(() => null as string | null);
    return Y_AXIS_TICKS.map((y) => formatBase(valueAtY(y, baseMetric.num)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseMetric]);

  const trendStats = useMemo(() => {
    if (!baseMetric) return null;
    const values = points.map((p) => valueAtY(p.y, baseMetric.num));
    const peak = Math.max(...values);
    const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
    return { peak: formatBase(peak), avg: formatBase(avg) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, baseMetric]);

  const donutSegments = useMemo(() => {
    const total = preview.bars.reduce((sum, [, pct]) => sum + pct, 0) || 1;
    let cumulative = 0;
    return preview.bars.map(([label, pct], i) => {
      const share = (pct / total) * 100;
      const segment = { label, pct, share, offset: cumulative / 100, color: donutColors[i % donutColors.length] };
      cumulative += share;
      return segment;
    });
  }, [preview.bars]);

  const leadingSlice = useMemo(
    () => donutSegments.reduce((max, seg) => (seg.share > max.share ? seg : max), donutSegments[0]),
    [donutSegments]
  );

  const active = activePoint !== null ? points[activePoint] : null;

  return (
    <>
      <div className="metrics">
        {preview.metrics.map(([label, value, change]) => {
          const isNegative = change.trim().startsWith("-");
          return (
            <div className="metric" key={label}>
              <span>{label}</span>
              <AnimatedMetric value={value} />
              <small className={isNegative ? "negative" : ""}>
                {isNegative ? <ArrowDownRight size={12} /> : <ArrowUpRight size={12} />} {change}
              </small>
            </div>
          );
        })}
      </div>
      <div className="chart-row">
        <div className="line-chart">
          <div className="chart-title"><span>{preview.metrics[0][0]} trend</span><b>{pointLabels[0]} — {pointLabels[pointLabels.length - 1]}</b></div>
          {trendStats && (
            <div className="chart-kpi-row">
              <span className="chart-kpi"><label>Peak</label><strong>{trendStats.peak}</strong></span>
              <span className="chart-kpi"><label>Average</label><strong>{trendStats.avg}</strong></span>
            </div>
          )}
          <div className="line-chart-canvas" onPointerLeave={() => setActivePoint(null)}>
            <svg viewBox={`${VIEWBOX_X} 0 ${VIEWBOX_W} ${VIEWBOX_H}`} role="img" aria-label={`${title} performance trend with axes`}>
              <defs><linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D6CDB" stopOpacity=".24" /><stop offset="1" stopColor="#1D6CDB" stopOpacity="0" /></linearGradient></defs>
              {Y_AXIS_TICKS.map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#e2e7f0" />)}
              {Y_AXIS_TICKS.map((y, i) => (
                <text key={y} x="-6" y={y + 2} textAnchor="end" className="axis-y-label">{yAxisLabels[i]}</text>
              ))}
              {points.map((p, i) => (
                <text key={i} x={p.x} y={108} textAnchor="middle" className="axis-x-label">{pointLabels[i]}</text>
              ))}
              <motion.polygon
                points={`5,98 ${preview.line} 315,98`}
                fill={`url(#${uid}-fill)`}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.5 }}
              />
              <motion.polyline
                points={preview.line}
                fill="none"
                stroke="#1D6CDB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: prefersReduced ? 0 : 1, ease }}
              />
              {active && (
                <line x1={active.x} y1="0" x2={active.x} y2="100" stroke="#1D6CDB" strokeWidth="1" strokeDasharray="3 3" opacity=".5" />
              )}
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={activePoint === i ? 5 : 3} fill="#1D6CDB" stroke="#fff" strokeWidth="2" className="chart-dot" />
              ))}
            </svg>
            <div className="chart-hit-row" role="group" aria-label={`${title} monthly performance values`}>
              {points.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  className="chart-hit"
                  style={{ left: `${toLeftPct(p.x)}%` }}
                  onPointerEnter={() => setActivePoint(i)}
                  onFocus={() => setActivePoint(i)}
                  onBlur={() => setActivePoint((cur) => (cur === i ? null : cur))}
                >
                  <span className="sr-only">{pointLabels[i]}: {pointValues[i]}</span>
                </button>
              ))}
            </div>
            {active && activePoint !== null && (
              <div className="chart-tooltip" style={{ left: `${toLeftPct(active.x)}%`, top: `${toTopPct(active.y)}%` }}>
                <b>{pointValues[activePoint]}</b>
                <span>{pointLabels[activePoint]} · {preview.metrics[0][0]}</span>
              </div>
            )}
          </div>
        </div>
        <div className="bar-chart">
          <div className="chart-title"><span>{preview.barsLabel}</span></div>
          {preview.bars.map(([label, pct], i) => (
            <button
              key={label}
              type="button"
              className={`bar ${activeBar === i ? "bar-active" : ""}`}
              onPointerEnter={() => setActiveBar(i)}
              onPointerLeave={() => setActiveBar((cur) => (cur === i ? null : cur))}
              onFocus={() => setActiveBar(i)}
              onBlur={() => setActiveBar((cur) => (cur === i ? null : cur))}
            >
              <span>{label}</span>
              <i>
                <motion.em
                  initial={prefersReduced ? { width: `${pct}%` } : { width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: prefersReduced ? 0 : i * 0.08, ease }}
                />
              </i>
              <b>{pct}%</b>
            </button>
          ))}
        </div>
      </div>
      <div className="donut-panel">
        <div className="chart-title"><span>{preview.barsLabel} mix</span><b>Share of total</b></div>
        <div className="donut-body">
          <div className="donut-wrap">
            <svg viewBox="0 0 42 42" role="img" aria-label={`${title} category mix`}>
              <g transform="rotate(-90 21 21)">
                <circle cx="21" cy="21" r={DONUT_R} fill="transparent" stroke="var(--border)" strokeWidth="6" />
                {donutSegments.map((seg, i) => {
                  const segLength = Math.max(seg.share / 100 - 0.012, 0);
                  return (
                    <motion.circle
                      key={seg.label}
                      cx="21"
                      cy="21"
                      r={DONUT_R}
                      fill="transparent"
                      stroke={seg.color}
                      strokeWidth={activeSlice === i ? 8 : 6}
                      strokeLinecap="butt"
                      style={{ transition: "stroke-width .15s ease" }}
                      initial={prefersReduced ? { pathLength: segLength, pathOffset: seg.offset } : { pathLength: 0, pathOffset: seg.offset }}
                      whileInView={{ pathLength: segLength, pathOffset: seg.offset }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, delay: prefersReduced ? 0 : 0.2 + i * 0.12, ease }}
                    />
                  );
                })}
              </g>
            </svg>
            <div className="donut-center">
              <strong>{Math.round(leadingSlice.share)}%</strong>
              <span>{leadingSlice.label}</span>
            </div>
          </div>
          <ul className="donut-legend">
            {donutSegments.map((seg, i) => (
              <li key={seg.label}>
                <button
                  type="button"
                  className={`donut-legend-item ${activeSlice === i ? "active" : ""}`}
                  onPointerEnter={() => setActiveSlice(i)}
                  onPointerLeave={() => setActiveSlice((cur) => (cur === i ? null : cur))}
                  onFocus={() => setActiveSlice(i)}
                  onBlur={() => setActiveSlice((cur) => (cur === i ? null : cur))}
                >
                  <i style={{ background: seg.color }} />
                  <span>{seg.label}</span>
                  <b>{Math.round(seg.share)}%</b>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function ServicePreviewDashboard({ title, preview }: { title: string; preview: ServicePreview }) {
  const uid = `svc-dash-${useId().replace(/:/g, "")}`;
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="dashboard service-preview-dashboard"
      initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="dash-head">
        <div>
          <span className="demo">Demo Data Preview</span>
          <h3>{title} Dashboard</h3>
          <p>Sample metrics shown for layout and reporting context.</p>
        </div>
        <span className="live"><i /> Demo refresh</span>
      </div>
      <DashboardBody uid={uid} title={title} preview={preview} prefersReduced={prefersReduced} />
    </motion.div>
  );
}
