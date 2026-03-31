"use client";

import { siteConfig } from "@/lib/siteConfig";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const handleChatOpen = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_chat_initiated", {
      event_category: "conversion",
      event_label: "Floating WhatsApp Tooltip/Button",
      page_location: window.location.href,
    });
  }
};

export default function FloatingWhatsAppIcon() {
  return (
    <div id="whatsappBtn" className="absolute bottom-2! left-4!">
      <FloatingWhatsApp
        buttonStyle={{
          left: "2rem",
          right: "auto",
        }}
        chatboxStyle={{
          left: "2rem",
          right: "auto",
        }}
        onClick={() => handleChatOpen}
        phoneNumber={siteConfig.whatsAppNumber}
        avatar={"/favicon.ico"}
        accountName={siteConfig.name}
      />
    </div>
  );
}
