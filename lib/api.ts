const BASE_URL = process.env.FAKE_STORE_API;
export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductById(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}
