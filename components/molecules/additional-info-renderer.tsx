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
  index,
}: {
  item: AdditionalInfoItem;
  index: number;
}) => {
  return (
    // <Accordion type="single" collapsible className="w-full">
    <AccordionItem
    key={`item-${index}`}
      value={`item-${index}`}
      className="rounded-md border border-gray-200 bg-white data-[state=open]:border-primary data-[state=open]:bg-blue-50/40 transition-colors"
    >
      <AccordionTrigger className="hover:no-underline py-4 font-bold text-slate-900 text-left w-full! px-4">
        <span>{item.title}</span>
      </AccordionTrigger>
      <AccordionContent className="text-slate-700 p-4">
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      </AccordionContent>
    </AccordionItem>
    // </Accordion>
  );
};
