"use server";
import { revalidatePath } from "next/cache";
import jokes from "./joke-data";
import { JokeType } from "./joke-data";

export const addJoke = async (formData: FormData) => {
  const joke = formData.get("joke")?.toString();
  if (!joke?.trim()) return;
  const newJoke: JokeType = { id: Date.now(), joke };
  jokes.push(newJoke);
  revalidatePath("/jokes");
};

export const getJokes = async () => {
  return jokes;
};
