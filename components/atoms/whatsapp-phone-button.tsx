import { siteConfig } from "@/lib/siteConfig";
import { LucidePhone } from "lucide-react";
import Link from "next/link";

export function CallNow() {
  return (
    <Link
      href={`https://api.whatsapp.com/send/?phone=${siteConfig.whatsAppNumber}`}
      className="items-center gap-2 hidden md:flex"
    >
      <div className="rounded-full aspect-square bg-sky-900 p-2">
        <LucidePhone className="text-white" />
      </div>
      <div className="text-right">
        <p className="font-bold text-sm md:text-lg">
          {siteConfig.whatsAppNumber}
        </p>
        <p className="text-xs md:text-sm">Direct Call or WhatsApp 24/7</p>
      </div>
    </Link>
  );
}
