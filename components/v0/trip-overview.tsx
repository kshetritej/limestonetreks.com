import { TripData } from "@/lib/dummy-trip-data";
import Image from "next/image";
import { TripSidebar } from "./trip-sidebar";
import { decodeHtmlEntities } from "@/lib/html-decoder";

interface TripOverviewProps {
  trip: TripData;
}
export function TripOverview({ trip }: TripOverviewProps) {
  return (
    <div className="space-y-8 mt-4">
      <div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
          {trip.title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌟</span>
          <p className="text-sm text-slate-600">
            Recommended by {trip?.ratings?.recommendedPercentage || "99"}% of
            travelers
          </p>
        </div>
      </div>

      {/* AT A GLANCE Section */}
      <div>
        <div className="font-bold mb-2">AT A GLANCE</div>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-2 bg-amber-100/30 p-4">
          {/* Duration */}
          <GlanceItem
            text="Duration"
            image="/icons/duration-calendar.svg"
            value={trip.duration}
          />
          <GlanceItem
            text="Trip Grade"
            image="/icons/trip-grade-icon.svg"
            value={trip.difficultyLevel}
          />
          <GlanceItem
            text="Group Size"
            image="/icons/group-size-icon.svg"
            value={String(trip.guestCapacity) ?? "-"}
          />
          <GlanceItem
            text="Max Altitude"
            image="/icons/altitude-icon.svg"
            value={trip.maxAltitude ?? "-"}
          />
          <GlanceItem
            text="Start"
            image="/icons/start-location-icon.svg"
            value={trip.meetingPoint ?? "-"}
          />
          <GlanceItem
            text="End"
            image="/icons/end-location-icon.svg"
            value={trip.dropOffPoint ?? "-"}
          />
          <GlanceItem
            text="Travel Style"
            image="/icons/travel-style-icon.svg"
            value={trip?.travelStyle || "-"}
          />
          <GlanceItem
            text="Best Time"
            image="/icons/best-time-icon.svg"
            value={trip.bestTime ?? "-"}
          />
          <GlanceItem
            text="Locations"
            image="/icons/route-icon.svg"
            value={String(trip.locations) ?? "-"}
          />
        </div>
      </div>

      <div className="md:hidden">
        <TripSidebar trip={trip} />
      </div>
    </div>
  );
}

function GlanceItem({
  image,
  imageAlt,
  text,
  value,
}: {
  image: string;
  imageAlt?: string;
  text: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-3xl">
        <Image
          alt={imageAlt ?? `icon for ${text}`}
          height={30}
          width={30}
          src={image ?? "/icons/duration-calendar.svg"}
        />
      </span>
      <div>
        <p className="text-slate-600 text-sm font-medium">{text}</p>
        <p className="font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
