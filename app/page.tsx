import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroSection, ProblemsSection, SampleDashboardsSection, IndustriesSection, ProcessSection } from "@/components/PageSections";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/");

export default function Home() {
  return <>
    <ScrollReveal />
    <main id="main">
      <HeroSection />
      <ProblemsSection />
      <SampleDashboardsSection />
      <IndustriesSection />
      <ProcessSection />
    </main>
    <JsonLd data={buildPageJsonLd("/")} />
    <JsonLd data={buildBreadcrumbJsonLd("/")} />
  </>;
}
