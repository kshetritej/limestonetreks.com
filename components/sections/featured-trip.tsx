import SectionTemplate from "../templates/section-template";
import {
  LucideArrowRight,
  LucideCalendarClock,
  LucideCoins,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const TripOfTheMonth = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured/trip-of-the-month?includeActivity=true`,
    { method: "GET" },
  );
  const resJSON = await res.json();

  const featured = resJSON?.data;
  const trip = resJSON?.data?.featuredTag?.activity;

  return (
    <SectionTemplate
      className="w-full"
      title={
        <p>
          {featured?.featuredTag.name || "Hello world"}: {trip[0].title}
        </p>
      }
      text={<p>{featured?.featuredTag.description || "Hello world"}</p>}
      buttonLink="/"
    >
      {
        <div className="relative md:h-120 overflow-hidden container mx-auto">
          <Image
            alt={trip[0].keywords[0] || trip[0].title || ""}
            src={trip[0].images[0]}
            height={720}
            width={1280}
            className="w-full object-cover"
          />
          <div className="bg-linear-to-b from-primary/60 to-primary/0 absolute inset-0" />
          <div className="absolute text-white font-bold top-8 md:top-12 left-8 md:left-100 flex items-center">
            <div className="md:text-2xl flex gap-2 items-start border-r-2 pr-10">
              <LucideCalendarClock className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Total Duration</p>
                <p>{trip[0].duration}</p>
              </div>
            </div>
            <div className="md:text-2xl flex gap-2 items-start pl-10">
              <LucideCoins className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Package Price</p>
                <p>USD {trip[0].price}</p>
              </div>
            </div>
          </div>
          <Link href={`/${trip[0].slug}`} className="absolute bottom-8 left-8">
            <Button className="absolute bottom-2 lg:left-130 py-6 px-12">
              Explore Package <LucideArrowRight />
            </Button>
          </Link>
        </div>
      }
    </SectionTemplate>
  );
};

export default TripOfTheMonth;
