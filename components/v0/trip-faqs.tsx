import { TripData } from "@/lib/dummy-trip-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { decodeHtmlEntities } from "@/lib/html-decoder";

interface TripFaqsProps {
  trip: TripData;
}

export function TripFaqs({ trip }: TripFaqsProps) {
  return (
    <div className="max-w-4xl">
      <h2 className="font-bold -mt-1">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {trip.faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="">
            <AccordionTrigger className="font-bold text-md p-0 flex items-center prose-h3:p-0 prose-h3:m-0 prose-h3:leading-0">
              <h3>{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(faq.answer),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
