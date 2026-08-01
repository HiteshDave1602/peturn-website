"use client";
import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AnimatedMetric } from "@/components/AnimatedMetric";

const ease = [0.22, 1, 0.36, 1] as const;

const tabs = ["Executive KPI", "Sales", "Inventory", "Profitability"] as const;
const values = {
  "Executive KPI": { metrics: [["Revenue", "₹24.8L", "+12.4%"], ["Gross Profit", "₹8.6L", "+8.2%"], ["Inventory Value", "₹12.1L", "-3.1%"], ["Monthly Growth", "12.4%", "+2.3%"]], line: "5,78 48,65 92,72 136,42 180,50 225,27 270,35 315,12" },
  Sales: { metrics: [["Revenue", "₹18.6L", "+9.8%"], ["Orders", "2,481", "+7.2%"], ["Average Value", "₹749", "+3.4%"], ["Monthly Growth", "9.8%", "+1.8%"]], line: "5,82 48,74 92,57 136,65 180,37 225,45 270,23 315,17" },
  Inventory: { metrics: [["Stock Value", "₹12.1L", "-3.1%"], ["Availability", "94.2%", "+1.2%"], ["Slow Moving", "7.8%", "-2.4%"], ["Stock Turns", "6.4x", "+0.7x"]], line: "5,31 48,39 92,35 136,48 180,44 225,59 270,54 315,70" },
  Profitability: { metrics: [["Gross Margin", "34.7%", "+2.8%"], ["Net Profit", "₹5.2L", "+11.3%"], ["Top Category", "Home", "+14.1%"], ["Cost Ratio", "65.3%", "-2.8%"]], line: "5,77 48,68 92,62 136,48 180,51 225,32 270,24 315,14" },
};

export function MiniDashboard({ compact = false }: { compact?: boolean }) {
  const uid = `dashboard-${useId().replace(/:/g, "")}`;
  const [tab, setTab] = useState<(typeof tabs)[number]>("Executive KPI");
  const data = values[tab];
  const panelId = `${uid}-panel`;
  const selectedIndex = tabs.indexOf(tab);
  const selectedTabId = `${uid}-tab-${selectedIndex}`;
  const prefersReduced = useReducedMotion();

  const selectRelativeTab = (offset: number) => {
    const nextIndex = (selectedIndex + offset + tabs.length) % tabs.length;
    setTab(tabs[nextIndex]);
  };

  const panelVariants = {
    initial: prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: prefersReduced ? { opacity: 1 } : { opacity: 0, y: -6 },
  };

  return <motion.div
    className={`dashboard ${compact ? "compact" : ""}`}
    initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease }}
  >
    <div className="dash-head"><div><span className="demo">Demo Data Preview</span><h3>{tab} Dashboard</h3><p>Sample metrics shown for layout and reporting context.</p></div><span className="live"><i /> Demo refresh</span></div>
    {!compact && <div className="dash-tabs" role="tablist" aria-label="Dashboard preview">
      {tabs.map(t => <button
        key={t}
        id={`${uid}-tab-${tabs.indexOf(t)}`}
        role="tab"
        type="button"
        aria-selected={t === tab}
        aria-controls={panelId}
        tabIndex={t === tab ? 0 : -1}
        onClick={() => setTab(t)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            selectRelativeTab(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            selectRelativeTab(-1);
          }
          if (event.key === "Home") {
            event.preventDefault();
            setTab(tabs[0]);
          }
          if (event.key === "End") {
            event.preventDefault();
            setTab(tabs[tabs.length - 1]);
          }
        }}
      >{t}</button>)}
    </div>}
    <div id={panelId} role="tabpanel" aria-labelledby={selectedTabId} className="dashboard-panel">
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: prefersReduced ? 0 : 0.3, ease }}
      >
        <div className="metrics">{data.metrics.map(([name, value, change]) => <div className="metric" key={name}><span>{name}</span><AnimatedMetric value={value} /><small><ArrowUpRight size={12} /> {change}</small></div>)}</div>
        <div className="chart-row">
          <div className="line-chart"><div className="chart-title"><span>Performance trend</span><b>Jan — Jun</b></div>
            <svg viewBox="0 0 320 100" role="img" aria-label={`${tab} performance trend line`}>
              <defs><linearGradient id={`${uid}-fill-${compact}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D6CDB" stopOpacity=".22"/><stop offset="1" stopColor="#1D6CDB" stopOpacity="0"/></linearGradient></defs>
              {[20,45,70,95].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#e2e7f0" />)}
              <motion.polygon
                points={`5,95 ${data.line} 315,95`}
                fill={`url(#${uid}-fill-${compact})`}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.7 }}
              />
              <motion.polyline
                points={data.line}
                fill="none"
                stroke="#1D6CDB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: prefersReduced ? 0 : 0.9, ease }}
              />
            </svg>
          </div>
          <div className="bar-chart"><div className="chart-title"><span>By region</span><b>Revenue</b></div>{[["West", 88], ["North", 72], ["South", 61], ["East", 48]].map(([n,v], i) => <div className="bar" key={n}><span>{n}</span><i><motion.em
            initial={prefersReduced ? { width: `${v}%` } : { width: 0 }}
            animate={{ width: `${v}%` }}
            transition={{ duration: 0.7, delay: prefersReduced ? 0 : i * 0.08, ease }}
          /></i><b>{v}%</b></div>)}</div>
        </div>
      </motion.div>
    </AnimatePresence>
    </div>
  </motion.div>;
}
