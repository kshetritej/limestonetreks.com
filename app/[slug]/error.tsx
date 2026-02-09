"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
      <p>Not Found.</p>
      <Link href={"/"}>
        <Button>Get Back Home</Button>
      </Link>
    </div>
  );
}
