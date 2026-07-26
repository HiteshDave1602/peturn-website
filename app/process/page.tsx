import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { ProcessSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/process");

export default function ProcessPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Peturn Business Intelligence Consulting Process</h1>
      <ProcessSection />
    </main>
    <JsonLd data={buildPageJsonLd("/process")} />
    <JsonLd data={buildBreadcrumbJsonLd("/process")} />
  </>;
}
