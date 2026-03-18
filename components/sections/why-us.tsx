import adventure from "@/public/mountain-trail.png";
import bump from "@/public/small-group.png";
import no_hassle from "@/public/logistics.png";
import world from "@/public/mountains.png";
import Image from "next/image";

export default function WhyUsSection() {
  const features = [
    {
      image: adventure,
      title: "Beyond the Starndard Trail",
      description:
        'We specialize in "hidden Nepal." Our guides lead you to secluded landscapes and authentic cultural encounters that standard tour operators often overlook.',
    },
    {
      image: world,
      title: "Veteran Mountain Specialists",
      description:
        "Experience matters at high altitudes. Our team is composed of certified professionals with nearly two decades of experience navigating the specific terrain of the Annapurna and Everest regions.",
    },
    {
      image: bump,
      title: "Small Groups, Real Bonds",
      description:
        "We prioritize quality over quantity. By keeping our groups small, we ensure that every trekker receives personalized attention and care.",
    },
    {
      image: no_hassle,
      title: "Seamless Logistics",
      description:
        "From the moment you land to the final descent, we handle the details. Airport transfers, permits, and quality lodging are all managed so you can focus entirely on the horizon.",
    },
  ];

  return (
    <section className="px-20 py-12 bg-secondary">
      <div className="w-full mx-auto bg-secondary p-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={feature.image?.src}
                  className="size-24"
                  height={200}
                  width={200}
                  alt={feature.title}
                />

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider h-12">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
