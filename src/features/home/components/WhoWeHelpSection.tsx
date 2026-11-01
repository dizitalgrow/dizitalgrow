"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, AlertCircle, ArrowRight } from "lucide-react";
import { WHO_WE_HELP_AUDIENCES } from "@/constants/site-data";
import { Reveal, MotionReveal } from "@/components/ui/motion";

export function WhoWeHelpSection() {
  const [activeAudienceId, setActiveAudienceId] = useState(
    WHO_WE_HELP_AUDIENCES[0].id
  );

  const selectedAudience =
    WHO_WE_HELP_AUDIENCES.find((a) => a.id === activeAudienceId) ||
    WHO_WE_HELP_AUDIENCES[0];

  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#070707] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                TARGET AUDIENCE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Every Ambition Deserves <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">a Digital Presence.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              We design specific pathways for five distinct stages of ambition. Explore how we help your profile move forward.
            </p>
          </div>
        </Reveal>

        {/* Audience Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[rgba(213,255,64,0.12)]">
          {WHO_WE_HELP_AUDIENCES.map((audience) => {
            const isActive = audience.id === activeAudienceId;
            return (
              <button
                key={audience.id}
                type="button"
                onClick={() => setActiveAudienceId(audience.id)}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D5FF40] text-[#050505]"
                    : "border border-[rgba(213,255,64,0.2)] bg-[#101010] text-white hover:border-[#D5FF40]"
                }`}
              >
                <span>{audience.number} · {audience.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Audience Detailed Showcase */}
        <div className="mt-10">
          <MotionReveal
            key={selectedAudience.id}
            className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 rounded-[2px]"
          >
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Left Column: Profile & Problems Solved */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px] inline-block mb-2">
                    AUDIENCE {selectedAudience.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                    {selectedAudience.title}
                  </h3>
                  <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider mt-1">
                    {selectedAudience.subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
                    CHALLENGES WE HELP SOLVE:
                  </span>
                  {selectedAudience.problems.map((problem, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#B0B0B0] bg-[#101010] p-3 rounded-[2px] border border-[rgba(213,255,64,0.1)]"
                    >
                      <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tailored Solution & Key Deliverables */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-[rgba(213,255,64,0.12)] lg:pl-10">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D5FF40] font-bold block">
                    HOW WE HELP YOU GROW:
                  </span>
                  <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
                    {selectedAudience.solution}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-bold block">
                    WHAT WE DELIVER:
                  </span>
                  {selectedAudience.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-white"
                    >
                      <Check className="h-4 w-4 text-[#D5FF40] stroke-[3] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] flex flex-wrap items-center gap-4">
                  <Link
                    href={selectedAudience.ctaHref}
                    className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
                  >
                    <span>{selectedAudience.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#D5FF40] uppercase font-bold tracking-wider"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
