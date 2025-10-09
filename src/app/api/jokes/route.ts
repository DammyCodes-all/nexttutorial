import jokes, { JokeType } from "@/lib/joke-data";
import type { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  return Response.json(jokes);
}
export const POST = async (req: NextRequest) => {
  const joke: { text: string } = await req.json();
  const newJoke: JokeType = {
    id: jokes.length + 1,
    joke: joke.text,
  };
  jokes.push(newJoke);
  return new Response(JSON.stringify(newJoke), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
