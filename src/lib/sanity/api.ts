import { sanityClient } from "./client";
import {
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  FEATURED_POSTS_QUERY,
  ALL_CATEGORIES_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type {
  SanityPost,
  SanityPostDetail,
  SanitySiteSettings,
  PostsQueryParams,
} from "./types";

/**
 * Fetch published blog articles with optional category filtering and pagination.
 * Always returns an array (empty on error or when no articles exist).
 */
export async function getBlogPosts(
  params: PostsQueryParams = {}
): Promise<SanityPost[]> {
  const { limit = 12, offset = 0, category } = params;

  try {
    if (category && category.trim() !== "" && category.toLowerCase() !== "all") {
      const posts = await sanityClient.fetch<SanityPost[]>(
        POSTS_BY_CATEGORY_QUERY,
        {
          category: category.trim(),
          offset,
          limit: offset + limit,
        },
        { next: { revalidate: 60, tags: ["sanity-posts"] } }
      );
      return Array.isArray(posts) ? posts : [];
    }

    const posts = await sanityClient.fetch<SanityPost[]>(
      POSTS_QUERY,
      {
        offset,
        limit: offset + limit,
      },
      { next: { revalidate: 60, tags: ["sanity-posts"] } }
    );
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.warn("[Sanity API] Error fetching blog posts:", err);
    return [];
  }
}

/**
 * Fetch a single published blog article by slug.
 * Returns null if the article is missing, unpublished, or a draft.
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<SanityPostDetail | null> {
  if (!slug || typeof slug !== "string") return null;

  try {
    const post = await sanityClient.fetch<SanityPostDetail | null>(
      POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60, tags: [`sanity-post-${slug}`] } }
    );
    return post || null;
  } catch (err) {
    console.warn(`[Sanity API] Error fetching post by slug "${slug}":`, err);
    return null;
  }
}

/**
 * Fetch featured posts for homepage or showcase sections.
 * Falls back to newest published articles if no posts have featured == true.
 */
export async function getFeaturedPosts(limit = 3): Promise<SanityPost[]> {
  try {
    const featured = await sanityClient.fetch<SanityPost[]>(
      FEATURED_POSTS_QUERY,
      { limit },
      { next: { revalidate: 60, tags: ["sanity-featured-posts"] } }
    );

    if (Array.isArray(featured) && featured.length > 0) {
      return featured;
    }

    // Fall back to newest published articles
    return await getBlogPosts({ limit });
  } catch (err) {
    console.warn("[Sanity API] Error fetching featured posts:", err);
    return [];
  }
}

/**
 * Fetch posts for a specific category.
 */
export async function getPostsByCategory(
  category: string,
  limit = 12
): Promise<SanityPost[]> {
  return getBlogPosts({ category, limit });
}

/**
 * Fetch all distinct categories present in published posts.
 */
export async function getAllCategories(): Promise<string[]> {
  try {
    const categories = await sanityClient.fetch<string[]>(
      ALL_CATEGORIES_QUERY,
      {},
      { next: { revalidate: 120, tags: ["sanity-categories"] } }
    );
    return Array.isArray(categories)
      ? categories.filter((c): c is string => Boolean(c && typeof c === "string"))
      : [];
  } catch (err) {
    console.warn("[Sanity API] Error fetching categories:", err);
    return [];
  }
}

/**
 * Fetch global layout settings (siteSettings singleton).
 */
export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    const settings = await sanityClient.fetch<SanitySiteSettings | null>(
      SITE_SETTINGS_QUERY,
      {},
      { next: { revalidate: 60, tags: ["sanity-site-settings"] } }
    );
    return settings || null;
  } catch (err) {
    console.warn("[Sanity API] Error fetching site settings:", err);
    return null;
  }
}
