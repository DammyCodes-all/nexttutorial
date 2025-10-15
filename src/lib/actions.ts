"use server";
import { revalidatePath } from "next/cache";
import jokes from "./joke-data";
import { JokeType } from "./joke-data";

type AddJokeError = {
  message: string;
};
export const addJoke = async (
  _: AddJokeError,
  formData: FormData
): Promise<AddJokeError> => {
  const joke = formData.get("joke")?.toString();
  try {
    if (!joke?.trim()) throw new Error("Joke Field Empty");
    const newJoke: JokeType = { id: Date.now(), joke };
    jokes.push(newJoke);
    revalidatePath("/jokes");
    return { message: "" };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "An error occured",
      };
    }
  }
};

export const deleteJoke = async (id: string) => {
  const jokeIndex = jokes.findIndex(
    (jokes) => jokes.id.toString() === id.toString()
  );
  // throw new Error("Test");
  jokes.splice(jokeIndex, 1);
  revalidatePath("/jokes");
};
export const getJokes = async () => {
  return jokes;
};
