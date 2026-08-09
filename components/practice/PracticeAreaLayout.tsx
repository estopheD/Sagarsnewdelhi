import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { practiceAreaLinks } from "@/content/nav";
import type { PracticeAreaContent } from "@/content/practice-areas/types";
import type { InsightSummary } from "@/lib/insights";

// Shared template for all 17 practice-area pages, matching the 12-section
// structure in SAGAR_AND_SAGAR_WEBSITE_CONTENT.md §0.11. Content is passed
// in fully typed; this component only handles layout, so dropping a new
// PracticeAreaContent entry into content/practice-areas/index.ts is enough
// to publish a page — no layout changes required.
export function PracticeAreaLayout({
  content,
  relatedInsights = [],
}: {
  content: PracticeAreaContent;
  relatedInsights?: InsightSummary[];
}) {
  const related = practiceAreaLinks.filter((link) =>
    content.relatedPracticeAreas.includes(link.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: content.breadcrumbLabel, path: `/practice-areas/${content.slug}` },
        ]}
      />

      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {content.h1}
          </h1>
        </header>

        <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
          {content.answerFirst}
        </p>

        <SectionRule className="my-14" />

        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="sr-only">
            Overview
          </h2>
          <div className="prose-measure space-y-5 text-ink">
            {content.overview.map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="scope-heading">
          <h2 id="scope-heading" className="font-serif text-2xl text-ink">
            Scope of work
          </h2>
          <div className="mt-8 space-y-10">
            {content.scopeOfWork.map((group) => (
              <div key={group.heading}>
                <h3 className="font-serif text-lg text-ink">{group.heading}</h3>
                <p className="prose-measure mt-2 text-sm text-ink-muted">
                  {group.intro}
                </p>
                <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-ink sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-x-2">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <div className="grid gap-14 sm:grid-cols-2">
          <section aria-labelledby="forums-heading">
            <h2 id="forums-heading" className="font-serif text-2xl text-ink">
              Forums and authorities
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {content.forums.map((forum) => (
                <li key={forum} className="flex gap-x-2">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span>{forum}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="who-heading">
            <h2 id="who-heading" className="font-serif text-2xl text-ink">
              Who we act for
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              {content.whoWeActFor.map((who) => (
                <li key={who} className="flex gap-x-2">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span>{who}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <SectionRule className="my-14" />

        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="font-serif text-2xl text-ink">
            How we approach this work
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {content.approach.map((point) => (
              <div key={point.title}>
                <p className="font-serif text-base text-ink">{point.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-serif text-2xl text-ink">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </section>

        {related.length > 0 && (
          <>
            <SectionRule className="my-14" />
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-serif text-2xl text-ink">
                Related practice areas
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ink underline decoration-line underline-offset-4 hover:text-accent"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

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

        <SectionRule className="my-14" />

        <p className="text-sm text-ink-muted">
          For enquiries relating to this practice area, please use the details
          on the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            Contact
          </Link>{" "}
          page.
        </p>
      </article>
    </>
  );
}
