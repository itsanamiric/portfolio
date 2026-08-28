/**
 * Selected work.
 *
 * Add a project by appending an object to `projects`. The Work page,
 * the home index, and `/work/[slug]` all read from this list.
 *
 * Example:
 *
 * {
 *   slug: "studio-notes",
 *   title: "Studio notes",
 *   year: "2026",
 *   summary: "A one-line description of the piece.",
 *   href: "https://github.com/itsanamiric/studio-notes",
 *   tags: ["Next.js", "TypeScript"],
 * }
 *
 * Leave `href` off if the write-up on `/work/[slug]` is enough.
 * Set `featured: true` to pin a piece on the home page; if none are
 * featured, home shows the full list (or the empty state).
 *
 * This module is the swap point for a database later: keep the `Project`
 * type, and replace `projects` with a query in `getProjects()`.
 */
export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  href?: string;
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [];
