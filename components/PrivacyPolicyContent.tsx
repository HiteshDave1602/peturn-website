"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Clock, Cookie, Database, Info, Lock, Mail, Settings, Share2, ShieldCheck, UserCheck } from "lucide-react";
import { contact } from "@/data/brand-config";
import { Reveal } from "@/components/Reveal";

type Section = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro?: string;
  points?: string[];
};

const sections: Section[] = [
  {
    id: "introduction",
    icon: Info,
    title: "Welcome to Peturn",
    intro:
      "Peturn (“we”, “us”, or “our”) respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
  },
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    points: [
      "Contact details you share with us, such as your name, email address, phone number, and company name, when you fill out a form, book a consultation, or message us on WhatsApp or email.",
      "Business context you provide during a consultation or engagement, such as the reporting challenges, systems, or data sources you describe to us.",
      "Basic technical information, such as browser type and pages visited, collected automatically when you use our website.",
    ],
  },
  {
    id: "how-we-use",
    icon: Settings,
    title: "How We Use Your Information",
    points: [
      "To respond to your inquiries and schedule consultations.",
      "To understand your reporting needs and prepare relevant proposals or dashboards.",
      "To improve our website and services.",
      "To send updates related to an ongoing engagement, when applicable.",
      "We do not sell or rent your personal information to third parties.",
    ],
  },
  {
    id: "confidentiality",
    icon: ShieldCheck,
    title: "Business Data Confidentiality",
    points: [
      "Any business data, reports, or system access shared with us during a consulting engagement is treated as confidential and used only to deliver the agreed dashboards and analysis.",
      "We do not use client business data for any purpose beyond the scope of the engagement.",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Analytics",
    points: [
      "Our website may use basic cookies or analytics tools to understand how visitors use the site and to improve performance. You can disable cookies through your browser settings at any time.",
    ],
  },
  {
    id: "third-party",
    icon: Share2,
    title: "Third-Party Services",
    points: [
      "We may use trusted third-party tools, such as email and WhatsApp, to communicate with you. These services have their own privacy practices, and we encourage you to review them.",
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    points: [
      "We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, loss, or misuse.",
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    points: [
      "You can request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below.",
    ],
  },
];

const contactSection = { id: "contact", icon: Mail, title: "Contact Us" };

export function PrivacyPolicyContent() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const ids = [...sections.map((s) => s.id), contactSection.id];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-140px 0px -65% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="privacy-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p className="lead">Understanding your rights and how Peturn handles your information.</p>
            <span className="privacy-updated-badge"><Clock size={14} aria-hidden /> Last updated: July 2026</span>
          </Reveal>
        </div>
      </section>

      <section className="section privacy-body">
        <div className="container privacy-layout">
          <aside className="privacy-toc">
            <p className="privacy-toc-label">Table of Contents</p>
            <nav aria-label="Privacy Policy sections">
              {[...sections, contactSection].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeId === item.id ? "active" : undefined}
                >
                  <item.icon size={16} aria-hidden />
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="privacy-content">
            {sections.map((section, i) => (
              <Reveal key={section.id} id={section.id} delay={i * 0.04} className="privacy-section">
                <div className="privacy-section-head">
                  <span className="privacy-section-icon"><section.icon size={20} aria-hidden /></span>
                  <h2>{section.title}</h2>
                </div>
                {section.intro && <p>{section.intro}</p>}
                {section.points && (
                  <ul>
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
              </Reveal>
            ))}

            <Reveal id={contactSection.id} delay={sections.length * 0.04} className="privacy-section">
              <div className="privacy-section-head">
                <span className="privacy-section-icon"><Mail size={20} aria-hidden /></span>
                <h2>Contact Us</h2>
              </div>
              <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us at:</p>
              <ul className="privacy-contact-list">
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><a href={`mailto:${contact.email2}`}>{contact.email2}</a></li>
                <li><a href={`tel:${contact.indiaTel}`}>India: {contact.indiaPhone}</a></li>
                <li><a href={`tel:${contact.usTel}`}>US: {contact.usPhone}</a></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
