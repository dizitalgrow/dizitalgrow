"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { SanityPost } from "@/lib/sanity";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface LearnAndGrowSectionProps {
  posts?: SanityPost[];
}

const INSIGHTS_CATEGORIES = [
  "Digital Growth",
  "Website & Tech",
  "Marketing",
  "Advertising",
  "SEO",
  "Analytics & CAPI",
  "Entrepreneurship",
];

export function LearnAndGrowSection({ posts = [] }: LearnAndGrowSectionProps) {
  // Check if the verified post is already in the fetched list
  const hasSanityPosts = posts && posts.length > 0;
  const verifiedArticleSlug = "how-to-grow-your-business-online";

  return (
    <section id="insights" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#070707] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  KNOWLEDGE & INSIGHTS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Understand Digital. <br />
                <span className="text-[#D5FF40]">Grow Smarter.</span>
              </h2>
              <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
                We believe in educating business owners and creators. Practical articles, architectural frameworks, and ad strategies to help you understand before you spend.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
            >
              <span>Explore All Insights</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Categories Strip */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[rgba(213,255,64,0.12)] mb-10">
          <span className="text-xs font-mono text-[#B0B0B0] uppercase font-bold mr-2">
            TOPICS:
          </span>
          {INSIGHTS_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href="/blog"
              className="px-3 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] text-[#A1A1AA] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
            >
              #{cat}
            </Link>
          ))}
        </div>

        {/* Featured Flagship Article Highlight */}
        <div className="mb-10">
          <Link
            href={`/blog/${verifiedArticleSlug}`}
            className="group block border border-[rgba(213,255,64,0.22)] bg-[#0A0A0A] p-6 sm:p-10 rounded-[2px] hover:border-[#D5FF40] transition-all"
          >
            <div className="grid gap-6 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#050505] bg-[#D5FF40] px-2 py-0.5 rounded-[2px] font-bold">
                    FLAGSHIP GUIDE
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    6 min read · AI &amp; Digital Marketing
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white group-hover:text-[#D5FF40] transition-colors leading-tight">
                  How to Grow Your Business Online in 2026
                </h3>

                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed max-w-2xl">
                  Discover how to grow your business online in 2026 by combining Google SEO, AI-powered search, social media, and helpful content to reach the right customers.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] group-hover:underline">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Dynamic Published Articles from Sanity */}
        {hasSanityPosts && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                MORE RECENT PUBLICATIONS
              </span>
            </div>
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts
                .filter((p) => p.slug?.current !== verifiedArticleSlug)
                .slice(0, 3)
                .map((post) => (
                  <StaggerItem key={post._id}>
                    <BlogCard post={post} />
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        )}
      </div>
    </section>
  );
}
