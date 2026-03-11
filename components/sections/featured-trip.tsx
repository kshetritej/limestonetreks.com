import SectionTemplate from "../templates/section-template";
import {
  LucideArrowRight,
  LucideCalendarClock,
  LucideCoins,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const FeaturedTrip = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`,
    { method: "GET" },
  );
  const resJSON = await res.json();
  const trips = resJSON.data;

  return (
    <SectionTemplate
      className="w-full"
      badgeText={<p>Trip of the Month</p>}
      title={<p>{trips[0].title}</p>}
      text={
        <p>
          These trips are chosen, booked, and recommended the most — for good
          reason. Thoughtful itineraries, experienced guides, and routes that
          never disappoint.
        </p>
      }
      buttonLink="/"
      buttonText="Explore All Latest Trips"
    >
      {
        <div className="relative md:h-120 overflow-hidden">
          <img src={trips[0].images[0]} className="w-full object-cover" />
          <div className="bg-linear-to-b from-primary/60 to-primary/0 absolute inset-0" />
          <div className="absolute text-white font-bold top-8 md:top-12 left-8 md:left-100 flex items-center">
            <div className="md:text-2xl flex gap-2 items-start border-r-2 pr-10">
              <LucideCalendarClock className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Total Duration</p>
                <p>{trips[0].duration}</p>
              </div>
            </div>
            <div className="md:text-2xl flex gap-2 items-start pl-10">
              <LucideCoins className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Package Price</p>
                <p>USD {trips[0].price}</p>
              </div>
            </div>
          </div>
          <Link href={`/${trips[0].slug}`} className="absolute bottom-8 left-8">
            <Button className="absolute bottom-2 left-130 py-6 px-12">
              Explore Package <LucideArrowRight />
            </Button>
          </Link>
        </div>
      }
    </SectionTemplate>
  );
};

export default FeaturedTrip;
