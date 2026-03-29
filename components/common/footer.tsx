import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50  border-slate-200">
      <div className="border-b border-slate-200 px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className=" sm:pr-8">
            <h4 className="font-bold text-sm mb-4"> HEAD OFFICE</h4>
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
              {/*<div className="mt-4 pt-4 ">
                <p className="font-bold mb-2">24 hrs Emergency Contact</p>
                <p className="text-black">{siteConfig.phoneNumbers[0].tel}</p>
                <p>{siteConfig.phoneNumbers[0].tel2}</p>
              </div>*/}
            </div>
          </div>
          <div className="flex  flex-col sm:gap-4">
            <div className="font-bold text-xs sm:text-sm mb-4">
              ASSOCIATIONS
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {[
                "/associated1.png",
                "/associated2.png",
                "/associated3.png",
                "/associated4.png",
              ].map((ass, i) => (
                <Image
                  alt={`Associated ${i + 1}`}
                  key={i}
                  src={ass}
                  height={400}
                  width={400}
                  className="w-16 h-12 sm:w-16 sm:h-12 object-contain"
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">QUICK LINKS</h4>
            <ul className="flex flex-col gap-1">
              <Link href="/about-us">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/legal-documents">Legal Documents</Link>
            </ul>
          </div>
        </div>
      </div>

      {/*<div className="border-b border-slate-200 px-4 py-6 sm:px-6 sm:py-8"> <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto justify-between">
          <div className="flex gap-2">
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandYoutube />
            <IconBrandTiktok />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <div className="w-20 h-6 sm:w-24 sm:h-8 bg-slate-300 rounded" />
            <div className="w-20 h-6 sm:w-24 sm:h-8 bg-slate-300 rounded" />
          </div>
        </div>
      </div>*/}

      {/* Copyright & Links */}
      <div className="px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-w-7xl mx-auto text-xs text-slate-600">
          <p className="text-balance">
            COPYRIGHT ©{" "}
            <span className="font-bold text-slate-900 uppercase">
              {siteConfig.name}
            </span>{" "}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {["Facebook", "Instagram", "Tiktok", "Youtube"].map((link) => (
              <Link
                key={link}
                href={"#"}
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
