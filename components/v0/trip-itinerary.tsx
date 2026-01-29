import { TripData } from "@/lib/dummy-trip-data";
import { LucideMapPin } from "lucide-react";
import { Badge } from "../ui/badge";

interface TripItineraryProps {
  trip: TripData;
}

export function TripItinerary({ trip }: TripItineraryProps) {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
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
                <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-md z-10 -ml-7 flex items-center justify-center" > <LucideMapPin className="text-white size-4"/> </div>
                <Badge>Day {index + 1}</Badge>
                <h3 className="text-lg font-bold mb-3">{day.title}</h3>

                {/* Altitude & Duration Info */}
                {/* {(day.altitude ||
                  day.duration ||
                  day.meals ||
                  day.accommodation) && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    {day.altitude && (
                      <div className="flex items-center gap-1">
                        <span>⛰️</span>
                        <span>{day.altitude}</span>
                      </div>
                    )}
                    {day.duration && (
                      <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{day.duration}</span>
                      </div>
                    )}
                    {day.meals && (
                      <div className="flex items-center gap-1">
                        <span>🍽️</span>
                        <span>{day.meals}</span>
                      </div>
                    )}
                    {day.accommodation && (
                      <div className="flex items-center gap-1">
                        <span>🏠</span>
                        <span>{day.accommodation}</span>
                      </div>
                    )}
                  </div>
                )} */}

                {/* Image */}
                {/* {day.image && (
                  <div className="mb-4 rounded-lg overflow-hidden h-80 w-full">
                    <img
                      src={day.image || "/placeholder.svg"}
                      alt={`Day ${day.day}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )} */}

                {/* Description */}
                <div dangerouslySetInnerHTML={{ __html: day.description }}  className="-mt-2"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
