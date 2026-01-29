import SectionTemplate from "../templates/section-template";
import TripCard from "../cards/trip-card";
import placeHolderImage from "../data/image";
import { LucideArrowRight, LucideCalendarClock, LucideCoins } from "lucide-react";
import { Button } from "../ui/button";

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
          <img src={placeHolderImage.src} />
          <div className="absolute text-white font-bold top-8 md:top-12 left-8 md:left-100 flex items-center">
            <div className="md:text-2xl flex gap-2 items-start border-r-2 pr-10">
              <LucideCalendarClock className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Total Duration</p>
                <p>{trips[0].duration}</p>
              </div>
            </div>
            <div className="flex gap-2 items-start pl-10">
              <LucideCoins className="size-8 md:size-12" />
              <div>
                <p className="text-xs md:text-sm">Package Price</p>
                <p>USD {trips[0].price}</p>
              </div>
            </div>
          </div>
          <Button className="absolute bottom-2 left-130 py-6 px-12">Explore Package <LucideArrowRight/></Button>
        </div>
      }
    </SectionTemplate>
  );
};

export default FeaturedTrip;
