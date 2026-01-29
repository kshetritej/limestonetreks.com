'use client'

import { TripData } from '@/lib/dummy-trip-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface TripFaqsProps {
  trip: TripData
}

export function TripFaqs({ trip }: TripFaqsProps) {
  return (
    <div className="space-y-8 max-w-4xl min-w-3xl">
      <div>
        <h2 className="font-bold text-xl my-4">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {trip.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-primary-100 rounded-lg px-6 bg-primary-50 w-full!"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-bold text-slate-900 text-left w-full!">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pb-4">
                <div dangerouslySetInnerHTML={{__html: faq.answer}}/>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
