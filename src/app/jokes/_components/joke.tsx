"use client";

import { Button } from "@/components/ui/button";
import { urbanist } from "@/lib/fonts";
import { ChevronRight, Edit, Trash } from "lucide-react";
import type { JokeType } from "@/lib/joke-data";
import { deleteJoke } from "@/lib/actions";
type Jokeprops = {
  joke: JokeType;
  deleteFn: (id: string, formData: FormData) => void;
};
export const Joke = ({ joke, deleteFn }: Jokeprops) => {
  const formAction = deleteFn.bind(null, joke.id.toString());
  return (
    <div
      className={`${urbanist.className} antialiased flex justify-between w-full gap-1 items-center`}
    >
      <div className="flex gap-2">
        <ChevronRight size={16} />
        {joke.joke}
      </div>
      <div className="flex">
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
          <Edit />
        </Button>
        <form action={formAction}>
          <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
            <Trash />
          </Button>
        </form>
      </div>
    </div>
  );
};
