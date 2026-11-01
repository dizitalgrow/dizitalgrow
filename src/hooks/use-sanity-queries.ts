"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import {
  getBlogPosts,
  getAllCategories,
  getSiteSettings,
} from "@/lib/sanity";
import type {
  SanityPost,
  SanitySiteSettings,
  PostsQueryParams,
} from "@/lib/sanity";

/**
 * Query key factory for active Sanity CMS client queries
 */
export const sanityKeys = {
  all: ["sanity"] as const,
  posts: () => [...sanityKeys.all, "posts"] as const,
  postList: (params?: PostsQueryParams) =>
    [...sanityKeys.posts(), "list", params ?? {}] as const,
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
 * Hook to retrieve all distinct categories from published posts.
 */
export function useCategories(
  options?: Omit<UseQueryOptions<string[], Error>, "queryKey" | "queryFn">
) {
  return useQuery<string[], Error>({
    queryKey: sanityKeys.categories(),
    queryFn: () => getAllCategories(),
    staleTime: 120 * 1000,
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
