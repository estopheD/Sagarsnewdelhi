import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbListSchema, faqPageSchema, itemListSchema } from "@/lib/schema";
import * as hub from "@/content/services-hub";

export const metadata: Metadata = {
  title: hub.seo.title,
  description: hub.seo.description,
  alternates: { canonical: hub.seo.slug },
  openGraph: {
    title: hub.seo.title,
    description: hub.seo.description,
    url: hub.seo.slug,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          hub.groups.map((g) => ({ name: g.title, path: `/practice-areas/${g.slug}` }))
        )}
      />
      <JsonLd data={faqPageSchema(hub.faqs)} />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {hub.h1}
          </h1>
          <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
            {hub.answerFirst}
          </p>
        </header>

        <div className="prose-measure mt-10 space-y-5 text-ink-muted">
          {hub.introParagraphs.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <p className="prose-measure mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-muted">
          Each numbered heading is a <strong className="text-ink">principal practice area</strong> with
          its own detailed page — follow the link for the full treatment. The
          items listed beneath each heading are the{" "}
          <strong className="text-ink">specific service lines</strong> within that
          area, provided so that clients can see the full span of the firm&apos;s
          work at a glance. The service lines are descriptive; the linked page
          is the place to begin an enquiry.
        </p>

        <SectionRule className="my-14" />

        <section aria-label="Practice areas" className="space-y-14">
          {hub.groups.map((group) => (
            <div key={group.slug} id={group.slug}>
              <p className="text-sm text-ink-muted">{group.numeral}.</p>
              <h2 className="mt-1 font-serif text-2xl text-ink">
                <Link
                  href={`/practice-areas/${group.slug}`}
                  className="hover:text-accent"
                >
                  {group.title}
                </Link>
              </h2>
              <p className="prose-measure mt-3 leading-relaxed text-ink">
                {group.description}
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink-muted">
                <span className="text-ink">Service lines within this practice:</span>{" "}
                {group.serviceLines.join(" · ")}
              </p>
            </div>
          ))}
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="intl-heading">
          <h2 id="intl-heading" className="font-serif text-2xl text-ink">
            International &amp; Cross-Border Services
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            The following are set out on their own pages and are directed at
            overseas clients, foreign law firms and inbound investors rather
            than at domestic litigants.
          </p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {hub.internationalServices.map((service) => (
              <div key={service.slug}>
                <h3 className="font-serif text-lg text-ink">
                  <Link href={`/${service.slug}`} className="hover:text-accent">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                  <span className="text-ink">Service lines:</span>{" "}
                  {service.serviceLines.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="sectors-heading">
          <h2 id="sectors-heading" className="font-serif text-2xl text-ink">
            <Link href={`/${hub.sectors.slug}`} className="hover:text-accent">
              {hub.sectors.title}
            </Link>
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            {hub.sectors.intro}
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ink-muted">
            <span className="text-ink">Sectors include:</span>{" "}
            {hub.sectors.list.join(" · ")}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="font-serif text-2xl text-ink">
            How the firm approaches its work
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {hub.approach.map((point) => (
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
            <FaqAccordion
              items={hub.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
            />
          </div>
        </section>

        <SectionRule className="my-14" />

        <p className="text-sm text-ink-muted">
          For enquiries in any of the areas above, please use the details on
          the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            Contact
          </Link>{" "}
          page. The individual practice pages set out the scope of work in
          each area in detail.
        </p>
      </div>
    </>
  );
}
