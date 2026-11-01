"use client";

import React from "react";
import { WHY_DIZITALGROW } from "@/constants/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function WhyDizitalGrowSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#070707] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {WHY_DIZITALGROW.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              {WHY_DIZITALGROW.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
              {WHY_DIZITALGROW.subheading}
            </p>
          </div>
        </Reveal>

        {/* 6 Honest Differentiators Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_DIZITALGROW.differentiators.map((diff) => (
            <StaggerItem
              key={diff.number}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] space-y-3 flex flex-col justify-between hover:border-[rgba(213,255,64,0.4)] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px] inline-block mb-3">
                  0{diff.number} · PRINCIPLE
                </span>

                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {diff.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                <span>Verified Standard</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
