import { SITE_URL, firm, offices } from "@/content/site";

// JSON-LD builders. Each returns a plain object to be serialized by the
// <JsonLd> component. Keep these framework-agnostic (no React) so they can
// be unit-tested or reused in route handlers if needed later.

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

// Frontmatter dates are bare "YYYY-MM-DD" (no time-of-day is meaningful for
// a publication date). JSON-LD datetime properties expect a timezone, so
// this stamps the firm's own IST offset rather than leaving it ambiguous.
function isoDateTime(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? `${date}T00:00:00+05:30` : date;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#organization`,
    name: firm.name,
    legalName: firm.legalName,
    url: SITE_URL,
    foundingDate: firm.foundingDate,
    areaServed: firm.areaServed,
    founder: firm.founders.map((name) => ({
      "@type": "Person",
      name,
    })),
    email: firm.emails,
    address: offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.addressLines.join(", "),
      addressLocality: o.locality,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: "IN",
    })),
    location: offices.map((o) => ({
      "@type": "Place",
      name: o.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.addressLines.join(", "),
        addressLocality: o.locality,
        addressRegion: o.region,
        postalCode: o.postalCode,
        addressCountry: "IN",
      },
    })),
  };
}

export function breadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function aboutPageSchema(leaders: { name: string; slug: string; role: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#page`,
    name: "About the Firm",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
    about: leaders.map((leader) => ({
      "@type": "Person",
      name: leader.name,
      jobTitle: leader.role,
      sameAs: absoluteUrl(`/about/${leader.slug}`),
    })),
  };
}

export function partnerProfileSchema(partner: {
  slug: string;
  name: string;
  honorific?: string;
  role: string;
  schemaPerson: { alumniOf: string[]; memberOf: string[]; knowsAbout: string[] };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/about/${partner.slug}/#person`,
      name: partner.name,
      ...(partner.honorific ? { honorificPrefix: partner.honorific } : {}),
      jobTitle: partner.role,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      alumniOf: partner.schemaPerson.alumniOf.map((name) => ({
        "@type": "CollegeOrUniversity",
        name,
      })),
      memberOf: partner.schemaPerson.memberOf.map((name) => ({
        "@type": "Organization",
        name,
      })),
      knowsAbout: partner.schemaPerson.knowsAbout,
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
      },
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/contact#business`,
    name: firm.name,
    url: SITE_URL,
    email: firm.emails,
    location: offices.map((o) => ({
      "@type": "Place",
      name: o.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.addressLines.join(", "),
        addressLocality: o.locality,
        addressRegion: o.region,
        postalCode: o.postalCode,
        addressCountry: "IN",
      },
      telephone: o.phone,
    })),
  };
}

export function practiceAreaServiceSchema(content: {
  slug: string;
  h1: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/practice-areas/${content.slug}#service`,
    name: content.h1,
    serviceType: content.serviceType,
    url: `${SITE_URL}/practice-areas/${content.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "IN",
  };
}

export function lpoServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Legal Process Outsourcing",
    name: "Legal Process Outsourcing & Cross-Border Legal Support",
    url: `${SITE_URL}/lpo`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["US", "GB", "CA", "AU", "SG", "AE", "IN"],
  };
}

export function lpoContactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: "+91-98100-21846",
    contactType: "customer support",
    availableLanguage: "English",
    areaServed: ["US", "GB", "CA", "AU", "SG", "AE"],
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
  about?: string[];
  mentions?: string[];
  mentionsService?: { name: string; areaServed: string[] };
}) {
  const legislation = (names: string[]) =>
    names.map((name) => ({ "@type": "Legislation", name, legislationJurisdiction: "IN" }));
  // Trailing slash matches how the static export is served (trailingSlash).
  const url = absoluteUrl(`/insights/${post.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "en-IN",
    url,
    image: `${url}opengraph-image`,
    datePublished: isoDateTime(post.publishedAt),
    dateModified: isoDateTime(post.updatedAt ?? post.publishedAt),
    // When the firm itself is the byline, resolve to the site-wide firm node
    // by @id rather than declaring a second, unlinked Organization.
    author: {
      "@type": "Organization",
      ...(post.author === firm.name ? { "@id": `${SITE_URL}/#organization` } : {}),
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.keywords ? { keywords: post.keywords.join(", ") } : {}),
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    ...(post.about?.length ? { about: legislation(post.about) } : {}),
    ...(post.mentions?.length || post.mentionsService
      ? {
          mentions: [
            ...legislation(post.mentions ?? []),
            ...(post.mentionsService
              ? [
                  {
                    "@type": "Service",
                    name: post.mentionsService.name,
                    provider: { "@id": `${SITE_URL}/#organization` },
                    areaServed: post.mentionsService.areaServed,
                  },
                ]
              : []),
          ],
        }
      : {}),
  };
}

// One JSON-LD document for an Insights post: BlogPosting + BreadcrumbList +
// FAQPage as a single @graph, cross-referenced by @id.
export function insightGraphSchema(
  post: Parameters<typeof blogPostingSchema>[0],
  crumbs: { name: string; path: string }[],
  faqs?: { question: string; answer: string }[]
) {
  const url = absoluteUrl(`/insights/${post.slug}/`);
  const strip = <T extends { "@context"?: string }>(node: T) => {
    const { "@context": _context, ...rest } = node;
    void _context;
    return rest;
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...strip(blogPostingSchema(post)), "@id": `${url}#article` },
      { ...strip(breadcrumbListSchema(crumbs)), "@id": `${url}#breadcrumb` },
      ...(faqs?.length
        ? [
            {
              ...strip(faqPageSchema(faqs)),
              "@id": `${url}#faq`,
              isPartOf: { "@id": `${url}#article` },
            },
          ]
        : []),
    ],
  };
}
