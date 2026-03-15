import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionTemplateProps = {
  badgeText?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  buttonLink?: string;
  buttonText?: string;
  children?: ReactNode;
  className?: string;
};
export default function SectionTemplate({
  badgeText,
  title,
  text,
  buttonLink,
  buttonText = "Explore More",
  children,
  className,
}: SectionTemplateProps) {
  return (
    <section className={cn("py-16 px-6 bg-background", className)}>
      <div className="md:max-w-7xl md:mx-auto flex flex-col md:flex-row  justify-between">
        <div>
          <div className="mb-12">
            <div className="text-sm font-bold uppercase tracking-widest text-primary mb-2 flex gap-1 items-center">
              <div className="w-8 h-1 bg-primary" />
              {badgeText}
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight text-balance uppercase">
              {title}
            </h2>
            <div className="text-md mb-4 leading-relaxed max-w-3xl">{text}</div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
