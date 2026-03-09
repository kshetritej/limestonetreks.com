import { TripData } from "@/lib/dummy-trip-data";
import { decodeHtmlEntities } from "@/lib/html-decoder";
import FullItinerary from "../trek-detail/FullItinerary";

interface TripItineraryProps {
  trip: TripData;
}

export function TripItinerary({ trip }: TripItineraryProps) {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <div
          id="overview"
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.shortDescription),
          }}
        />
        <div
          id="highlights"
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.highlights[0]),
          }}
        />
        <div
          id=""
          dangerouslySetInnerHTML={{
            __html: decodeHtmlEntities(trip.fullDescription),
          }}
        />
      </div>
      {/*@ts-expect-error type issues*/}
      <FullItinerary days={trip.itinerary} />
    </div>
  );
}
