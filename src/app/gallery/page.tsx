import Image from "next/image";
import { images } from "./images";
import Link from "next/link";
export default async function GalleryPage() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-full mt-10">
        <p className="m-auto font-semibold text-lg">GalleryPage</p>
        <div className="grid grid-cols-4 gap-4 grid-rows-4">
          {images.map((image) => (
            <Link key={image.id} href={`/gallery/${image.id}`}>
              <Image
                src={`/${image.link}`}
                alt="Gallery Image"
                // className="w-full object-cover aspect-square"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
