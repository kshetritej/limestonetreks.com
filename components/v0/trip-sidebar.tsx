import { TripData } from "@/lib/dummy-trip-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideCheck } from "lucide-react";

interface TripSidebarProps {
  trip: TripData;
}

export function TripSidebar({ trip }: TripSidebarProps) {
  return (
    <Card className="p-6 sticky top-6 bg-white border-slate-200 h-fit">
      {/* Price Section */}
      <div className="pb-6 border-b border-slate-200">
        <p className="text-slate-600 text-sm font-medium mb-1">
          PRICE PER PERSON
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-slate-900">
            ${trip.price}
          </span>
          <span className="text-slate-400 line-through">
            ${Math.round(trip.price * 1.31)}
          </span>
        </div>
        <p className="text-slate-600 text-xs mt-2">
          (Price varies by group size)
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 ">
        <Button className="w-full bg-primary hover:bg-blue-800 text-white font-semibold">
          BOOK THIS TRIP
        </Button>
        <Button
          variant="outline"
          className="w-full text-primary-700 border-slate-300 bg-transparent"
        >
          SEND INQUIRY
        </Button>
      </div>

      {/* Expert Contact */}
      <div className="pt-6 border-t">
        <div  className="font-bold mb-4">Speak to an Expert</div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-300 rounded-full" />
          <div>
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-sm text-primary">+977 9851234567</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
