import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import { buildBreadcrumbJsonLd, buildPageJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return <>
    <ScrollReveal />
    <main id="main">
      <PrivacyPolicyContent />
    </main>
    <JsonLd data={buildPageJsonLd("/privacy-policy")} />
    <JsonLd data={buildBreadcrumbJsonLd("/privacy-policy")} />
  </>;
}
