"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addJoke } from "@/lib/actions";
import { Plus } from "lucide-react";
export const JokeForm = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <form
        action={addJoke}
        className="p-4 flex justify-center text-black gap-2 items-center"
      >
        <Input placeholder="Type your joke here...." name="joke" />
        <Button
          variant="outline"
          size={"icon"}
          className="bg-amber-400 outline-0 border-0 hover:bg-amber-500 cursor-pointer"
          type="submit"
        >
          <Plus />
        </Button>
      </form>
    </div>
  );
};
