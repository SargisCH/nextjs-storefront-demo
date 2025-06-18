import { ImageResponse } from "@vercel/og";
import { fetchProductById } from "@/lib/api";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id: productId } = await params;
  const product = await fetchProductById(productId);
  if (!product) return new Response("Not Found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: "white",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={product.image} width="200" height="200" alt="product-image" />
        <div style={{ marginTop: 20 }}>{product.title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
