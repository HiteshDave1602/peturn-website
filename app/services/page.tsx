import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { ServicesSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, buildServicesJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/services");

export default function ServicesPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Business Intelligence Services and Dashboard Consulting</h1>
      <ServicesSection />
    </main>
    <JsonLd data={buildPageJsonLd("/services")} />
    <JsonLd data={buildBreadcrumbJsonLd("/services")} />
    <JsonLd data={buildServicesJsonLd()} />
  </>;
}
