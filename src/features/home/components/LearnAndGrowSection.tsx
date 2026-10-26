"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { SanityPost } from "@/lib/sanity";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface LearnAndGrowSectionProps {
  posts?: SanityPost[];
}

export function LearnAndGrowSection({ posts = [] }: LearnAndGrowSectionProps) {
  const hasSanityPosts = posts && posts.length > 0;

  return (
    <section id="learn" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  {"// BLOG & ARTICLES"}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Practical Articles for <br className="hidden sm:inline" />
                <span className="text-[#D5FF40]">Smart Digital Decisions.</span>
              </h2>
              <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
                Straightforward articles on websites, advertising, and tracking to help you understand before you spend.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5FF40]"
            >
              <span>Read The Blog</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Dynamic Sanity Published Articles or Clean Status Banner */}
        {hasSanityPosts ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                LATEST ARTICLES
              </h3>
            </div>
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <StaggerItem key={post._id}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ) : (
          <Reveal>
            <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-8 sm:p-10 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display uppercase">
                    DizitalGrow Blog &amp; Insights
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B0B0B0] mt-1 leading-relaxed">
                    Practical articles covering business websites, Google Ads, Meta Ads, and server-side tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#D5FF40] uppercase font-bold px-4 py-2.5 border border-[rgba(213,255,64,0.2)] hover:border-[#D5FF40] rounded-[2px] transition-colors"
                >
                  <span>Read Blog</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#050505] bg-[#D5FF40] hover:bg-[#c2ea36] uppercase font-bold px-4 py-2.5 rounded-[2px] transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
