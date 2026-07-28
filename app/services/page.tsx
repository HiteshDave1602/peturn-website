import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { ServicesPageContent } from "@/components/ServicesPageContent";
import { buildBreadcrumbJsonLd, buildPageJsonLd, buildServicesJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/services");

export default function ServicesPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Business Intelligence Services and Dashboard Consulting</h1>
      <ServicesPageContent />
    </main>
    <JsonLd data={buildPageJsonLd("/services")} />
    <JsonLd data={buildBreadcrumbJsonLd("/services")} />
    <JsonLd data={buildServicesJsonLd()} />
  </>;
}
