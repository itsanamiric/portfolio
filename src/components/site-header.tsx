"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={className}>
      <ul className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        {nav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "font-mono text-[11px] tracking-[0.2em] uppercase transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="h-0.5 bg-accent" aria-hidden="true" />
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.22em] text-foreground uppercase"
        >
          {site.name}
        </Link>

        <NavLinks className="hidden sm:block" />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="sm:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] max-w-xs bg-background">
            <SheetHeader>
              <SheetTitle className="font-serif text-2xl font-normal tracking-tight">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <div className="px-4">
              <NavLinks onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
