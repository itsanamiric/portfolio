import type { Metadata } from "next";

import { Container, PageIntro } from "@/components/layout";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `A short note about ${site.name}.`,
};

export default function AboutPage() {
  return (
    <Container className="pt-16 pb-24 sm:pt-20">
      <PageIntro kicker="Note" title="About">
        Short, and only what is true so far.
      </PageIntro>
      <div className="max-w-md space-y-5 text-[1.05rem] leading-[1.7]">
        <p>
          I&apos;m Ana. I live in Belgrade, and I build for the web —
          TypeScript, React, Next.js, and a stack I can stand behind.
        </p>
        <p>
          This site is the first thing I&apos;m putting in public. The work
          will follow here, on its own time.
        </p>
        <p>
          If you want to talk,{" "}
          <a
            href="/contact"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            write
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
