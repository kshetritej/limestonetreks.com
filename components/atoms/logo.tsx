import Link from "next/link";
import Image from "next/image";

export default function LogoComponent({ dark }: Readonly<{ dark?: boolean }>) {
  return (
    <>
      <Link
        href="/"
        className="flex items-center font-bold gap-1 text-sm md:text-2xl"
      >
        <Image
          src={"/limestone-treks-logo-transparent.png"}
          alt="Limestone Treks Logo"
          height={200}
          width={200}
        />
        {/*<LucideStone />
        Limestone Treks*/}
      </Link>
    </>
  );
}
