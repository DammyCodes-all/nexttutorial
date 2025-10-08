import { JokeForm } from "./_components/jokeForm";
import { Joke } from "./_components/joke";
import type { JokeType } from "@/lib/joke-data";
export const dynamic = "force-dynamic";

export default async function JokesPage() {
  const res = await fetch("http://localhost:3000/api/jokes", {
    cache: "no-store",
    next: { tags: ["jokes"] },
  });
  const jokes: JokeType[] = await res.json();
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
