import adventure from "@/public/mountain-trail.png";
import { Boxes, Globe2Icon, Kayak, Users } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      image: adventure,
      icon: <Kayak className="size-12" strokeWidth={1} />,
      title: "Beyond the Starndard Trail",
      description:
        'We specialize in "hidden Nepal." Our guides lead you to secluded landscapes and authentic cultural encounters that standard tour operators often overlook.',
    },
    {
      icon: <Globe2Icon className="size-12" strokeWidth={1} />,
      title: "Veteran Mountain Specialists",
      description:
        "Experience matters at high altitudes. Our team is composed of certified professionals with nearly two decades of experience navigating the specific terrain of the Annapurna and Everest regions.",
    },
    {
      icon: <Users className="size-12" strokeWidth={1} />,
      title: "Small Groups, Real Bonds",
      description:
        "We prioritize quality over quantity. By keeping our groups small, we ensure that every trekker receives personalized attention and care.",
    },
    {
      icon: <Boxes className="size-12" strokeWidth={1} />,
      title: "Seamless Logistics",
      description:
        "From the moment you land to the final descent, we handle the details. Airport transfers, permits, and quality lodging are all managed so you can focus entirely on the horizon.",
    },
  ];

  return (
    <section className="px-20 py-12 bg-primary/20">
      <div className="w-full mx-auto  p-2 flex flex-col items-center gap-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 container">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-base font-black text-foreground mb-3 uppercase tracking-wider">
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
