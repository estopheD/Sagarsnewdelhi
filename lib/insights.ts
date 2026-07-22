import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightFrontmatter = {
  title: string;
  description: string;
  publishedAt: string; // ISO date
  author: string;
  placeholder?: boolean;
};

export type InsightSummary = InsightFrontmatter & { slug: string };

export type InsightPost = InsightSummary & { content: string };

function readSlugs(): string[] {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];
  return fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllInsights(): InsightSummary[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { ...(data as InsightFrontmatter), slug };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getInsight(slug: string): InsightPost | null {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...(data as InsightFrontmatter), slug, content };
}
