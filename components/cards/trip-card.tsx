"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DifficultyBadge from "../atoms/difficulty-badge";
import Image from "next/image";
import { motion } from "motion/react";

export type Tour = {
  id: string;
  title: string;
  duration: string;
  currency?: string;
  price: number;
  keywords: string[];
  activityType: string;
  difficultyLevel: string;
  images: string[];
  link?: string;
  canonicalPath?: string;
  urlHistory: [];
  slug: string;
};

export default function TripCard({ tour }: Readonly<{ tour: Tour }>) {
  return (
    <Link
      href={`/package/${tour.slug}`}
      className="relative cursor-pointer flex flex-col gap-2 max-w-sm min-w-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{
          opacity: 100,
          scale: 1,
          transition: { duration: 1 },
        }}
        className="relative h-120 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      >
        {/* Background Image */}
        <Image
          src={
            tour.images[0] ??
            tour.images[1] ??
            tour.images[2] ??
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
          }
          alt={tour?.keywords[0] || tour.title || ""}
          height={720}
          width={1280}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60  to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div>
            <DifficultyBadge difficulty={tour.difficultyLevel.toLowerCase()} />
          </div>

          <div>
            <p className="text-3xl font-extrabold mb-2">
              {tour.title.split(":")[0]}
            </p>
            <div className="space-y-2">
              <p>
                <span>{tour.duration}</span> from
              </p>
              <p className="text-4xl  mb-2 font-bold">USD {tour.price}</p>
            </div>
            <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
