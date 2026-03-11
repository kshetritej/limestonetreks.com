import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
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
              <p>
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.district}, {siteConfig.address.postalCode}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {siteConfig.phoneNumbers[0].phone}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {siteConfig.email}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-semibold mb-2">24 hrs Emergency Contact</p>
                <p>{siteConfig.phoneNumbers[0].tel}</p>
                <p>{siteConfig.phoneNumbers[0].tel2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto justify-between">
          {/* Social Media */}
          <div className="flex gap-2">
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandYoutube />
            <IconBrandTiktok />
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
            <span className="font-bold text-slate-900">LIMESTONE TREKS</span>{" "}
            THE TOURISM LICENSE NO.1111, COMPANY REGD. NO.111
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["About", "Legal Documents", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().split(" ").join("-")}`}
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
