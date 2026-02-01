import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { decodeHtmlEntities } from "@/lib/html-decoder";

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
      <AccordionTrigger className="hover:no-underline py-4 font-bold  text-left w-full! px-4">
        <span>{item.title}</span>
      </AccordionTrigger>
      <AccordionContent className="p-4">
        <div dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(item.description) }} />
      </AccordionContent>
    </AccordionItem>
    // </Accordion>
  );
};
