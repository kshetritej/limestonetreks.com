import {
  ChevronDown,
  LucideFlagTriangleRight,
  LucideMapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";

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
    <section className="my-4">
      <SectionTitle title="Detailed Itinerary" />
      <Accordion
        type="single"
        collapsible
        defaultValue="day-1"
        className="mt-4 space-y-3"
      >
        {days.map((d) => (
          <AccordionItem
            key={d.day}
            value={`day-${d.day}`}
            className=" border-slate-200 bg-white data-[state=open]:border-primary/60 data-[state=open]:bg-blue-50/40 data-[state=open]:p-2 "
          >
            <AccordionTrigger className="font-bold text-md p-0 flex items-center prose-h3:p-0 prose-h3:m-0 px-2 hover:no-underline cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="rounded bg-blue-100 p-2 font-semibold text-sky-700">
                  <LucideFlagTriangleRight />
                </span>
                <h3 className="font-bold  text-xl text-slate-900 ">
                  {d.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div dangerouslySetInnerHTML={{ __html: d.description }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
