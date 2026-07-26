import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { PricingSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, buildPricingJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/pricing");

export default function PricingPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">Business Intelligence Dashboard Pricing Plans</h1>
      <PricingSection />
    </main>
    <JsonLd data={buildPageJsonLd("/pricing")} />
    <JsonLd data={buildBreadcrumbJsonLd("/pricing")} />
    <JsonLd data={buildPricingJsonLd()} />
  </>;
}
