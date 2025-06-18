import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
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
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  const product = await fetchProductById(productId);
  if (!product) return notFound();

  return (
    <main className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-96 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            priority
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between md:w-1/2">
          <div>
            <h1 className="text-3xl font-extrabold mb-4">{product.title}</h1>
            <p className="text-indigo-600 text-2xl font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            <p className="uppercase tracking-wide text-sm text-gray-500 font-medium">
              {product.category}
            </p>
          </div>

          <Link
            href="/"
            className="mt-6 inline-block text-indigo-600 font-semibold hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </main>
  );
}
