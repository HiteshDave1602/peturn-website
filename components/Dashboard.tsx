"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ServicePreview } from "@/data/service-details";
import { DashboardBody } from "@/components/ServicePreview";

const ease = [0.22, 1, 0.36, 1] as const;

const tabs = ["Executive KPI", "Sales", "Inventory", "Profitability"] as const;
const values: Record<(typeof tabs)[number], ServicePreview> = {
  "Executive KPI": {
    metrics: [["Revenue", "₹24.8L", "+12.4%"], ["Gross Profit", "₹8.6L", "+8.2%"], ["Inventory Value", "₹12.1L", "-3.1%"], ["Monthly Growth", "12.4%", "+2.3%"]],
    line: "5,78 48,65 92,72 136,42 180,50 225,27 270,35 315,12",
    barsLabel: "By department",
    bars: [["Sales", 82], ["Operations", 68], ["Marketing", 55], ["Finance", 47]],
    mixInsights: {
      title: "Department Insights",
      topLabel: "Top department",
      lowestLabel: "Lowest department",
      changeLabel: "MoM change",
      change: "+8.4%",
      note: "Sales contributes the largest share of total performance.",
    },
  },
  Sales: {
    metrics: [["Revenue", "₹18.6L", "+9.8%"], ["Orders", "2,481", "+7.2%"], ["Average Value", "₹749", "+3.4%"], ["Monthly Growth", "9.8%", "+1.8%"]],
    line: "5,82 48,74 92,57 136,65 180,37 225,45 270,23 315,17",
    barsLabel: "By region",
    bars: [["West", 88], ["North", 72], ["South", 61], ["East", 48]],
  },
  Inventory: {
    metrics: [["Stock Value", "₹12.1L", "-3.1%"], ["Availability", "94.2%", "+1.2%"], ["Slow Moving", "7.8%", "-2.4%"], ["Stock Turns", "6.4x", "+0.7x"]],
    line: "5,31 48,39 92,35 136,48 180,44 225,59 270,54 315,70",
    barsLabel: "By category",
    bars: [["Grocery", 76], ["Electronics", 64], ["Apparel", 52], ["Home", 39]],
  },
  Profitability: {
    metrics: [["Gross Margin", "34.7%", "+2.8%"], ["Net Profit", "₹5.2L", "+11.3%"], ["Top Category", "Home", "+14.1%"], ["Cost Ratio", "65.3%", "-2.8%"]],
    line: "5,77 48,68 92,62 136,48 180,51 225,32 270,24 315,14",
    barsLabel: "By category margin",
    bars: [["Home", 68], ["Electronics", 54], ["Apparel", 47], ["Grocery", 36]],
  },
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
        <DashboardBody uid={`${uid}-${tab.replace(/\s+/g, "")}`} title={tab} preview={data} prefersReduced={prefersReduced} />
      </motion.div>
    </AnimatePresence>
    </div>
  </motion.div>;
}
