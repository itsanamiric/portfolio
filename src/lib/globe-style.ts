import type { StyleSpecification } from "maplibre-gl";

/**
 * Closest MapCN / MapLibre match to Ana’s iridescent holographic sphere:
 * electric cyan–aqua oceans, hot magenta / fuchsia / violet land, silver
 * specular marks, near-black space, and a bright white atmospheric rim.
 * Geographic fills cannot paint oil-slick swirls — contrast + glow do the work.
 */
export const NEON = {
  space: "#050508",
  water: "#00FFF2",
  waterCyan: "#9EFFF6",
  land: "#FF0090",
  landHot: "#FF3AD8",
  landLine: "#5B1FA8",
  violet: "#7C3AED",
  magenta: "#FF2EC8",
  magentaSoft: "#FF7AE0",
  silver: "#F7F8FC",
  silverSoft: "#EEF2F7",
  glow: "#FFFFFF",
} as const;

export const neonGlobeStyle: StyleSpecification = {
  version: 8,
  projection: { type: "globe" },
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
        "fill-outline-color": NEON.violet,
      },
    },
    {
      id: "land-outline",
      type: "line",
      source: "land",
      paint: {
        "line-color": NEON.landLine,
        "line-width": 0.7,
        "line-opacity": 0.75,
      },
    },
    {
      id: "land-sheen",
      type: "line",
      source: "land",
      paint: {
        "line-color": NEON.landHot,
        "line-width": 0.35,
        "line-opacity": 0.45,
        "line-blur": 0.6,
      },
    },
  ],
  sky: {
    "sky-color": NEON.space,
    "horizon-color": NEON.waterCyan,
    "fog-color": NEON.water,
    "fog-ground-blend": 0.04,
    "horizon-fog-blend": 0.12,
    "sky-horizon-blend": 0.16,
    "atmosphere-blend": 0.06,
  },
};
