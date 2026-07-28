import type { Metadata, Viewport } from "next";
import { Inter, Poppins, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppChooser } from "@/components/Interactive";
import { JsonLd } from "@/components/JsonLd";
import { brand } from "@/data/brand-config";
import { buildWebsiteJsonLd, createMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-poppins", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-ibm-plex-mono", display: "swap" });

export const metadata: Metadata = {
  ...createMetadata("/"),
  metadataBase: new URL("https://www.peturn.in"),
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  category: "Business Intelligence Consulting",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: brand.logo.src, apple: brand.logo.src },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#061433" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${poppins.variable} ${ibmPlexMono.variable}`}><Header />{children}<Footer/><WhatsAppChooser/><JsonLd data={buildWebsiteJsonLd()} /></body></html>;
}
