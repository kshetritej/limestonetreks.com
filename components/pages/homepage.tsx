export const dynamic = "force-static";

import CTACard from "@/components/cards/cta-card";
import Hero from "@/components/hero";
import RecentBlogs from "../sections/recent-blogs";
import LatestTrips from "../sections/latest-trips";
import WhyUsSection from "../sections/why-us";
import BestSellerTrips from "../sections/best-sellerts";
import FeaturedTrip from "../sections/featured-trip";
import { AboutSection } from "../sections/about";
import { Stats } from "../sections/stats";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-2">
        <BestSellerTrips />
        <AboutSection />
      </div>
      <Stats />
      <div className="container mx-auto p-2">
        <FeaturedTrip />
        <LatestTrips />
        {/*<RecentBlogs />*/}
      </div>
      <WhyUsSection />
      <CTACard />
    </div>
  );
}
