"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <SiteHeader overlay={isHome} />
      <main id="content" className="flex-1">
        {children}
      </main>
      {!isHome ? <SiteFooter /> : null}
    </>
  );
}
