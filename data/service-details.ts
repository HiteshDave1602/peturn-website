export type ServicePreview = {
  readonly metrics: readonly (readonly [string, string, string])[];
  readonly line: string;
  readonly barsLabel: string;
  readonly bars: readonly (readonly [string, number])[];
  readonly mixInsights?: {
    readonly title: string;
    readonly topLabel: string;
    readonly lowestLabel: string;
    readonly changeLabel: string;
    readonly change: string;
    readonly note: string;
  };
};

export type ServiceDetail = {
  readonly id: string;
  readonly icon: number;
  readonly title: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly outcomes: readonly string[];
  readonly preview: ServicePreview;
};

export const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "dashboard-development",
    icon: 1,
    title: "Interactive Dashboard Development",
    description: "Modern dashboards that provide timely insights into your business performance. Each dashboard is tailored to your reporting requirements, operations, goals, and KPIs — turning raw data into visual stories your team can act on.",
    capabilities: [
      "Executive KPI dashboards",
      "Sales performance dashboards",
      "Inventory health dashboards",
      "Financial summary dashboards",
      "Custom department dashboards",
      "Real-time data refresh setup",
    ],
    outcomes: [
      "Visual clarity across all business functions",
      "Drill-down capability from summary to detail",
      "Stable, responsive dashboard container",
    ],
    preview: {
      metrics: [
        ["Dashboards Deployed", "24", "+6"],
        ["Data Sources Connected", "9", "+2"],
        ["Refresh Cycle", "15 min", "stable"],
        ["Team Adoption", "92%", "+8%"],
      ],
      line: "5,80 48,68 92,72 136,50 180,55 225,32 270,38 315,15",
      barsLabel: "By dashboard type",
      bars: [
        ["Executive", 82],
        ["Sales", 68],
        ["Inventory", 55],
        ["Financial", 47],
      ],
      mixInsights: {
        title: "Dashboard Insights",
        topLabel: "Top dashboard type",
        lowestLabel: "Lowest dashboard type",
        changeLabel: "Adoption change",
        change: "+8%",
        note: "Executive dashboards contribute the largest share of total usage.",
      },
    },
  },
  {
    id: "sales-analytics",
    icon: 2,
    title: "Sales Analytics",
    description: "Understand revenue, customer, and product performance across time, categories, and regions. Sales analytics helps you identify trends, spot underperformance, and focus resources where they generate the most return.",
    capabilities: [
      "Sales Performance tracking",
      "Revenue Analysis by product, region, and channel",
      "Customer Trends and segmentation",
      "Monthly Growth monitoring",
      "Product Performance ranking",
      "Regional Sales comparison",
    ],
    outcomes: [
      "Clear view of revenue drivers and gaps",
      "Data-backed sales strategy adjustments",
      "Identified opportunities for growth",
    ],
    preview: {
      metrics: [
        ["Revenue", "₹18.6L", "+9.8%"],
        ["Orders", "2,481", "+7.2%"],
        ["Average Value", "₹749", "+3.4%"],
        ["Monthly Growth", "9.8%", "+1.8%"],
      ],
      line: "5,82 48,74 92,57 136,65 180,37 225,45 270,23 315,17",
      barsLabel: "By region",
      bars: [
        ["West", 88],
        ["North", 72],
        ["South", 61],
        ["East", 48],
      ],
      mixInsights: {
        title: "Region Insights",
        topLabel: "Top region",
        lowestLabel: "Lowest region",
        changeLabel: "Growth change",
        change: "+1.8%",
        note: "West contributes the largest share of total sales.",
      },
    },
  },
  {
    id: "inventory-analytics",
    icon: 3,
    title: "Inventory Analytics",
    description: "Balance stock availability and working capital with a clearer view of inventory health. Inventory analytics helps you reduce carrying costs, avoid stockouts, and make smarter reorder decisions.",
    capabilities: [
      "Inventory Health monitoring",
      "Stock Aging analysis",
      "Fast and Slow Moving item identification",
      "Reorder Planning optimization",
      "Stock Availability tracking",
      "Inventory Optimization recommendations",
    ],
    outcomes: [
      "Reduced stockouts and overstock situations",
      "Improved working capital management",
      "Faster inventory turnover",
    ],
    preview: {
      metrics: [
        ["Stock Value", "₹12.1L", "-3.1%"],
        ["Availability", "94.2%", "+1.2%"],
        ["Slow Moving", "7.8%", "-2.4%"],
        ["Stock Turns", "6.4x", "+0.7x"],
      ],
      line: "5,31 48,39 92,35 136,48 180,44 225,59 270,54 315,70",
      barsLabel: "By category",
      bars: [
        ["Grocery", 76],
        ["Electronics", 64],
        ["Apparel", 52],
        ["Home", 39],
      ],
      mixInsights: {
        title: "Category Insights",
        topLabel: "Top category",
        lowestLabel: "Lowest category",
        changeLabel: "Availability change",
        change: "+1.2%",
        note: "Grocery contributes the largest share of total inventory.",
      },
    },
  },
  {
    id: "procurement-analytics",
    icon: 4,
    title: "Procurement Analytics",
    description: "Monitor purchasing patterns, costs, and supplier performance to improve procurement efficiency. Procurement analytics helps you negotiate better, track spend, and ensure supply chain reliability.",
    capabilities: [
      "Vendor Performance scoring and comparison",
      "Purchase Trends analysis",
      "Supplier Analysis and risk assessment",
      "Purchase Cost Monitoring and forecasting",
      "Procurement Efficiency benchmarking",
    ],
    outcomes: [
      "Transparent spend visibility across suppliers",
      "Better negotiating position with data",
      "Reduced procurement costs over time",
    ],
    preview: {
      metrics: [
        ["Active Vendors", "38", "+4"],
        ["Avg. PO Cycle", "6.2 days", "-1.1d"],
        ["Spend Under Contract", "81%", "+5%"],
        ["Cost Savings", "₹3.4L", "+9%"],
      ],
      line: "5,75 48,62 92,68 136,44 180,50 225,29 270,34 315,12",
      barsLabel: "By vendor spend",
      bars: [
        ["Vendor A", 71],
        ["Vendor B", 58],
        ["Vendor C", 44],
        ["Vendor D", 33],
      ],
      mixInsights: {
        title: "Vendor Insights",
        topLabel: "Top vendor",
        lowestLabel: "Lowest vendor",
        changeLabel: "Cost savings",
        change: "+9%",
        note: "Vendor A contributes the largest share of total spend.",
      },
    },
  },
  {
    id: "profitability-analysis",
    icon: 5,
    title: "Profitability Analysis",
    description: "See which products, departments, and categories contribute most to sustainable profit. Profitability analysis helps you allocate resources wisely and focus on what drives real business value.",
    capabilities: [
      "Gross Profit tracking by product and category",
      "Net Profit analysis across business units",
      "Product Margins comparison and trending",
      "Department Performance evaluation",
      "Category Performance benchmarking",
    ],
    outcomes: [
      "Clear understanding of profit drivers",
      "Identified margin improvement opportunities",
      "Better resource allocation decisions",
    ],
    preview: {
      metrics: [
        ["Gross Margin", "34.7%", "+2.8%"],
        ["Net Profit", "₹5.2L", "+11.3%"],
        ["Top Category", "Home", "+14.1%"],
        ["Cost Ratio", "65.3%", "-2.8%"],
      ],
      line: "5,77 48,68 92,62 136,48 180,51 225,32 270,24 315,14",
      barsLabel: "By category margin",
      bars: [
        ["Home", 68],
        ["Electronics", 54],
        ["Apparel", 47],
        ["Grocery", 36],
      ],
      mixInsights: {
        title: "Category Insights",
        topLabel: "Top category",
        lowestLabel: "Lowest category",
        changeLabel: "Profit change",
        change: "+11.3%",
        note: "Home contributes the largest share of total margin.",
      },
    },
  },
  {
    id: "executive-reporting",
    icon: 6,
    title: "Executive Reporting",
    description: "Executive-ready reports designed for business owners and leadership teams, highlighting KPIs, trends, risks, and actionable recommendations. Designed for clarity, not complexity.",
    capabilities: [
      "Monthly executive summary reports",
      "KPI trend analysis and forecasting",
      "Risk identification and flagging",
      "Actionable recommendation generation",
      "Board-ready presentation formats",
      "Automated report distribution",
    ],
    outcomes: [
      "Leadership-aligned reporting cadence",
      "Clear, actionable business insights",
      "Reduced time preparing board materials",
    ],
    preview: {
      metrics: [
        ["Reports Automated", "18", "+5"],
        ["Avg. Prep Time", "2.1 hrs", "-64%"],
        ["Stakeholders Reached", "32", "+7"],
        ["On-time Delivery", "98%", "+3%"],
      ],
      line: "5,85 48,73 92,79 136,55 180,60 225,38 270,44 315,20",
      barsLabel: "By report type",
      bars: [
        ["Monthly Summary", 85],
        ["KPI Trend", 70],
        ["Risk Flag", 52],
        ["Board Deck", 44],
      ],
      mixInsights: {
        title: "Report Insights",
        topLabel: "Top report type",
        lowestLabel: "Lowest report type",
        changeLabel: "Delivery change",
        change: "+3%",
        note: "Monthly summary reports contribute the largest share of total output.",
      },
    },
  },
] as const;
