export const dynamic = "force-static";

import Hero from "@/components/hero";
import WhyUsSection from "../sections/why-us";
import { AboutSection } from "../sections/about";
import FeaturedSections from "../featured-sections";
import TripOfTheMonth from "../sections/featured-trip";

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
      </div>
      <TripOfTheMonth />
      <WhyUsSection />
    </div>
  );
}
