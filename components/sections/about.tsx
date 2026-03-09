import { LucideChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export function AboutSection() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="rounded-full bg-primary/50 overflow-hidden object-cover size-50 flex items-center justify-center z-9">
        <Image
          src={"/bidur-poudel.webp"}
          alt="Bidur Poudel"
          width={1280}
          height={100}
          className="rounded-fulla object-cover"
        />
      </div>
      <div className="max-w-4xl bg-accent/70 p-12 rounded-sm flex flex-col gap-4 items-center justify-center -mt-12 ">
        <div className="text-white font-bold text-2xl text-center">
          <p>{siteConfig.mainGuide}</p>
          <div className="text-whitea font-bold text-sm">
            {siteConfig.guideDesignation}
          </div>
        </div>
        <p className="text-secondary text-center">
          Bidur doesn’t just lead treks; he shares the mountains he’s called
          home his entire life. With a deep respect for the terrain and a
          commitment to safety that never cuts corners, Bidur ensures every
          traveler feels as secure as they are inspired.
        </p>
        <Link href="/about">
          <Button variant={"secondary"}>
            Learn More <LucideChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
