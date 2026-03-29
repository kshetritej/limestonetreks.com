"use client";

import { siteConfig } from "@/lib/siteConfig";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsAppIcon() {
  return (
    <div className="absolute bottom-2! left-4!">
      <FloatingWhatsApp
        phoneNumber={siteConfig.whatsAppNumber}
        avatar={"/favicon.ico"}
        accountName={siteConfig.name}
      />
    </div>
  );
}
