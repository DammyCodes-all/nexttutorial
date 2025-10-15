"use client";

import type { JokeType } from "@/lib/joke-data";
import { Joke } from "./joke";
import { useOptimistic } from "react";
import { deleteJoke } from "@/lib/actions";
import { startTransition } from "react";

export const JokeWrapper = ({ jokes }: { jokes: JokeType[] }) => {
  const [optimisticState, setOptimisticState] = useOptimistic<
    JokeType[],
    string
  >(jokes, (state, id) => {
    return jokes.filter((jokes) => jokes.id.toString() !== id);
  });
  const removeJoke = async (id: string, formData: FormData) => {
    startTransition(() => {
      setOptimisticState(id);
    });
    await deleteJoke(id);
  };
  return (
    <>
      <div className="w-fit border p-4 rounded bg-gray-100 flex items-start justify-center flex-col gap-2">
        {optimisticState.map((j) => (
          <Joke key={j.id.toString()} joke={j} deleteFn={removeJoke} />
        ))}
      </div>
    </>
  );
};
