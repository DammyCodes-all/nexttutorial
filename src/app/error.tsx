"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            We hit an unexpected problem. Try again or head back home.
          </p>
          <div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">
            {error.message}
            {error.digest ? (
              <p className="mt-2 opacity-70">Digest: {error.digest}</p>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={() => reset()} className="flex-1">
            Retry
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => (window.location.href = "/")}
          >
            Go home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
