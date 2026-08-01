import Image from "next/image";
import Link from "next/link";
import { BarChart3, Building2, Cable, ChartNoAxesCombined, Check, CircleDollarSign, ClipboardCheck, Database, FileSpreadsheet, FileText, Gauge, HardDrive, Headphones, LayoutDashboard, Mail, Map, MessageCircle, PackageSearch, Phone, Presentation, RefreshCw, ShieldCheck, ShoppingBasket, Target, TrendingUp } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MiniDashboard } from "@/components/Dashboard";
import { DashboardCTA, FAQList, WhatsAppOpenButton } from "@/components/Interactive";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { HeroSeq } from "@/components/HeroMotion";
import { Reveal } from "@/components/Reveal";
import { BlurUp, BorderTraceCard, ConnectorStem, CountUp, ScatterReveal, ShieldDraw, SlideIn, WipeImage } from "@/components/HomeAnimations";
import { contact, pricing, services } from "@/data/site-content";

const problemIcons = [FileSpreadsheet, RefreshCw, Database, Gauge];
const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];
const process = [
  ["Business Discovery", "We understand your business, challenges, goals, and reporting requirements."],
  ["Data Collection", "We collect data from Excel, ERP systems, accounting software, POS systems, databases, and other business applications."],
  ["Data Preparation", "Our team cleans, validates, and structures your data for accurate analysis."],
  ["Dashboard Development", "We design customized dashboards tailored to meet your business objectives."],
  ["Review and Optimization", "We review the dashboards with your team and refine them based on feedback."],
  ["Delivery and Support", "We deploy the solution and provide continuous support to ensure long-term success."]
];

const serviceOutcomes = [
  ["Scattered reporting makes one reliable view difficult.", "A unified BI layer that keeps KPIs visible and decision-ready."],
  ["Sales teams need to know where revenue, customers, and products are moving.", "Clear sales performance views for trends, regions, and product focus."],
  ["Stock decisions are harder when availability, aging, and turns are hidden.", "Inventory visibility that supports reorder planning and working-capital control."],
  ["Purchasing costs and supplier patterns can be hard to compare.", "Procurement reporting that highlights spend, vendors, and cost movement."],
  ["Profit can vary across products, departments, and categories.", "Margin views that show where sustainable profit is being created."],
  ["Leadership needs fewer manual reports and clearer signals.", "Executive-ready reporting with KPIs, trends, risks, and recommendations."],
] as const;
const whyUsCards = [
  ["Business-focused analytics", "Insights stay connected to commercial goals and operational priorities, not just raw numbers."],
  ["Customized dashboards", "Every view reflects the KPIs, workflows and decisions that matter to your specific team."],
  ["Continuous support", "Ongoing help keeps dashboards accurate and useful as your reporting needs evolve."],
] as const;

const impactStats = [
  { value: 5, decimals: 0, suffix: "x", label: "Faster Decisions", text: "Organizations using business intelligence daily make decisions roughly five times faster than teams relying on manual reporting." },
  { value: 23, decimals: 0, suffix: "x", label: "More Customer Growth", text: "Data-driven companies are 23 times more likely to acquire new customers, according to Harvard Business Review research." },
  { value: 3.8, decimals: 1, suffix: "x", label: "Higher ROI", text: "Organizations that act on data-driven insights see nearly four times the return on investment of those that don't." },
  { value: 77, decimals: 0, suffix: "%", label: "Higher Success Rate", text: "CEOs who lead with data-driven decisions report a significantly higher success rate, per Deloitte research." },
] as const;

export function HeroSection() {
  return <section id="home" className="hero">
    <div className="hero-bg" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="auto">
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="hero-orbit" aria-hidden="true"><i/><i/><i/><svg viewBox="0 0 300 180"><path d="M10 155 C70 150 82 105 132 112 S210 65 286 20"/><path d="m265 20 21 0 0 21"/></svg></div>
    <div className="container hero-grid">
      <div className="hero-copy">
        <HeroSeq index={0}><p className="eyebrow">Business Intelligence &amp; Analytics Consulting</p></HeroSeq>
        <HeroSeq index={1}><h1>Turn business data into decisions leaders can act on.</h1></HeroSeq>
        <HeroSeq index={2}><p className="lead">Peturn builds practical BI dashboards which help businesses transform sales, inventory, procurement, financial, and operational data into clear insights that support faster and more confident decisions.</p></HeroSeq>
        <HeroSeq index={3}><p className="hero-statement">Less manual reporting. Sharper visibility. Better business decisions.</p></HeroSeq>
        <HeroSeq index={4}><div className="actions"><a className="button" href="/contact#start-conversation">Book a Free Consultation</a><a className="button secondary" href="#sample-dashboards">Explore Demo Dashboard</a></div></HeroSeq>
      </div>
    </div>
  </section>;
}



