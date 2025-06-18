import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="hover:shadow-lg transition">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain w-full h-52 p-4"
        />
        <CardContent>
          <CardTitle className="text-base line-clamp-2">
            {product.title}
          </CardTitle>
          <p className="text-sm mt-2">${product.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
