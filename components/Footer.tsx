import { BackToTopButton } from "@/components/BackToTop";
import { Logo } from "@/components/ui/Logo";
import { brand, contact, socialLinks } from "@/data/brand-config";
import { navigation } from "@/data/navigation";

const footerNav = [
  ...navigation,
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo compact />
          <p>{brand.description}</p>
          <span>{brand.tagline}</span>
        </div>
        <div className="footer-links-group">
          <div>
            <h3>Company</h3>
            {footerNav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
            <a href={`tel:${contact.indiaTel}`}>India: {contact.indiaPhone}</a>
            <a href={`tel:${contact.usTel}`}>US: {contact.usPhone}</a>
            <a href={contact.indiaWhatsApp} target="_blank" rel="noopener noreferrer">India WhatsApp</a>
            <a href={contact.usWhatsApp} target="_blank" rel="noopener noreferrer">US WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brand.name}. All Rights Reserved.<br />Designed and Developed by <a href="https://www.vrattiks.io/" target="_blank" rel="noopener noreferrer" className="vrattiks-credit">Vrattiks</a></p>
        <BackToTopButton />
        {Object.values(socialLinks).some(Boolean) && <span>Follow Peturn</span>}
      </div>
    </footer>
  );
}
