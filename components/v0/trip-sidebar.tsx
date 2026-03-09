import { TripData } from "@/lib/dummy-trip-data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

interface TripSidebarProps {
  trip: TripData;
}

export function TripSidebar({ trip }: TripSidebarProps) {
  return (
    <Card className="p-6 sticky top-34 bg-white border-slate-200 h-fit w-full">
      <CardHeader className="p-0">
        <CardTitle className="font-bold leading-5">{trip.title}</CardTitle>
      </CardHeader>
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
      <div className="space-y-3">
        <Link href={"/contact"}>
          <Button className="w-full bg-primary hover:bg-primary/70 text-white font-semibold mb-4">
            SEND A BOOKING INQUIRY
          </Button>
        </Link>
      </div>

      {/* Expert Contact */}
      <Link
        href={`https://api.whatsapp.com/send/?phone=${siteConfig.whatsAppNumber}`}
        className="pt-6 border-t decoration-0"
      >
        <div className="font-bold mb-4">Speak to an Expert</div>
        <div className="flex items-center gap-3">
          <div className=" bg-slate-300 rounded-full size-12 object-cover">
            <Image
              src={"/bidur-poudel.webp"}
              alt="Bidur Poudel"
              width={720}
              height={420}
              className="rounded-full object-cover size-12"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-sm text-primary">
              +977 {siteConfig.whatsAppNumber}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
