import { TripOverview } from "@/components/v0/trip-overview";
import { TripItinerary } from "@/components/v0/trip-itinerary";
import { TripFaqs } from "@/components/v0/trip-faqs";
import { TripSidebar } from "@/components/v0/trip-sidebar";
import placeHolderImage from "@/components/data/image";
import { AdditionalInfoRenderer } from "@/components/molecules/additional-info-renderer";
import { Accordion } from "@/components/ui/accordion";
import CTACard from "@/components/cards/cta-card";
import { decodeHtmlEntities } from "@/lib/html-decoder";
import { Lightbox } from "@/components/claude/lightbox";

export default async function TripPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity/slug/${slug}`,
  );

  if (!res.ok) {
    return (
      <main>
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold">Failed to fetch.</h1>
          <p className="mt-2 text-muted-foreground">The trip data could not be loaded.</p>
        </div>
      </main>
    );
  }

  const jsonres = await res.json();

  const trip = jsonres.data;

  const mainImage = trip.images[0] || placeHolderImage.src;
  const otherImages = trip.images.slice(1) || [];

  return (
    <main>
      {trip.images && trip.images.length > 0 && (
        <Lightbox images={trip.images}>
          <div className="grid grid-cols-4 gap-2 container mx-auto pt-8">
            <div className="rounded-3xl overflow-hidden col-span-2">
              <img
                src={mainImage}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {otherImages.map((imageUrl: string) => (
                <div key={imageUrl} className="rounded-3xl overflow-hidden">
                  <img
                    src={imageUrl}
                    className="w-full h-60 object-cover rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </Lightbox>
      )}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4 min-w-0">
          <div className="col-span-2 min-w-0!">
            <TripOverview trip={trip} />
            <div
              className="col-span-2 min-w-0!
      prose-lg leading leading-relaxed
      prose-headings:text-gray-900 prose-headings:font-bold
      prose-h1:text-4xl 
      prose-h2:text-3xl   prose-h2:font-bold
      prose-h3:text-xl  
      prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
      prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary hover:prose-a:underline
      prose-strong:text-black prose-strong:font-bold
      prose-ul:my-2 prose-ol:my-2
      prose-li:text-gray-700 prose-li:mb-1
      prose-blockquote:border-l-4 prose-blockquote:border-green-700 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
      prose-img:rounded-lg prose-img:my-6
      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
      prose-ul:list-none
      prose-li:relative prose-li:pl-8
      prose-li:before:absolute
      prose-li:before:left-0
      prose-li:before:top-[0.45em]
      prose-li:before:w-4 prose-li:before:h-4
      prose-li:before:bg-primary
      prose-li:before:mask-[url('/icons/point-finger.svg')]
      prose-li:before:rotate-90
      prose-li:before:mask-contain
      prose-li:before:mask-no-repeat
      prose max-w-none w-full
      wrap-break-word
      **:wrap-break-word
            "
            >
              <TripItinerary trip={trip} />
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(trip.inclusions[0]),
                }}
                className="bg-primary/10 p-4 border-t-4 border-primary
                  w-full
                  prose-li:before:mask-[url('/icons/tick.svg')]
                  prose-li:before:rotate-360
                   "
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(trip.exclusions[0]),
                }}
                className="w-full bg-rose-500/10 p-4 border-t-4 border-rose-500 mt-4 prose-li:before:mask-[url('/icons/cross-color.svg')]"
              />
              <h2 className="font-bold text-xl my-4">Trip Information</h2>
              <Accordion
                collapsible
                type="single"
                className="bg-primary-50 w-full! mb-8"
              >
                {trip.additionalInfo.map((info: any, idx: any) => {
                  return (
                    <AdditionalInfoRenderer key={idx} index={idx} item={info} />
                  );
                })}
              </Accordion>
              {trip.faqs && trip.faqs.length > 1 && <TripFaqs trip={trip} />}
            </div>
          </div>
          <div className="col-span-1 p-4 hidden md:flex">
            <TripSidebar trip={trip} />
          </div>
        </div>
      </div>
      <div className="text-white mt-8">
        <CTACard />
      </div>
    </main>
  );
}
