"use client";
import { ChevronDown, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { contact, faqs } from "@/data/site-content";

export function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => {
    const expanded = open === index;
    return <div className="faq-item" key={question}><h3><button aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? null : index)}>{question}<ChevronDown className={expanded ? "turn" : ""} /></button></h3><div id={`faq-${index}`} className={`faq-answer ${expanded ? "open" : ""}`}><p>{answer}</p></div></div>;
  })}</div>;
}

export function WhatsAppChooser() {
  const [open, setOpen] = useState(false);
  return <div className="whatsapp">
    {open && <div className="wa-panel" role="dialog" aria-label="Choose a WhatsApp contact"><div><strong>Chat with Peturn</strong><button onClick={() => setOpen(false)} aria-label="Close WhatsApp choices"><X size={18}/></button></div><p>Choose the team closest to you.</p><a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India <span>{contact.indiaPhone}</span></a><a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">United States <span>{contact.usPhone}</span></a></div>}
    <button className="wa-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open WhatsApp contact choices"><MessageCircle /></button>
  </div>;
}

export function DashboardCTA() {
  return <a className="button" href="#contact" onClick={() => window.dispatchEvent(new Event("select-dashboard"))}>Request a Dashboard for Your Business</a>;
}

