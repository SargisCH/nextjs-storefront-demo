import { IProduct } from "@/types/product";

const BASE_URL = process.env.FAKE_STORE_API;
export async function fetchAllProducts(): Promise<Array<IProduct>> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductById(id: string): Promise<IProduct | null> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) return null;
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