export function AboutSection() {
  return <section id="about" className="section">
    <div className="container about-grid"><div><p className="eyebrow">Built for better decisions</p><h2>About Peturn</h2><div className="about-copy"><p>Peturn is a Business Intelligence and Analytics consulting company focused on helping businesses unlock the true value of their data.</p><p>Many organizations rely on spreadsheets, manual reports, and disconnected systems that make decision-making slow and inefficient. At Peturn, we transform business data into interactive dashboards and actionable insights that help leaders make confident, data-driven decisions.</p><p>Whether you are a growing retail business or a manufacturing company, our solutions provide clear visibility into your operations, enabling you to improve performance, reduce costs, and drive sustainable growth.</p></div></div>
      <div className="about-visual image-visual"><Image src="/images/02-about-company.jpg" alt="Peturn analytics consultation meeting" width={600} height={400} className="about-img" sizes="(max-width: 768px) 100vw, 50vw" /></div>
      <div className="mission-grid">
        <article id="mission-slide-1" className="mission-card"><Map/><h3>Our Mission</h3><p>To help businesses make smarter decisions through simple, affordable, and data-driven analytics.</p></article>
        <article id="mission-slide-2" className="mission-card"><Target/><h3>Our Vision</h3><p>To become the most trusted Business Intelligence partner for SMEs.</p></article>
      </div>
    </div>
  </section>;
}

export function ProblemsSection() {
  return <section className="problems">
    <div className="container">
      <Reveal><SectionHeading eyebrow="From complexity to clarity" title="Your Business Has Data. The Challenge Is Turning It into Direction." /></Reveal>
      <div className="four-grid">{["Scattered spreadsheets","Manual reporting","Disconnected systems","Slow decision-making"].map((x,i) => { const Icon=problemIcons[i]; return <ScatterReveal key={x} index={i} className="problem-card" id={`problem-slide-${i+1}`}><Icon/><h3>{x}</h3><p>{["Different versions make one reliable view difficult.","Repetitive report preparation consumes valuable time.","Key information stays isolated across business tools.","Late information delays confident action."][i]}</p></ScatterReveal>; })}</div>
      <Reveal><p className="solution-line"><span>Peturn transforms</span> disconnected business information into clear dashboards, reliable reporting, and actionable insights.</p></Reveal>
    </div>
  </section>;
}

export function ImpactStatsSection() {
  return <section id="impact-stats" className="section stats-section">
    <div className="container"><Reveal><SectionHeading eyebrow="Backed by research" title="What Data-Driven Decision-Making Delivers" text="Independent industry research shows what clear, connected reporting can change for a business — beyond just internal reporting."/></Reveal>
      <div className="stats-strip">{impactStats.map(({ value, decimals, suffix, label }, i) => <Reveal key={label} as="article" delay={i * 0.08} className="stat-item"><strong className="stat-number"><CountUp value={value} decimals={decimals} duration={1.4 + i * 0.15} /><span>{suffix}</span></strong><h3>{label}</h3></Reveal>)}</div>
      <p className="stats-source">Source: general industry research (Deloitte, Harvard Business Review and related studies) on data-driven decision-making — not Peturn-specific client results.</p>
    </div>
  </section>;
}

