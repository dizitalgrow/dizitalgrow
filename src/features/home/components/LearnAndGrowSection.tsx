import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { EDUCATIONAL_TOPICS } from "@/constants/site-data";
import { BlogCard } from "@/components/blog/BlogCard";
import type { SanityPost } from "@/lib/sanity";

interface LearnAndGrowSectionProps {
  posts?: SanityPost[];
}

export function LearnAndGrowSection({ posts = [] }: LearnAndGrowSectionProps) {
  const hasSanityPosts = posts && posts.length > 0;

  return (
    <section id="learn" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// EDUCATIONAL GUIDES & ARTICLES"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Learn digital marketing by <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">putting it into practice.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              Straightforward guides, mental models, and practical frameworks to help you make informed digital decisions.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
          >
            <span>View All Articles</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Dynamic Sanity Published Articles or Clean Status State */}
        {hasSanityPosts ? (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                LATEST ARTICLES FROM EDITORIAL
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-14 border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[#D5FF40] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Knowledge Base & Articles in Publishing
                </p>
                <p className="text-xs text-[#B0B0B0] mt-0.5">
                  Long-form walkthroughs and playbooks are drafted in our Sanity Studio. Explore the foundational topics below or request guidance directly.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-mono text-white hover:text-[#D5FF40] uppercase font-bold"
              >
                <span>Browse Library</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#D5FF40] hover:underline uppercase font-bold"
              >
                <span>Ask a Question</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* 8 Practical Digital Marketing Topics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EDUCATIONAL_TOPICS.map((topic, i) => (
            <div
              key={topic.title}
              className="border border-[rgba(213,255,64,0.12)] bg-[#080808] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#D5FF40] uppercase font-bold text-[10px] tracking-wider">
                    {topic.category}
                  </span>
                  <span className="text-[#B0B0B0] text-[10px]">
                    {topic.readTime}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white uppercase leading-snug">
                  {topic.title}
                </h3>

                <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed font-normal">
                  {topic.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-[11px] font-mono text-[#B0B0B0]">
                <span>Topic 0{i + 1}</span>
                <span className="text-[#D5FF40]">Key Concept</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
