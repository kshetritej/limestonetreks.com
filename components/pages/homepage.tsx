export const dynamic = "force-static";

import Hero from "@/components/hero";
import LatestTrips from "../sections/latest-trips";
import WhyUsSection from "../sections/why-us";
import BestSellerTrips from "../sections/best-sellerts";
import FeaturedTrip from "../sections/featured-trip";
import { AboutSection } from "../sections/about";
// import { Stats } from "../sections/stats";
import CTACard from "../cards/cta-card";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-2">
        <AboutSection />
      </div>
      {/*<Stats />*/}
      <div className="container mx-auto p-2">
        <BestSellerTrips />
        <FeaturedTrip />
        <LatestTrips />
        {/*<RecentBlogs />*/}
      </div>
      <WhyUsSection />
    </div>
  );
}
