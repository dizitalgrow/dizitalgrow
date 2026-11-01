import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/sanity";
import { SERVICE_DETAIL_PAGES } from "@/constants/site-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dizitalgrow.in";
  const currentDate = new Date();

  // Static core routes
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
      url: `${baseUrl}/meta-capi`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service detail routes
  const serviceDetailRoutes: MetadataRoute.Sitemap = Object.keys(
    SERVICE_DETAIL_PAGES
  ).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  try {
    // Dynamic published blog posts from Sanity
    const posts = await getBlogPosts({ limit: 100 });
    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: post.updatedAt
        ? new Date(post.updatedAt)
        : post.publishedAt
        ? new Date(post.publishedAt)
        : currentDate,
      changeFrequency: "weekly",
      priority: 0.75,
    }));

    return [...staticCoreRoutes, ...serviceDetailRoutes, ...postRoutes];
  } catch (err) {
    console.warn("[Sitemap] Could not retrieve dynamic blog posts:", err);
    return [...staticCoreRoutes, ...serviceDetailRoutes];
  }
}