export function ServicesSection() {
  return <section id="services" className="section">
    <div className="container"><Reveal><SectionHeading eyebrow="What we help you see" title="Business Intelligence Solutions Built Around Your Business" text="From sales and inventory to procurement and profitability, Peturn helps you see what is happening, understand why it is happening, and decide what to do next."/></Reveal>
      <div className="services-radial services-home-grid" aria-label="Peturn services">
        {services.map((item,i) => { const Icon=serviceIcons[i]; const [problem, outcome] = serviceOutcomes[i]; return <Reveal as="article" key={item.title} delay={i * 0.08} className="service-orb service-home-card">
          <div className="service-orb-icon"><Icon/></div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <dl><div><dt>Business problem</dt><dd>{problem}</dd></div><div><dt>Outcome</dt><dd>{outcome}</dd></div></dl>
          <div className="tags">{item.tags.slice(0, 3).map(t=><span key={t}>{t}</span>)}</div>
          <Link href="/services" aria-label={`Learn more about ${item.title}`}>View service</Link>
        </Reveal>; })}
      </div>
    </div>
  </section>;
}

export function SampleDashboardsSection() {
  return <section id="sample-dashboards" className="section blue-section">
    <div className="container dashboard-section"><SectionHeading eyebrow="Interactive preview" title="See Your Business More Clearly" text="Explore examples of the dashboard solutions Peturn can customize around your data, goals, and KPIs."/>
      <div className="category-strip" aria-label="Available dashboard categories">{["Executive KPI Dashboard","Sales Dashboard","Inventory Dashboard","Procurement Dashboard","Profitability Dashboard","Customer Analytics","Business Performance Dashboard","Financial Summary Dashboard"].map(x=><span key={x}>{x}</span>)}</div>
      <MiniDashboard/><p className="demo-note"><strong>Demo Data:</strong> All values and visualizations shown above are sample data and do not represent a real client.</p><DashboardCTA/>
    </div>
  </section>;
}

export function IndustriesSection() {
  return <section id="industries" className="section">
    <div className="container"><Reveal><SectionHeading eyebrow="Industry context matters" title="Analytics Designed for Your Industry" text="Dashboards shaped around the operating rhythms, questions and decisions in your business."/></Reveal>
      <div className="industries-grid">
        <SlideIn as="article" direction="left" id="industry-slide-1" className="industry-card"><div className="industry-visual retail" aria-hidden="true"><WipeImage direction="left" src="/images/retail-new.jpg" alt="" width={600} height={400} className="industry-img" sizes="(max-width: 768px) 100vw, 50vw" /></div><div><span className="industry-label"><ShoppingBasket/> Retail businesses</span><h3>See every store, shelf and sale in context.</h3><p>Connect sales, stock and margin visibility so teams can respond with confidence.</p><div className="chips">{["Supermarkets","Liquor Stores","Grocery Stores","Department Stores","Electronics Retailers","Pharmacy Stores","Fashion Retail"].map(x=><span key={x}>{x}</span>)}</div></div></SlideIn>
        <SlideIn as="article" direction="right" delay={0.1} id="industry-slide-2" className="industry-card"><div className="industry-visual manufacturing" aria-hidden="true"><WipeImage direction="right" src="/images/manufacturing-new.jpg" alt="" width={600} height={400} className="industry-img" sizes="(max-width: 768px) 100vw, 50vw" /></div><div><span className="industry-label"><Building2/> Manufacturing companies</span><h3>Bring production, cost and supply data together.</h3><p>Track operational signals across procurement, inventory and profitability.</p><div className="chips">{["FMCG","Plastic Manufacturing","Packaging","Textile","Cosmetics","Consumer Products"].map(x=><span key={x}>{x}</span>)}</div></div></SlideIn>
      </div>
    </div>
  </section>;
}

export function ProcessSection() {
  const steps = process.map(([title, text]) => ({ title, text }));
  return <section id="process" className="section process-section">
    <div className="container"><SectionHeading eyebrow="How we work" title="A Clear Path from Raw Data to Decision-Ready Dashboards" text="Each step is designed to reduce ambiguity, align stakeholders, and turn reporting needs into practical business intelligence."/>
      <ProcessTimeline steps={steps} />
    </div>
  </section>;
}

