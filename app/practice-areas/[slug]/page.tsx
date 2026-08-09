import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeAreaLayout } from "@/components/practice/PracticeAreaLayout";
import { PracticeAreaInterim } from "@/components/practice/PracticeAreaInterim";
import { JsonLd } from "@/components/ui/JsonLd";
import { practiceAreaContent } from "@/content/practice-areas/index";
import { groups } from "@/content/services-hub";
import { faqPageSchema, breadcrumbListSchema } from "@/lib/schema";
import { getInsightsLinkingToPracticeArea } from "@/lib/insights";

type Params = { slug: string };

// Static export requires every dynamic route to prerender at least one path
// — an empty list fails the build. So every slug in the fixed practice-area
// index (content/services-hub.ts) gets a page: the full 12-section layout
// once content/practice-areas/index.ts has an entry for it, otherwise an
// interim page reusing the Hub's own approved summary (see
// PracticeAreaInterim). No code changes are needed here when content is
// added later — the slug is already in this list.
export function generateStaticParams(): Params[] {
  return groups.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = practiceAreaContent[slug];
  if (content) {
    return {
      title: content.seo.title,
      description: content.seo.description,
      alternates: { canonical: `/practice-areas/${slug}` },
      openGraph: {
        title: content.seo.title,
        description: content.seo.description,
        url: `/practice-areas/${slug}`,
        type: "website",
      },
    };
  }

  const group = groups.find((g) => g.slug === slug);
  if (!group) return {};
  return {
    title: `${group.title} | Sagar & Sagar Law Offices`,
    description: group.description,
    alternates: { canonical: `/practice-areas/${slug}` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const content = practiceAreaContent[slug];
  const relatedInsights = getInsightsLinkingToPracticeArea(slug);

  if (content) {
    return (
      <>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: content.h1,
            url: `/practice-areas/${slug}`,
            about: content.seo.primaryKeyword,
          }}
        />
        <JsonLd data={faqPageSchema(content.faqs)} />
        <JsonLd
          data={breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: content.breadcrumbLabel, path: `/practice-areas/${slug}` },
          ])}
        />
        <PracticeAreaLayout content={content} relatedInsights={relatedInsights} />
      </>
    );
  }

  const group = groups.find((g) => g.slug === slug);
  if (!group) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: group.title, path: `/practice-areas/${slug}` },
        ])}
      />
      <PracticeAreaInterim group={group} relatedInsights={relatedInsights} />
    </>
  );
}
