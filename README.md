# Sagar & Sagar Law Offices — Website

Next.js (App Router) + TypeScript + Tailwind CSS. Fully static export (`output:
"export"` in `next.config.ts`) — no Node.js server required at runtime, so it
can run on plain Apache/static hosting (Hostinger shared/Premium hosting).
Minimal client JavaScript, no third-party analytics or storage.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the dev server (hot
reload, server-rendered on the fly).

`npm run build` produces the actual deployable output as static HTML/CSS/JS in
`out/`. To sanity-check that exact output the way a static host serves it
(rather than the dev server), run:

```bash
npm run build
node scripts/serve-static.mjs
```

and open [http://localhost:4000](http://localhost:4000). (`scripts/serve-static.mjs`
is a verification-only tool, not part of the deployed site.)

## Project structure

```
app/                       Routes (App Router)
  page.tsx                 Home
  services/                Services Hub
  about/                   About Us
  about/[partner]/         Partner pages (scaffolded, empty until populated)
  contact/                 Contact + enquiry form
  insights/                Insights listing + [slug] post template
  practice-areas/[slug]/   Practice-area pages (scaffolded, empty until populated)
  sitemap.ts, robots.ts    Generated from actual routes + content registries

components/
  layout/                  Header, Footer, Breadcrumbs, DisclaimerModal
  practice/                PracticeAreaLayout (full page) + PracticeAreaInterim /
                           PartnerInterim (shown until full content is added)
  contact/                 EnquiryForm — static, mailto-based (no backend)
  insights/                PostCard, PostLayout
  ui/                      FaqAccordion, SectionRule, JsonLd

content/                   All page copy and structured data (typed .ts files)
  site.ts                  Firm facts, offices, contact details
  services-hub.ts           Services Hub copy (verbatim)
  about.ts                  About page copy (verbatim)
  nav.ts                    Derived navigation / slug registries
  practice-areas/           Types + empty content registry (see below)
  partners/                 Types + empty content registry (see below)
  insights/*.mdx            Blog posts (2 placeholders included)

lib/
  schema.ts                 JSON-LD builders
  insights.ts                Reads content/insights/*.mdx at build time
```

## Adding a practice-area page

All 16 confirmed practice-area URLs already exist and are live (static export
requires every route to prerender something — an empty dynamic route fails
the build). Until real content is added, each one shows an **interim page**
(`components/practice/PracticeAreaInterim.tsx`) that reuses the group's own
already-published Services Hub summary, with a "full page not yet published"
note.

To publish the full 12-section page for one:

1. Open `content/practice-areas/types.ts` to see the required shape
   (`PracticeAreaContent`) — it mirrors the 12-section structure used
   throughout `SAGAR_AND_SAGAR_WEBSITE_CONTENT.md`.
2. Add an entry to the `practiceAreaContent` object in
   `content/practice-areas/index.ts`, keyed by the page's slug (the slug list
   is fixed in `content/nav.ts` / the source content file's page index).
3. Rebuild. `app/practice-areas/[slug]/page.tsx` automatically switches that
   slug from the interim view to the full `PracticeAreaLayout` template — no
   other code changes needed, and `sitemap.ts` picks it up automatically.

Keep the copy verbatim from the source content file — do not paraphrase or
add adjectives not present in the source.

## Adding a partner page

Same pattern, in `content/partners/`. Both partner URLs are live today
showing an interim page (`components/practice/PartnerInterim.tsx`) built from
the bio paragraph already on `/about`. Add an entry to `partnerContent` in
`content/partners/index.ts` matching the `PartnerContent` shape in
`content/partners/types.ts`, keyed by slug (`rajeev-sagar` or
`sanjeev-sagar`), then rebuild — `app/about/[partner]/page.tsx` switches to
the full profile automatically.

## Adding an Insights post

Drop a new `.mdx` file into `content/insights/`, e.g.
`content/insights/my-post-slug.mdx`, with frontmatter:

```md
---
title: "Post title"
description: "One or two sentence summary for meta description and listing card."
publishedAt: "2026-03-01"
author: "Sagar & Sagar Law Offices"
---

Post body in Markdown/MDX.
```

The listing page, `[slug]` route, sitemap, and `BlogPosting` JSON-LD all pick
it up automatically — no code changes required. The two existing posts are
clearly marked lorem-ipsum placeholders (`placeholder: true` in frontmatter);
replace or delete them before launch.

