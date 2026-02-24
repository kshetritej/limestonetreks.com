"use client";

import { LucideMenu, LucideX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCities, getRegions, getTripTypes } from "@/app/actions";

import { TAttractionTypes, TCity, TRegions } from "@/app/types/navItems";
import Link from "next/link";
import LogoComponent from "../atoms/logo";
import { ScrollArea } from "../ui/scroll-area";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="">
      <Button className="bg-primary" onClick={() => setMenuOpen(true)}>
        <LucideMenu className="size-16" />
      </Button>

      <div
        className={cn(
          menuOpen ? "block" : "hidden",
          "absolute top-0 right-0 h-svh bg-background w-svw p-4",
        )}
      >
        <div className="flex justify-between items-center">
          <LogoComponent />
          <Button variant="secondary" size="lg" onClick={closeMenu}>
            <LucideX />
          </Button>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white z-999 mt-42"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Top Destinations</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ScrollArea className="h-[50vh]">Coming soon...</ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
