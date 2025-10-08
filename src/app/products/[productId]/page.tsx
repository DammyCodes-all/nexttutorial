import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product iPhone ${productId}`,
    description: `The description for iPhone ${productId}`,
  };
};

export default async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <p>Product iPhone {Number(productId)}</p>;
};
