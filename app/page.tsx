import Image from "next/image";
import { BarChart3, Boxes, Building2, ChartNoAxesCombined, Check, CircleDollarSign, ClipboardCheck, Database, Factory, FileSpreadsheet, Gauge, Lightbulb, LockKeyhole, Mail, Map, PackageSearch, Phone, PieChart, RefreshCw, Settings2, ShieldCheck, ShoppingBasket, Store, Target, TrendingUp, Users, WalletCards } from "lucide-react";
import { Header } from "@/components/Header";
import { MiniDashboard } from "@/components/Dashboard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { DashboardCTA, FAQList, WhatsAppChooser } from "@/components/Interactive";
import { contact, navigation, pricing, services, socialLinks } from "@/data/site-content";

const problemIcons = [FileSpreadsheet, RefreshCw, Database, Gauge];
const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Boxes, CircleDollarSign, ClipboardCheck];
const process = [
  ["Business Discovery", "We understand your business, challenges, goals, and reporting requirements."],
  ["Data Collection", "We collect data from Excel, ERP systems, accounting software, POS systems, databases, and other business applications."],
  ["Data Preparation", "Our team cleans, validates, and structures your data for accurate analysis."],
  ["Dashboard Development", "We design customized dashboards tailored to your business objectives."],
  ["Review and Optimization", "We review the dashboards with your team and refine them based on feedback."],
  ["Delivery and Support", "We deploy the solution and provide continuous support to ensure long-term success."]
];
const benefits = [
  [Target, "Business-focused analytics", "Insights stay connected to commercial goals and operational priorities."],
  [Settings2, "Customized dashboards", "Your views reflect the KPIs, workflows and decisions that matter to your team."],
  [WalletCards, "Affordable solutions", "Practical engagement options help growing businesses begin with the right scope."],
  [Lightbulb, "Actionable business insights", "Reporting is designed to make the next decision clearer, not just display numbers."],
  [LockKeyhole, "Data privacy and confidentiality", "Business information is handled responsibly with confidentiality as a priority."],
  [Users, "Professional consulting approach", "Clear discovery, review and delivery stages keep stakeholders aligned."],
  [ShieldCheck, "Continuous support", "Ongoing help keeps dashboards useful as reporting needs evolve."],
  [TrendingUp, "Scalable solutions", "The reporting foundation can expand with new data, users and business questions."]
] as const;

