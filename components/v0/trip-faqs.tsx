'use client'

import { TripData } from '@/lib/dummy-trip-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { decodeHtmlEntities } from '@/lib/html-decoder'

interface TripFaqsProps {
  trip: TripData
}

export function TripFaqs({ trip }: TripFaqsProps) {
  return (
    <div className="max-w-4xl p-2">
      <h2 className="font-bold -mt-1">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        {trip.faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
          >
            <AccordionTrigger className="hover:no-underline font-bold text-lg p-0">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-lg">
              <div dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(faq.answer) }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
