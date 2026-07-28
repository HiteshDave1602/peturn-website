import Image from "next/image";
import { Target, Map, Users, TrendingUp, ShieldCheck, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const audiences = [
  { label: "Retail businesses", detail: "Supermarkets, grocery stores, liquor stores, department stores, electronics retailers, pharmacy stores, and fashion retail." },
  { label: "Manufacturing companies", detail: "FMCG, plastic manufacturing, packaging, textile, cosmetics, and consumer products." },
  { label: "Growing businesses", detail: "Any organization looking to move from spreadsheets and manual reporting to structured, visual business intelligence." },
];

const approach = [
  { icon: Users, title: "Discovery", text: "We begin by understanding your business structure, challenges, goals, and reporting requirements." },
  { icon: Lightbulb, title: "Strategy", text: "Based on discovery, we design a data strategy and reporting framework aligned with your priorities." },
  { icon: Target, title: "Development", text: "We build customized dashboards and reports that turn raw data into clear, actionable insights." },
  { icon: TrendingUp, title: "Delivery", text: "We review, refine, and deliver the solution with walkthrough sessions and ongoing support." },
];

const outcomes = [
  "Clear visibility into sales, inventory, procurement, and profitability",
  "Faster, more confident business decisions",
  "Reduced time spent on manual report preparation",
  "Scalable reporting foundation that grows with your business",
  "Improved operational efficiency and cost control",
  "Professional, presentation-ready executive reports",
];

export function AboutPageContent() {
  return (
    <>
      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Built for better decisions</p>
            <h2>About Peturn</h2>
            <div className="about-copy">
              <p>Peturn is a Business Intelligence and Analytics consulting company focused on helping businesses unlock the true value of their data.</p>
              <p>Many organizations rely on spreadsheets, manual reports, and disconnected systems that make decision-making slow and inefficient. At Peturn, we transform business data into interactive dashboards and actionable insights that help leaders make confident, data-driven decisions.</p>
              <p>Whether you are a growing retail business or a manufacturing company, our solutions provide clear visibility into your operations, enabling you to improve performance, reduce costs, and drive sustainable growth.</p>
            </div>
          </div>
          <div className="about-visual image-visual">
            <Image src="/images/02-about-company.jpg" alt="Peturn analytics consultation meeting" width={600} height={400} className="about-img" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="mission-grid">
            <article className="mission-card"><Map/><h3>Our Mission</h3><p>To empower businesses with simple, reliable, and affordable Business Intelligence solutions that transform raw data into meaningful insights.</p></article>
            <article className="mission-card"><Target/><h3>Our Vision</h3><p>To become one of India&apos;s most trusted Business Intelligence consulting companies, helping organizations make smarter decisions through data and innovation.</p></article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cloud)" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Who we serve"
              title="Built for Businesses That Rely on Data"
              text="Peturn works with organizations that need clearer reporting and better visibility into their operations."
            />
          </Reveal>
          <div className="about-audiences">
            {audiences.map((item, i) => (
              <Reveal as="article" key={item.label} delay={i * 0.08} className="about-audience-card">
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Our Consulting Approach"
              text="A structured process designed to reduce ambiguity and deliver practical business intelligence."
            />
          </Reveal>
          <div className="about-approach">
            {approach.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="article" key={item.title} delay={i * 0.08} className="about-approach-card">
                  <div className="about-approach-icon"><Icon /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cloud)" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Business outcomes"
              title="What You Can Expect"
              text="Every engagement is designed to deliver measurable improvements in how your business uses data."
            />
          </Reveal>
          <div className="about-outcomes">
            {outcomes.map((item, i) => (
              <Reveal as="article" key={item} delay={i * 0.06} className="about-outcome-card">
                <ShieldCheck />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="services-cta">
              <p>Ready to transform how your business uses data?</p>
              <a href="/contact#start-conversation" className="button">Book a Free Consultation</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
