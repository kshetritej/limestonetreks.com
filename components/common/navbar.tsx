import LogoComponent from "@/components/atoms/logo";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { CallNow } from "../atoms/whatsapp-phone-button";

export default async function Navbar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menu`);

  const data = await res.json();

  const menuData = data?.data?.items || [];

  return (
    <div
      id="site-navbar"
      className="min-w-screen! mx-auto sticky top-0 bg-background shadow-b-sm flex flex-col gap-1 justify-between p-2  z-999"
    >
      <div className="flex flex-row items-center md:container md:mx-auto md:px-2 justify-between  container">
        <LogoComponent dark />
        <MegaMenu items={menuData} />
        <MobileMenu items={menuData} />
        <CallNow />
      </div>
    </div>
  );
}
