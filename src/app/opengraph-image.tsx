import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.oneLiner}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22e6ff",
          }}
        >
          {site.route}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: -3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            GEO × AI.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: "#ff4dcc",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
