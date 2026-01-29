import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type SectionTemplateProps = {
  badgeText: ReactNode;
  title: ReactNode;
  text: ReactNode;
  buttonLink: string;
  buttonText?: string;
  children: ReactNode;
  className?: string;
};
export default function SectionTemplate({
  badgeText,
  title,
  text,
  buttonLink,
  buttonText = "Explore More",
  children,
  className
}: SectionTemplateProps) {
  return (
    <section className={cn("py-16 px-4 bg-background", className)}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline-last justify-between">
        <div>
          <div className="mb-12">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-2 flex gap-1 items-center">
              <div className="w-8 h-1 bg-primary"/>
              {badgeText}
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight text-balance uppercase">
              {title}
            </h2>
            <div className="text-md text-muted-foreground mb-4 leading-relaxed max-w-3xl">
              {text}
            </div>
          </div>
        </div>

        <div className="text-center">
          {/* <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {buttonText}
            <ChevronRight className="w-5 h-5" />
          </Link> */}
        </div>

        {/* CTA Section */}
      </div>
      {children}
    </section>
  );
}
