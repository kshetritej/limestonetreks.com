import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CTACard from "@/components/cards/cta-card";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/siteConfig";
import { gabarito } from "@/lib/font";
import FloatingWhatsAppIcon from "@/components/floating-whatsapp";
import Script from "next/script";

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
      <head>
        <Script
          id="initializeGtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W9GY0QNMB0"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9GY0QNMB0');
          `}
        </Script>
      </head>
      <body className={`${gabarito.className} sans-serif antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <CTACard />
        <Footer />
        <FloatingWhatsAppIcon />
        <SpeedInsights />
      </body>
    </html>
  );
}
