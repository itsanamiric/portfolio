import { places } from "@/content/site";

const WIDTH = 420;
const HEIGHT = 168;
const PAD = { top: 30, right: 36, bottom: 38, left: 36 };
const BOUNDS = { lonMin: -10, lonMax: 26, latMin: 33.8, latMax: 48.6 };

function project(lon: number, lat: number) {
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const x =
    PAD.left + ((lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin)) * innerW;
  const y =
    PAD.top + ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * innerH;

  return { x, y };
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export function RouteMap() {
  const west = project(places.malaga.lon, places.malaga.lat);
  const east = project(places.belgrade.lon, places.belgrade.lat);
  const control = {
    x: (west.x + east.x) / 2,
    y: Math.min(west.y, east.y) - 36,
  };

  const arc = `M ${round(west.x)} ${round(west.y)} Q ${round(control.x)} ${round(control.y)} ${round(east.x)} ${round(east.y)}`;

  return (
    <figure className="mt-10 max-w-md">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full overflow-visible"
        aria-hidden="true"
      >
        <path
          d={arc}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.1"
        />
        <path
          d={arc}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        <Point
          x={west.x}
          y={west.y}
          name={places.malaga.name}
          note={places.malaga.note}
          align="start"
        />
        <Point
          x={east.x}
          y={east.y}
          name={places.belgrade.name}
          note={places.belgrade.note}
          align="end"
        />
      </svg>
      <figcaption className="sr-only">
        A quiet route from Belgrade, homeplace, to Málaga, where Ana lives now.
      </figcaption>
    </figure>
  );
}

function Point({
  x,
  y,
  name,
  note,
  align,
}: {
  x: number;
  y: number;
  name: string;
  note: string;
  align: "start" | "end";
}) {
  const labelX = align === "start" ? x - 1 : x + 1;
  const nameY = align === "start" ? y + 20 : y - 16;
  const noteY = align === "start" ? y + 32 : y - 28;
  const anchor = align === "start" ? "start" : "end";

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="7"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <circle cx={x} cy={y} r="2.4" fill="var(--accent)" />
      <text
        x={labelX}
        y={nameY}
        textAnchor={anchor}
        className="fill-foreground font-serif"
        fontSize="14"
      >
        {name}
      </text>
      <text
        x={labelX}
        y={noteY}
        textAnchor={anchor}
        className="fill-muted-foreground font-mono"
        fontSize="8"
        letterSpacing="1.6"
      >
        {note}
      </text>
    </g>
  );
}
