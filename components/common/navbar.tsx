import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div
      id="site-navbar"
      className="min-w-screen! mx-auto sticky top-0 bg-background shadow-b-sm flex flex-col gap-1 justify-between p-2  z-999"
    >
      <div className="flex flex-row items-center md:container md:mx-auto md:px-2 justify-between container">
        <LogoComponent dark />
        <MegaMenu items={menuData} />
        <MobileMenu items={menuData} />
        <div className="flex items-center gap-4">
          <Link
            href={`https://api.whatsapp.com/send/?phone=${siteConfig.whatsAppNumber}`}
            className="items-center gap-2 hidden md:flex"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">Chat with us</span>
          </Link>
          <Link href={"/contact"} className="hidden md:block">
            <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-6 py-2 h-auto text-sm font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
