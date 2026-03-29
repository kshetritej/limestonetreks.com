import SectionTemplate from "@/components/templates/section-template";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
export default function LegalDocumentsPage() {
  return (
    <SectionTemplate
      title={"Legal Documents"}
      text={<p>Here are the legal documents for Summit Luxury Treks:</p>}
      className="mx-auto container"
    >
      {Object.keys(siteConfig.documents).map((doc) => {
        return (
          <div key={doc}>
            <h2 className="font-bold my-4 text-2xl mt-12">
              {doc.split("_").join(" ")}
            </h2>
            <Image
              height={420}
              width={720}
              // @ts-expect-error some object errors
              src={siteConfig.documents[doc]}
              alt={doc}
              className="w-full"
            />
          </div>
        );
      })}
    </SectionTemplate>
  );
}
