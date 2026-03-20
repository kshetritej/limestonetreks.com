import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function AboutSection() {
  return (
    <div
      className="flex flex-col gap-12 md:px-4 min-h-120 p-2 sm:p-8 justify-center items-center"
      style={{ borderRadius: "12px" }}
    >
      <Badge className="text-center uppercase font-bold px-4 text-lg">
        Meet your lead guide
      </Badge>
      <div className="overflow-hidden object-cover  flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="space-y-4 flex flex-col items-start">
          <div className="uppercase text-primary">
            {" "}
            A Lifetime Among the Peaks
          </div>
          <p className="text-foreground max-w-4xl text-lg md:text-3xl">
            For Yam, the Himalayas aren’t just a destination—they’re his
            heritage. A lifelong guide, he brings deep local insight,
            prioritizes safety, and puts guests first, turning every trek into a
            meaningful, unforgettable experience.
          </p>
          <Link
            href="/about"
            className="flex gap-1 items-center cursor-pointer mt-4"
          >
            <Button variant={"default"}>
              Know More <ChevronRight />
            </Button>
          </Link>
        </div>
        <Image
          src={"/bidur-poudel.webp"}
          alt="Bidur Poudel"
          width={1280}
          height={720}
          className="object-cover w-3xl max-h-80 object-center"
          style={{ borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}
