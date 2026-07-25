export const contact = {
  email: "dhyanirayka20@gmail.com",
  website: "www.peturn.in",
  indiaPhone: "+91 84693 49930",
  usPhone: "+1 732 801 1981",
  indiaTel: "+918469349930",
  usTel: "+17328011981",
  indiaWhatsApp: "https://wa.me/918469349930",
  usWhatsApp: "https://wa.me/17328011981",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Company", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const services = [
  { title: "Business Intelligence", text: "Centralize your business data into one intelligent platform for better visibility and faster decision-making.", tags: ["Unified data", "Clear KPIs"] },
  { title: "Sales Analytics", text: "Understand revenue, customer and product performance across time, categories and regions.", tags: ["Sales Performance", "Revenue Analysis", "Customer Trends", "Monthly Growth", "Product Performance", "Regional Sales"] },
  { title: "Inventory Analytics", text: "Balance stock availability and working capital with a clearer view of inventory health.", tags: ["Inventory Health", "Stock Aging", "Fast & Slow Moving", "Reorder Planning", "Stock Availability", "Optimization"] },
  { title: "Procurement Analytics", text: "Monitor purchasing patterns, costs and supplier performance to improve procurement efficiency.", tags: ["Vendor Performance", "Purchase Trends", "Supplier Analysis", "Cost Monitoring"] },
  { title: "Profitability Analysis", text: "See which products, departments and categories contribute most to sustainable profit.", tags: ["Gross Profit", "Net Profit", "Product Margins", "Department Performance", "Category Performance"] },
  { title: "Executive Reporting", text: "Executive-ready reports highlighting KPIs, trends, risks, and actionable recommendations.", tags: ["Leadership-ready", "Decision support"] },
] as const;

type PricingPlan = {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly items: readonly string[];
  readonly featured: boolean;
};

export const pricing = [
  { name: "Starter", description: "Perfect for small businesses beginning their analytics journey.", price: "Starting from ₹9,999/month", items: ["Dashboard setup", "Monthly reporting", "Business insights", "Email support"], featured: false },
  { name: "Growth", description: "Designed for businesses requiring advanced analytics and deeper reporting.", price: "Starting from ₹14,999/month", items: ["Multiple dashboards", "Executive reports", "Performance tracking", "Priority support"], featured: true },
  { name: "Enterprise", description: "Customized Business Intelligence solutions for medium and large organizations.", price: "Custom pricing based on project scope", items: ["Tailored data model", "Custom integrations", "Advanced reporting", "Ongoing support"], featured: false },
] as const satisfies readonly PricingPlan[];

export const faqs = [
  ["What data sources do you support?", "Excel, CSV, ERP systems, POS systems, accounting software, databases, and other business applications."],
  ["Can you work with our existing Excel reports?", "Yes. We can transform your existing Excel reports into structured, professional dashboards."],
  ["Is our business data secure?", "Yes. Client confidentiality and responsible handling of business data are among Peturn’s highest priorities."],
  ["Do you provide ongoing support?", "Yes. Peturn offers continuous support, dashboard enhancements, and performance reviews based on the selected service plan."],
  ["Can dashboards be customized?", "Yes. Every dashboard is tailored to the business’s reporting requirements, operations, goals, and KPIs."],
] as const;

export const socialLinks = { linkedin: "", instagram: "", facebook: "" } as const;
