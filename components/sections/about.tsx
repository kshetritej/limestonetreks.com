import { Button } from "../ui/button";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { ChevronRight, LucideCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

const highlights = [
  "Over 15 Years of Trekking Experience",
  "Deep Local Knowledge of the Himalayas",
  "99% Trek Success Rate",
  "Trusted by Travelers from Around the World",
];

export function AboutSection() {
  return (
    <div className="bg-primary flex gap-4" style={{ borderRadius: "12px" }}>
      <div className="bg-primary/50 overflow-hidden object-cover  flex items-center justify-center">
        <Image
          src={"/bidur-poudel.webp"}
          alt="Bidur Poudel"
          width={1280}
          height={720}
          className="object-cover"
          style={{ borderRadius: "12px" }}
        />
      </div>
      <div className="p-4 space-y-2 flex flex-col items-start">
        <Badge variant={"secondary"}> Meet your Expert Guide</Badge>
        <p className="font-bold text-3xl"> {siteConfig.mainGuide}</p>
        {/*<div className="text-white font-bold text-sm">
          {siteConfig.guideDesignation}
        </div>*/}
        <p className="text-secondary max-w-4xl">
          Welcome to the world of Himalayan adventure with Bidur Poudel, a
          dedicated trekking guide who brings passion, experience, and deep
          local knowledge to every journey.
          <br />
          <br />
          With over 15 years of trekking experience, Bidur Poudel has guided
          travelers across the breathtaking landscapes of Nepal, Tibet, and
          Bhutan. Having spent years exploring the Himalayan trails, he knows
          not only the routes but also the culture, history, and hidden stories
          of the mountains.
          <br />
          <br />
          Whether you dream of trekking the legendary Everest region,
          discovering the peaceful monasteries of Bhutan, or experiencing the
          spiritual beauty of Tibet, Bidur ensures every journey is safe,
          comfortable, and unforgettable.
          <br />
          <br />
          More than just a guide, Bidur Poudel is a companion on your
          adventure—someone who shares the spirit of the mountains, helps you
          overcome challenges on the trail, and makes every step of the journey
          meaningful.
          <br />
          <br />
          Supported by a government-registered trekking company and affiliated
          with respected tourism organizations such as TAAN, NMA, and the Nepal
          Tourism Board, he upholds the highest standards of safety,
          professionalism, and hospitality.
        </p>

        <ul className="space-y-2 text-white py-8">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <LucideCheck className="size-4" />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/about" className="flex gap-1 items-center">
          <Button variant={"secondary"}>
            Learn More <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
