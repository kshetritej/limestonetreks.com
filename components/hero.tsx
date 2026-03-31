import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center md:pt-24  overflow-hidden">
      <div className="flex flex-col md:flex-row container mx-auto gap-8 items-center">
        <div className="rounded-3xl! overflow-hidden p-2">
          <Image
            src={"/trekkers-in-himalayas.jpg"}
            alt=""
            width={1920}
            height={1080}
            className="w-340 rounded-3xl! hidden md:flex"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center container mx-auto px-4">
          <div className="text-left  space-y-2">
            <p
              className={cn(
                "font-semibold  text-lg md:text-xl text-shadow-black",
                satisfy.className,
              )}
            >
              Nepal&apos;s Trusted Trekking Experts
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Journey to the Heart of Himalayas
            </h1>
            <p className="max-w-3xl text-md md:text-xl opacity-95 text-balance leading-relaxed">
              From iconic peaks to hidden valleys, we don’t just show you the
              mountains—we share our home, our stories, and the moments that
              make this place unforgettable.
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
      </div>
      <div
        className="haze-divider w-full bg-primary/20!"
        // style={{
        //   background: "url(/spacer.png)",
        //   backgroundRepeat: "no-repeat",
        //   objectFit: "cover",
        // }}
      />
    </section>
  );
}
