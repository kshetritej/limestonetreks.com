"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
}

export function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || "",
  );
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("site-navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the first intersecting entry (top-most visible section)
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by position and get the topmost section
        const topMostEntry = visibleEntries.reduce((top, current) => {
          return current.boundingClientRect.top < top.boundingClientRect.top
            ? current
            : top;
        });

        setActiveSection(topMostEntry.target.id);
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky z-9999 border-y border-gray-200 shadow-sm bg-background top-0`}
      style={{ top: navbarHeight - 3 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`py-4 px-1 text-base font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                activeSection === section.id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
