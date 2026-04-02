//@ts-nocheck
"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Suspense } from "react";
import Link from "next/link";

import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideSend,
  LucideCheckCircle2,
  LucideClock,
  LucidePlus,
  LucideTrash2,
  LucideCompass,
  LucideUsers,
  LucideUtensils,
  LucideBed,
  LucideStar,
  LucideMap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { siteConfig } from "@/lib/siteConfig";

const DURATION_VALUES = [
  "1–3 days",
  "4–7 days",
  "8–10 days",
  "11–14 days",
  "15–20 days",
  "21+ days",
] as const;
type Duration = (typeof DURATION_VALUES)[number];

const EXPERIENCE_TYPE_VALUES = [
  "Classic Trek",
  "High Altitude Expedition",
  "Cultural & Heritage Tour",
  "Wildlife & Nature Safari",
  "Luxury Trek",
  "Adventure & Extreme Sports",
  "Pilgrimage Tour",
  "Photography Tour",
  "Family-Friendly Trek",
  "Off-the-beaten-path",
] as const;
type ExperienceType = (typeof EXPERIENCE_TYPE_VALUES)[number];

const INCLUSION_IDS = [
  "guide",
  "porter",
  "permits",
  "transport",
  "insurance",
  "firstaid",
  "sleeping-bag",
  "helicopter",
] as const;
type InclusionId = (typeof INCLUSION_IDS)[number];

const ACCOMMODATION_VALUES = [
  "teahouse",
  "lodge",
  "luxury-lodge",
  "camping",
  "hotel",
  "mix",
] as const;
type AccommodationValue = (typeof ACCOMMODATION_VALUES)[number];

const FOOD_PREF_VALUES = [
  "local",
  "continental",
  "vegetarian",
  "vegan",
  "halal",
  "flexible",
] as const;
type FoodPrefValue = (typeof FOOD_PREF_VALUES)[number];

const GROUP_TYPE_VALUES = ["solo", "couple", "family", "friends"] as const;
type GroupType = (typeof GROUP_TYPE_VALUES)[number];

const TRAVELLER_COUNT_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5–7",
  "8–10",
  "11–15",
  "16+",
] as const;
type TravellerCount = (typeof TRAVELLER_COUNT_VALUES)[number];

const INCLUSIONS: { id: InclusionId; label: string }[] = [
  { id: "guide", label: "Certified Professional Guide" },
  { id: "porter", label: "Porter Support Team" },
  { id: "permits", label: "All Permits & National Park Fees" },
  { id: "transport", label: "Private Airport Transfers" },
  { id: "firstaid", label: "Emergency First Aid Kit" },
  { id: "sleeping-bag", label: "Mountain Gear & Equipment" },
  { id: "helicopter", label: "Emergency Evacuation Coverage" },
];

const ACCOMMODATION: { value: AccommodationValue; label: string }[] = [
  { value: "teahouse", label: "Authentic Teahouses" },
  { value: "lodge", label: "Standard Lodges" },
  { value: "luxury-lodge", label: "Premium Luxury Lodges" },
  { value: "camping", label: "High-Altitude Camping" },
  { value: "hotel", label: "Boutique City Hotels" },
  { value: "mix", label: "Mixed / Customizable" },
];

const FOOD_PREFS: { value: FoodPrefValue; label: string }[] = [
  { value: "local", label: "Traditional Nepali (Dal Bhat)" },
  { value: "continental", label: "International Cuisine" },
  { value: "vegetarian", label: "Vegetarian Only" },
  { value: "vegan", label: "Plant-Based / Vegan" },
  { value: "halal", label: "Halal Certified" },
  { value: "flexible", label: "No Specific Preference" },
];

const GROUP_OPTIONS: { value: GroupType; label: string; emoji: string }[] = [
  { value: "solo", label: "Traveling Solo", emoji: "🧍" },
  { value: "couple", label: "As a Couple", emoji: "👫" },
  { value: "family", label: "Family Trip", emoji: "👨‍👩‍👧" },
  { value: "friends", label: "Small Group", emoji: "🧑‍🤝‍🧑" },
];

const locationSchema = z.object({
  name: z.string().optional(),
  days: z.string().optional(),
});

const itineraryFormSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    email: z.string().email("A valid email is required"),
    phone: z.string().optional(),
    duration: z.enum(DURATION_VALUES, {
      error: "Select your preferred duration",
    }),
    experienceType: z.enum(EXPERIENCE_TYPE_VALUES, {
      error: "What kind of journey are you looking for?",
    }),
    startDate: z.string().min(1, "When would you like to start?"),
    letUsChooseLocations: z.boolean(),
    locations: z.array(locationSchema),
    groupType: z.enum(GROUP_TYPE_VALUES, {
      error: "Select your group dynamic",
    }),
    numberOfTravellers: z.enum(TRAVELLER_COUNT_VALUES, {
      error: "Select the number of participants",
    }),
    inclusions: z.array(z.enum(INCLUSION_IDS)).default([]),
    accommodationPreferences: z
      .array(z.enum(ACCOMMODATION_VALUES))
      .min(1, "Choose at least one stay option"),
    foodPreferences: z
      .array(z.enum(FOOD_PREF_VALUES))
      .min(1, "Please select a dining preference"),
    otherMentions: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.letUsChooseLocations) {
      data.locations.forEach((location, index) => {
        if (!location.name || location.name.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Destination name is required",
            path: ["locations", index, "name"],
          });
        }
        const dayNum = Number(location.days);
        if (!location.days || isNaN(dayNum) || dayNum <= 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Min 1 day",
            path: ["locations", index, "days"],
          });
        }
      });
    }
  });

type ItineraryFormValues = z.infer<typeof itineraryFormSchema>;

const STEPS = [
  { label: "Journey Info", icon: LucideCompass },
  { label: "Destinations", icon: LucideMap },
  { label: "Group Size", icon: LucideUsers },
  { label: "Personal Style", icon: LucideStar },
  { label: "Final Details", icon: LucideMail },
] as const;

const STEP_FIELDS: Record<number, (keyof ItineraryFormValues)[]> = {
  0: ["duration", "experienceType", "startDate"],
  1: ["letUsChooseLocations", "locations"],
  2: ["groupType", "numberOfTravellers"],
  3: ["inclusions", "accommodationPreferences", "foodPreferences"],
  4: ["fullName", "email", "phone"],
};

function toggleArrayItem<T>(arr: T[], item: T): T[] {
  return arr.includes(item) ? arr.filter((v) => v !== item) : [...arr, item];
}

function accommodationLabel(v: AccommodationValue): string {
  return ACCOMMODATION.find((a) => a.value === v)?.label ?? v;
}

function foodLabel(v: FoodPrefValue): string {
  return FOOD_PREFS.find((f) => f.value === v)?.label ?? v;
}

const CustomItineraryForm = () => (
  <Suspense
    fallback={
      <div className="p-10 text-center">Preparing your adventure...</div>
    }
  >
    <ItineraryForm_Component />
  </Suspense>
);

export default CustomItineraryForm;

