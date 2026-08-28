import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/projects";

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProjectList({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_3.25rem] gap-x-4 pb-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>No.</span>
        <span>Title</span>
        <span className="text-right">Year</span>
      </div>
      <Separator />
      {projects.length === 0 ? (
        <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_3.25rem] gap-x-4 border-b border-border py-7">
          <span className="font-mono text-sm text-muted-foreground">—</span>
          <div>
            <p className="font-serif text-[1.35rem] leading-tight text-foreground/80">
              Forthcoming
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Nothing is listed yet. This row is waiting for the first piece.
            </p>
          </div>
          <span className="text-right font-mono text-sm text-muted-foreground">
            —
          </span>
        </div>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)_3.25rem] gap-x-4 border-b border-border py-6 transition-colors hover:bg-secondary/60"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {padIndex(index)}
                </span>
                <div>
                  <p className="font-serif text-[1.35rem] leading-tight">
                    {project.title}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <span className="text-right font-mono text-sm text-muted-foreground">
                  {project.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function HomeIndex() {
  const items = [
    {
      href: "/work",
      number: "01",
      label: "Work",
      note: "Selected pieces, when they exist.",
    },
    {
      href: "/about",
      number: "02",
      label: "About",
      note: "A short note.",
    },
    {
      href: "/contact",
      number: "03",
      label: "Contact",
      note: "Email and GitHub.",
    },
  ] as const;

  return (
    <ol>
      {items.map((item) => (
        <li key={item.href} className="border-t border-border">
          <Link
            href={item.href}
            className="group grid grid-cols-[2.5rem_1fr] gap-x-4 py-5 sm:grid-cols-[2.5rem_7rem_1fr] sm:items-baseline"
          >
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
              {item.number}
            </span>
            <span className="font-serif text-xl tracking-tight group-hover:text-accent">
              {item.label}
            </span>
            <span className="col-start-2 mt-1 text-sm text-muted-foreground sm:col-start-3 sm:mt-0">
              {item.note}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
