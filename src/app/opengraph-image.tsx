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
          background: "#f4eee4",
          color: "#2c241c",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7a5347",
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: -3,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#5c4e42",
            }}
          >
            {site.oneLiner}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