export function ItineraryForm_Component() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [step, setStep] = useState(0);

  const form = useForm<ItineraryFormValues>({
    resolver: zodResolver(itineraryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      duration: undefined,
      experienceType: undefined,
      startDate: "",
      letUsChooseLocations: false,
      locations: [{ name: "", days: "" }],
      groupType: undefined,
      numberOfTravellers: undefined,
      inclusions: [],
      accommodationPreferences: [],
      foodPreferences: [],
      otherMentions: "",
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "locations",
  });

  const letUsChoose = form.watch("letUsChooseLocations");
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: ItineraryFormValues) => {
    setIsSubmitting(true);
    try {
      const locationsSummary = data.letUsChooseLocations
        ? "Expert Selection"
        : data.locations
            .map(
              (l) =>
                `${l.name} (${l.days} day${Number(l.days) > 1 ? "s" : ""})`,
            )
            .join(", ");

      const inclusionLabels = data.inclusions
        .map((id) => INCLUSIONS.find((i) => i.id === id)?.label ?? id)
        .join(", ");

      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: data.email,
          to: siteConfig.email,
          subject: `Bespoke Inquiry: ${data.experienceType} for ${data.fullName}`,
          text: [
            `── Traveler Profile ──`,
            `Name:          ${data.fullName}`,
            `Email:         ${data.email}`,
            `Phone:         ${data.phone || "N/A"}`,
            ``,
            `── Journey Blueprint ──`,
            `Length:        ${data.duration}`,
            `Vibe:          ${data.experienceType}`,
            `Departure:     ${data.startDate}`,
            ``,
            `── Route Plan ──`,
            `Points:        ${locationsSummary}`,
            ``,
            `── Group Logistics ──`,
            `Type:          ${data.groupType}`,
            `Headcount:     ${data.numberOfTravellers}`,
            ``,
            `── Preferred Inclusions ──`,
            `Services:      ${inclusionLabels || "Standard package"}`,
            `Lodging:       ${data.accommodationPreferences.map(accommodationLabel).join(", ")}`,
            `Dining:        ${data.foodPreferences.map(foodLabel).join(", ")}`,
            ``,
            `── Special Requests ──`,
            data.otherMentions || "None specified",
          ].join("\n"),
        }),
        cache: "no-store",
      });

      setSubmitSuccess(true);
      form.reset();
      setStep(0);
      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goNext = async () => {
    const valid = await form.trigger(
      STEP_FIELDS[step] as (keyof ItineraryFormValues)[],
    );
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goPrev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-primary py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Design Your Dream Journey
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Co-create a bespoke adventure with our experts. Tell us where you
            want to go, and we&apos;ll handle every logistics detail for a
            seamless Himalayan experience.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-0 mb-10 overflow-x-auto pb-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === step;
              const isDone = i < step;
              return (
                <div key={s.label} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => isDone && setStep(i)}
                    className={`flex flex-col items-center gap-2 px-4 transition-all ${
                      i > step
                        ? "opacity-30 cursor-default"
                        : "cursor-pointer hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border-2 ${
                        isActive
                          ? "bg-primary border-primary text-white scale-110"
                          : isDone
                            ? "bg-primary/20 border-primary text-primary"
                            : "bg-gray-50 border-gray-200 text-gray-400"
                      }`}
                    >
                      {isDone ? (
                        <LucideCheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-bold ${isActive ? "text-primary" : "text-gray-400"}`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`h-[2px] w-8 md:w-16 mb-6 shrink-0 transition-colors ${i < step ? "bg-primary" : "bg-gray-100"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {step === 0 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Adventure Fundamentals
                    </h2>
                    <p className="text-gray-500">
                      Tell us the broad strokes of your planned expedition.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold">
                          Planned Duration *
                        </FormLabel>
                        <Select
                          onValueChange={(v) => field.onChange(v as Duration)}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-200 w-full">
                              <SelectValue placeholder="How long is your journey?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {DURATION_VALUES.map((d) => (
                              <SelectItem key={d} value={d}>
                                {d}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experienceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold">
                          Travel Category *
                        </FormLabel>
                        <Select
                          onValueChange={(v) =>
                            field.onChange(v as ExperienceType)
                          }
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-200 w-full">
                              <SelectValue placeholder="What is the focus of this trip?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {EXPERIENCE_TYPE_VALUES.map((e) => (
                              <SelectItem key={e} value={e}>
                                {e}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold">
                          Preferred Start Date *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            min={today}
                            className="h-12 border-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Your Bucket List
                    </h2>
                    <p className="text-gray-500">
                      Specify your dream destinations or let us map out the best
                      route.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="letUsChooseLocations"
                    render={({ field }) => (
                      <FormItem className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              if (checked) form.clearErrors("locations");
                            }}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="text-gray-900 font-bold cursor-pointer">
                            Rely on our Expertise
                          </FormLabel>
                          <p className="text-sm text-gray-600">
                            Check this if you'd like our mountain experts to
                            propose the best itinerary based on your chosen
                            travel category and duration.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                  {!letUsChoose && (
                    <div className="space-y-4">
                      <p className="font-bold text-gray-900">
                        Must-See Locations
                      </p>
                      {fields.map((fieldItem, index) => (
                        <div
                          key={fieldItem.id}
                          className="flex items-start gap-3 p-5 border border-gray-100 rounded-xl bg-gray-50/50"
                        >
                          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="sm:col-span-2">
                              <FormField
                                control={form.control}
                                name={`locations.${index}.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-[10px] uppercase font-bold text-gray-400">
                                      Destination
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="e.g. Pokhara or Khumbu Valley"
                                        className="h-10"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div>
                              <FormField
                                control={form.control}
                                name={`locations.${index}.days`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-[10px] uppercase font-bold text-gray-400">
                                      Duration
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        type="number"
                                        min="1"
                                        placeholder="Days"
                                        className="h-10"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          {fields.length > 1 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="mt-8 text-gray-400 hover:text-red-500"
                            >
                              <LucideTrash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => append({ name: "", days: "" })}
                        className="w-full border-dashed"
                      >
                        <LucidePlus className="mr-2 w-4 h-4" /> Add Destination
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      The Travel Party
                    </h2>
                    <p className="text-gray-500">
                      Tell us who is coming along so we can suggest appropriate
                      logistics.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="groupType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold">
                          Group Dynamic *
                        </FormLabel>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                          {GROUP_OPTIONS.map((opt) => (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => field.onChange(opt.value)}
                              className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${
                                field.value === opt.value
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-gray-100 hover:border-gray-200"
                              }`}
                            >
                              <span className="text-3xl">{opt.emoji}</span>
                              <span className="text-xs font-bold uppercase">
                                {opt.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfTravellers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold">
                          Total Participants *
                        </FormLabel>
                        <Select
                          onValueChange={(v) =>
                            field.onChange(v as TravellerCount)
                          }
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 w-full">
                              <SelectValue placeholder="Select group size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {TRAVELLER_COUNT_VALUES.map((n) => (
                              <SelectItem key={n} value={n}>
                                {n} {n === "1" ? "Traveler" : "Travelers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Personal Preferences
                    </h2>
                    <p className="text-gray-500">
                      Fine-tune the comfort level and services for your trek.
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="inclusions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold block mb-4">
                          Required Services
                        </FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {INCLUSIONS.map((item) => {
                            const checked = field.value.includes(item.id);
                            return (
                              <label
                                key={item.id}
                                className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition-all ${checked ? "border-primary bg-primary/5 shadow-sm" : "border-gray-100 hover:bg-gray-50"}`}
                              >
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={() =>
                                    field.onChange(
                                      toggleArrayItem<InclusionId>(
                                        field.value,
                                        item.id,
                                      ),
                                    )
                                  }
                                />
                                <span className="text-sm font-medium text-gray-800">
                                  {item.label}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accommodationPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold flex items-center gap-2 mb-4">
                          <LucideBed className="w-5 h-5 text-amber-600" />{" "}
                          Lodging Style *
                        </FormLabel>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {ACCOMMODATION.map((opt) => {
                            const checked = field.value.includes(opt.value);
                            return (
                              <button
                                type="button"
                                key={opt.value}
                                onClick={() =>
                                  field.onChange(
                                    toggleArrayItem<AccommodationValue>(
                                      field.value,
                                      opt.value,
                                    ),
                                  )
                                }
                                className={`p-4 rounded-xl border transition-all text-xs font-bold uppercase ${checked ? "bg-primary border-primary text-white" : "border-gray-100 text-gray-600"}`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="foodPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-bold flex items-center gap-2 mb-4">
                          <LucideUtensils className="w-5 h-5 text-emerald-600" />{" "}
                          Culinary Preferences *
                        </FormLabel>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {FOOD_PREFS.map((opt) => {
                            const checked = field.value.includes(opt.value);
                            return (
                              <button
                                type="button"
                                key={opt.value}
                                onClick={() =>
                                  field.onChange(
                                    toggleArrayItem<FoodPrefValue>(
                                      field.value,
                                      opt.value,
                                    ),
                                  )
                                }
                                className={`p-4 rounded-xl border transition-all text-xs font-bold uppercase ${checked ? "bg-primary border-primary text-white" : "border-gray-100 text-gray-600"}`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Finalize & Submit
                    </h2>
                    <p className="text-gray-500">
                      Provide your contact info so we can send over your custom
                      quote.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="h-12"
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
                              placeholder="john@example.com"
                              className="h-12"
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
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 234 567 890"
                            className="h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherMentions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Requests or Notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Medical conditions, specific gear requests, or flight details..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={goPrev}
                  disabled={step === 0}
                  className="text-gray-500 px-6"
                >
                  Back
                </Button>
                {step === STEPS.length - 1 ? (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 h-12 bg-primary hover:bg-primary/90 text-white transition-all shadow-lg shadow-primary/20"
                  >
                    {isSubmitting
                      ? "Creating Itinerary..."
                      : "Request My Custom Plan"}
                    <LucideSend className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button type="button" onClick={goNext} className="px-10 h-12">
                    Next Step
                  </Button>
                )}
              </div>
            </form>
          </Form>

          {submitSuccess && (
            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 text-emerald-800 animate-in zoom-in duration-300">
              <LucideCheckCircle2 className="w-8 h-8 shrink-0" />
              <div>
                <p className="font-bold text-lg">Inquiry Received!</p>
                <p className="text-sm opacity-90">
                  Thank you for choosing us. Our travel consultants will reach
                  out within 24 hours with a personalized draft of your
                  Himalayan journey.
                </p>
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Why a Custom Itinerary?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <LucideClock className="w-3 h-3 text-primary" />
                </div>
                <span>
                  <strong>Your Pace:</strong> Skip the rush and stay longer
                  where you find peace.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <LucideMapPin className="w-3 h-3 text-primary" />
                </div>
                <span>
                  <strong>Unique Routes:</strong> Access trails that standard
                  group tours often ignore.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <LucidePhone className="w-3 h-3 text-primary" />
                </div>
                <span>
                  <strong>Expert Support:</strong> 24/7 on-ground assistance
                  throughout your journey.
                </span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-primary rounded-2xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Need Instant Help?</h3>
              <p className="text-white/80 text-sm mb-6">
                Chat with our destination experts via WhatsApp for immediate
                advice.
              </p>
              <Link
                href={siteConfig.whatsAppUrl}
                target="_blank"
                aria-label="Chat with expert"
                className="p-4 rounded-full bg-secondary text-primary rounded-none"
              >
                Chat with Experts
              </Link>
            </div>
            <LucideCompass className="absolute -bottom-6 -right-6 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </aside>
      </section>
    </main>
  );
}
