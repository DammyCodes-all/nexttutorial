import jokes from "@/lib/joke-data";
import type { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string | number | Date }> }
) => {
  const { id } = await params;
  const joke = jokes.find((joke) => joke.id.toString() === id.toString());
  if (!joke) {
    return new Response("Joke not found", { status: 404 });
  }
  return Response.json(joke);
};
export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string | number | Date }> }
) => {
  const { id } = await params;
  const { text }: { text: string } = await req.json();
  const jokeIndex = jokes.findIndex(
    (joke) => joke.id.toString() === id.toString()
  );
  if (!jokeIndex) {
    return new Response("Joke not found", { status: 404 });
  }
  jokes[jokeIndex].joke = text;
  return new Response(JSON.stringify(jokes[jokeIndex]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string | number | Date }> }
) => {
  const { id } = await params;
  const jokeIndex = jokes.findIndex(
    (joke) => joke.id.toString() === id.toString()
  );
  const deletedJoke = jokes[jokeIndex];
  jokes.splice(jokeIndex, 1);
  return new Response(
    JSON.stringify({
      message: `Deleted joke ${deletedJoke.id ?? ""}`,
      deletedJoke,
    }),
    { status: 200 }
  );
};
