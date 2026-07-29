import Image from "next/image";
import { Map, Target, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

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
