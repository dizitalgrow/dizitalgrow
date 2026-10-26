"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Compass } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
                DIGITAL GROWTH, MADE PRACTICAL
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight text-white">
              Grow your business in the <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">digital world.</span>
            </h1>

            {/* Supporting text */}
            <p className="max-w-xl text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Understand what works, build a stronger online presence, and turn your digital efforts into meaningful business opportunities.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
              >
                <span>Get Growth Advice</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="#learn"
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                <span>Explore Digital Growth Guides</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Trust statement */}
            <div className="pt-6 border-t border-[rgba(213,255,64,0.1)] flex items-center gap-2.5 text-xs font-mono text-[#B0B0B0]">
              <Compass className="h-4 w-4 text-[#D5FF40] shrink-0" />
              <span>Practical guidance. Clear strategy. No unnecessary complexity.</span>
            </div>
          </div>

          {/* Right Column: Editorial Visual of Digital Growth Flow */}
          <div className="lg:col-span-5">
            <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(213,255,64,0.1)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0]">
                  THE GROWTH FRAMEWORK
                </span>
                <span className="font-mono text-[11px] text-[#D5FF40] font-bold">
                  FOCUS ON FUNDAMENTALS
                </span>
              </div>

              {/* Step progression */}
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-1">
                    01
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                      Clear Digital Foundation
                    </h3>
                    <p className="mt-1 text-xs text-[#B0B0B0] leading-relaxed">
                      A fast, intuitive website that clearly articulates what you offer and why buyers should trust you.
                    </p>
                  </div>
                </div>

                <div className="h-4 border-l border-dashed border-[rgba(213,255,64,0.2)] ml-4" />

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-1">
                    02
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                      Intentional Audience Reach
                    </h3>
                    <p className="mt-1 text-xs text-[#B0B0B0] leading-relaxed">
                      Search rankings, relevant content, and targeted campaigns that put you in front of interested people.
                    </p>
                  </div>
                </div>

                <div className="h-4 border-l border-dashed border-[rgba(213,255,64,0.2)] ml-4" />

                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-1">
                    03
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase text-white tracking-wide">
                      Predictable Inquiries
                    </h3>
                    <p className="mt-1 text-xs text-[#B0B0B0] leading-relaxed">
                      Low-friction contact steps and verified conversion tracking so you know exactly where growth comes from.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-[11px] font-mono text-[#B0B0B0]">
                <span>No vanity metrics</span>
                <span className="text-white font-medium">Real business outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
