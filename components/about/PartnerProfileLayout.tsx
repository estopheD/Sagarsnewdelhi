import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Partner } from "@/lib/partners";

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

// Shared with the general typographic conventions used by PostLayout's
// mdxComponents (Insights posts) — same headings, paragraph rhythm, list
// and link styling — so a partner profile reads as part of the same site,
// not a bespoke page type.
const partnerMdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-12 font-serif text-2xl text-ink" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-5 leading-relaxed text-ink" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-ink" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-ink" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-accent hover:text-accent-hover" {...props} />
  ),
};

export function PartnerProfileLayout({ partner }: { partner: Partner }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: partner.breadcrumbLabel, path: `/about/${partner.slug}` },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header className="prose-measure">
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {partner.honorific ? `${partner.honorific} ` : ""}
            {partner.name}
          </h1>
          <p className="mt-2 font-serif text-xl text-ink-muted">{partner.role}</p>
          <p className="mt-3 text-sm italic text-ink-muted">{partner.enrolledNote}</p>
        </header>

        <div className="prose-measure mt-10">
          <MDXRemote
            source={partner.bodyBeforeEducation}
            components={partnerMdxComponents}
            options={mdxOptions}
          />

          <h2 className="mt-12 font-serif text-2xl text-ink">
            Education and admission to the Bar
          </h2>
          <dl className="mt-5 space-y-3 text-sm">
            {partner.education.map((row) => (
              <div key={row.label} className="sm:flex sm:gap-x-4">
                <dt className="text-ink-muted sm:w-72 sm:shrink-0">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 leading-relaxed text-ink">{partner.educationNote}</p>

          {partner.bodyAfterEducation && (
            <MDXRemote
              source={partner.bodyAfterEducation}
              components={partnerMdxComponents}
              options={mdxOptions}
            />
          )}

          {partner.directContact && (
            <div className="mt-10 border border-accent bg-paper-raised px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-accent">Partner contact</p>
              <a
                href={`tel:${partner.directContact.partnerNumber}`}
                className="mt-1 block font-serif text-lg text-ink hover:text-accent"
              >
                {partner.directContact.partnerNumber}
              </a>
              <p className="mt-0.5 text-xs text-ink-muted">{partner.directContact.partnerNote}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-accent">Email</p>
              <p className="mt-1 text-sm">
                {partner.directContact.emails.map((email, i) => (
                  <span key={email}>
                    <a href={`mailto:${email}`} className="text-accent hover:text-accent-hover">
                      {email}
                    </a>
                    {i < partner.directContact!.emails.length - 1 && (
                      <span className="text-ink-muted">, </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
