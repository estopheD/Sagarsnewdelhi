import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PartnerProfileLayout } from "@/components/about/PartnerProfileLayout";
import { PartnerInterim } from "@/components/practice/PartnerInterim";
import { JsonLd } from "@/components/ui/JsonLd";
import { getPartner } from "@/lib/partners";
import { leaders } from "@/content/about";
import { partnerProfileSchema, breadcrumbListSchema } from "@/lib/schema";

type Params = { partner: string };

// Static export requires every dynamic route to prerender at least one path
// — an empty list fails the build. So both partner slugs (from the fixed
// leaders list in content/about.ts) get a page: the full profile once
// content/partners/{slug}.mdx exists, otherwise an interim page reusing
// the bio already published on /about (see PartnerInterim). No code
// changes are needed here when a full profile is added later.
export function generateStaticParams(): Params[] {
  return leaders.map((l) => ({ partner: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { partner: slug } = await params;
  const partner = getPartner(slug);
  if (partner) {
    return {
      title: `${partner.metaTitle} | Sagar & Sagar Law Offices`,
      description: partner.description,
      keywords: partner.keywords,
      alternates: { canonical: `/about/${slug}` },
      openGraph: {
        title: partner.metaTitle,
        description: partner.description,
        url: `/about/${slug}`,
        type: "profile",
      },
    };
  }

  const leader = leaders.find((l) => l.slug === slug);
  if (!leader) return {};
  return {
    title: `${leader.name} | Sagar & Sagar Law Offices`,
    description: leader.bio,
    alternates: { canonical: `/about/${slug}` },
  };
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { partner: slug } = await params;
  const partner = getPartner(slug);

  if (partner) {
    return (
      <>
        <JsonLd data={partnerProfileSchema(partner)} />
        <JsonLd
          data={breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: partner.breadcrumbLabel, path: `/about/${slug}` },
          ])}
        />
        <PartnerProfileLayout partner={partner} />
      </>
    );
  }

  const leader = leaders.find((l) => l.slug === slug);
  if (!leader) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: leader.name, path: `/about/${slug}` },
        ])}
      />
      <PartnerInterim leader={leader} />
    </>
  );
}
