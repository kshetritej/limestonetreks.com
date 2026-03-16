import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Cedarville_Cursive } from "next/font/google";
import { cn } from "@/lib/utils";
import { ReviewBatch } from "../reviewbatch";

const cedarVile = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-primary/50 to-primary/60">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={"/majestic-mountain-range.webp"}
          alt="Mountain trekking background"
          fill
          className="object-cover"
          priority
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col justify-center px-6 py-12 md:px-16 container mx-auto">
        {/* Main Content */}
        <div className="max-w-2xl space-y-6">
          {/* Tagline */}
          <p
            className={cn(
              cedarVile.className,
              `text-white text-lg font-light tracking-wide font-mono`,
            )}
          >
            Since 1996 — Nepal&apos;s Trusted Trekking Experts
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Trek with Experienced Nepali Guides
          </h1>

          {/* Description */}
          <p className="text-white text-lg max-w-xl leading-relaxed opacity-95">
            We have curated trek plans for you that gives you the worlds best
            experience with more than 30 years of experience staffs
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button size={"lg"}>
              Explore Packages
              <ArrowRight size={20} />
            </Button>
          </div>
          <div>
            <ReviewBatch
              imageSource="/tripadvisor-logo.png"
              alt="tripadvisor logo"
              reviewCount={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
