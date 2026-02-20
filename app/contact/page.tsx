"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/majestic-mountain-range.webp"
          alt="contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0  bg-linear-to-b from-primary/50 to-primary/10" />
        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90">
            Have questions about our treks? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-15 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-md shadow-xs p-8">
            <h2 className="text-4xl font-bold mb-6 mt-2">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                Thank you for your message. We’ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="pb-3 text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="py-6 "
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="pb-3 text-lg">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="py-6 "
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="pb-3 text-lg">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="py-6 "
                  placeholder="+977 9841328947"
                />
              </div>

              <div>
                <Label htmlFor="message" className="pb-3 text-lg">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="py-10"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-7 bg-primary hover:bg-primary/90 duration-300 cursor-pointer"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-2">
            <div>
              <h2 className="text-4xl font-bold mb-4 mt-7">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:mail@limestonetreks.com"
                    className="hover:underline"
                  >
                    mail@limestonetreks.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+9779841328947" className="hover:underline">
                    +977 9841328947
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1769921974959!5m2!1sen!2snp"
                width="600"
                height="450"
              />
            </div>
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
          <p className="text-muted-foreground">
            Monday – Saturday, 9 AM – 6 PM (NST)
          </p>
        </div>
      </section>
    </main>
  );
}
