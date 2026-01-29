import LogoComponent from "@/components/atoms/logo";
import { AtSign, Phone } from "lucide-react";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { CallNow } from "../atoms/whatsapp-phone-button";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div className="sticky top-0 bg-background shadow-b-md border-b p-2 z-999">
      <div className="max-w-6xl mx-auto p-2 flex justify-between gap-2 pb-4">
        <LogoComponent dark />
        <CallNow />
      </div>

      {/* border */}
      <div className="h-0.5 w-full bg-accent" />

      <div className="max-w-6xl flex gap-1 md:justify-evenly  container md:mx-auto  p-2 justify-end">
        <div className="hidden md:flex">
          <MegaMenu />
        </div>
        <div className="md:hidden">
          <MobileMenu items={menuData} />
        </div>
      </div>
    </div>
  );
}
