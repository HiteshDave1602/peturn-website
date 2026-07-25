import type { Metadata, Viewport } from "next";
import { Inter, Poppins, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppChooser } from "@/components/Interactive";
import { contact } from "@/data/site-content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-poppins", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peturn.in"),
  title: "Peturn | Business Intelligence, Analytics & Dashboards",
  description: "Peturn helps retail and manufacturing businesses transform spreadsheets, ERP data, sales, inventory, procurement, and profitability information into interactive dashboards and actionable business insights.",
  alternates: { canonical: "/" },
  openGraph: { title: "Peturn | Business Intelligence, Analytics & Dashboards", description: "Turn scattered business data into clear dashboards and confident decisions.", url: "/", siteName: "Peturn", type: "website" },
  twitter: { card: "summary_large_image", title: "Peturn | Business Intelligence, Analytics & Dashboards", description: "Business intelligence consulting for clearer, faster decisions." },
  icons: { icon: "/brand/peturn-logo.png" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#061433" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Peturn", url: "https://www.peturn.in", email: contact.email, logo: "https://www.peturn.in/brand/peturn-logo.png", contactPoint: [{ "@type": "ContactPoint", telephone: contact.indiaPhone, contactType: "sales", areaServed: "IN" }, { "@type": "ContactPoint", telephone: contact.usPhone, contactType: "sales", areaServed: "US" }] },
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Peturn", url: "https://www.peturn.in", email: contact.email, description: "Business Intelligence and Analytics consulting for retail and manufacturing businesses.", areaServed: ["India", "United States"] }
  ];

  return <html lang="en"><body className={`${inter.variable} ${poppins.variable} ${mono.variable}`}><Header />{children}<Footer/><WhatsAppChooser/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/></body></html>;
}
