import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[40rem] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-14">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {kicker}
      </p>
      <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.05] tracking-[-0.02em] sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </header>
  );
}