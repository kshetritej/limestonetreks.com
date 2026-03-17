import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTACard() {
  return (
    <section className="relative w-full rounded-lg text-white p-6 md:p-8 mb-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ama-dablam.jpeg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative space-y-4 p-8 flex flex-col items-center text-center justify-between max-w-4xl mx-auto">
        <div className="space-y-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl  tracking-tight font-bold">
            From Dreams to Doorsteps <br /> Let’s Build Your Itinerary
          </h2>
          <p className="max-w-2xl">
            The mountains are calling, and we have the map. Whether you’re
            looking for a challenging summit or a serene cultural walk, our
            experts are ready to help.
          </p>
        </div>

        <Link href={"/contact"}>
          <Button
            type="button"
            size="lg"
            variant="default"
            className="cursor-pointer"
          >
            Start Planning
          </Button>
        </Link>
      </div>
    </section>
  );
}
