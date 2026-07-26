import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import type { InsightPost } from "@/lib/insights";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-12 font-serif text-2xl text-ink" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-8 font-serif text-xl text-ink" {...props} />
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
};

export function PostLayout({ post }: { post: InsightPost }) {
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

        <div className="prose-measure mt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="prose-measure mt-14">
            <h2 className="font-serif text-2xl text-ink">FAQ</h2>
            <div className="mt-6">
              <FaqAccordion items={post.faqs} />
            </div>
          </div>
        )}
      </article>
    </>
  );
}
