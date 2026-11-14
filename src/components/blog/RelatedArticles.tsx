import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { BlogCard } from "./BlogCard";
import type { SanityPost } from "@/lib/sanity";

interface RelatedArticlesProps {
  articles: SanityPost[];
  currentCategory?: string;
  className?: string;
}

export function RelatedArticles({
  articles,
  currentCategory,
  className = "",
}: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Related Articles & Resources"
      className={`space-y-6 pt-10 border-t border-[rgba(213,255,64,0.15)] ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#D5FF40]" />
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white m-0">
              Related Articles & Growth Guides
            </h2>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Explore deeper frameworks and companion tutorials in this topic cluster.
          </p>
        </div>

        {currentCategory && (
          <Link
            href={`/blog/category/${encodeURIComponent(currentCategory.toLowerCase().replace(/\s+/g, "-"))}`}
            className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
          >
            <span>All {currentCategory} Guides</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard key={article._id} post={article} />
        ))}
      </div>
    </section>
  );
}
