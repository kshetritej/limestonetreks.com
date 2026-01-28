import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideMountain } from "lucide-react";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <>
      <Link href="/" className="flex items-center font-bold gap-1 font-3xl">
          <LucideMountain />
          Peakwise
      </Link>
    </>
  );
}
