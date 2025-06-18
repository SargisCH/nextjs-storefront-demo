import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id: productId } = await params;
  const product = await fetchProductById(productId);
  if (!product) return {};
  return {
    title: product.title,
    openGraph: {
      title: product.title,
      images: [`/api/og/${productId}`],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: productId } = await params;
  const product = await fetchProductById(productId);
  if (!product) return notFound();

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="object-contain w-full h-96 mx-auto"
      />
      <h1 className="text-2xl font-semibold mt-4">{product.title}</h1>
      <p className="text-muted-foreground mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-4">${product.price}</p>
    </main>
  );
}
