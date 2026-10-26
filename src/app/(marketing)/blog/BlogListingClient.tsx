"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, BookOpen, Sparkles } from "lucide-react";
import { useBlogPosts, useCategories } from "@/hooks/use-sanity-queries";
import { useDebounce } from "@/hooks";
import { BlogCard } from "@/components/blog/BlogCard";
import type { SanityPost } from "@/lib/sanity";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface BlogListingClientProps {
  initialPosts: SanityPost[];
  initialCategories: string[];
}

export function BlogListingClient({
  initialPosts,
  initialCategories,
}: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  // Categories query with fallback to server-fetched initialCategories
  const { data: categories = initialCategories } = useCategories({
    initialData: initialCategories.length > 0 ? initialCategories : undefined,
    refetchOnMount: true,
  });

  // Posts query with TanStack Query caching
  const {
    data: posts = initialPosts,
    isLoading,
    isError,
    error,
    refetch,
  } = useBlogPosts(
    {
      category: selectedCategory === "ALL" ? undefined : selectedCategory,
    },
    {
      initialData:
        selectedCategory === "ALL" && initialPosts.length > 0
          ? initialPosts
          : undefined,
      refetchOnMount: true,
    }
  );

  // Client-side search filtering over retrieved posts with debounced query
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (!debouncedSearchQuery.trim()) return posts;

    const query = debouncedSearchQuery.toLowerCase().trim();
    return posts.filter((post) => {
      const matchTitle = post.title?.toLowerCase().includes(query);
      const matchExcerpt = post.excerpt?.toLowerCase().includes(query);
      const matchTag = post.tags?.some((t) => t.toLowerCase().includes(query));
      return matchTitle || matchExcerpt || matchTag;
    });
  }, [posts, debouncedSearchQuery]);

  // Combined category tabs: ALL + dynamic categories from Sanity
  const categoryTabs = useMemo(() => {
    const list = ["ALL"];
    categories.forEach((cat) => {
      if (cat && !list.includes(cat)) {
        list.push(cat);
      }
    });
    return list;
  }, [categories]);

  return (
    <div className="space-y-10">
      {/* Controls Bar: Search & Category Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[rgba(213,255,64,0.12)]">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mr-1 hidden sm:block" />
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedCategory(tab)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-[2px] transition-colors shrink-0 cursor-pointer focus-cyber ${
                  isActive
                    ? "bg-[#D5FF40] text-[#050505] font-extrabold"
                    : "border border-[rgba(213,255,64,0.2)] bg-[#101010] text-[#B0B0B0] hover:text-white hover:border-[rgba(213,255,64,0.4)]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#B0B0B0]" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by keyword..."
            className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] text-white placeholder:text-[#64748B] focus:border-[#D5FF40] focus:ring-1 focus:ring-[#D5FF40] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Loading Skeleton State */}
      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border border-[rgba(213,255,64,0.1)] bg-[#0A0A0A] p-6 space-y-4 animate-pulse"
            >
              <div className="aspect-[16/10] bg-[#141414] rounded-[2px]" />
              <div className="h-4 w-24 bg-[#181818] rounded-[2px]" />
              <div className="h-6 w-3/4 bg-[#181818] rounded-[2px]" />
              <div className="h-12 w-full bg-[#181818] rounded-[2px]" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="border border-red-500/30 bg-red-950/20 p-8 text-center rounded-[2px] space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
            {"// ERROR LOADING ARTICLES"}
          </p>
          <p className="text-sm text-[#B0B0B0] max-w-md mx-auto">
            {error?.message || "Could not retrieve articles from Sanity CMS."}
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-mono font-bold uppercase rounded-[2px] hover:bg-[#c2ea36]"
          >
            Retry Query
          </button>
        </div>
      )}

      {/* Empty State: No articles published or matching search */}
      {!isLoading && !isError && filteredPosts.length === 0 && (
        <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-12 sm:p-16 text-center rounded-[2px] space-y-5">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] mx-auto">
            <BookOpen className="h-6 w-6" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40] block">
              {"// KNOWLEDGE BASE STATUS"}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {searchQuery
                ? `No articles found matching "${searchQuery}"`
                : selectedCategory !== "ALL"
                ? `No articles published in "${selectedCategory}" yet`
                : "No Articles Published Yet"}
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
              {searchQuery
                ? "Try adjusting your search terms or selecting a different category."
                : "Our growth playbooks and technical deep-dives are currently being authored in Sanity CMS. Check back shortly or discuss your growth questions directly with us."}
            </p>
          </div>

          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
            >
              <span>Get Direct Growth Advice</span>
              <Sparkles className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {!isLoading && !isError && filteredPosts.length > 0 && (
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <StaggerItem key={post._id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
