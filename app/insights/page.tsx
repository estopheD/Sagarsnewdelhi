import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PostCard } from "@/components/insights/PostCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbListSchema } from "@/lib/schema";
import { getAllInsights } from "@/lib/insights";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: `Insights | ${firm.name}`,
  description:
    "Legal analysis and regulatory commentary from Sagar & Sagar Law Offices.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]} />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header className="prose-measure">
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Legal Analysis &amp; Regulatory Commentary
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Commentary on legal and regulatory developments relevant to the
            firm&apos;s practice areas. General information only; nothing
            here constitutes legal advice.
          </p>
        </header>

        <div className="prose-measure mt-14">
          {posts.length === 0 ? (
            <p className="text-ink-muted">No posts published yet.</p>
          ) : (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </>
  );
}
