"use client";

import {
  Map,
  MapArc,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/map";
import { places, site } from "@/content/site";
import { NEON, neonGlobeStyle } from "@/lib/globe-style";

const belgrade: [number, number] = [places.belgrade.lon, places.belgrade.lat];
const malaga: [number, number] = [places.malaga.lon, places.malaga.lat];

const arc = [
  {
    id: "belgrade-malaga",
    from: belgrade,
    to: malaga,
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
            background: NEON.magenta,
            boxShadow: `0 0 10px ${NEON.magenta}`,
          }}
        />
        <MarkerLabel
          position={position}
          className="font-mono text-[10px] tracking-[0.18em] text-neon-magenta uppercase"
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
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 48%, rgba(34,230,255,0.08), transparent 58%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center px-6 pt-20 pb-16 sm:px-10 lg:grid lg:grid-cols-[1fr_minmax(18rem,40vw)_1fr] lg:items-center lg:gap-6 lg:pt-8">
        <div className="order-1 max-w-md lg:order-none">
          <p className="font-script text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.85] text-white">
            Creative
          </p>
          <h1 className="mt-2 font-sans text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.9] font-bold tracking-[-0.04em] text-white uppercase">
            GEO <span className="text-neon-magenta">×</span> AI.
          </h1>
        </div>

        <div className="order-3 my-10 flex justify-center lg:order-none lg:my-0">
          <div className="relative aspect-square w-[min(86vw,28rem)] lg:w-full">
            <div
              className="pointer-events-none absolute inset-[-14%] rounded-full"
              style={{
                background: `radial-gradient(circle, ${NEON.water}33 0%, ${NEON.magenta}14 38%, transparent 68%)`,
                filter: "blur(28px)",
              }}
              aria-hidden="true"
            />
            <div className="relative h-full w-full">
              <Map
                theme="dark"
                styles={{ dark: neonGlobeStyle, light: neonGlobeStyle }}
                projection={{ type: "globe" }}
                center={[8, 41]}
                zoom={1.45}
                minZoom={0.6}
                maxZoom={4}
                pitch={0}
                bearing={0}
                scrollZoom={false}
                attributionControl={{ compact: true }}
                className="h-full w-full bg-transparent [&_.maplibregl-ctrl-attrib]:opacity-40"
              >
                <MapArc
                  data={arc}
                  curvature={0.26}
                  interactive={false}
                  paint={{
                    "line-color": NEON.magenta,
                    "line-width": 2.25,
                    "line-opacity": 0.92,
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
              </Map>
            </div>
          </div>
        </div>

        <div className="order-2 mt-6 text-left lg:order-none lg:mt-0 lg:text-right">
          <p className="font-sans text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[0.95] font-bold tracking-[-0.03em] text-white uppercase">
            {site.name}
          </p>
          <p className="mt-4 max-w-xs font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase lg:ml-auto">
            {site.oneLiner}
          </p>
        </div>
      </div>
    </section>
  );
}
