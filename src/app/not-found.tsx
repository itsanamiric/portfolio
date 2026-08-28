import Link from "next/link";

import { Container } from "@/components/layout";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <Container className="pt-24 pb-24 sm:pt-32">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
        That page isn&apos;t here.
      </h1>
      <p className="mt-5 max-w-sm text-muted-foreground">
        It may have moved, or it may never have existed.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.16em] uppercase underline decoration-border underline-offset-4 hover:text-accent"
        >
          Back to the start
        </Link>
      </p>
    </Container>
  );
}
