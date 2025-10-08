import Link from "next/link";
import { roboto } from "@/lib/fonts";
export const NavBar = () => {
  return (
    <>
      <div className="w-full flex justify-center pt-4">
        <div
          className={`flex w-4/10 text-black justify-center items-center h-10  bg-white rounded-sm shadow-md py-3 px-6 gap-3 ${roboto.className}`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/dashboard"}>DashBoard</Link>
          <Link href={"/gallery"}>Gallery</Link>
        </div>
      </div>
    </>
  );
};
