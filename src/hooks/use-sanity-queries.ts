"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import {
  getBlogPosts,
  getBlogPostBySlug,
  getFeaturedPosts,
  getPostsByCategory,
  getAllCategories,
  getSiteSettings,
} from "@/lib/sanity";
import type {
  SanityPost,
  SanityPostDetail,
  SanitySiteSettings,
  PostsQueryParams,
} from "@/lib/sanity";

/**
 * Stable query key factory for Sanity CMS queries
 */
export const sanityKeys = {
  all: ["sanity"] as const,
  posts: () => [...sanityKeys.all, "posts"] as const,
  postList: (params?: PostsQueryParams) =>
    [...sanityKeys.posts(), "list", params ?? {}] as const,
  postDetail: (slug: string) =>
    [...sanityKeys.posts(), "detail", slug] as const,
  featured: (limit?: number) =>
    [...sanityKeys.posts(), "featured", limit ?? 3] as const,
  byCategory: (category: string, limit?: number) =>
    [...sanityKeys.posts(), "category", category.toLowerCase(), limit ?? 12] as const,
  categories: () => [...sanityKeys.all, "categories"] as const,
  siteSettings: () => [...sanityKeys.all, "siteSettings"] as const,
};

/**
 * Hook to retrieve published blog posts with optional category filtering and pagination.
 */
export function useBlogPosts(
  params?: PostsQueryParams,
  options?: Omit<UseQueryOptions<SanityPost[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<SanityPost[], Error>({
    queryKey: sanityKeys.postList(params),
    queryFn: () => getBlogPosts(params),
    staleTime: 60 * 1000,
    ...options,
  });
}

/**
 * Hook to retrieve a single blog article by slug.
 * Disables query automatically when slug is empty or missing.
 */
export function useBlogPost(
  slug: string,
  options?: Omit<UseQueryOptions<SanityPostDetail | null, Error>, "queryKey" | "queryFn">
) {
  return useQuery<SanityPostDetail | null, Error>({
    queryKey: sanityKeys.postDetail(slug),
    queryFn: () => getBlogPostBySlug(slug),
    enabled: Boolean(slug && slug.trim() !== ""),
    staleTime: 60 * 1000,
    ...options,
  });
}

/**
 * Hook to retrieve featured blog articles, falling back to newest published articles.
 */
export function useFeaturedPosts(
  limit = 3,
  options?: Omit<UseQueryOptions<SanityPost[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<SanityPost[], Error>({
    queryKey: sanityKeys.featured(limit),
    queryFn: () => getFeaturedPosts(limit),
    staleTime: 60 * 1000,
    ...options,
  });
}

/**
 * Hook to retrieve articles filtered by category.
 */
export function usePostsByCategory(
  category: string,
  limit = 12,
  options?: Omit<UseQueryOptions<SanityPost[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<SanityPost[], Error>({
    queryKey: sanityKeys.byCategory(category, limit),
    queryFn: () => getPostsByCategory(category, limit),
    enabled: Boolean(category && category.trim() !== ""),
    staleTime: 60 * 1000,
    ...options,
  });
}

/**
 * Hook to retrieve all distinct categories from published posts.
 */
export function useCategories(
  options?: Omit<UseQueryOptions<string[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<string[], Error>({
    queryKey: sanityKeys.categories(),
    queryFn: () => getAllCategories(),
    staleTime: 120 * 1000, // Categories change less frequently
    ...options,
  });
}

/**
 * Hook to retrieve global layout settings from Sanity.
 */
export function useSiteSettings(
  options?: Omit<UseQueryOptions<SanitySiteSettings | null, Error>, "queryKey" | "queryFn">
) {
  return useQuery<SanitySiteSettings | null, Error>({
    queryKey: sanityKeys.siteSettings(),
    queryFn: () => getSiteSettings(),
    staleTime: 60 * 1000,
    ...options,
  });
}
