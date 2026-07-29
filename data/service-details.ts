export type ServiceDetail = {
  readonly id: string;
  readonly icon: number;
  readonly title: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly outcomes: readonly string[];
};

export const serviceDetails: readonly ServiceDetail[] = [
  {
    id: "business-intelligence",
    icon: 0,
    title: "Business Intelligence Consulting",
    description: "Centralize your business data into one intelligent platform for better visibility and faster decision-making. We help you connect disparate data sources, define meaningful KPIs, and build a reporting foundation that scales with your business.",
    capabilities: [
      "Data source assessment and integration planning",
      "KPI definition and reporting structure design",
      "BI platform selection and architecture",
      "Data modeling and warehouse design",
      "Executive dashboard development",
      "Team training and adoption support",
    ],
    outcomes: [
      "Single source of truth for business data",
      "Faster, more confident decision-making",
      "Reduced time spent on manual data gathering",
    ],
  },
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
  },
] as const;
