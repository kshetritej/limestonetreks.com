import { LucideArrowRight, LucideCheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import placeHolderImage from "../data/image";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Locally operated & region-focused",
  "Transparent pricing",
  "Carefully paced itineraries",
  "Small groups, big experiences",
];
export function AboutSection() {
  return (
    <div className="grid  md:grid-cols-2 gap-2 min-h-[80vh] items-center justify-center">
      <div className="mb-2 flex flex-col gap-1 space-y-4">
        <div className="font-bold flex items-center gap-1 text-primary">
          <div className="w-8 h-1 bg-primary" />
          <p className="uppercase">why Limestone Treks</p>
        </div>
        <div className="mb-4 max-w-2xl">
          Limestone Treks was built to simplify trekking and travel in the mountains —
          without cutting corners.
        </div>

        <p className="max-w-3xl">
          We work closely with local guides, plan realistic itineraries, and
          focus on trips that respect both travelers and terrain. No rushed
          schedules, no unnecessary upsells — just well-designed journeys led by
          people who know the mountains best. Whether you’re trekking for the
          first time or returning for something more challenging, Limestone Treks helps
          you choose wisely.
        </p>
        <div className="flex flex-col gap-2">
          {highlights.map((h, index) => {
            return (
              <li key={index} className="list-none flex gap-1 items-center">
                <LucideCheckCircle className="text-primary" /> {h}
              </li>
            );
          })}
        </div>
        <Link href={"/about-us"}>
          <Button className="w-fit">
            More About Us <LucideArrowRight />
          </Button>
        </Link>
      </div>
      <div className="rounded-3xl relative">
        <img alt="" src={placeHolderImage.src} className="rounded-3xl" />
        {/* <div className="rounded-3xl absolute -bottom-10 -left-24 size-56 object-cover overflow-hidden">
          <Image alt="" fill src={placeHolderImage.src} className="hidden md:flex w-full h-full object-cover rounded-3xl overflow-hidden" />
        </div> */}
      </div>
    </div>
  );
}
