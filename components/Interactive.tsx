"use client";
import { ChevronDown, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { contact, faqs } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();
  return <div className="faq-list">{faqs.map(([question, answer], index) => {
    const expanded = open === index;
    return <div className="faq-item" key={question}><h3><button aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? null : index)}>{question}<motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: prefersReduced ? 0 : 0.25, ease }} style={{ display: "flex" }}><ChevronDown /></motion.span></button></h3>
      <AnimatePresence initial={false}>
        {expanded && <motion.div
          id={`faq-${index}`}
          className="faq-answer open"
          initial={prefersReduced ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          animate={prefersReduced ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
          exit={prefersReduced ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.3, ease }}
          style={{ overflow: "hidden" }}
        ><p>{answer}</p></motion.div>}
      </AnimatePresence>
    </div>;
  })}</div>;
}

export function WhatsAppChooser() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const openChooser = () => setOpen(true);
    window.addEventListener("open-whatsapp-chooser", openChooser);
    return () => window.removeEventListener("open-whatsapp-chooser", openChooser);
  }, []);
  return <div className="whatsapp">
    {open && <div className="wa-panel" role="dialog" aria-label="Choose a WhatsApp contact"><div><strong>Chat with Peturn</strong><button onClick={() => setOpen(false)} aria-label="Close WhatsApp choices"><X size={18}/></button></div><p>Choose the team closest to you.</p><a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India <span>{contact.indiaPhone}</span></a><a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">United States <span>{contact.usPhone}</span></a></div>}
    <button className="wa-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open WhatsApp contact choices"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.05c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.12-.42-.13-.95-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.3.58-.37.78-.37.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.3.36-.42.49-.14.14-.29.3-.12.58.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.8.85.26.13.44.19.5.3.06.11.06.63-.18 1.31z"/></svg></button>
  </div>;
}

export function DashboardCTA() {
  return <a className="button" href="/contact">Request a Dashboard for Your Business</a>;
}

export function WhatsAppOpenButton({ children, className }: { children: ReactNode; className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("open-whatsapp-chooser"))}>{children}</button>;
}
