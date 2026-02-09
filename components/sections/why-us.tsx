import adventure from "@/public/adventurer_icon.webp";
import bump from "@/public/bump.webp";
import no_hassle from "@/public/no-hassle.webp";
import world from "@/public/world.svg";

export default function WhyUsSection() {
  const features = [
    {
      image: adventure,
      title: "Explore places you couldn’t on your own",
      description:
        "Every trip is led by certified, experienced guides — opening access to landscapes and moments most travelers never reach.",
    },
    {
      image: world,
      title: "Go with outdoor specialists",
      description:
        "Choose from carefully designed active adventures in truly wild places, whatever kind of challenge or pace you’re looking for.",
    },
    {
      image: bump,
      title: "Small Groups, Big Connections",
      description:
        "Most travelers join solo, typically in their 30s–50s. Our small groups consistently earn top ratings for atmosphere and camaraderie.",
    },
    {
      image: no_hassle,
      title: "Hassle-Free from Start to Finish",
      description:
        "We handle the planning and logistics — so you can simply arrive, switch off, and enjoy the mountains.",
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
                <img src={feature.image?.src} className="size-24"/>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider">
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
