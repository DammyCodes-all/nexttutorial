import { urbanist } from "@/lib/fonts";
import { ChevronRight } from "lucide-react";
export const Joke = ({ joke }: { joke: string }) => {
  return (
    <div
      className={`${urbanist.className} antialiased flex justify-center gap-1 items-center`}
    >
      <ChevronRight size={16} />
      {joke}
    </div>
  );
};
