import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export type FaqItem = {
    question: string;
    answer: string;
  };
  export const FAQRenderer = ({
    item,
    index,
  }: {
    item: FaqItem;
    index: string;
  }) => {
    return (
      <div className="flex gap-1 relative border-b">
        <AccordionItem value={index} className="w-full">
          <AccordionTrigger className="rounded-none hover:no-underline cursor-pointer">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </AccordionContent>
        </AccordionItem>
      </div>
    );
  };
  