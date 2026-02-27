import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { CallNow } from "../atoms/whatsapp-phone-button";
import { Mail, Phone } from "lucide-react";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    // <div
    //   id="site-navbar"
    //   className="sticky top-0 shadow-md p-2 z-999 bg-background"
    // >
    // <div className="max-w-6xl mx-auto p-2 flex justify-between gap-2 pb-4">
    //   <LogoComponent dark />
    //   <CallNow />
    // </div>

    // <div className="h-0.5 w-full bg-accent" />

    <div
      id="site-navbar"
      className="min-w-screen! mx-auto sticky top-0 bg-background shadow-b-sm flex flex-col gap-1 justify-between p-2  z-999"
    >
      <div className="flex flex-row items-center w-screen justify-between px-4 container mx-auto">
        <LogoComponent dark />
        <MegaMenu items={menuData} />
        <MobileMenu items={menuData} />
        <CallNow />
      </div>
    </div>
  );
}
