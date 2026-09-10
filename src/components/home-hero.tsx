"use client";

import { useState } from "react";

import {
  Map,
  MapArc,
  MapMarker,
  MapPopup,
  MarkerContent,
  MarkerLabel,
  type MapArcEvent,
} from "@/components/ui/map";
import { places, site } from "@/content/site";
import { NEON, neonGlobeStyle } from "@/lib/globe-style";

const belgrade: [number, number] = [places.belgrade.lon, places.belgrade.lat];
const malaga: [number, number] = [places.malaga.lon, places.malaga.lat];

type RouteArc = {
  id: string;
  from: [number, number];
  to: [number, number];
  origin: string;
  destination: string;
};

const arc: RouteArc[] = [
  {
    id: "belgrade-malaga",
    from: belgrade,
    to: malaga,
    origin: places.belgrade.name,
    destination: places.malaga.name,
  },
];

function PlaceMarker({
  longitude,
  latitude,
  name,
  note,
  position,
}: {
  longitude: number;
  latitude: number;
  name: string;
  note: string;
  position: "top" | "bottom";
}) {
  return (
    <MapMarker longitude={longitude} latitude={latitude}>
      <MarkerContent>
        <div
          className="size-2.5 rounded-full"
          style={{
            background: NEON.silver,
            boxShadow: `0 0 10px ${NEON.glow}, 0 0 18px ${NEON.silverSoft}`,
          }}
        />
        <MarkerLabel
          position={position}
          className="font-mono text-[11px] tracking-[0.18em] text-white uppercase"
        >
          {name}
          <span className="mx-1 opacity-50">·</span>
          {note}
        </MarkerLabel>
      </MarkerContent>
    </MapMarker>
  );
}

export function HomeHero() {
  const [hover, setHover] = useState<{
    longitude: number;
    latitude: number;
    origin: string;
    destination: string;
  } | null>(null);

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 48% at 50% 48%, rgba(255,255,255,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[96rem] flex-1 flex-col justify-center px-5 pt-20 pb-16 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(15rem,28vw)_minmax(0,1.15fr)] lg:items-center lg:gap-5 lg:pt-6">
        <div className="order-1 relative z-20 min-w-0 lg:order-none">
          <p className="pointer-events-none w-max font-script text-[clamp(4.6rem,13.5vw,13rem)] leading-[0.78] whitespace-nowrap text-white lg:-translate-x-[min(7.5rem,max(1.75rem,calc((100vw-96rem)/2+3.25rem)))]">
            Creative
          </p>
          <h1 className="mt-1 font-sans text-[clamp(2.35rem,7.6vw,6.4rem)] leading-[0.85] font-bold tracking-[-0.045em] text-white uppercase">
            GEO <span className="text-neon-magenta">×</span> AI.
          </h1>
        </div>

        <div className="order-3 my-10 flex justify-center lg:order-none lg:my-0">
          <div
            className="relative aspect-square w-[min(86vw,28rem)] lg:w-full"
            style={{ aspectRatio: "1 / 1" }}
          >
            <div
              className="pointer-events-none absolute inset-[-30%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 34%, transparent 70%)",
                filter: "blur(28px)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                boxShadow: [
                  "0 0 10px 3px rgba(255,255,255,0.95)",
                  "0 0 24px 10px rgba(255,255,255,0.7)",
                  "0 0 48px 20px rgba(255,255,255,0.4)",
                  "0 0 90px 36px rgba(255,255,255,0.2)",
                  "0 0 140px 56px rgba(255,255,255,0.1)",
                ].join(", "),
              }}
              aria-hidden="true"
            />
            <div className="globe-stage relative z-10 h-full w-full overflow-hidden rounded-full isolate [transform:translateZ(0)]">
              <Map
                theme="dark"
                styles={{ dark: neonGlobeStyle, light: neonGlobeStyle }}
                projection={{ type: "globe" }}
                center={[8, 38]}
                zoom={1.64}
                minZoom={0.4}
                maxZoom={6}
                attributionControl={false}
                className="h-full w-full cursor-grab bg-transparent active:cursor-grabbing [&_.maplibregl-canvas]:cursor-grab"
              >
                <MapArc
                  data={arc}
                  curvature={0.26}
                  interactive
                  paint={{
                    "line-color": NEON.silver,
                    "line-width": 2.25,
                    "line-opacity": 0.92,
                  }}
                  hoverPaint={{
                    "line-color": NEON.silverSoft,
                    "line-width": 3.75,
                    "line-opacity": 1,
                  }}
                  onHover={(event: MapArcEvent<RouteArc> | null) => {
                    if (!event) {
                      setHover(null);
                      return;
                    }
                    setHover({
                      longitude: event.longitude,
                      latitude: event.latitude,
                      origin: event.arc.origin,
                      destination: event.arc.destination,
                    });
                  }}
                />
                <PlaceMarker
                  longitude={places.belgrade.lon}
                  latitude={places.belgrade.lat}
                  name={places.belgrade.name}
                  note={places.belgrade.note}
                  position="top"
                />
                <PlaceMarker
                  longitude={places.malaga.lon}
                  latitude={places.malaga.lat}
                  name={places.malaga.name}
                  note={places.malaga.note}
                  position="bottom"
                />
                {hover ? (
                  <MapPopup
                    longitude={hover.longitude}
                    latitude={hover.latitude}
                    offset={12}
                    closeOnClick={false}
                    className="p-0"
                  >
                    <div className="bg-background/80 rounded-sm px-2.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-white uppercase backdrop-blur">
                      {hover.origin}
                      <span className="mx-1.5 opacity-60">→</span>
                      {hover.destination}
                    </div>
                  </MapPopup>
                ) : null}
              </Map>
              <div
                className="pointer-events-none absolute inset-0 z-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse 40% 32% at 32% 22%, rgba(255,255,255,0.16) 0%, transparent 55%)",
                }}
                aria-hidden="true"
              />
              <div
                className="globe-corner-mask pointer-events-none absolute inset-0 z-30"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="order-2 mt-5 min-w-0 text-left lg:order-none lg:mt-0 lg:text-right">
          <p className="font-sans text-[clamp(2.2rem,6.8vw,5.5rem)] leading-[0.88] font-bold tracking-[-0.035em] text-white uppercase">
            {site.name}
          </p>
          <p className="mt-4 max-w-[18rem] font-mono text-[clamp(0.8rem,1.35vw,1.35rem)] leading-snug tracking-[0.14em] text-muted-foreground uppercase sm:max-w-sm lg:ml-auto">
            {site.oneLiner}
          </p>
        </div>
      </div>
    </section>
  );
}
