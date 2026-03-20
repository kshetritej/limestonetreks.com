import { satisfy } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-linear-to-r from-sky-900 to-primary/70 text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/ama-dablam.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-left max-w-3xl">
          <p
            className={cn(
              "mb-4 opacity-90 tracking-widest font-semibold text-xl",
              satisfy.className,
            )}
          >
            Nepal&apos;s Trusted Trekking Experts
          </p>
          <h1 className="text-4xl font-bold mb-6 text-balance leading-tight">
            Journey to the Heart of Himalayas
          </h1>
          <p className="text-md mb-10 opacity-95 text-balance leading-relaxed">
            From iconic peaks to hidden valleys, we don’t just show you the
            mountains we share our home.
          </p>
          <div className="flex gap-4 justify-start flex-wrap">
            <Link
              href="/explore"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Explore Nepal Treks
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
