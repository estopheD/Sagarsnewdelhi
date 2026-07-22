import Link from "next/link";
import type { InsightSummary } from "@/lib/insights";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post }: { post: InsightSummary }) {
  return (
    <article className="border-b border-line py-8 first:pt-0 last:border-b-0">
      <p className="text-xs uppercase tracking-wide text-ink-muted">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        {post.placeholder && (
          <span className="ml-2 text-accent">Placeholder</span>
        )}
      </p>
      <h3 className="mt-2 font-serif text-2xl text-ink">
        <Link href={`/insights/${post.slug}`} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-muted">
        {post.description}
      </p>
      <Link
        href={`/insights/${post.slug}`}
        className="mt-4 inline-block text-sm text-accent hover:text-accent-hover"
      >
        Read more →
      </Link>
    </article>
  );
}
