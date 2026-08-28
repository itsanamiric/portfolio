# Ana Miric — personal site

Quiet editorial site for selected work, a short about, and a real way to write.

## Stack

pnpm, TypeScript, Next.js (App Router), Tailwind CSS, shadcn/ui. Content lives in typed files so the first version does not depend on a database.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # eslint
```

Copy `.env.example` to `.env.local` if you want to set `NEXT_PUBLIC_SITE_URL`. It is optional locally.

## Add a project

Edit `src/content/projects.ts` and append an object to `projects`:

```ts
{
  slug: "studio-notes",
  title: "Studio notes",
  year: "2026",
  summary: "A one-line description of the piece.",
  href: "https://github.com/itsanamiric/studio-notes", // optional
  tags: ["Next.js", "TypeScript"],                     // optional
  featured: true,                                      // optional; pins it on the home page
}
```

The Work index, the home list, and `/work/[slug]` all read from that array. Leave `href` off if the page on this site is enough.

To move this to Drizzle + Neon later, keep the `Project` type and replace the body of `getProjects()` in `src/lib/projects.ts` with a query. Do not invent a `DATABASE_URL`.

## Contact

The contact form opens a `mailto:` to [ana-miric@hotmail.com](mailto:ana-miric@hotmail.com). It does not store or send anything on the server. GitHub: [itsanamiric](https://github.com/itsanamiric).
