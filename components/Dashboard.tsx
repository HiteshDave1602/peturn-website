"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const tabs = ["Executive KPI", "Sales", "Inventory", "Profitability"] as const;
const values = {
  "Executive KPI": { metrics: [["Revenue", "₹24.8L", "+12.4%"], ["Gross Profit", "₹8.6L", "+8.2%"], ["Inventory Value", "₹12.1L", "-3.1%"], ["Monthly Growth", "12.4%", "+2.3%"]], line: "5,78 48,65 92,72 136,42 180,50 225,27 270,35 315,12" },
  Sales: { metrics: [["Revenue", "₹18.6L", "+9.8%"], ["Orders", "2,481", "+7.2%"], ["Average Value", "₹749", "+3.4%"], ["Monthly Growth", "9.8%", "+1.8%"]], line: "5,82 48,74 92,57 136,65 180,37 225,45 270,23 315,17" },
  Inventory: { metrics: [["Stock Value", "₹12.1L", "-3.1%"], ["Availability", "94.2%", "+1.2%"], ["Slow Moving", "7.8%", "-2.4%"], ["Stock Turns", "6.4x", "+0.7x"]], line: "5,31 48,39 92,35 136,48 180,44 225,59 270,54 315,70" },
  Profitability: { metrics: [["Gross Margin", "34.7%", "+2.8%"], ["Net Profit", "₹5.2L", "+11.3%"], ["Top Category", "Home", "+14.1%"], ["Cost Ratio", "65.3%", "-2.8%"]], line: "5,77 48,68 92,62 136,48 180,51 225,32 270,24 315,14" },
};

export function MiniDashboard({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Executive KPI");
  const data = values[tab];
  return <div className={`dashboard ${compact ? "compact" : ""}`}>
    <div className="dash-head"><div><span className="demo">Demo Data</span><h3>{tab} Dashboard</h3></div><span className="live"><i /> Updated now</span></div>
    {!compact && <div className="dash-tabs" role="tablist" aria-label="Dashboard preview">
      {tabs.map(t => <button key={t} role="tab" aria-selected={t === tab} onClick={() => setTab(t)}>{t}</button>)}
    </div>}
    <div className="metrics">{data.metrics.map(([name, value, change]) => <div className="metric" key={name}><span>{name}</span><strong>{value}</strong><small><ArrowUpRight size={12} /> {change}</small></div>)}</div>
    <div className="chart-row">
      <div className="line-chart"><div className="chart-title"><span>Performance trend</span><b>Jan — Jun</b></div>
        <svg viewBox="0 0 320 100" role="img" aria-label={`${tab} performance trend line`}>
          <defs><linearGradient id={`fill-${compact}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D6CDB" stopOpacity=".22"/><stop offset="1" stopColor="#1D6CDB" stopOpacity="0"/></linearGradient></defs>
          {[20,45,70,95].map(y => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#e2e7f0" />)}
          <polygon points={`5,95 ${data.line} 315,95`} fill={`url(#fill-${compact})`} />
          <polyline points={data.line} fill="none" stroke="#1D6CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="bar-chart"><div className="chart-title"><span>By region</span><b>Revenue</b></div>{[["West", 88], ["North", 72], ["South", 61], ["East", 48]].map(([n,v]) => <div className="bar" key={n}><span>{n}</span><i><em style={{width:`${v}%`}} /></i><b>{v}%</b></div>)}</div>
    </div>
  </div>;
}
