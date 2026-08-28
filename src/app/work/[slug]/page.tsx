import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkPiecePage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="pt-16 pb-24 sm:pt-20">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {project.year}
      </p>
      <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-5xl">
        {project.title}
      </h1>
      {project.tags && project.tags.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge
                variant="outline"
                className="rounded-none font-mono text-[10px] tracking-[0.14em] font-normal uppercase"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      ) : null}
      <Separator className="my-8" />
      <p className="max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      {project.href ? (
        <p className="mt-8">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-[0.16em] uppercase underline decoration-border underline-offset-4 hover:text-accent"
          >
            View the piece
          </a>
        </p>
      ) : null}
    </Container>
  );
}