import { LucideFacebook, LucideInstagram, LucideYoutube } from "lucide-react";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react';

function generateRandomPhone(): string {
  const area = Math.floor(Math.random() * 900) + 100;
  const prefix = Math.floor(Math.random() * 900) + 100;
  const line = Math.floor(Math.random() * 9000) + 1000;
  return `+1 ${area} ${prefix} ${line}`;
}

function generateRandomEmail(): string {
  const names = [
    "alex",
    "jordan",
    "sam",
    "casey",
    "morgan",
    "blair",
    "drew",
    "pat",
  ];
  const domains = ["hiking", "adventure", "trekking", "explore", "venture"];
  const name = names[Math.floor(Math.random() * names.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}@${domain}team.com`;
}

function generateRandomName(): string {
  const firstNames = [
    "Alex",
    "Jordan",
    "Sam",
    "Casey",
    "Morgan",
    "Blair",
    "Drew",
    "Pat",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
  ];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateRandomCity(): string {
  const cities = [
    "Seattle, Washington",
    "Denver, Colorado",
    "Portland, Oregon",
    "Austin, Texas",
    "Boulder, Colorado",
    "Asheville, North Carolina",
    "Moab, Utah",
    "Bozeman, Montana",
  ];
  return cities[Math.floor(Math.random() * cities.length)];
}

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Partners & Associations */}
      <div className="border-b border-slate-200  py-6 sm:py-8 container mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="font-bold text-xs sm:text-sm">ASSOCIATIONS</div>
          <div className="flex gap-2 overflow-x-auto">
            {[
              "/associated1.png",
              "/associated2.png",
              "/associated3.png",
              "/associated4.png",
            ].map((ass, i) => (
              <img
                key={i}
                src={ass}
                className="w-10 h-6 sm:w-12 sm:h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info Sections */}
      <div className="border-b border-slate-200 px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Head Office */}
          <div className="sm:border-r sm:border-slate-200 sm:pr-8">
            <h4 className="font-bold text-sm mb-4">🏔️ HEAD OFFICE</h4>
            <div className="space-y-3 text-sm text-slate-700">
              <p>{generateRandomCity()}</p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {generateRandomPhone()}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {generateRandomEmail()}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-semibold mb-2">24 hrs Emergency Contact</p>
                <p>{generateRandomPhone()}</p>
                <p>{generateRandomPhone()}</p>
              </div>
            </div>
          </div>

          {/* Region 2 */}
          <div className="sm:border-r sm:border-slate-200 sm:pr-8 lg:border-r">
            <h4 className="font-bold text-sm mb-4">🌍 REGION 2</h4>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">{generateRandomName()}</span>
              </p>
              <p>{generateRandomCity()}</p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {generateRandomPhone()}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {generateRandomEmail()}
              </p>
            </div>
          </div>

          {/* Region 3 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-sm mb-4">🌏 REGION 3</h4>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">{generateRandomName()}</span>
              </p>
              <p>{generateRandomCity()}</p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {generateRandomPhone()}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {generateRandomEmail()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social, Reviews & Payments */}
      <div className="border-b border-slate-200 px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto justify-between">
          {/* Social Media */}
          <div className="flex gap-2">
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandYoutube />
            <IconBrandTiktok/>
          </div>

          {/* Reviews */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <div className="w-20 h-6 sm:w-24 sm:h-8 bg-slate-300 rounded" />
            <div className="w-20 h-6 sm:w-24 sm:h-8 bg-slate-300 rounded" />
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-w-7xl mx-auto text-xs text-slate-600">
          <p className="text-balance">
            COPYRIGHT ©{" "}
            <span className="font-bold text-slate-900">PEAKWISE TRAVELS</span>{" "}
            THE TOURISM LICENSE NO.1111, COMPANY REGD. NO.111
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["About Us", "Blog", "Partnership", "Trekking"].map((link) => (
              <Link
                key={link}
                href="#"
                className="hover:text-slate-900 whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
