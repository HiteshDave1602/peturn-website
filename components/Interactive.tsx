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
    <button className="wa-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open WhatsApp contact choices"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></button>
  </div>;
}

export function DashboardCTA() {
  return <a className="button" href="/contact">Request a Dashboard for Your Business</a>;
}

export function WhatsAppOpenButton({ children, className, onNavigate }: { children: ReactNode; className?: string; onNavigate?: () => void }) {
  return <button type="button" className={className} onClick={() => { window.dispatchEvent(new Event("open-whatsapp-chooser")); onNavigate?.(); }}>{children}</button>;
}
