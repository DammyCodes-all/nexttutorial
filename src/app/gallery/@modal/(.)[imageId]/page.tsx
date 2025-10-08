import Image from "next/image";
import { images } from "../../images";

export default async ({ params }: { params: Promise<{ imageId: string }> }) => {
  const { imageId } = await params;
  const image = images.find((image) => image.id === Number(imageId));
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      Intercepted
      <Image src={`/${image?.link}`} alt="image" width={300} height={300} />
      <p>{`Image ${imageId}`}</p>
    </div>
  );
};
