import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import type * as About from "@/content/about";

type Leader = (typeof About.leaders)[number];

// Shown at a partner's permanent URL before their full profile page is
// written. Reuses the same bio paragraph already published on /about — no
// new copy is authored here.
export function PartnerInterim({ leader }: { leader: Leader }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: leader.name, path: `/about/${leader.slug}` },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">{leader.name}</h1>
        <p className="mt-2 font-serif italic text-ink-muted">{leader.role}</p>
        <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
          {leader.bio}
        </p>

        <SectionRule className="my-14" />

        <p className="text-sm text-ink-muted">
          A detailed profile page is not yet published. See{" "}
          <Link href="/about" className="text-accent hover:text-accent-hover">
            About the Firm
          </Link>{" "}
          for more on the firm&apos;s leadership. For enquiries, please use
          the details on the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            Contact
          </Link>{" "}
          page.
        </p>
      </article>
    </>
  );
}
