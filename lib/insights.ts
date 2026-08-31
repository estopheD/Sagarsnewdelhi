import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");
const WORDS_PER_MINUTE = 200;

export type InsightFaq = {
  question: string;
  answer: string;
};

export type TocItem = {
  id: string;
  title: string;
};

export type InsightDirectContact = {
  partnerNumber: string;
  partnerNote: string;
  emails: string[];
};

export type InsightFrontmatter = {
  title: string;
  // Overrides `title` in <title>/OG/Twitter tags only, for posts whose H1
  // is longer than reads well in a browser tab. Falls back to `title`.
  metaTitle?: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  author: string;
  category: string;
  keywords?: string[];
  faqs?: InsightFaq[];
  priority?: number; // sitemap priority; defaults to 0.5
  placeholder?: boolean;
  // Opt-in highlighted contact block rendered after the FAQ, for posts
  // meant to convert a specific reader intent (e.g. family law enquiries)
  // rather than the standard neutral /contact link alone. Rendered as
  // real React, not raw HTML in the .mdx body — MDX's remark pipeline
  // (remark-gfm's autolink in particular) re-processes bare emails/URLs
  // typed as literal HTML in the source, which produces nested <a>/<p>
  // elements and a hydration error. Keep it structured data instead.
  directContact?: InsightDirectContact;
};

export type InsightSummary = InsightFrontmatter & {
  slug: string;
  excerpt: string;
  readingTime: string;
  wordCount: number;
};

export type InsightPost = InsightSummary & { content: string; toc: TocItem[] };

function readSlugs(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function wordCount(text: string): number {
  const matches = text.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

function readingTimeFor(content: string): string {
  const minutes = Math.max(1, Math.round(wordCount(content) / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

// The excerpt is derived from the post's own first body paragraph (the
// answer-first paragraph), not hand-written, so listing pages never drift
// from what the post actually opens with.
function excerptFor(content: string): string {
  const firstParagraph = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block.length > 0 && !block.startsWith("#") && !block.startsWith(">"));

  if (!firstParagraph) return "";

  const plain = firstParagraph
    .replace(/<\/?[^>]+>/g, "")
    .replace(/[*_`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  const words = plain.split(" ");
  return words.length > 30 ? `${words.slice(0, 30).join(" ")}…` : plain;
}

// Extracts a table of contents from the post's own h3 (###) section
// headings, only. Long-form reference posts use h3 for their top-level
// sections; shorter posts don't use h3 at all, so this returns an empty
// array for them and PostLayout simply omits the ToC.
//
// IDs are computed with the same `github-slugger` algorithm rehype-slug
// uses to stamp ids onto the rendered headings, and headings are walked in
// document order with a fresh slugger instance (matching rehype-slug's
// per-document dedupe behaviour), so an id computed here always matches the
// id actually present in the rendered HTML.
function extractHeadings(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const headings: TocItem[] = [];
  const headingLine = /^###\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = headingLine.exec(content)) !== null) {
    const title = match[1].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugger.slug(title), title });
  }
  return headings;
}

export function getAllInsights(): InsightSummary[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.mdx`), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as InsightFrontmatter;
      return {
        ...frontmatter,
        slug,
        excerpt: excerptFor(content),
        readingTime: readingTimeFor(content),
        wordCount: wordCount(content),
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getInsight(slug: string): InsightPost | null {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as InsightFrontmatter;
  return {
    ...frontmatter,
    slug,
    content,
    excerpt: excerptFor(content),
    readingTime: readingTimeFor(content),
    wordCount: wordCount(content),
    toc: extractHeadings(content),
  };
}

// Posts whose raw body links to the given path, for a page's reciprocal
// "Related Insights" block. A link, not a mention, is required — this only
// matches actual markdown link targets. Used for both /practice-areas/{slug}
// and other standing pages (e.g. /lpo) that anchor an Insights cluster.
export function getInsightsLinkingTo(targetPath: string): InsightSummary[] {
  return readSlugs()
    .filter((postSlug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${postSlug}.mdx`), "utf8");
      const { content } = matter(raw);
      return content.includes(`](${targetPath}/`) || content.includes(`](${targetPath})`);
    })
    .map((postSlug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${postSlug}.mdx`), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as InsightFrontmatter;
      return {
        ...frontmatter,
        slug: postSlug,
        excerpt: excerptFor(content),
        readingTime: readingTimeFor(content),
        wordCount: wordCount(content),
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getInsightsLinkingToPracticeArea(slug: string): InsightSummary[] {
  return getInsightsLinkingTo(`/practice-areas/${slug}`);
}
