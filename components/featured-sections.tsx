import TripCard from "./cards/trip-card";

export default async function FeaturedSections() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured?includeActivity=true`,
  );

  const data = await res.json();

  const featured = data?.data;
  const otherFeaturedExpectTOM = featured.featuredTags.filter(
    (tag: any) => tag.slug !== "trip-of-the-month",
  );

  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center space-y-4">
      {/*@ts-expect-error error */}
      {otherFeaturedExpectTOM.map((tag, index) => {
        return (
          <div key={index} className="container mx-auto my-12">
            {tag.activity && tag.activity.length > 0 && (
              <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight text-balance uppercase">
                {tag.name}
              </h2>
            )}
            {tag.activity && tag.activity.length > 0 && (
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                {tag.description}
              </p>
            )}
            <div>
              {tag.activity && tag.activity.length > 0 && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap w-full">
                  {tag.activity.map((activity: any) => (
                    <TripCard key={activity.id} tour={activity} />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
