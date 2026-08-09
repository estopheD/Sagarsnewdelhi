import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import type { PracticeGroup } from "@/content/services-hub";
import type { InsightSummary } from "@/lib/insights";

// Shown at a practice-area's permanent URL before its full 12-section page
// is written. Static export requires every listed slug to resolve to a real
// page (an empty dynamic route fails the build), so rather than 404 until
// the full page exists, this reuses the group's own already-approved
// Services Hub summary — no new copy is authored here.
export function PracticeAreaInterim({
  group,
  relatedInsights = [],
}: {
  group: PracticeGroup;
  relatedInsights?: InsightSummary[];
}) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: group.title, path: `/practice-areas/${group.slug}` },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {group.title}
        </h1>
        <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
          {group.description}
        </p>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-ink-muted">
          <span className="text-ink">Service lines within this practice:</span>{" "}
          {group.serviceLines.join(" · ")}
        </p>

        <SectionRule className="my-14" />

        <p className="text-sm text-ink-muted">
          The detailed page for this practice area is not yet published. For
          the full range of the firm&apos;s practice areas, see{" "}
          <Link href="/services" className="text-accent hover:text-accent-hover">
            Our Practice Areas
          </Link>
          . For enquiries, please use the details on the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            Contact
          </Link>{" "}
          page.
        </p>

        {relatedInsights.length > 0 && (
          <>
            <SectionRule className="my-14" />
            <section aria-labelledby="related-insights-heading">
              <h2 id="related-insights-heading" className="font-serif text-2xl text-ink">
                Related Insights
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedInsights.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-ink underline decoration-line underline-offset-4 hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </article>
    </>
  );
}
