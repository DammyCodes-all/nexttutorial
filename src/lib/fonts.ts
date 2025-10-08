import { Agbalumo, Roboto } from "next/font/google";

export const agbalumo = Agbalumo({
  subsets: ["latin", "ethiopic"],
  weight: ["400"],
});
export const roboto = Roboto({
  subsets: ["cyrillic", "greek", "math"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
