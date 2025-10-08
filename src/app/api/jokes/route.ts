import jokes from "@/lib/joke-data";
export async function GET() {
  console.log(jokes);
  return Response.json(jokes);
}
