"use client";

import {
  Eye,
  HdIcon,
  Icon,
  LucideBadgeQuestionMark,
  LucideCheck,
  LucideInfo,
  LucideX,
  Map,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

const sections = [
  { id: "overview", label: "Overview", icon: <Eye /> },
  { id: "highlights", label: "Highlights", icon: <Star /> },
  { id: "itinerary", label: "Itinerary", icon: <Map /> },
  { id: "inclusions", label: "Inclusions", icon: <LucideCheck /> },
  { id: "exclusions", label: "Exclusions", icon: <LucideX /> },
  { id: "trip-info", label: "Trip Info", icon: <LucideInfo /> },
  { id: "faqs", label: "FAQs", icon: <LucideBadgeQuestionMark /> },
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [offsetTop, setOffsetTop] = useState(0);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const navScrollRef = useRef<HTMLDivElement>(null);

  // Read navbar height ONCE and store as CSS-safe value
  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (navbar) {
      setOffsetTop(navbar.offsetHeight);
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${offsetTop}px 0px -60% 0px`,
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, offsetTop]);

  // Scroll active button into view within the nav bar
  useEffect(() => {
    const btn = buttonRefs.current[activeSection];
    const container = navScrollRef.current;
    if (!btn || !container) return;

    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;

    const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2;

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offsetTop - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-[var(--section-nav-top)] z-50 bg-primary shadow-y-sm md:px-12"
      style={
        {
          "--section-nav-top": `${offsetTop}px`,
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={navScrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              ref={(el) => {
                buttonRefs.current[section.id] = el;
              }}
              onClick={() => handleNavClick(section.id)}
              className={`p-2 px-1 text-base font-medium whitespace-nowrap border-y-2 transition-colors flex items-center gap-2 ${
                activeSection === section.id
                  ? " text-black-500 border-b-black  cursor-pointer border-t-transparent"
                  : "border-transparent text-white hover:text-slate-900 cursor-pointer"
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
