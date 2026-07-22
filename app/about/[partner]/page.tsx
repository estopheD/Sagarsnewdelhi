import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { PartnerInterim } from "@/components/practice/PartnerInterim";
import { partnerContent } from "@/content/partners/index";
import { leaders } from "@/content/about";
import { profilePageSchema, breadcrumbListSchema } from "@/lib/schema";

type Params = { partner: string };

// Static export requires every dynamic route to prerender at least one path
// — an empty list fails the build. So both partner slugs (from the fixed
// leaders list in content/about.ts) get a page: the full profile once
// content/partners/index.ts has an entry, otherwise an interim page reusing
// the bio already published on /about (see PartnerInterim). No code changes
// are needed here when a full profile is added later.
export function generateStaticParams(): Params[] {
  return leaders.map((l) => ({ partner: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { partner } = await params;
  const content = partnerContent[partner];
  if (content) {
    return {
      title: content.seo.title,
      description: content.seo.description,
      alternates: { canonical: `/about/${partner}` },
    };
  }

  const leader = leaders.find((l) => l.slug === partner);
  if (!leader) return {};
  return {
    title: `${leader.name} | Sagar & Sagar Law Offices`,
    description: leader.bio,
    alternates: { canonical: `/about/${partner}` },
  };
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { partner } = await params;
  const content = partnerContent[partner];

  if (content) {
    return (
      <>
        <JsonLd
          data={profilePageSchema({
            name: content.name,
            jobTitle: content.role,
            slug: content.slug,
            knowsAbout: content.areasOfPractice,
          })}
        />
        <JsonLd
          data={breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: content.name, path: `/about/${partner}` },
          ])}
        />
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: content.name, path: `/about/${partner}` },
          ]}
        />
        <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <h1 className="font-serif text-4xl text-ink sm:text-5xl">
            {content.honorific ? `${content.honorific} ` : ""}
            {content.name}
          </h1>
          <p className="mt-2 font-serif italic text-ink-muted">{content.role}</p>
          <p className="prose-measure mt-8 text-lg leading-relaxed text-ink">
            {content.answerFirst}
          </p>
          <p className="mt-10 text-sm text-ink-muted">
            For enquiries, please use the details on the{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              Contact
            </Link>{" "}
            page.
          </p>
        </article>
      </>
    );
  }

  const leader = leaders.find((l) => l.slug === partner);
  if (!leader) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: leader.name, path: `/about/${partner}` },
        ])}
      />
      <PartnerInterim leader={leader} />
    </>
  );
}
