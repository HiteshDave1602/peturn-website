import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { IndustriesSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/industries");

export default function IndustriesPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Retail and Manufacturing Analytics Industries</h1>
      <IndustriesSection />
    </main>
    <JsonLd data={buildPageJsonLd("/industries")} />
    <JsonLd data={buildBreadcrumbJsonLd("/industries")} />
  </>;
}
