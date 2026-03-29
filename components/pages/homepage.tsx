export const dynamic = "force-static";

import WhyUsSection from "../sections/why-us";
import { AboutSection } from "../sections/about";
import FeaturedSections from "../featured-sections";
import TripOfTheMonth from "../sections/featured-trip";
import Hero from "../hero";

export default async function Homepage() {
  let data;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured?includeActivity=true`,
    );

    data = await res.json();
  } catch (error) {
    console.log("Error: ", error);
    return;
  }

  const featured = data?.data;
  const featuredWithoutTOM = featured.featuredTags.filter(
    (tag: any) => tag.slug !== "trip-of-the-month",
  );
  const firstFeatured = featuredWithoutTOM.slice(0, 1);
  const secondFeatured = featuredWithoutTOM.slice(1, 2);
  const thirdFeatured = featuredWithoutTOM.slice(2, 3);

  return (
    <div>
      <Hero />
      <div className="bg-primary/20">
        <div className="container mx-auto p-4">
          <AboutSection />
        </div>
      </div>
      {/*<Stats />*/}
      <div className="container mx-auto p-2">
        <FeaturedSections featuredTags={firstFeatured} />
      </div>
      <TripOfTheMonth />
      {/*<div className="container mx-auto p-2">*/}
      <FeaturedSections featuredTags={secondFeatured} />
      <WhyUsSection />
      <FeaturedSections featuredTags={thirdFeatured} />
      {/*</div>*/}
    </div>
  );
}
