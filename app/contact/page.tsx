import ScrollReveal from "@/components/ScrollReveal";
import { ContactSection, FAQSection } from "@/components/PageSections";

export default function ContactPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <FAQSection />
      <ContactSection />
    </main>
  </>;
}
