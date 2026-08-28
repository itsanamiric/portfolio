import { Container } from "@/components/layout";
import { currentYear, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-3 py-8 text-[12px] text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          © {currentYear()} {site.name}
        </p>
        <p>{site.location}</p>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-foreground"
        >
          {site.email}
        </a>
      </Container>
    </footer>
  );
}