export function WhyUsSection() {
  return <section id="why-us" className="section why-us-section">
    <div className="container why-us-layout">
      <div className="why-us-cards-col">
        <div className="why-us-blob" aria-hidden="true"></div>
        {whyUsCards.map(([title, text], i) => (
          <Reveal as="article" key={title} delay={i * 0.1} className="why-us-card">
            <span className="why-us-card-number">{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="div" delay={0.15} className="why-us-info-col">
        <div className="why-us-orbit" aria-hidden="true"><span/></div>
        <p className="eyebrow">A practical intelligence partner</p>
        <h2>Why Businesses <span>Choose Peturn</span></h2>
        <p className="lead">Peturn stays close to how your business actually runs, turning scattered data into dashboards and decisions your team can trust — with the support to keep them useful over time.</p>
        <a className="button why-us-cta" href="/contact#start-conversation">Discuss Your Reporting Challenges</a>
      </Reveal>
    </div>
  </section>;
}

export function AboutPreviewSection() {
  return <section className="section about-preview-section">
    <div className="container about-preview-grid">
      <Reveal><div>
        <p className="eyebrow">Who we are</p>
        <h2>Peturn — Business Intelligence That Works for Your Business</h2>
        <p className="lead">We help retail and manufacturing businesses transform scattered data into clear dashboards and actionable insights that drive confident decisions.</p>
        <p>Peturn combines consulting expertise with practical BI solutions — from data preparation to executive reporting — so your team gets a reporting system built around your goals, not a generic template.</p>
        <a href="/about" className="button secondary">Learn More About Peturn</a>
      </div></Reveal>
      <Reveal delay={0.1}><div className="about-preview-visual" aria-hidden="true">
        <Image src="/images/02-about-company.jpg" alt="" width={600} height={400} className="about-img" sizes="(max-width: 768px) 100vw, 50vw" />
      </div></Reveal>
    </div>
  </section>;
}

export function PricingSection() {
  return <section id="pricing" className="section pricing-section">
    <div className="container"><Reveal><SectionHeading eyebrow="Flexible ways to begin" title="Analytics Solutions for Every Stage of Growth"/></Reveal>
      <div className="pricing-grid">{pricing.map((plan,i)=><Reveal as="article" key={plan.name} delay={i * 0.1} id={`pricing-slide-${i+1}`} className={plan.featured ? "featured" : ""}>{plan.featured&&<span className="popular">Recommended</span>}<h3>{plan.name}</h3><p>{plan.description}</p><strong className="price">{plan.price}</strong><ul>{plan.items.map(x=><li key={x}><Check/>{x}</li>)}</ul><a href="/contact#start-conversation" className={`button ${plan.featured?"":"secondary"}`}>Book a Consultation</a></Reveal>)}</div>
      <Reveal><p className="pricing-note">Final pricing depends on data sources, dashboard complexity, reporting frequency, integrations, and project scope.</p></Reveal>
    </div>
  </section>;
}

export function FAQSection() {
  return <section id="faq" className="section">
    <div className="container faq-grid"><BlurUp><SectionHeading align="left" eyebrow="Common questions" title="Clarity Before We Begin" text="Practical answers about data, security, customization and support."/></BlurUp><BlurUp><FAQList/></BlurUp></div>
  </section>;
}

export function DeliverablesSection() {
  const items = [
    "Customized business dashboard",
    "Cleaned and structured data model",
    "KPI definition and reporting structure",
    "Executive summary report",
    "Dashboard walkthrough",
    "Review and refinement session",
    "Ongoing support options",
    "Data source integration setup",
  ];
  const deliverableIcons = [LayoutDashboard, Database, ChartNoAxesCombined, FileText, Presentation, RefreshCw, Headphones, Cable];
  return <section className="section deliverables-section">
    <div className="container"><Reveal><SectionHeading eyebrow="What you get" title="What You Receive" text="Every engagement is designed to give your team a usable reporting system, not only a collection of charts."/></Reveal>
      <div className="deliverables-grid">{items.map((item, i) => { const Icon = deliverableIcons[i]; return <BorderTraceCard key={item} delay={i * 0.07} className="deliverable-card"><div className="deliverable-icon"><Icon/></div><h3>{item}</h3></BorderTraceCard>; })}</div>
    </div>
  </section>;
}

export function IntegrationsSection() {
  const sources = [
    { icon: FileSpreadsheet, label: "Excel" },
    { icon: FileSpreadsheet, label: "CSV" },
    { icon: Building2, label: "ERP systems" },
    { icon: ShoppingBasket, label: "POS systems" },
    { icon: CircleDollarSign, label: "Accounting software" },
    { icon: Database, label: "Databases" },
    { icon: HardDrive, label: "Other business applications" },
  ];
  return <section className="section integrations-section">
    <div className="container"><Reveal><SectionHeading eyebrow="Connect what you have" title="Work With the Data You Already Have" text="Peturn helps structure and connect existing business data so management can work from a clearer, more consistent reporting view."/></Reveal>
      <div className="integrations-grid">{sources.map(({ icon: Icon, label }, i) => <Reveal as="article" key={label} delay={i * 0.06} className="integration-chip"><ConnectorStem index={i} /><Icon/><span>{label}</span></Reveal>)}</div>
    </div>
  </section>;
}

export function IllustrativeScenarioSection() {
  return <section className="section scenario-section">
    <div className="container">
      <Reveal><SectionHeading eyebrow="Illustrative example" title="From Scattered Reports to One Clear View" /></Reveal>
      <div className="scenario-grid">
        <SlideIn as="article" direction="left" className="scenario-card scenario-before">
          <h3>Before</h3>
          <p className="scenario-label">Challenge</p>
          <p>Sales, margin, and stock reports exist in separate Excel files and require manual preparation.</p>
        </SlideIn>
        <SlideIn as="article" direction="right" delay={0.15} className="scenario-card scenario-after">
          <h3>After</h3>
          <p className="scenario-label">Peturn Solution</p>
          <p>Sales, margins, stock aging, inventory availability, and category performance are organized into one clear, decision-ready reporting view.</p>
        </SlideIn>
      </div>
      <Reveal><p className="scenario-note"><strong>Decision supported:</strong> Management can quickly identify slow-moving stock, underperforming categories, and products requiring reorder attention.</p></Reveal>
      <Reveal><p className="scenario-disclaimer">This is an illustrative example and does not represent a real client engagement.</p></Reveal>
    </div>
  </section>;
}

export function SecuritySection() {
  const points = [
    "Confidential handling of business information",
    "Access limited to the agreed project scope",
    "Secure data-transfer procedures",
    "No reuse of client data for unrelated purposes",
    "Access can be removed after project completion",
    "NDA support where agreed",
  ];
  return <section className="section security-section">
    <div className="container"><div className="security-heading-row"><Reveal className="security-heading-copy"><SectionHeading eyebrow="Your data stays yours" title="Data Security and Confidentiality" /></Reveal></div>
      <div className="security-grid">{points.map((point, i) => <Reveal as="article" key={point} delay={i * 0.07} className="security-point"><ShieldCheck/><p>{point}</p></Reveal>)}</div>
      <Reveal><p className="security-note">Security practices depend on the agreed engagement scope and selected infrastructure.</p></Reveal>
    </div>
  </section>;
}

export function FinalCTASection() {
  return <section className="section final-cta-section" aria-labelledby="final-cta-title">
    <div className="container final-cta">
      <div>
        <p className="eyebrow">Ready to begin</p>
        <h2 id="final-cta-title">Bring clarity to your next business decision.</h2>
        <p>Share your reporting challenge through the contact form, or open the WhatsApp chooser to start a direct conversation with Peturn.</p>
      </div>
      <div className="final-cta-actions"><a className="button light" href="/contact#start-conversation">Book a Free Consultation</a><WhatsAppOpenButton className="button secondary"><MessageCircle size={18}/> Open WhatsApp Chooser</WhatsAppOpenButton></div>
    </div>
  </section>;
}

export function ContactSection() {
  return <section id="start-conversation" className="section contact-section">
    <div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Ready to Transform Your Business with Data?</h2><p className="lead">Let’s build smarter decisions together.</p><h3>Book Your Free Business Consultation Today</h3>
      <div className="contact-links"><a href={`mailto:${contact.email}`}><Mail/><span><small>Email</small>{contact.email}</span></a><a href={`mailto:${contact.email2}`}><Mail/><span><small>Email</small>{contact.email2}</span></a><a href={`tel:${contact.indiaTel}`}><Phone/><span><small>India phone &amp; WhatsApp</small>{contact.indiaPhone}</span></a><a href={`tel:${contact.usTel}`}><Phone/><span><small>United States phone &amp; WhatsApp</small>{contact.usPhone}</span></a></div>
      <div className="privacy-note"><ShieldCheck/><p><strong>Your business information stays confidential.</strong><br/>We use your details only to respond to your inquiry.</p></div>
    </div><ContactForm/></div>
  </section>;
}

