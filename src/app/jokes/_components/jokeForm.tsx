"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addJoke } from "@/lib/actions";
import { Plus } from "lucide-react";
import { useActionState } from "react";

type AddJokeError = {
  message: string;
};
const initialState: AddJokeError = {
  message: "",
};
export const JokeForm = () => {
  const [state, formAction, isPending] = useActionState(addJoke, initialState);
  return (
    <div className="w-full flex justify-center items-center h-full">
      <form
        action={formAction}
        className="p-4 flex justify-center text-black gap-2 items-center"
      >
        <div className="flex flex-col justify-center">
          <Input placeholder="Type your joke here...." name="joke" />
          {state.message && (
            <p className="text-red-400 text-xs text-center">
              Error : {state.message}
            </p>
          )}
        </div>

        <Button
          variant="outline"
          size={"icon"}
          className="bg-amber-400 outline-0 border-0 hover:bg-amber-500 cursor-pointer disabled:bg-gray-400"
          type="submit"
          disabled={isPending}
        >
          <Plus />
        </Button>
      </form>
    </div>
  );
};
