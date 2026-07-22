import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { getAllInsights } from "@/lib/insights";
import { practiceAreaContent } from "@/content/practice-areas/index";
import { partnerContent } from "@/content/partners/index";

export const dynamic = "force-static";

// Generated from the app router's actual routes, not a hardcoded list.
// Practice-area and partner routes only appear here once their content is
// added to the respective registries — see content/README notes.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const practiceAreaRoutes: MetadataRoute.Sitemap = Object.keys(practiceAreaContent).map(
    (slug) => ({
      url: `${SITE_URL}/practice-areas/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const partnerRoutes: MetadataRoute.Sitemap = Object.keys(partnerContent).map((slug) => ({
    url: `${SITE_URL}/about/${slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = getAllInsights().map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...partnerRoutes, ...insightRoutes];
}
