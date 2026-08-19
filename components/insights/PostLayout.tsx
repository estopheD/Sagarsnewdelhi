import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { TableOfContents } from "@/components/insights/TableOfContents";
import type { InsightPost } from "@/lib/insights";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
};

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-12 font-serif text-2xl text-ink" {...props} />
  ),
  // Used by long-form reference posts for their numbered top-level
  // sections (e.g. "I. What the Code was built to do"), which is what
  // TableOfContents links to — so it gets the same visual weight as h2.
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-12 scroll-mt-8 font-serif text-2xl text-ink" {...props} />
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
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-2 border-accent pl-4 italic text-ink-muted"
      {...props}
    />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-b border-line text-ink" {...props} />
  ),
  tbody: (props: React.ComponentProps<"tbody">) => (
    <tbody className="divide-y divide-line text-ink-muted" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th scope="col" className="py-2 pr-6 font-serif font-normal text-ink" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => <td className="py-2 pr-6" {...props} />,
  // MDX only routes markdown-syntax elements (headings, `[text](url)` links,
  // GFM tables) through this components map — literal HTML tags typed
  // directly in an .mdx file compile straight to JSX and need their classes
  // written out by hand at the call site (see the §VI comparison table in
  // the FCRA post, which needs <th scope="row"> that GFM tables can't
  // produce). This `a` mapping is what actually reaches every `[text](url)`
  // link in every post, though, since those are markdown-syntax links.
  a: ({ href, className, ...props }: React.ComponentProps<"a">) => {
    const isContactLink = href === "/contact" || href === "/contact/";
    return (
      <a
        href={href}
        className={
          isContactLink
            ? "text-accent italic underline decoration-1 underline-offset-2 hover:text-accent-hover"
            : "text-accent hover:text-accent-hover"
        }
        {...props}
      />
    );
  },
};

export function PostLayout({ post }: { post: InsightPost }) {
  const hasToc = post.toc.length > 0;

  const body = (
    <div className="prose-measure">
      <MDXRemote source={post.content} components={mdxComponents} options={mdxOptions} />

      {post.faqs && post.faqs.length > 0 && (
        <div className="mt-14">
          <h2 className="font-serif text-2xl text-ink">FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={post.faqs} />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ]}
      />
      <article className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header className="prose-measure">
          {post.placeholder && (
            <p className="mb-4 border border-accent px-3 py-2 text-xs text-accent">
              Placeholder content — not for publication.
            </p>
          )}
          <p className="text-xs uppercase tracking-wide text-accent">
            Legal Analysis &amp; Regulatory Commentary · {post.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-wide text-ink-muted">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {" · "}
            {post.author}
            {" · "}
            {post.readingTime}
          </p>
        </header>

        {hasToc ? (
          <div className="mt-10 lg:grid lg:grid-cols-[240px_1fr] lg:items-start lg:gap-12">
            <TableOfContents items={post.toc} />
            {body}
          </div>
        ) : (
          <div className="mt-10">{body}</div>
        )}
      </article>
    </>
  );
}
