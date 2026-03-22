export const dynamic = "force-static";

import WhyUsSection from "../sections/why-us";
import { AboutSection } from "../sections/about";
import FeaturedSections from "../featured-sections";
import TripOfTheMonth from "../sections/featured-trip";
import Hero from "../hero";

export default async function Homepage() {
  return (
    <div>
      <Hero />
      <div className="bg-primary/20">
        <div className="container mx-auto p-4">
          <AboutSection />
        </div>
      </div>
      {/*<Stats />*/}
      <TripOfTheMonth />
      <div className="container mx-auto p-2">
        <FeaturedSections />
      </div>
      <WhyUsSection />
    </div>
  );
}
