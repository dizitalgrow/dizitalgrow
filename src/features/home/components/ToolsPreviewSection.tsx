import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import { HOMEPAGE_FEATURED_TOOLS } from "@/constants/site-data";

const CATEGORY_PILLS = [
  "Careers & Students",
  "Freelancers & Businesses",
  "Marketers & SEO Specialists",
  "Creators",
  "Developers",
  "Everyday Calculations",
];

export function ToolsPreviewSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#070707] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                FREE UTILITIES · 100% CLIENT-SIDE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Explore Free <br />
              <span className="text-[#D5FF40]">Digital Tools.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] max-w-2xl leading-relaxed">
              We provide free, fast, zero-server browser utilities designed for daily productivity. No logins, no tracking, and zero paid paywalls.
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
          >
            <span>Explore All 24 Tools</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-6 border-b border-[rgba(213,255,64,0.1)]">
          {CATEGORY_PILLS.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-[2px] bg-white/5 border border-white/10 text-xs font-mono text-white/80"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_FEATURED_TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="group p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.15)] hover:border-[#D5FF40] hover:bg-[#101010] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5FF40] bg-[#D5FF40]/10 px-2 py-0.5 rounded-[2px] border border-[#D5FF40]/20">
                    {tool.category}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.08)] flex items-center justify-between text-xs font-mono text-white group-hover:text-[#D5FF40] transition-colors">
                <span>Launch Tool</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
