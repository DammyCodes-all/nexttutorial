import { JokeForm } from "./_components/jokeForm";
import { Joke } from "./_components/joke";
import type { JokeType } from "@/lib/joke-data";
import { getJokes } from "@/lib/actions";
import { Metadata } from "next";

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
      <div className="w-1/2 border p-4 rounded bg-gray-100 flex items-start justify-center flex-col gap-2">
        {jokes.map((j) => (
          <Joke key={j.id.toString()} joke={j.joke} />
        ))}
      </div>
    </div>
  );
}
