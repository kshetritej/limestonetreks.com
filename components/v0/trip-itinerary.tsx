import { TripData } from "@/lib/dummy-trip-data";
import { LucideMapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { decodeHtmlEntities } from "@/lib/html-decoder";

interface TripItineraryProps {
  trip: TripData;
}

export function TripItinerary({ trip }: TripItineraryProps) {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <div
          id="overview"
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
      <div id="itinerary">
        <h2 className="font-bold text-xl my-4">Detailed Itinerary</h2>
        <div className=" mb-8">
          {trip.itinerary.map((day, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                {/* {index < trip.itinerary.length - 1 && (
                  <div className="w-1 bg-primary/70 rounded-full flex-1" />
                )} */}
              </div>

              {/* Content */}
              <div className="flex-1 border-l-2 pl-4 border-dotted border-primary">
                <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-md z-10 -ml-7 flex items-center justify-center">
                  <LucideMapPin className="text-white size-4" />{" "}
                </div>
                <Badge>Day {index + 1}</Badge>
                <h3 className="text-lg font-bold mb-3">{day.title}</h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(day.description),
                  }}
                  className="-mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
