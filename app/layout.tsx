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
          id="initializeGAnalytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W9GY0QNMB0"
        />
        <Script id="ganalytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9GY0QNMB0');
          `}
        </Script>
        <Script
          id="gtag"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T4SFPFLL');`}</Script>
      </head>
      <body className={`${gabarito.className} sans-serif antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4SFPFLL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
