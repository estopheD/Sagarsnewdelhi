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

  return {
    title: `${metaTitle} | ${firm.name}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: metaTitle,
      description: post.description,
      url: `/insights/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
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
        })}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${slug}` },
        ])}
      />
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqPageSchema(post.faqs)} />}
      <PostLayout post={post} />
    </>
  );
}
