import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQSection, FinalCTASection, HeroSection, IndustriesSection, PricingSection, ProblemsSection, ProcessSection, SampleDashboardsSection, TrustStripSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/");

export default function Home() {
  return <>
    <ScrollReveal />
    <main id="main">
      <HeroSection />
      <TrustStripSection />
      <ProblemsSection />
      <SampleDashboardsSection />
      <IndustriesSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <JsonLd data={buildPageJsonLd("/")} />
    <JsonLd data={buildBreadcrumbJsonLd("/")} />
    <JsonLd data={buildFaqJsonLd()} />
  </>;
}
