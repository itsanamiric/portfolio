import { projects, type Project } from "@/content/projects";

export type { Project };

/**
 * All selected work, newest first by array order.
 * Swap the body of this function for a Drizzle query later —
 * the rest of the site already depends on this typed API, not the file.
 */
export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((project) => project.featured);
  return featured.length > 0 ? featured : projects;
}
