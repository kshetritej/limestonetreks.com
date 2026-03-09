"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function CTACard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <section className="w-full rounded-lg bg-primary text-white! p-6 md:p-8 mb-4">
      <div className="space-y-4 p-8 flex flex-col items-center  text-center justify-between max-w-6xl mx-auto">
        <div className="space-y-1 flex flex-col gap-4">
          <p className="text-sm ">/Let&apos;s Talk</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Stop Daydreaming, Start Planning
          </h2>
        </div>
        <Link href={"/contact"}>
          <Button
            type="button"
            size="lg"
            variant={"outline"}
            className="bg-transparent cursor-pointer"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}

// const onSubmit = async (data: { email: string }) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: data.email }),
//     },
//   );

//   if (res.ok) {
//     toast.success("Successfully subscribed to newsletter!");
//   } else {
//     const resData = await res.json();
//     toast.error(resData.message || "Failed to subscribe to newsletter.");
//   }
// };
