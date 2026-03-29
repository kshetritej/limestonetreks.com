import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-linear-to-r from-black to-black/20 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/trekkers-in-himalayas.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center container mx-auto px-4">
        <div className="text-left  space-y-2">
          <p
            className={cn(
              "font-semibold text-xl text-shadow-black text-shadow-sm",
              satisfy.className,
            )}
          >
            Nepal&apos;s Trusted Trekking Experts
          </p>
          <h1 className="text-5xl font-bold text-balance leading-tight text-shadow-sm">
            Journey to the Heart of Himalayas
          </h1>
          <p className="max-w-3xl text-xl opacity-95 text-balance leading-relaxed text-shadow-black text-shadow-xs">
            From iconic peaks to hidden valleys, we don’t just show you the
            mountains—we share our home, our stories, and the moments that make
            this place unforgettable.
          </p>
          <div className="flex gap-4 justify-start flex-wrap mt-8">
            <Link href="/explore">
              <Button className="cursor-pointer" size={"lg"}>
                Explore Nepal treks
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant={"secondary"}
                className="cursor-pointer"
                size={"lg"}
              >
                Plan your journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
