import type { Metadata, Viewport } from "next";
import { Inter, Poppins, IBM_Plex_Mono } from "next/font/google";
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
  return <html lang="en"><body className={`${inter.variable} ${poppins.variable} ${mono.variable}`}>{children}</body></html>;
}
