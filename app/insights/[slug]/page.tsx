import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/insights/PostLayout";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllInsights, getInsight } from "@/lib/insights";
import { blogPostingSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/schema";
import { firm } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllInsights().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  const metaTitle = post.metaTitle ?? post.title;
  const socialTitle = post.ogTitle ?? metaTitle;
  // A metaTitle that already carries its own " | Brand" suffix is used as-is;
  // otherwise the firm name is appended.
  const fullTitle = metaTitle.includes(" | ") ? metaTitle : `${metaTitle} | ${firm.name}`;
  // Trailing slash: the static export serves (and redirects to) /insights/{slug}/.
  const canonical = `/insights/${slug}/`;

  return {
    title: fullTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title: socialTitle,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: post.description,
    },
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: post.author,
          category: post.category,
          keywords: post.keywords,
          wordCount: post.wordCount,
          about: post.aboutLegislation,
          mentions: post.mentionsLegislation,
        })}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights/" },
          { name: post.title, path: `/insights/${slug}/` },
        ])}
      />
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqPageSchema(post.faqs)} />}
      <PostLayout post={post} />
    </>
  );
}
