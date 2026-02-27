import { LucidePhone } from "lucide-react";

export function CallNow() {
  return (
    <div className="items-center gap-2 hidden md:flex">
      <div className="rounded-full aspect-square bg-sky-900 p-2">
        <LucidePhone className="text-white" />
      </div>
      <div className="text-right">
        <p className="font-bold text-sm md:text-lg">+977 9841328947</p>
        <p className="text-xs md:text-sm">Direct Call or WhatsApp 24/7</p>
      </div>
    </div>
  );
}
