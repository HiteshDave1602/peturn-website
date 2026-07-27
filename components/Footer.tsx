import Image from "next/image";
import { contact, navigation, services, socialLinks } from "@/data/site-content";

export function Footer() {
  return <footer><div className="container footer-grid"><div className="footer-brand"><Image src="/brand/peturn-logo.png" alt="Peturn" width={230} height={92}/><p>Business Intelligence | Analytics | Dashboards | Business Consulting</p><span>Helping businesses transform data into better decisions.</span></div><div><h3>Company</h3>{navigation.map(x=><a key={x.href} href={x.href}>{x.label}</a>)}</div><div className="footer-services"><h3>Services</h3>{services.slice(0,5).map(x=><span key={x.title}>{x.title}</span>)}</div><div><h3>Contact</h3><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.indiaTel}`}>India: {contact.indiaPhone}</a><a href={`tel:${contact.usTel}`}>US: {contact.usPhone}</a><a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India WhatsApp</a><a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">US WhatsApp</a></div></div>
    <div className="container footer-bottom"><p>© {new Date().getFullYear()} Peturn. All Rights Reserved.<br/>Designed and Developed by <a href="https://www.vrattiks.io/" target="_blank" rel="noopener noreferrer" className="vrattiks-credit">Vrattiks</a></p><a href="/">Back to top ↑</a>{Object.values(socialLinks).some(Boolean)&&<span>Follow Peturn</span>}</div>
  </footer>;
}
