import Link from "next/link";
import { LucideStone } from "lucide-react";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <>
      <Link href="/" className="flex items-center font-bold gap-1 text-sm md:text-2xl">
        <LucideStone />
        Limestone Treks
      </Link>
    </>
  );
}
