// import {
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
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
    // <AccordionItem
    //   key={`item-${index}`}
    //   value={`item-${index}`}
    //   className="rounded-md  data-[state=open]:border-primary p-0"
    // >
    //   <AccordionTrigger className="hover:no-underline font-bold text-left w-full! text-md p-2">
    //     <span>{item.title}</span>
    //   </AccordionTrigger>
    //   <AccordionContent className="p-2 text-base">
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: decodeHtmlEntities(item.description),
    //       }}
    //     />
    //   </AccordionContent>
    // </AccordionItem>
    // </Accordion>
    <div>
      <h2>{item.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: decodeHtmlEntities(item.description),
        }}
      />
    </div>
  );
};
