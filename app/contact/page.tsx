import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/majestic-mountain-range.webp"
          alt="contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/50 to-primary/10" />
        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90">
            Have questions about our treks? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-15 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM - Client Component */}
          <ContactForm />

          {/* CONTACT INFO */}
          <div className="space-y-2">
            <div>
              <h2 className="text-4xl font-bold mb-4 mt-7">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="hover:underline"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <Link
                    href={`tel:${siteConfig.phoneNumber}`}
                    className="hover:underline"
                  >
                    {siteConfig.phoneNumber}
                  </Link>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>{siteConfig.fullAddress}</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            {/*<div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src={siteConfig.gmb.googleMapsLocation}
                width="600"
                height="450"
              />
            </div>*/}
          </div>
        </div>
      </section>

      {/* RESPONSE TIME */}
      <section className="border-t py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-5xl font-bold">Response Times</h2>
          <p className="text-muted-foreground">
            We typically respond within 24 hours during business days.
          </p>
          <p className="text-muted-foreground">{siteConfig.openHours}</p>
        </div>
      </section>
    </main>
  );
}
