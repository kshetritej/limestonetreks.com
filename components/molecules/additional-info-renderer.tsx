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
