import Image from "next/image";
import { images } from "../images";

export const generateStaticParams = async () => {
  return images
    .map((img) => ({ imageId: img.id.toString() }))
    .filter((imgID) => imgID.imageId !== "6");
};

export default async function DynamicImage({
  params,
}: {
  params: Promise<{ imageId: string }>;
}) {
  const { imageId } = await params;
  const image = images.find((image) => image.id === Number(imageId));
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <Image src={`/${image?.link}`} alt="image" width={300} height={300} />
      <p>{`Image ${imageId}`}</p>
    </div>
  );
}
