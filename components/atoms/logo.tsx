import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <>
      <Link href="/" className="flex items-center">
        <div
          className={cn(
            dark ? "border-primary" : "border-accent",
            "w-8 h-8 rounded-full border-2 flex items-center justify-center",
          )}
        >
          <div
            className={cn(
              dark ? "bg-primary" : "bg-accent",
              "w-4 h-4 rounded-full",
            )}
          />
        </div>
        <div className="font-bold text-xl ml-1">
          bettertreks<span className="text-orange-700">.</span>com
        </div>
      </Link>
    </>
  );
}