Once deployed (see below), publishing a new post is: add the `.mdx` file →
commit → push to `main`. The GitHub Actions workflow rebuilds and uploads the
site automatically — no manual redeploy step.

## Hosting on Hostinger

This site is a static export, built for **Hostinger Starter/Premium (shared)
hosting**, which serves files only — no Node.js runtime. Deployment is via
GitHub Actions: on every push to `main`, it builds the site and uploads
`out/` to `public_html/` over FTP.

**One-time setup:**

1. Create a GitHub repository for this project and push it (ask me to do
   this with you — it needs your go-ahead since it's a push to a shared
   remote).
2. In Hostinger **hPanel → Websites → [your site] → Files → FTP Accounts**,
   note the FTP hostname, username, and password (or create a dedicated FTP
   account for deployment).
3. In the GitHub repo, go to **Settings → Secrets and variables → Actions**
   and add three repository secrets:
   - `FTP_SERVER` — the FTP host from step 2
   - `FTP_USERNAME` — the FTP username
   - `FTP_PASSWORD` — the FTP password
4. Attach your domain to the site and enable the free SSL certificate in
   hPanel (**Websites → [your site] → SSL**), if not already done.
5. Push to `main`. Check the **Actions** tab on GitHub to watch the build —
   it should finish in a couple of minutes, after which the live site
   reflects the change.

The workflow itself is `.github/workflows/deploy.yml` — it installs
dependencies, runs `npm run build`, and uploads `out/` via
[FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action). A
`.htaccess` (in `public/`, copied into every build) sets a clean 404 page.

**If you later upgrade to Business/Cloud hosting or a VPS**, Hostinger's
Node.js app hosting can run this as a full SSR app instead (no static-export
constraints, real server-submitted contact form) — that's a config change
(`output: "export"` removed, contact form back to a Server Action), not a
rebuild from scratch. Ask if you want that path instead.

## Items the firm still needs to supply

- **Disclaimer wording** — the entry modal (`components/layout/DisclaimerModal.tsx`)
  and footer line (`components/layout/Footer.tsx`) both render a placeholder
  string from `content/site.ts` (`disclaimerPlaceholder`), clearly marked
  "FIRM TO SUPPLY FINAL DISCLAIMER WORDING." No legal disclaimer text has
  been fabricated.
- **Contact form behaviour** — `components/contact/EnquiryForm.tsx` composes
  a `mailto:` link from the field values (opens the visitor's own email
  app) since static hosting has no server to submit to. This keeps the
  original "no third-party service" constraint, but depends on the visitor
  having a configured email client. If the firm would prefer a proper
  web-submitted form instead, the options are: upgrade Hostinger to a
  Business/Cloud/VPS plan and run this as a real SSR app (see "Hosting on
  Hostinger" above), or accept wiring the form to a third-party form
  backend (e.g. Formspree) — a deliberate choice to make, not done by
  default.
- **Aerospace & Defence practice page** — present in the source content file
  but held back pending Senior Partner confirmation that the firm undertakes
  this work (see the note at that section of
  `SAGAR_AND_SAGAR_WEBSITE_CONTENT.md`). Its data is kept, unused, in
  `content/services-hub.ts` as `aerospaceDefencePendingConfirmation`; append
  it to the `groups` array and add its slug to the practice-area registry
  once confirmed.
- **Mumbai office email** (`navinarora21@gmail.com`) — reproduced as supplied
  in `about-and-partner-pages.md`; the source file itself flags this as
  possibly warranting a firm email address instead of a personal one.
- **Logo / favicon** — the site currently uses the default Next.js favicon
  placeholder at `app/favicon.ico`.
- **`/sectors`, `/international-services`, `/international-services-lpo`** —
  linked from the Services Hub (per the source content) but their page
  bodies are out of scope for this build and not yet created; the links will
  404 until those routes are built.

## Design tokens

Colour and font tokens live in `app/globals.css` under `:root` /
`@theme inline` (Tailwind v4's CSS-first config — there is no
`tailwind.config.ts`). Fonts are self-hosted via `next/font/google`
(Newsreader for display/serif, Inter for body/sans) and loaded once in
`app/layout.tsx`.
