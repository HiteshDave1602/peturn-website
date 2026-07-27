import type { Metadata, Viewport } from "next";
import { Anton, Poppins, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppChooser } from "@/components/Interactive";
import { JsonLd } from "@/components/JsonLd";
import { buildWebsiteJsonLd, createMetadata } from "@/lib/seo";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  ...createMetadata("/"),
  metadataBase: new URL("https://www.peturn.in"),
  applicationName: "Peturn",
  authors: [{ name: "Peturn" }],
  creator: "Peturn",
  publisher: "Peturn",
  category: "Business Intelligence Consulting",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/brand/peturn-logo.png", apple: "/brand/peturn-logo.png" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#061433" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${anton.variable} ${poppins.variable} ${mono.variable}`}><Header />{children}<Footer/><WhatsAppChooser/><JsonLd data={buildWebsiteJsonLd()} /></body></html>;
}
