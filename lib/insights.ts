import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");
const WORDS_PER_MINUTE = 200;

export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightFrontmatter = {
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  author: string;
  category: string;
  keywords?: string[];
  faqs?: InsightFaq[];
  placeholder?: boolean;
};

export type InsightSummary = InsightFrontmatter & { slug: string; excerpt: string; readingTime: string };

export type InsightPost = InsightSummary & { content: string };

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
  };
}
