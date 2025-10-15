import jokes, { JokeType } from "@/lib/joke-data";
import type { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (id) {
    const joke = jokes.find((joke) => joke.id.toString() === id.toString());
    if (!joke) {
      return new Response(
        JSON.stringify({
          message: `Joke with id=${id} not found`,
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return Response.json(joke);
  }

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
