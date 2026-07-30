import Image from "next/image";
import { Map, Target, ShieldCheck, CircleCheck, User } from "lucide-react";
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

const foundersQuestions = [
  "What is really driving your sales, margins, and stock decisions?",
  "Where is time being lost to manual reporting?",
  "Which numbers actually change how you run the business?",
  "How do you keep your reporting useful as the business grows?",
];

const founders = [
  { name: "Founder Name", role: "Co-Founder & CEO" },
  { name: "Founder Name", role: "Co-Founder & Head of Analytics" },
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
            <article className="mission-card"><Map/><h3>Our Mission</h3><p>To help businesses make smarter decisions through simple, affordable, and data-driven analytics.</p></article>
            <article className="mission-card"><Target/><h3>Our Vision</h3><p>To become the most trusted Business Intelligence partner for SMEs.</p></article>
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

      <section className="section">
        <div className="container founders-note-grid">
          <Reveal>
            <p className="eyebrow">Co-Founders&apos; Note</p>
            <h2>Why We Built Peturn</h2>
            <div className="about-copy">
              <p>Business decisions today move faster than ever, but most companies still run on spreadsheets, static reports, and gut feel. When we started Peturn, we saw retail and manufacturing businesses struggling with data scattered across systems, reports that took days to prepare, and dashboards that were either too generic or too expensive to build. We built Peturn to change that.</p>
              <p>Business Intelligence isn&apos;t just about pretty charts &mdash; it&apos;s about answering the questions that actually run a business. That means going beyond dashboards and asking:</p>
            </div>
            <ul className="founders-checklist">
              {foundersQuestions.map((question) => (
                <li key={question}><CircleCheck/><span>{question}</span></li>
              ))}
            </ul>
            <div className="about-copy">
              <p>At Peturn, we don&apos;t just build dashboards &mdash; we understand your data, design around your decisions, and stay involved as your reporting needs evolve. Our team blends BI engineering, data analysis, and business consulting, so every dashboard we deliver is built to be used, not just looked at.</p>
              <p>We don&apos;t believe in one-size-fits-all templates. If you&apos;re looking for a BI partner who thinks about your business first and your dashboards second, let&apos;s talk.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} as="div" className="founders-note-visual">
            <Image src="/images/Co-Founders' Note.jpg" alt="Peturn co-founders" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cloud)" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The people behind Peturn"
              title="Meet the Founders"
              text="The team leading Peturn's mission to make Business Intelligence simple, practical, and accessible."
            />
          </Reveal>
          <div className="team-grid">
            {founders.map((person, i) => (
              <Reveal as="article" key={person.role} delay={i * 0.08} className="team-card">
                <div className="team-avatar" aria-hidden="true"><User/></div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
