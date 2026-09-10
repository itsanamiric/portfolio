import type { StyleSpecification } from "maplibre-gl";

/**
 * Closest MapCN / MapLibre match to Ana’s iridescent holographic sphere:
 * electric cyan–aqua oceans, hot magenta / fuchsia / violet land, silver
 * specular marks, near-black space, and a bright white atmospheric rim.
 * Geographic fills cannot paint oil-slick swirls — contrast + glow do the work.
 */
export const NEON = {
  space: "#050508",
  water: "#00C4F5",
  waterCyan: "#3EFFF6",
  land: "#E4008C",
  landHot: "#FF2AD4",
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
  light: {
    anchor: "viewport",
    color: NEON.glow,
    intensity: 0.38,
    position: [1.35, 210, 28],
  },
  sky: {
    "sky-color": NEON.space,
    "horizon-color": NEON.glow,
    "fog-color": "#F4F8FF",
    "fog-ground-blend": 0.12,
    "horizon-fog-blend": 0.35,
    "sky-horizon-blend": 0.42,
    "atmosphere-blend": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      0.82,
      2.2,
      0.7,
      5,
      0.2,
    ],
  },
};
