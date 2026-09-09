import type { StyleSpecification } from "maplibre-gl";

export const NEON = {
  space: "#0a0a0c",
  water: "#00e5ff",
  land: "#ffffff",
  landLine: "#ff4dcc",
  magenta: "#ff4dcc",
  magentaSoft: "#ff9ad6",
} as const;

/** White land on neon-cyan water. Space around the globe stays near-black. */
export const neonGlobeStyle: StyleSpecification = {
  version: 8,
  sources: {
    land: {
      type: "geojson",
      data: "/geo/ne_110m_land.geojson",
    },
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": NEON.water },
    },
    {
      id: "land",
      type: "fill",
      source: "land",
      paint: {
        "fill-color": NEON.land,
        "fill-opacity": 1,
      },
    },
    {
      id: "land-outline",
      type: "line",
      source: "land",
      paint: {
        "line-color": NEON.landLine,
        "line-width": 0.55,
        "line-opacity": 0.42,
      },
    },
  ],
  sky: {
    "sky-color": NEON.space,
    "horizon-color": "#041018",
    "fog-color": NEON.water,
    "fog-ground-blend": 0.18,
    "atmosphere-blend": 0.12,
  },
};
