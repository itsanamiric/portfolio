import type { StyleSpecification } from "maplibre-gl";

export const NEON = {
  space: "#0a0a0c",
  water: "#1a6bff",
  waterCyan: "#00c8ff",
  land: "#ff2eb8",
  landLine: "#7a1fb8",
  magenta: "#ff4dcc",
  magentaSoft: "#ff9ad6",
  silver: "#f5f7fa",
  silverSoft: "#e8eef5",
} as const;

/** Hot-pink land on cobalt / neon-cyan water. Space around the globe stays near-black. */
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
        "line-width": 0.6,
        "line-opacity": 0.55,
      },
    },
  ],
  sky: {
    "sky-color": NEON.space,
    "horizon-color": "#041028",
    "fog-color": NEON.waterCyan,
    "fog-ground-blend": 0.2,
    "atmosphere-blend": 0.16,
  },
};
