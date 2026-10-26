import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

// Search and citation crawlers are named explicitly so that this site's
// access for AI search (ChatGPT search, Claude search, Perplexity, Bing /
// Copilot, Google AI Overviews and AI Mode via Googlebot) is a recorded
// decision rather than an accident of the wildcard rule.
//
// Model-training tokens (GPTBot, ClaudeBot, Google-Extended, CCBot) are a
// separate decision and are deliberately NOT listed here: they fall under the
// wildcard rule exactly as before. Blocking a training token does not remove
// a site from AI search, and Google-Extended does not govern AI Overviews or
// AI Mode (those use ordinary Googlebot crawling).
const SEARCH_AND_CITATION_CRAWLERS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Googlebot",
  "bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...SEARCH_AND_CITATION_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
