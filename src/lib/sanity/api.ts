import { sanityClient } from "./client";
import {
  POSTS_QUERY,
  POSTS_COUNT_QUERY,
  POSTS_BY_CATEGORY_COUNT_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  POSTS_BY_AUTHOR_QUERY,
  RELATED_POSTS_QUERY,
  ALL_CATEGORIES_QUERY,
  AUTHOR_BY_SLUG_QUERY,
  ALL_AUTHORS_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type {
  SanityPost,
  SanityPostDetail,
  SanityAuthor,
  SanitySiteSettings,
  PostsQueryParams,
} from "./types";

// Default editorial author fallback when document does not have a linked author reference
export const DEFAULT_AUTHOR: SanityAuthor = {
  _id: "default-editorial-author",
  _type: "author",
  name: "Dizital Grow Editorial",
  slug: { current: "dizital-grow-editorial" },
  designation: "Digital Growth & Engineering Practice",
  bio: "The DizitalGrow Editorial & Engineering team authors research-backed frameworks, conversion tracking guides, and technical architectures for growing businesses.",
  expertise: [
    "Full-Stack Web Development",
    "Meta CAPI & Server GTM",
    "Google Ads Optimization",
    "High-Conversion UX",
    "Core Web Vitals",
  ],
  experience:
    "Over 8 years building digital experiences, ad infrastructures, and telemetry pipelines for online businesses.",
  websiteUrl: "https://dizitalgrow.in",
  linkedinUrl: "https://linkedin.com/company/dizitalgrow",
};

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
 * Count total published blog posts (optionally filtered by category)
 */
export async function getBlogPostsCount(category?: string): Promise<number> {
  try {
    if (category && category.trim() !== "" && category.toLowerCase() !== "all") {
      const count = await sanityClient.fetch<number>(
        POSTS_BY_CATEGORY_COUNT_QUERY,
        { category: category.trim() },
        { next: { revalidate: 60, tags: ["sanity-posts"] } }
      );
      return typeof count === "number" ? count : 0;
    }

    const count = await sanityClient.fetch<number>(
      POSTS_COUNT_QUERY,
      {},
      { next: { revalidate: 60, tags: ["sanity-posts"] } }
    );
    return typeof count === "number" ? count : 0;
  } catch (err) {
    console.warn("[Sanity API] Error counting blog posts:", err);
    return 0;
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

    if (!post) return null;

    // Provide default fallback author profile if none linked
    if (!post.authorProfile) {
      post.authorProfile = {
        ...DEFAULT_AUTHOR,
        name: post.author || DEFAULT_AUTHOR.name,
      };
    }

    return post;
  } catch (err) {
    console.warn(`[Sanity API] Error fetching post by slug "${slug}":`, err);
    return null;
  }
}

/**
 * Fetch related articles using semantic topic affinity (category & matching tags)
 * Excludes the current post.
 */
export async function getRelatedPosts(
  currentSlug: string,
  category = "",
  tags: string[] = [],
  limit = 3
): Promise<SanityPost[]> {
  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      RELATED_POSTS_QUERY,
      {
        currentSlug,
        category: category || "",
        tags: Array.isArray(tags) ? tags : [],
        limit,
      },
      { next: { revalidate: 60, tags: ["sanity-posts"] } }
    );
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.warn("[Sanity API] Error fetching related posts:", err);
    return [];
  }
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
 * Fetch author profile by slug
 */
export async function getAuthorBySlug(slug: string): Promise<SanityAuthor | null> {
  if (!slug || typeof slug !== "string") return null;

  if (slug === DEFAULT_AUTHOR.slug.current) {
    return DEFAULT_AUTHOR;
  }

  try {
    const author = await sanityClient.fetch<SanityAuthor | null>(
      AUTHOR_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 120, tags: [`sanity-author-${slug}`] } }
    );
    return author || null;
  } catch (err) {
    console.warn(`[Sanity API] Error fetching author by slug "${slug}":`, err);
    return null;
  }
}

/**
 * Fetch all authors
 */
export async function getAllAuthors(): Promise<SanityAuthor[]> {
  try {
    const authors = await sanityClient.fetch<SanityAuthor[]>(
      ALL_AUTHORS_QUERY,
      {},
      { next: { revalidate: 120, tags: ["sanity-authors"] } }
    );
    const list = Array.isArray(authors) ? authors : [];
    // Ensure default author is included
    if (!list.some((a) => a.slug.current === DEFAULT_AUTHOR.slug.current)) {
      list.push(DEFAULT_AUTHOR);
    }
    return list;
  } catch (err) {
    console.warn("[Sanity API] Error fetching authors:", err);
    return [DEFAULT_AUTHOR];
  }
}

/**
 * Fetch posts written by an author
 */
export async function getPostsByAuthor(
  authorSlug: string,
  authorName = "",
  limit = 12
): Promise<SanityPost[]> {
  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      POSTS_BY_AUTHOR_QUERY,
      {
        authorSlug,
        authorName: authorName || "Dizital Grow",
        offset: 0,
        limit,
      },
      { next: { revalidate: 60, tags: ["sanity-posts"] } }
    );
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.warn("[Sanity API] Error fetching posts by author:", err);
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