export default function Home() {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Peturn", url: "https://www.peturn.in", email: contact.email, logo: "https://www.peturn.in/brand/peturn-logo.png", contactPoint: [{ "@type": "ContactPoint", telephone: contact.indiaPhone, contactType: "sales", areaServed: "IN" }, { "@type": "ContactPoint", telephone: contact.usPhone, contactType: "sales", areaServed: "US" }] },
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Peturn", url: "https://www.peturn.in", email: contact.email, description: "Business Intelligence and Analytics consulting for retail and manufacturing businesses.", areaServed: ["India", "United States"] }
  ];
  return <>
    <Header />
    <main id="main">
      <section id="home" className="hero">
        <div className="hero-orbit" aria-hidden="true"><i/><i/><i/><svg viewBox="0 0 300 180"><path d="M10 155 C70 150 82 105 132 112 S210 65 286 20"/><path d="m265 20 21 0 0 21"/></svg></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Business Intelligence &amp; Analytics Consulting</p>
            <h1>Transform Your Business Data into <span>Smarter Decisions</span></h1>
            <p className="lead">We help businesses turn scattered data into meaningful insights through Business Intelligence, interactive dashboards, and analytics solutions that improve profitability, efficiency, and decision-making.</p>
            <p className="hero-statement">Data-Driven Decisions. Measurable Growth. Smarter Business.</p>
            <div className="actions"><a className="button" href="#contact">Book a Free Consultation</a><a className="button secondary" href="#sample-dashboards">View Sample Dashboard</a></div>
            <div className="trust-row"><span><ShieldCheck/> Confidential by design</span><span><Settings2/> Built around your business</span></div>
          </div>
          
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid"><div><p className="eyebrow">Built for better decisions</p><h2>About Peturn</h2><div className="about-copy"><p>Peturn is a Business Intelligence and Analytics consulting company focused on helping businesses unlock the true value of their data.</p><p>Many organizations rely on spreadsheets, manual reports, and disconnected systems that make decision-making slow and inefficient. At Peturn, we transform business data into interactive dashboards and actionable insights that help leaders make confident, data-driven decisions.</p><p>Whether you are a growing retail business or a manufacturing company, our solutions provide clear visibility into your operations, enabling you to improve performance, reduce costs, and drive sustainable growth.</p></div></div>
          <div className="about-visual" aria-label="Abstract business analytics visualization"><div className="data-map"><span>Business data</span><Database/><i/><i/><i/><div className="insight-card"><ChartNoAxesCombined/><b>Clear insight</b><small>Built around your goals</small></div></div></div>
          <article className="mission-card"><Map/><h3>Our Mission</h3><p>To empower businesses with simple, reliable, and affordable Business Intelligence solutions that transform raw data into meaningful insights.</p></article>
          <article className="mission-card"><Target/><h3>Our Vision</h3><p>To become one of India’s most trusted Business Intelligence consulting companies, helping organizations make smarter decisions through data and innovation.</p></article>
        </div>
      </section>

      <section className="problems">
        <div className="container">
          <SectionHeading eyebrow="From complexity to clarity" title="Your Business Has Data. The Challenge Is Turning It into Direction." />
          <div className="four-grid">{["Scattered spreadsheets","Manual reporting","Disconnected systems","Slow decision-making"].map((x,i) => { const Icon=problemIcons[i]; return <article className="problem-card" key={x}><Icon/><h3>{x}</h3><p>{["Different versions make one reliable view difficult.","Repetitive report preparation consumes valuable time.","Key information stays isolated across business tools.","Late information delays confident action."][i]}</p></article>; })}</div>
          <p className="solution-line"><span>Peturn transforms</span> disconnected business information into clear dashboards, reliable reporting, and actionable insights.</p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container"><SectionHeading eyebrow="What we help you see" title="Business Intelligence Solutions Built Around Your Business" text="From sales and inventory to procurement and profitability, Peturn helps you see what is happening, understand why it is happening, and decide what to do next."/>
          <div className="services-grid">{services.map((item,i) => { const Icon=serviceIcons[i]; return <article className="service-card" tabIndex={0} key={item.title}><div className="icon-box"><Icon/></div><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div></article>; })}</div>
        </div>
      </section>

      <section id="sample-dashboards" className="section blue-section">
        <div className="container dashboard-section"><SectionHeading eyebrow="Interactive preview" title="See Your Business More Clearly" text="Explore examples of the dashboard solutions Peturn can customize around your data, goals, and KPIs."/>
          <div className="category-strip" aria-label="Available dashboard categories">{["Executive KPI Dashboard","Sales Dashboard","Inventory Dashboard","Procurement Dashboard","Profitability Dashboard","Customer Analytics","Business Performance Dashboard","Financial Summary Dashboard"].map(x=><span key={x}>{x}</span>)}</div>
          <MiniDashboard/><p className="demo-note">All values and visualizations shown above are <strong>Demo Data</strong> and do not represent a real client.</p><DashboardCTA/>
        </div>
      </section>

      <section id="industries" className="section">
        <div className="container"><SectionHeading eyebrow="Industry context matters" title="Analytics Designed for Your Industry" text="Dashboards shaped around the operating rhythms, questions and decisions in your business."/>
          <div className="industries-grid">
            <article className="industry-card"><div className="industry-visual retail" aria-hidden="true"></div><div><span className="industry-label"><ShoppingBasket/> Retail businesses</span><h3>See every store, shelf and sale in context.</h3><p>Connect sales, stock and margin visibility so teams can respond with confidence.</p><div className="chips">{["Supermarkets","Liquor Stores","Grocery Stores","Department Stores","Electronics Retailers","Pharmacy Stores","Fashion Retail"].map(x=><span key={x}>{x}</span>)}</div></div></article>
            <article className="industry-card"><div className="industry-visual manufacturing" aria-hidden="true"></div><div><span className="industry-label"><Building2/> Manufacturing companies</span><h3>Bring production, cost and supply data together.</h3><p>Track operational signals across procurement, inventory and profitability.</p><div className="chips">{["FMCG","Plastic Manufacturing","Packaging","Textile","Cosmetics","Consumer Products"].map(x=><span key={x}>{x}</span>)}</div></div></article>
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="container"><SectionHeading eyebrow="How we work" title="A Clear Process from Raw Data to Better Decisions"/>
          <div className="timeline">{process.map(([title,text],i)=><article key={title}><span className="step">{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="why-us" className="section navy-section">
        <div className="container"><SectionHeading eyebrow="A practical intelligence partner" title="Why Businesses Choose Peturn"/>
          <div className="benefit-grid">{benefits.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="center-action"><a className="button light" href="#contact">Discuss Your Reporting Challenges</a></div>
        </div>
      </section>

      

      <section id="pricing" className="section pricing-section">
        <div className="container"><SectionHeading eyebrow="Flexible ways to begin" title="Analytics Solutions for Every Stage of Growth"/>
          <div className="pricing-grid">{pricing.map(plan=><article className={plan.featured ? "featured" : ""} key={plan.name}>{plan.featured&&<span className="popular">Recommended</span>}<h3>{plan.name}</h3><p>{plan.description}</p><strong className="price">{plan.price}</strong><ul>{plan.items.map(x=><li key={x}><Check/>{x}</li>)}</ul><a href="#contact" className={`button ${plan.featured?"":"secondary"}`}>Book a Consultation</a></article>)}</div>
          <p className="pricing-note">Final pricing depends on data sources, dashboard complexity, reporting frequency, integrations, and project scope.</p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container faq-grid"><SectionHeading align="left" eyebrow="Common questions" title="Clarity Before We Begin" text="Practical answers about data, security, customization and support."/><FAQList/></div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Ready to Transform Your Business with Data?</h2><p className="lead">Let’s build smarter decisions together.</p><h3>Book Your Free Business Consultation Today</h3>
          <div className="contact-links"><a href={`mailto:${contact.email}`}><Mail/><span><small>Email</small>{contact.email}</span></a><a href={`tel:${contact.indiaTel}`}><Phone/><span><small>India phone &amp; WhatsApp</small>{contact.indiaPhone}</span></a><a href={`tel:${contact.usTel}`}><Phone/><span><small>United States phone &amp; WhatsApp</small>{contact.usPhone}</span></a></div>
          <div className="privacy-note"><ShieldCheck/><p><strong>Your business information stays confidential.</strong><br/>We use your details only to respond to your inquiry.</p></div>
        </div><ContactForm/></div>
      </section>
    </main>
    <footer><div className="container footer-grid"><div className="footer-brand"><Image src="/brand/peturn-logo.png" alt="Peturn" width={230} height={92}/><p>Business Intelligence | Analytics | Dashboards | Business Consulting</p><span>Helping businesses transform data into better decisions.</span></div><div><h3>Company</h3>{navigation.map(x=><a key={x.href} href={x.href}>{x.label}</a>)}</div><div><h3>Services</h3>{services.slice(0,5).map(x=><a key={x.title} href="#services">{x.title}</a>)}</div><div><h3>Contact</h3><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.indiaTel}`}>India: {contact.indiaPhone}</a><a href={`tel:${contact.usTel}`}>US: {contact.usPhone}</a><a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India WhatsApp</a><a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">US WhatsApp</a></div></div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Peturn. All Rights Reserved.<br/>Designed and Developed by <a href="https://www.vrattiks.io/" target="_blank" rel="noopener noreferrer" className="vrattiks-credit">Vrattiks</a></p><a href="#home">Back to top ↑</a>{Object.values(socialLinks).some(Boolean)&&<span>Follow Peturn</span>}</div>
    </footer>
    <WhatsAppChooser/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
  </>;
}
