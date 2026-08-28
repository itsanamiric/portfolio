import { Container } from "@/components/layout";
import { HomeIndex, ProjectList } from "@/components/project-list";
import { site } from "@/content/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getFeaturedProjects();

  return (
    <Container className="pt-16 pb-24 sm:pt-24">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {site.location}
      </p>
      <h1 className="mt-6 font-serif text-[4.25rem] leading-[0.88] tracking-[-0.04em] sm:text-[6.5rem]">
        <span className="block">{site.firstName}</span>
        <span className="block">{site.lastName}</span>
      </h1>
      <p className="mt-10 max-w-sm font-serif text-2xl leading-snug text-balance sm:text-[1.75rem]">
        {site.oneLiner}
      </p>
      <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
        I work in TypeScript, React, Next.js, and a stack I can stand behind.
        Selected work will live here as it is ready to share.
      </p>

      <div className="mt-16">
        <HomeIndex />
      </div>

      <section className="mt-20" aria-labelledby="selected-work">
        <h2
          id="selected-work"
          className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
        >
          Selected work
        </h2>
        <ProjectList projects={projects} className="mt-5" />
      </section>
    </Container>
  );
}
