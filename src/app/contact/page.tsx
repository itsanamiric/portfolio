import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Container, PageIntro } from "@/components/layout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.name} at ${site.email}, or find her on GitHub.`,
};

export default function ContactPage() {
  return (
    <Container className="pt-16 pb-24 sm:pt-20">
      <PageIntro kicker="Write" title="Contact">
        The shortest path is email. GitHub is public, and still new.
      </PageIntro>

      <p className="font-serif text-2xl tracking-tight sm:text-3xl">
        <a
          href={`mailto:${site.email}`}
          className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </p>
      <p className="mt-4">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase underline decoration-border underline-offset-4 hover:text-foreground"
        >
          github.com/{site.githubHandle}
        </a>
      </p>

      <ContactForm />
    </Container>
  );
}
