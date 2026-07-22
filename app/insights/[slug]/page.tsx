import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/insights/PostLayout";
import { JsonLd } from "@/components/ui/JsonLd";
import { getAllInsights, getInsight } from "@/lib/insights";
import { blogPostingSchema, breadcrumbListSchema } from "@/lib/schema";
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

  return {
    title: `${post.title} | ${firm.name}`,
    description: post.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/insights/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
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
          author: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${slug}` },
        ])}
      />
      <PostLayout post={post} />
    </>
  );
}
