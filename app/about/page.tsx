import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { aboutPageSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/schema";
import { forums } from "@/content/site";
import * as about from "@/content/about";

export const metadata: Metadata = {
  title: about.seo.title,
  description: about.seo.description,
  alternates: { canonical: about.seo.slug },
  openGraph: {
    title: about.seo.title,
    description: about.seo.description,
    url: about.seo.slug,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={aboutPageSchema(
          about.leaders.map((l) => ({ name: l.name, slug: l.slug, role: l.role }))
        )}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLd data={faqPageSchema(about.faqs)} />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {about.h1}
          </h1>
          <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
            {about.answerFirst}
          </p>
        </header>

        <SectionRule className="my-14" />

        <section aria-labelledby="firm-heading" className="prose-measure space-y-5">
          <h2 id="firm-heading" className="font-serif text-2xl text-ink">
            The firm
          </h2>
          {about.theFirm.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink">
              {para}
            </p>
          ))}
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="font-serif text-2xl text-ink">
            Leadership
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            {about.leadershipIntro}
          </p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {about.leaders.map((leader) => (
              <div key={leader.slug} className="border border-line p-6">
                <h3 className="font-serif text-xl text-ink">
                  <Link href={`/about/${leader.slug}`} className="hover:text-accent">
                    {leader.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm italic text-ink-muted">{leader.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink">{leader.bio}</p>
                <Link
                  href={`/about/${leader.slug}`}
                  className="mt-4 inline-block text-sm text-accent hover:text-accent-hover"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
          <p className="prose-measure mt-8 text-sm leading-relaxed text-ink-muted">
            {about.leadershipClosing}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="what-heading">
          <h2 id="what-heading" className="font-serif text-2xl text-ink">
            What the firm does
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            {about.whatTheFirmDoesIntro}{" "}
            <Link href="/services" className="text-accent hover:text-accent-hover">
              Services
            </Link>{" "}
            pages.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {about.whatTheFirmDoes.map((item) => (
              <li key={item.title} className="text-sm leading-relaxed text-ink">
                <span className="font-medium text-ink">{item.title}</span> —{" "}
                <span className="text-ink-muted">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="prose-measure mt-6 text-sm leading-relaxed text-ink-muted">
            {about.whatTheFirmDoesClosing}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="empanelment-heading" className="prose-measure space-y-5">
          <h2 id="empanelment-heading" className="font-serif text-2xl text-ink">
            Empanelment with banks and financial institutions
          </h2>
          {about.empanelment.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink">
              {para}
            </p>
          ))}
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="forums-heading">
          <h2 id="forums-heading" className="font-serif text-2xl text-ink">
            Forums
          </h2>
          <p className="prose-measure mt-3 text-sm text-ink-muted">
            The firm regularly appears before, among other forums:
          </p>
          <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-ink sm:grid-cols-2">
            {forums.map((forum) => (
              <li key={forum} className="flex gap-x-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>{forum}</span>
              </li>
            ))}
          </ul>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="offices-heading">
          <h2 id="offices-heading" className="font-serif text-2xl text-ink">
            Offices and reach
          </h2>
          <div className="mt-6 space-y-6">
            {Object.values(about.officesAndReach).map((block) => (
              <div key={block.title} className="prose-measure">
                <p className="font-serif text-base text-ink">{block.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="research-heading" className="prose-measure">
          <h2 id="research-heading" className="font-serif text-2xl text-ink">
            Research and technology
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            {about.researchAndTechnology}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="how-heading">
          <h2 id="how-heading" className="font-serif text-2xl text-ink">
            How the firm works
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {about.howTheFirmWorks.map((point) => (
              <div key={point.title}>
                <p className="font-serif text-base text-ink">{point.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {point.text}
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
            <FaqAccordion items={about.faqs} />
          </div>
        </section>

        <SectionRule className="my-14" />

        <p className="text-sm text-ink-muted">
          For enquiries, please use the details on the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            Contact
          </Link>{" "}
          page.
        </p>
      </div>
    </>
  );
}
