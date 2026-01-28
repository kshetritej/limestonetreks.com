import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export type AdditionalInfoItem = {
    title: string;
    description: string;
  };
  
  export const AdditionalInfoRenderer = ({
    item,
  }: {
    item: AdditionalInfoItem;
  }) => {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem 
          value="item-1"
          className="rounded-md border border-gray-200 bg-white data-[state=open]:border-sky-600 data-[state=open]:bg-blue-50/40 transition-colors"
        >
          <AccordionTrigger className="px-4 py-2 hover:no-underline [&[data-state=open]>svg]:rotate-180">
            <div className="flex items-center justify-between w-full gap-3">
              <span className="font-semibold text-slate-900">
                {item.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div dangerouslySetInnerHTML={{__html: item.description}}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };