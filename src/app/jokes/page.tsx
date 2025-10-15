import { JokeForm } from "./_components/jokeForm";
import type { JokeType } from "@/lib/joke-data";
import { getJokes } from "@/lib/actions";
import { Metadata } from "next";
import { JokeWrapper } from "./_components/joke-wrapper";

// export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Jokes",
  description:
    "A page where you can add jokes, view previous jokes implemented via Next.js route handlers and server functions",
};
// export const dynamic = "force-dynamic";
export default async function JokesPage() {
  const jokes: JokeType[] = await getJokes();
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <JokeForm />
      <JokeWrapper jokes={jokes} />
    </div>
  );
}
