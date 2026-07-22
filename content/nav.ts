import { groups as practiceGroups } from "./services-hub";

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

// Slug registry for the 17 practice-area pages. Titles/slugs are canonical
// per SAGAR_AND_SAGAR_WEBSITE_CONTENT.md §0.9. Content for each page is not
// yet populated — see content/practice-areas/index.ts — but the slugs are
// fixed now so hub/About links resolve the moment content is added.
export const practiceAreaLinks = practiceGroups.map((g) => ({
  title: g.title,
  slug: g.slug,
  href: `/practice-areas/${g.slug}`,
}));

// Slug registry for the 2 partner pages. Content not yet populated — see
// content/partners/index.ts.
export const partnerLinks = [
  { name: "Rajeev Sagar", slug: "rajeev-sagar", href: "/about/rajeev-sagar" },
  { name: "Sanjeev Sagar", slug: "sanjeev-sagar", href: "/about/sanjeev-sagar" },
] as const;

export const footerSitemap = {
  firm: [
    { label: "About the Firm", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  international: [
    { label: "International Services — India Desk", href: "/international-services" },
    { label: "Legal Process Outsourcing (LPO)", href: "/international-services-lpo" },
    { label: "Sectors We Serve", href: "/sectors" },
  ],
};
