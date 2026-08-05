"use client";
import { ArrowUpRight, CircleDollarSign, Gauge, ShoppingCart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CountUp } from "@/components/HomeAnimations";

const ease = [0.22, 1, 0.36, 1] as const;

const kpis = [
  { icon: CircleDollarSign, label: "Monthly Revenue", prefix: "₹", value: 24.8, decimals: 1, suffix: "L", change: "+12.4%" },
  { icon: Gauge, label: "Gross Margin", prefix: "", value: 34.7, decimals: 1, suffix: "%", change: "+2.8%" },
  { icon: ShoppingCart, label: "Orders Processed", prefix: "", value: 2.4, decimals: 1, suffix: "K", change: "+7.2%" },
] as const;

const trendLine = "0,66 40,52 80,58 120,32 160,40 200,18 240,28 280,8";
const trendArea = `0,100 ${trendLine} 280,100`;
const trendPoints = trendLine.split(" ").map((pair) => {
  const [x, y] = pair.split(",").map(Number);
  return { x, y };
});

const bars = [
  ["Sales", 82],
  ["Operations", 66],
  ["Marketing", 54],
  ["Finance", 45],
] as const;

export function ServicesDashboardShowcase() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="dashboard-showcase-frame">
      <div className="dashboard-showcase-grid-bg" aria-hidden="true" />
      <div className="dashboard-showcase-ghost ghost-a" aria-hidden="true" />
      <div className="dashboard-showcase-ghost ghost-b" aria-hidden="true" />
      <motion.div
        className="dashboard showcase-panel"
        initial={prefersReduced ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="dash-head">
          <div>
            <span className="demo">Demo Data</span>
            <h3>Executive Snapshot</h3>
            <p>Illustrative business intelligence preview.</p>
          </div>
          <span className="live"><i /> Demo Data · Live preview</span>
        </div>

        <div className="metrics showcase-kpis">
          {kpis.map(({ icon: Icon, label, prefix, value, decimals, suffix, change }, i) => (
            <motion.div
              className="metric showcase-kpi"
              key={label}
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.1 + i * 0.1, ease }}
            >
              <span className="showcase-kpi-label"><Icon size={14} aria-hidden="true" /> {label}</span>
              <strong>{prefix}<CountUp value={value} decimals={decimals} duration={1.1 + i * 0.15} />{suffix}</strong>
              <small><ArrowUpRight size={12} /> {change}</small>
            </motion.div>
          ))}
        </div>

        <div className="chart-row showcase-chart-row">
          <div className="line-chart">
            <div className="chart-title"><span>Revenue trend</span><b>Last 8 weeks</b></div>
            <div className="line-chart-canvas">
              <svg viewBox="0 0 280 100" role="img" aria-label="Demo revenue trend chart">
                <defs>
                  <linearGradient id="showcase-trend-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1D6CDB" stopOpacity=".22" />
                    <stop offset="1" stopColor="#1D6CDB" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[20, 50, 80].map((y) => (
                  <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#e2e7f0" />
                ))}
                <motion.polygon
                  points={trendArea}
                  fill="url(#showcase-trend-fill)"
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: prefersReduced ? 0 : 0.5, ease }}
                />
                <motion.polyline
                  points={trendLine}
                  fill="none"
                  stroke="#1D6CDB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: prefersReduced ? 0 : 1.1, delay: prefersReduced ? 0 : 0.3, ease }}
                />
                {trendPoints.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="3" fill="#1D6CDB" stroke="#fff" strokeWidth="2" />
                ))}
              </svg>
            </div>
          </div>
          <div className="bar-chart">
            <div className="chart-title"><span>By department</span></div>
            {bars.map(([label, pct], i) => (
              <div className="bar" key={label}>
                <span>{label}</span>
                <i>
                  <motion.em
                    initial={prefersReduced ? { width: `${pct}%` } : { width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: prefersReduced ? 0 : 0.5 + i * 0.08, ease }}
                  />
                </i>
                <b>{pct}%</b>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <p className="demo-note showcase-demo-note">
        <strong>Demo Data:</strong> All figures, trends, and charts above are illustrative sample values shown for layout purposes and do not represent real client results.
      </p>
    </div>
  );
}
