import { ImageResponse } from "next/og";
import { firm } from "@/content/site";
import { h1 } from "@/content/lpo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Typographic-only social card (no stock photography), per
// lpo-international-page.md §B.3.
export default function Image() {
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
          <div style={{ display: "flex", fontSize: 56, lineHeight: 1.15, maxWidth: 980 }}>
            {h1}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a8abb2" }}>
            India-based legal support for overseas law firms and in-house teams
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
