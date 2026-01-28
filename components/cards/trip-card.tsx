"use client";

import { ArrowRight, Diff, LucideClock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "../atoms/difficulty-badge";
import { getFullImageUrl } from "@/lib/getFullUrl";
import placeHolderImage from "../data/image";
import { Button } from "../ui/button";

export type Tour = {
  id: string;
  title: string;
  duration: string;
  currency?: string;
  price: number;
  activityType: string;
  difficultyLevel: string;
  images: string[];
  link?: string;
  canonicalPath?: string;
  urlHistory: [];
};

export default function TripCard({ tour }: Readonly<{ tour: Tour }>) {
  return (
    <Link
      href={tour.canonicalPath ?? `/activities/${tour.id}`}
      className="relative cursor-pointer flex flex-col gap-2 shadow-sm border"
    >
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
        {/* Background Image */}
        <img
          src={
            tour.images[0] ??
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
          }
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div>
            <DifficultyBadge difficulty={tour.difficultyLevel.toLowerCase()} />
          </div>

          <div>
            <p className="text-2xl font-bold mb-2">{tour.title}</p>
            <div className="space-y-2">
              <p>
                <span>{tour.duration}</span> from
              </p>
              <p className="text-4xl opacity-90 mb-2 text-primary/90">USD {tour.price}</p>
            </div>
            <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
