import TrekHeader from "./TrekHeader";
import TrekHero from "./TrekHero";
import BookingCard from "./BookingCard";
import FullItinerary from "./FullItinerary";
import { Mountain, Gauge, Users, MapPin } from "lucide-react";
import { StatCard } from "../cards/stat-card";
import { AdditionalInfoRenderer } from "../molecules/additional-info-renderer";
import { FAQRenderer } from "../molecules/faq-renderer";
import { Accordion } from "../ui/accordion";
import { getFullImageUrl } from "@/lib/getFullUrl";

export default function TrekDetailPage({ trip }: { trip: any }) {
  const d = trip;
  return (
    <main
      className="space-y-3 leading-6 
      prose max-w-none
      prose-headings:text-slate-900 prose-headings:font-semibold
      prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
      prose-h2:text-3xl prose-h2:mt-6 prose-h2:mb-2 prose-h2:font-semibold prose-h2:border-l-4 prose-h2:border-l-blue-500 prose-h2:pl-4
      prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-1
      prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0 prose-p:break-words
      prose-a:text-blue-600 prose-a:no-underline prose-a:break-words hover:prose-a:text-blue-700 hover:prose-a:underline
      prose-strong:text-slate-900 prose-strong:font-semibold
      prose-ul:my-2 prose-ul:text-slate-600 prose-ol:my-2 prose-ol:text-slate-600
      prose-li:mb-1 prose-li:text-slate-600 prose-li:break-words
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
      prose-img:rounded-lg prose-img:my-6 prose-img:shadow-sm prose-img:max-w-full prose-img:h-auto
      prose-code:bg-blue-50 prose-code:text-blue-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
      "
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        {/* <Breadcrumbs items={d.breadcrumbs} /> */}
        <div className="mt-2">
          <TrekHeader title={d.title} days={d.duration} />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 min-w-0">
            <TrekHero images={d.images} />
          </div>
          <div className="lg:col-span-4 min-w-0">
            <div className="lg:sticky lg:top-6">
              <BookingCard />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-[calc(66.666%-12px)]">
          <StatCard
            icon={<Mountain className="h-5 w-5 text-sky-600" />}
            label="Max Altitude"
            value={"12,300"}
          />
          <StatCard
            icon={<Gauge className="h-5 w-5 text-sky-600" />}
            label="Difficulty"
            value={d.difficultyLevel}
          />
          <StatCard
            icon={<Users className="h-5 w-5 text-sky-600" />}
            label="Group Size"
            value={d.guestCapacity}
          />
          <StatCard
            icon={<MapPin className="h-5 w-5 text-sky-600" />}
            label="Start/End"
            value={d.meetingPoint + " / " + d.dropOffPoint}
          />
        </div>
        <div
          className="mt-8"
        >
          <div className="lg:col-span-8  max-w-3xl overflow-hidden">
            <div className="space-y-10">
              <div dangerouslySetInnerHTML={{ __html: d.shortDescription }} />
              <div dangerouslySetInnerHTML={{ __html: d.highlights[0] }} />
              <FullItinerary days={d.itinerary} />
              {d.inclusions && (
                <div
                  className="rounded-xl border  bg-white border-green-500 data-[state=open]:bg-blue-50/40 px-4 p-4"
                  dangerouslySetInnerHTML={{ __html: d.inclusions[0] }}
                />
              )}
              {d.exclusions && (
                <div
                  className="rounded-xl border  bg-white border-rose-500 data-[state=open]:bg-blue-50/40 px-4 p-4"
                  dangerouslySetInnerHTML={{ __html: d.exclusions[0] }}
                />
              )}

              {d.additionalInfo &&
                d.additionalInfo.map((item: any, index: number) => {
                  return (
                    <div key={index} className="overflow-wrap-anywhere">
                      <AdditionalInfoRenderer item={item} />
                    </div>
                  );
                })}

              <Accordion type="single" collapsible className="w-full">
                <p className="font-bold text-md">FAQs</p>
                {d.faqs &&
                  d.faqs.map((item: any, index: number) => {
                    return (
                      <div>
                        <FAQRenderer
                          index={String(index)}
                          key={index + item}
                          item={item}
                        />
                      </div>
                    );
                  })}
              </Accordion>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 min-w-0" />
        </div>
        <div className="mt-10">
          {/* <ExploreMore items={d.moreAdventures} /> */}
        </div>
      </div>
    </main>
  );
}
