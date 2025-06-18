import { fetchAllProducts } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

export default async function HomePage() {
  const products = await fetchAllProducts();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
