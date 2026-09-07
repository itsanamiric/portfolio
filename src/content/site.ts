export const site = {
  name: "Ana Miric",
  firstName: "Ana",
  lastName: "Miric",
  email: "ana-miric@hotmail.com",
  github: "https://github.com/itsanamiric",
  githubHandle: "itsanamiric",
  homeplace: "Belgrade",
  currentCity: "Málaga",
  location: "Málaga",
  route: "Belgrade → Málaga",
  timezone: "Europe/Madrid",
  oneLiner: "Geographer by education, from Belgrade, living in Málaga.",
  description:
    "Ana Miric is a geographer by education, from Belgrade, living in Málaga. Travel, the web, and coffee.",
} as const;

export const places = {
  malaga: {
    name: "Málaga",
    note: "now",
    lat: 36.7213,
    lon: -4.4214,
  },
  belgrade: {
    name: "Belgrade",
    note: "home",
    lat: 44.7866,
    lon: 20.4489,
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export function currentYear() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    year: "numeric",
  }).format(new Date());
}
