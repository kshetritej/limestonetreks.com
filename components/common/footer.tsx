import Link from "next/link";
import { ImageIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            {/* Our Address */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Our Address
              </p>
              <h3 className="text-lg font-bold mb-4">BetterTreks</h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lakeside, Pokhara</p>
                <p>Kaski District</p>
                <p>Pokhara 33700</p>
                <p>Nepal</p>
              </div>

              <p className="text-sm font-semibold text-muted-foreground mt-6 mb-2">
                Contact Number
              </p>
              <p className="font-semibold">+977-9841328947</p>

              <p className="text-sm font-semibold text-muted-foreground mt-4 mb-2">
                Email Address
              </p>
              <p className="font-semibold">info@bettertreks.com</p>
            </div>

            {/* Company */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                Company
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-foreground transition">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                Information
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Travel Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Payment Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Activities */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                Activities
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/tours" className="hover:text-foreground transition">
                    Trekking in Nepal
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-foreground transition">
                    Peak Climbing
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-foreground transition">
                    Cultural Tours
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-foreground transition">
                    Hiking Adventures
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-12 space-y-8">
          {/* Associated With */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              Associated With
            </p>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3 border border-border bg-muted/30 hover:bg-muted transition"
                >
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* We Accept */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-4">
              We Accept
            </p>
            <div className="rounded-lg border border-border p-4 inline-flex gap-3 flex-wrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded bg-background border border-border px-2 py-1"
                >
                  <ImageIcon className="w-6 h-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-sm text-muted-foreground border-t border-border">
            <p>© 2026 BetterTreks.</p>
            <p>
              All rights reserved ·{" "}
              <Link href="#" className="hover:text-foreground underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
