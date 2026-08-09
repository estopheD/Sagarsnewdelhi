import { SITE_URL, firm, offices } from "@/content/site";

// JSON-LD builders. Each returns a plain object to be serialized by the
// <JsonLd> component. Keep these framework-agnostic (no React) so they can
// be unit-tested or reused in route handlers if needed later.

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
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

export function profilePageSchema(person: {
  name: string;
  jobTitle: string;
  slug: string;
  knowsAbout: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: person.knowsAbout,
      sameAs: absoluteUrl("/about"),
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
}) {
  const url = absoluteUrl(`/insights/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
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
  };
}
