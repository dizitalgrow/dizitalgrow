import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/sanity";
import { SERVICE_DETAIL_PAGES } from "@/constants/site-data";
import { SOLUTIONS_DATA } from "@/constants/solutions-data";
import { INDUSTRIES_DATA } from "@/constants/industries-data";
import { TOOL_CATEGORIES, TOOLS_DATA } from "@/constants/tools-data";

export const revalidate = 3600; // Revalidate sitemap at most once per hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dizitalgrow.in";
  const currentDate = new Date();

  // 1. Static Core Brand & Marketing Pages
  const staticCoreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/meta-capi`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Service Detail Routes (7 core disciplines)
  const serviceDetailRoutes: MetadataRoute.Sitemap = Object.keys(
    SERVICE_DETAIL_PAGES
  ).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 3. Solutions Detail Routes (9 solutions)
  const solutionRoutes: MetadataRoute.Sitemap = Object.keys(SOLUTIONS_DATA).map(
    (slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  // 4. Industries Detail Routes (6 sectors)
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(INDUSTRIES_DATA).map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  // 5. Tool Categories (6 categories)
  const toolCategoryRoutes: MetadataRoute.Sitemap = Object.keys(
    TOOL_CATEGORIES
  ).map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 6. Individual Free Tools (24 utilities)
  const toolRoutes: MetadataRoute.Sitemap = Object.keys(TOOLS_DATA).map(
    (slug) => ({
      url: `${baseUrl}/tools/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    // Dynamic published blog articles from Sanity CMS
    const posts = await getBlogPosts({ limit: 100 });
    postRoutes = posts
      .filter((post) => Boolean(post?.slug?.current))
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post.updatedAt
          ? new Date(post.updatedAt)
          : post.publishedAt
          ? new Date(post.publishedAt)
          : currentDate,
        changeFrequency: "weekly",
        priority: 0.75,
      }));
  } catch (err) {
    console.warn("[Sitemap] Could not retrieve dynamic blog posts from Sanity:", err);
  }

  // Combine and deduplicate URLs by location
  const allEntries: MetadataRoute.Sitemap = [
    ...staticCoreRoutes,
    ...serviceDetailRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...toolCategoryRoutes,
    ...toolRoutes,
    ...postRoutes,
  ];

  const uniqueMap = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of allEntries) {
    if (!uniqueMap.has(entry.url)) {
      uniqueMap.set(entry.url, entry);
    }
  }

  return Array.from(uniqueMap.values());
}
