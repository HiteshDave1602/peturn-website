import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { ContactSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/contact");

export default function ContactPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Contact Peturn for a Free Business Intelligence Consultation</h1>
      <ContactSection />
    </main>
    <JsonLd data={buildPageJsonLd("/contact")} />
    <JsonLd data={buildBreadcrumbJsonLd("/contact")} />
  </>;
}
