import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { brand, contact, socialLinks } from "@/data/brand-config";
import { navigation } from "@/data/navigation";

const serviceLinks = [
  { label: "Business Intelligence", href: "/services#business-intelligence" },
  { label: "Sales Analytics", href: "/services#sales-analytics" },
  { label: "Inventory Analytics", href: "/services#inventory-analytics" },
  { label: "Procurement Analytics", href: "/services#procurement-analytics" },
  { label: "Profitability Analysis", href: "/services#profitability-analysis" },
  { label: "Executive Reporting", href: "/services#executive-reporting" },
];

const footerNav = [
  ...navigation,
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo compact />
          <p>{brand.tagline}</p>
          <span>{brand.shortDescription}</span>
        </div>
        <div>
          <h3>Company</h3>
          {footerNav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div>
          <h3>Services</h3>
          {serviceLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.indiaTel}`}>India: {contact.indiaPhone}</a>
          <a href={`tel:${contact.usTel}`}>US: {contact.usPhone}</a>
          <a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India WhatsApp</a>
          <a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">US WhatsApp</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All Rights Reserved.<br />Designed and Developed by <a href="https://www.vrattiks.io/" target="_blank" rel="noopener noreferrer" className="vrattiks-credit">Vrattiks</a></p>
        <Link href="/">Back to top ↑</Link>
        {Object.values(socialLinks).some(Boolean) && <span>Follow Peturn</span>}
      </div>
    </footer>
  );
}
