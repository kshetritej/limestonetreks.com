import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { mulish } from "@/lib/font";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CTACard from "@/components/cards/cta-card";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Limestone Treks",
  description: "Created by Growfore Solution",
  openGraph: {
    siteName: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} sans-serif antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <CTACard />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
