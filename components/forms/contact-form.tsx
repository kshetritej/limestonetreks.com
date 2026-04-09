"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/siteConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/email/send`,
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          from: `${formData.email}<${formData.phone}>`,
          to: siteConfig.email,
          subject: formData.subject,
          text: formData.message,
          html: "",
        }),
      },
    );

    if (!res.ok) {
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-card rounded-md shadow-xs md:p-8">
      <h2 className="text-4xl font-bold mb-6 mt-2">Send us a Message</h2>

      {submitted && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
          Thank you for your message. We&apos;ll get back to you soon.
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
            className="py-6"
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
            className="py-6"
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
            className="py-6"
            placeholder="+977 9841328947"
          />
        </div>

        <div>
          <Label htmlFor="subject" className="pb-3 text-lg">
            Subject
          </Label>
          <Textarea
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            rows={2}
            required
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
  );
}
