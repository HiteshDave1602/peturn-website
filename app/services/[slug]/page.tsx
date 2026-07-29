import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BarChart3, Building2, Check, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { Reveal } from "@/components/Reveal";
import { serviceDetails } from "@/data/service-details";
import { siteName, siteUrl } from "@/lib/seo";

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceDetails.map((service) => ({ slug: service.id }));
}

function getService(slug: string) {
  return serviceDetails.find((service) => service.id === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} | ${siteName}`;
  const description = service.description;
  const url = `${siteUrl}/services/${service.id}`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [{ url: "/brand/peturn-logo.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/peturn-logo.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];

  return <>
    <ScrollReveal />
    <main id="main">
      <section className="section service-page">
        <div className="container">
          <Reveal><Link href="/services" className="service-page-back"><ArrowLeft size={16} /> Back to Services</Link></Reveal>
          <Reveal delay={0.05}>
            <div className="service-page-header">
              <div className="service-featured-icon"><Icon /></div>
              <h1>{service.title}</h1>
              <p className="lead">{service.description}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="service-detail-grid service-page-grid">
              <div>
                <h3>Capabilities</h3>
                <ul>{service.capabilities.map((c) => <li key={c}><Check size={14} />{c}</li>)}</ul>
              </div>
              <div>
                <h3>Outcomes</h3>
                <ul>{service.outcomes.map((o) => <li key={o}><Check size={14} />{o}</li>)}</ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="services-cta">
              <p>Ready to discuss {service.title.toLowerCase()} for your business?</p>
              <a href="/contact#start-conversation" className="button">Book a Free Consultation <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: `${siteUrl}/services/${service.id}` },
      ],
    }} />
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["India", "United States"],
    }} />
  </>;
}
