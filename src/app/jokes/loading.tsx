import { Skeleton } from "@/components/ui/skeleton";

export default function JokesLoading() {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
      <div className="w-full max-w-xl space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
        <Skeleton className="h-6 w-32" />
        <div className="grid gap-3">
          <Skeleton className="h-10 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 flex-1" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-border bg-card p-5 shadow-sm space-y-3"
          >
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}
