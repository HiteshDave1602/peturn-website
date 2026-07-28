import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { DeliverablesSection, FAQSection, HeroSection, IllustrativeScenarioSection, IndustriesSection, IntegrationsSection, PricingSection, ProblemsSection, ProcessSection, SampleDashboardsSection, SecuritySection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/");

export default function Home() {
  return <>
    <ScrollReveal />
    <main id="main">
      <HeroSection />
      <ProblemsSection />
      <SampleDashboardsSection />
      <IndustriesSection />
      <DeliverablesSection />
      <ProcessSection />
      <IntegrationsSection />
      <IllustrativeScenarioSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
    </main>
    <JsonLd data={buildPageJsonLd("/")} />
    <JsonLd data={buildBreadcrumbJsonLd("/")} />
    <JsonLd data={buildFaqJsonLd()} />
  </>;
}
