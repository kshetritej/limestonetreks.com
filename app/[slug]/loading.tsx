import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const elementsCount = [1, 2, 3, 4, 5, 6];
  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-6 gap-4">
          {elementsCount.map((el) => (
            <Skeleton key={el} className="h-8 w-24" />
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-144 rounded-xl" />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-12">
          <Skeleton className="h-100 col-span-3" />
          <Skeleton className="h-72 col-span-1" />
        </div>
      </div>
    </main>
  );
}
