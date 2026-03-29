import { LucideFlagTriangleRight, LucideMapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { decodeHtmlEntities } from "@/lib/html-decoder";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  duration?: string;
  distance?: string;
  ascent?: string;
  descent?: string;
  meals?: string[];
  accommodations?: string[];
}

export default function FullItinerary({ days }: { days: ItineraryDay[] }) {
  return (
    <section id="itinerary">
      <h2 className="text-3xl font-semibold text-slate-900">
        Detailed Itinerary
      </h2>
      <Accordion type="single" collapsible defaultValue="day-1">
        {days.map((d) => (
          <AccordionItem key={d.day} value={`day-${d.day}`}>
            <AccordionTrigger className="not-prose font-bold text-md p-0 flex items-center prose-h3:p-0 prose-h3:m-0 px-2 hover:no-underline cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="rounded bg-blue-100 p-2 font-semibold text-sky-700">
                  <LucideMapPin />
                </span>
                <h3 className="font-bold  text-xl ">{d.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(d.description),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
