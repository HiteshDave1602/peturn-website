import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { AboutPageContent } from "@/components/AboutPageContent";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/about");

export default function AboutPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <h1 className="sr-only">About Peturn Business Intelligence Consulting Company</h1>
      <AboutPageContent />
    </main>
    <JsonLd data={buildPageJsonLd("/about")} />
    <JsonLd data={buildBreadcrumbJsonLd("/about")} />
  </>;
}
