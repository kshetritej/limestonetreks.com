export const dynamic = "force-static";

import Hero from "@/components/hero";
import WhyUsSection from "../sections/why-us";
import { AboutSection } from "../sections/about";
// import { Stats } from "../sections/stats";
import FeaturedSections from "../featured-sections";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-2">
        <AboutSection />
      </div>
      {/*<Stats />*/}
      <div className="container mx-auto p-2">
        <FeaturedSections />
        {/*<BestSellerTrips />
        <FeaturedTrip />
        <LatestTrips />*/}
        {/*<RecentBlogs />*/}
      </div>
      <WhyUsSection />
    </div>
  );
}
