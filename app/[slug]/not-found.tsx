import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-4 max-w-3xl text-center container mx-auto">
      <h1 className="font-bold text-xl">Page not found</h1>
      <p>
        There was an error loading this page. Please verify that you are using a
        correct URL or contact one of the admins if the issue persists.
      </p>
      <Link href={"/"}>
        <Button>Return to home</Button>
      </Link>
    </div>
  );
}
