import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-linear-to-r from-black to-black/20 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url(/ama-dablam.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-left max-w-3xl space-y-1">
          <p
            className={cn(
              "font-semibold text-xl text-shadow-black text-shadow-sm",
              satisfy.className,
            )}
          >
            Nepal&apos;s Trusted Trekking Experts
          </p>
          <h1 className="text-5xl font-bold text-balance leading-tight text-shadow-sm text-shadow-black">
            Journey to the Heart of Himalayas
          </h1>
          <p className="text-xl opacity-95 text-balance leading-relaxed text-shadow-black text-shadow-xs">
            From iconic peaks to hidden valleys, we don’t just show you the
            mountains we share our home.
          </p>
          <div className="flex gap-4 justify-start flex-wrap">
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
