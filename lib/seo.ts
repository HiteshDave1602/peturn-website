import type { Metadata } from "next";
import { contact, faqs, pricing, services } from "@/data/site-content";

export const siteUrl = "https://www.peturn.in";
export const siteName = "Peturn";

export const defaultKeywords = [
  "Business Intelligence consulting",
  "BI dashboards",
  "analytics consulting",
  "Power BI dashboards",
  "business dashboards",
  "sales analytics",
  "inventory analytics",
  "procurement analytics",
  "profitability analysis",
  "retail analytics",
  "manufacturing analytics",
  "India BI consulting",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const pages: PageSeo[] = [
  {
    title: "Peturn | Business Intelligence, Analytics & Dashboard Consulting",
    description: "Peturn helps retail and manufacturing businesses transform scattered spreadsheets, ERP data, sales, inventory, procurement, and profitability information into clear BI dashboards and actionable insights.",
    path: "/",
    keywords: ["business intelligence consulting company", "dashboard consulting", "data analytics for business"],
  },
  {
    title: "About Peturn | Business Intelligence Consulting Company",
    description: "Learn about Peturn, a Business Intelligence and Analytics consulting company helping organizations convert raw data into reliable dashboards and smarter decisions.",
    path: "/about",
    keywords: ["about Peturn", "BI consulting company India", "business analytics consulting"],
  },
  {
    title: "Business Intelligence Services | Dashboards, Sales & Inventory Analytics",
    description: "Explore Peturn's BI services for sales analytics, inventory analytics, procurement analytics, profitability analysis, executive reporting, and custom dashboards.",
    path: "/services",
    keywords: ["BI services", "sales dashboard", "inventory dashboard", "executive reporting"],
  },
  {
    title: "Why Choose Peturn | Practical BI Partner for Growing Businesses",
    description: "See why businesses choose Peturn for customized dashboards, affordable analytics solutions, data privacy, professional consulting, and continuous support.",
    path: "/why-us",
    keywords: ["why choose Peturn", "BI partner", "custom dashboard consulting"],
  },
  {
    title: "Industries We Serve | Retail & Manufacturing Analytics",
    description: "Peturn designs analytics dashboards for retail businesses and manufacturing companies, connecting sales, stock, procurement, cost, and profitability data.",
    path: "/industries",
    keywords: ["retail analytics", "manufacturing analytics", "supermarket analytics", "FMCG analytics"],
  },
  {
    title: "BI Consulting Process | From Raw Data to Better Decisions",
    description: "Understand Peturn's BI consulting process from discovery and data collection to preparation, dashboard development, review, delivery, and support.",
    path: "/process",
    keywords: ["BI consulting process", "dashboard development process", "analytics implementation"],
  },
  {
    title: "BI Dashboard Pricing | Starter, Growth & Enterprise Analytics Plans",
    description: "Review Peturn's flexible analytics pricing plans for small businesses, growing teams, and enterprise BI dashboard requirements.",
    path: "/pricing",
    keywords: ["dashboard pricing", "BI consulting pricing", "analytics plans"],
  },
  {
    title: "Contact Peturn | Book a Free Business Intelligence Consultation",
    description: "Contact Peturn to discuss dashboards, reporting challenges, sales analytics, inventory analytics, profitability analysis, and Business Intelligence consulting.",
    path: "/contact",
    keywords: ["contact Peturn", "free BI consultation", "dashboard consultation"],
  },
];

export function getPageSeo(path: string) {
  return pages.find(page => page.path === path) ?? pages[0];
}

export function createMetadata(path: string): Metadata {
  const page = getPageSeo(path);
  const url = `${siteUrl}${page.path}`;
  const title = page.title;
  const description = page.description;
  const keywords = [...defaultKeywords, ...(page.keywords ?? [])];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: page.path },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [{ url: "/brand/peturn-logo.png", width: 1200, height: 630, alt: "Peturn Business Intelligence and Analytics Consulting" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/peturn-logo.png"],
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        email: contact.email,
        logo: `${siteUrl}/brand/peturn-logo.png`,
        contactPoint: [
          { "@type": "ContactPoint", telephone: contact.indiaPhone, contactType: "sales", areaServed: "IN", availableLanguage: ["en"] },
          { "@type": "ContactPoint", telephone: contact.usPhone, contactType: "sales", areaServed: "US", availableLanguage: ["en"] },
        ],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: pages[0].description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: siteName,
        url: siteUrl,
        email: contact.email,
        image: `${siteUrl}/brand/peturn-logo.png`,
        description: "Business Intelligence and Analytics consulting for retail and manufacturing businesses.",
        areaServed: ["India", "United States"],
        serviceType: services.map(service => service.title),
        provider: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function buildPageJsonLd(path: string) {
  const page = getPageSeo(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}${page.path}#webpage`,
    url: `${siteUrl}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#professional-service` },
    inLanguage: "en",
  };
}

export function buildBreadcrumbJsonLd(path: string) {
  const page = getPageSeo(path);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    ...(page.path === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.title.split("|")[0].trim(), item: `${siteUrl}${page.path}` }]),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Peturn Business Intelligence Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: ["India", "United States"],
      },
    })),
  };
}

export function buildPricingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Peturn Analytics Pricing Plans",
    itemListElement: pricing.map(plan => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", description: plan.price },
    })),
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
