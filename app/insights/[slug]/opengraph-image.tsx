import { ImageResponse } from "next/og";
import { firm } from "@/content/site";
import { getAllInsights, getInsight } from "@/lib/insights";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllInsights().map((post) => ({ slug: post.slug }));
}

// Typographic-only social card (no stock photography), consistent with
// app/lpo/opengraph-image.tsx.
export default async function Image({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getInsight(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#14161a",
          color: "#faf9f6",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#9fb0cc" }}>
          {firm.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ width: 80, height: 2, backgroundColor: "#9fb0cc", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 52, lineHeight: 1.15, maxWidth: 1000 }}>
            {post?.title ?? "Insights"}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a8abb2" }}>
            {post ? `Legal Analysis & Regulatory Commentary · ${post.category}` : firm.name}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
