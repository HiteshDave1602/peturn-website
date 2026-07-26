import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { WhyUsSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/why-us");

export default function WhyUsPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Why Businesses Choose Peturn</h1>
      <WhyUsSection />
    </main>
    <JsonLd data={buildPageJsonLd("/why-us")} />
    <JsonLd data={buildBreadcrumbJsonLd("/why-us")} />
  </>;
}
