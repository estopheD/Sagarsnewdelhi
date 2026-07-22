import type { Metadata } from "next";
import Link from "next/link";
import { SectionRule } from "@/components/ui/SectionRule";
import { PostCard } from "@/components/insights/PostCard";
import { getAllInsights } from "@/lib/insights";
import { firm, offices, forums, SITE_URL } from "@/content/site";
import { groups } from "@/content/services-hub";
import { theFirm } from "@/content/about";

export const metadata: Metadata = {
  title: firm.name,
  description:
    "A New Delhi law firm since 2000, practising banking, corporate, insolvency and civil law before courts and tribunals across India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: firm.name,
    description:
      "A New Delhi law firm since 2000, practising banking, corporate, insolvency and civil law before courts and tribunals across India.",
    url: SITE_URL,
    type: "website",
  },
};

export default function HomePage() {
  const latestPosts = getAllInsights().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <p className="text-sm uppercase tracking-wide text-ink-muted">
            In practice since {firm.foundingDate}
          </p>
          <h1 className="prose-measure mt-4 font-serif text-4xl leading-tight text-ink sm:text-6xl">
            {firm.name}
          </h1>
          <p className="prose-measure mt-8 text-lg leading-relaxed text-ink-muted sm:text-xl">
            A New Delhi–based law firm practising across banking and
            financial law, corporate and commercial law, insolvency, civil
            litigation, consumer protection and regulatory compliance, acting
            before the Supreme Court of India, the High Courts, and the
            principal tribunals and commissions across the country.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Our Practice Areas
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm text-accent transition-colors hover:text-accent-hover"
            >
              Contact the firm →
            </Link>
          </div>
        </div>
      </section>

      {/* The firm */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-2xl text-ink">The firm</h2>
          <p className="prose-measure leading-relaxed text-ink-muted">
            {theFirm[0]}
          </p>
        </div>
      </section>

      <SectionRule />

      {/* Practice areas overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">Practice Areas</h2>
          <Link href="/services" className="text-sm text-accent hover:text-accent-hover">
            View all practice areas →
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li key={group.slug} className="border-t border-line pt-4">
              <Link
                href={`/practice-areas/${group.slug}`}
                className="font-serif text-lg text-ink hover:text-accent"
              >
                {group.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SectionRule />

      {/* Forums strip */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-serif text-2xl text-ink">Forums</h2>
        <p className="prose-measure mt-3 text-sm text-ink-muted">
          The firm regularly appears before, among other forums:
        </p>
        <ul className="mt-6 grid gap-x-8 gap-y-2 text-sm text-ink sm:grid-cols-2">
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

      <SectionRule />

      {/* Offices summary */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-ink">Offices</h2>
          <Link href="/contact" className="text-sm text-accent hover:text-accent-hover">
            Full contact details →
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <li key={office.id}>
              <p className="font-serif text-base text-ink">{office.name}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {office.locality}, {office.region}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {latestPosts.length > 0 && (
        <>
          <SectionRule />
          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-serif text-2xl text-ink">Insights</h2>
              <Link href="/insights" className="text-sm text-accent hover:text-accent-hover">
                View all insights →
              </Link>
            </div>
            <div className="prose-measure mt-10">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
