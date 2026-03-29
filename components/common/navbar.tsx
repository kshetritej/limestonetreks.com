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
      className="bg-white min-w-screen! mx-auto sticky top-0 shadow-b-sm flex flex-col gap-1 justify-between p-2  z-999 shadow-sm"
    >
      <div className="flex flex-row items-center md:container md:mx-auto md:px-2 justify-between container">
        <LogoComponent dark />
        <MegaMenu items={menuData} />
        <div className="flex gap-1 items-center flex-row-reverse md:flex-row">
          <MobileMenu items={menuData} />
          <div className="items-center gap-4 flex">
            <Link
              href={`https://api.whatsapp.com/send/?phone=${siteConfig.whatsAppNumber}`}
              target="_blank"
              className="items-center gap-2 flex hover:underline"
            >
              <MessageCircle size={20} className="text-green-700" />
              <span className="text-sm font-medium hidden md:flex text-green-700">
                Chat with us
              </span>
            </Link>
            <Link href={"/contact"} className="hidden md:block">
              <Button className="bg-primary text-white hover:bg-sky-900 rounded-full px-6 py-2 h-auto text-sm font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
