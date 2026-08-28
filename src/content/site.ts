export const site = {
  name: "Ana Miric",
  firstName: "Ana",
  lastName: "Miric",
  email: "ana-miric@hotmail.com",
  github: "https://github.com/itsanamiric",
  githubHandle: "itsanamiric",
  location: "Belgrade",
  timezone: "Europe/Belgrade",
  oneLiner: "Building for the web, from Belgrade.",
  description:
    "Ana Miric builds for the web with TypeScript, React, and Next.js. Selected work lives here as it is ready to share.",
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
