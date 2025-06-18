import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { fetchProductById } from "@/lib/api";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  if (!id) {
    return new Response("No id found in the url", { status: 404 });
  }
  const product = await fetchProductById(id);

  if (!product) {
    return new Response("Not Found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width="300"
          height="300"
          style={{ objectFit: "contain" }}
        />
        <div style={{ fontSize: 32, marginTop: 20 }}>{product.title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
