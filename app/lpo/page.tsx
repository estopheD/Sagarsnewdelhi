import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactBar } from "@/components/lpo/ContactBar";
import { ContactBlock } from "@/components/lpo/ContactBlock";
import {
  breadcrumbListSchema,
  faqPageSchema,
  lpoContactPointSchema,
  lpoServiceSchema,
} from "@/lib/schema";
import * as lpo from "@/content/lpo";

export const metadata: Metadata = {
  title: lpo.seo.title,
  description: lpo.seo.description,
  alternates: { canonical: lpo.seo.slug },
  openGraph: {
    title: lpo.seo.title,
    description: lpo.seo.description,
    url: lpo.seo.slug,
    type: "website",
  },
};

function ServiceNote({ note }: { note: string }) {
  const parts = note.split(/(\{\{[a-z-]+\}\})/g);
  return (
    <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
      {parts.map((part, i) => {
        const match = part.match(/^\{\{([a-z-]+)\}\}$/);
        if (match) {
          const link = lpo.relatedPracticeLinks[match[1]];
          if (link) {
            return (
              <Link
                key={i}
                href={link.href}
                className="text-accent hover:text-accent-hover"
              >
                {link.label}
              </Link>
            );
          }
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export default function LpoPage() {
  return (
    <>
      <JsonLd data={lpoServiceSchema()} />
      <JsonLd data={lpoContactPointSchema()} />
      <JsonLd data={faqPageSchema(lpo.faqs)} />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Legal Process Outsourcing", path: "/lpo" },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Legal Process Outsourcing", path: "/lpo" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-10 sm:pt-20">
        <header>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {lpo.h1}
          </h1>
          <p className="prose-measure mt-4 text-lg leading-relaxed text-ink-muted">
            {lpo.subheading}
          </p>
        </header>
      </div>

      <div className="mt-8">
        <ContactBar />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <p className="prose-measure text-lg leading-relaxed text-ink">
          {lpo.answerFirst}
        </p>

        <SectionRule className="my-14" />

        <section aria-labelledby="overview-heading" className="prose-measure space-y-5">
          <h2 id="overview-heading" className="sr-only">
            Overview
          </h2>
          {lpo.overview.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink">
              {para}
            </p>
          ))}
          <p className="leading-relaxed text-ink">
            {lpo.seniorAdvocateNote.prefix}
            <strong className="font-semibold">{lpo.seniorAdvocateNote.bold}</strong>
            {lpo.seniorAdvocateNote.suffix}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="engaged-heading">
          <h2 id="engaged-heading" className="font-serif text-2xl text-ink">
            How the firm is engaged by overseas clients
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            {lpo.howEngagedIntro}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            {lpo.engagementRoles.map((role) => (
              <li key={role} className="flex gap-x-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <strong className="font-semibold">{role}</strong>
              </li>
            ))}
          </ul>
          <p className="prose-measure mt-6 text-sm leading-relaxed text-ink-muted">
            {lpo.howEngagedClosing}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-serif text-2xl text-ink">
            Core LPO and legal support services
          </h2>
          <div className="mt-8 space-y-10">
            {lpo.coreServices.map((section) => (
              <div key={section.id}>
                <h3 className="font-serif text-lg text-ink">{section.heading}</h3>
                <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-ink sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-x-2">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {section.note && <ServiceNote note={section.note} />}
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="confidentiality-heading">
          <h2 id="confidentiality-heading" className="font-serif text-2xl text-ink">
            Confidentiality, data security and quality assurance
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            Confidentiality, data protection and consistency of output are
            the principal concerns for any client sending work offshore. The
            firm addresses these as engagement terms, agreed before work
            begins:
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            {lpo.confidentiality.map((item) => (
              <li key={item.lead} className="flex gap-x-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>
                  <strong className="font-semibold">{item.lead}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="font-serif text-2xl text-ink">
            Team and infrastructure
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            {lpo.team.map((item) => (
              <li key={item} className="flex gap-x-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="prose-measure mt-6 text-sm leading-relaxed text-ink-muted">
            {lpo.teamClosing}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="sectors-heading">
          <h2 id="sectors-heading" className="font-serif text-2xl text-ink">
            Sector experience
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm text-ink sm:grid-cols-2">
            {lpo.sectorExperience.map((item) => (
              <li key={item} className="flex gap-x-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="models-heading">
          <h2 id="models-heading" className="font-serif text-2xl text-ink">
            Engagement models
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="py-3 pr-6 font-serif text-base font-normal text-ink">
                    Model
                  </th>
                  <th scope="col" className="py-3 font-serif text-base font-normal text-ink">
                    Suited to
                  </th>
                </tr>
              </thead>
              <tbody>
                {lpo.engagementModels.map((row) => (
                  <tr key={row.model} className="border-b border-line align-top">
                    <td className="py-3 pr-6 font-medium text-ink">{row.model}</td>
                    <td className="py-3 text-ink-muted">{row.suitedTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="prose-measure mt-6 text-sm leading-relaxed text-ink-muted">
            {lpo.engagementModelsClosing}
          </p>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-serif text-2xl text-ink">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={lpo.faqs} />
          </div>
        </section>

        <SectionRule className="my-14" />

        <section aria-labelledby="disclaimer-heading" className="border border-accent p-6">
          <h2 id="disclaimer-heading" className="font-serif text-lg text-ink">
            Disclaimer
          </h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
            {lpo.disclaimer}
          </p>
        </section>

        <SectionRule className="my-14" />

        <ContactBlock />
      </div>
    </>
  );
}
