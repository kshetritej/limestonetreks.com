"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideSend,
  LucideCompass,
  LucideClock,
  LucideCheckCircle2,
  LucideMountainSnow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { buildInquiryEmail } from "@/lib/build-inquiry-email-template";
import { siteConfig } from "@/lib/siteConfig";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  destination: z.string().min(1, "Please select a destination"),
  groupSize: z.string().min(1, "Please select a group size"),
  startDate: z.string("Please choose your desired date for the activity."),
  experienceLevel: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type TPackageDetails = { id: string; slug: string; title: string };

const ContactForm = ({ packages }: { packages: TPackageDetails[] }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form_Component packages={packages} />
    </Suspense>
  );
};

export default ContactForm;

export function Form_Component({ packages }: { packages: TPackageDetails[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const searchParams = useSearchParams();
  const destinationParam = searchParams?.get("q") ?? "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      destination: destinationParam || "",
      groupSize: "",
      startDate: "",
      experienceLevel: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (destinationParam) form.setValue("destination", destinationParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationParam]);

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: data.email,
          to: "tejghartikshetri@gmail.com",
          subject: `New Booking Inquiry from ${data.fullName} — ${data.destination}`,
          text: [
            `Name:              ${data.fullName}`,
            `Email:             ${data.email}`,
            `Phone:             ${data.phone || "Not provided"}`,
            `Destination:       ${data.destination}`,
            `Start Date:        ${data.startDate}`,
            `Group Size:        ${data.groupSize}`,
            `Experience Level:  ${data.experienceLevel || "Not specified"}`,
            ``,
            `Message:`,
            data.message,
          ].join("\n"),
          html: buildInquiryEmail(data),
        }),
        cache: "no-store",
      });
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 bg-stone-50 flex items-start justify-center py-14 px-6">
        <div className="w-full max-w-2xl">
          {/* Section eyebrow */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              <LucideCompass className="w-3.5 h-3.5" />
              Booking Inquiry
            </span>
            <h2 className="text-2xl font-bold">
              Let&apos;s plan about your next best adventure
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* ── Card 1: About You ── */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                  About You
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+977 9800000000"
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* ── Card 2: Trek Details ── */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                  Trek Details
                </p>

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full rounded-xl">
                            <SelectValue placeholder="Select a destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {packages.map((pkg: TPackageDetails) => (
                            <SelectItem key={pkg.slug} value={pkg.slug}>
                              {pkg.title.split(":")[0]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date *</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            min={today}
                            id="datePicker"
                            className="rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="groupSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Group Size *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-xl w-full">
                              <SelectValue placeholder="Size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Solo (1)</SelectItem>
                            <SelectItem value="2">Couple (2)</SelectItem>
                            <SelectItem value="3-5">Small (3–5)</SelectItem>
                            <SelectItem value="6-10">Medium (6–10)</SelectItem>
                            <SelectItem value="10+">Large (10+)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experienceLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-xl w-full">
                              <SelectValue placeholder="Level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">
                              Intermediate
                            </SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* ── Card 3: Message ── */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
                  Anything else?
                </p>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Accommodation style, dietary needs, fitness level, special occasions..."
                          rows={5}
                          className="resize-none rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-stone-900 hover:bg-stone-700 text-white rounded-2xl gap-2 font-semibold tracking-wide transition-all"
              >
                <LucideSend className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>

              {submitSuccess && (
                <div className="flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 text-sm text-emerald-800 font-medium">
                  <LucideCheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Sent! We&apos;ll be in touch within 24 hours.
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
