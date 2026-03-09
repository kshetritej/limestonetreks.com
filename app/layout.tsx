import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { mulish } from "@/lib/font";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CTACard from "@/components/cards/cta-card";

export const metadata: Metadata = {
  title: "Limestone Treks",
  description: "Created by Growfore Solution",
  robots: {
    index: false,
    follow: false,
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
        <CTACard />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
