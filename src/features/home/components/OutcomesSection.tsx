"use client";

import React from "react";
import { Compass, Eye, Users, PhoneCall, BarChart3 } from "lucide-react";
import { OUTCOME_SECTIONS } from "@/constants/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const ICONS = [Compass, Eye, Users, PhoneCall, BarChart3];

export function OutcomesSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                CUSTOMER OUTCOMES
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Not Just Digital Services. <br />
              <span className="text-[#D5FF40]">Real Business Opportunities.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
              We focus on what changes for your business, not internal agency jargon. Here are the five tangible outcomes we deliver.
            </p>
          </div>
        </Reveal>

        {/* 5 Outcomes Stack / Cards */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OUTCOME_SECTIONS.map((outcome, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <StaggerItem
                key={outcome.number}
                className="group border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 rounded-[2px] flex flex-col justify-between hover:border-[#D5FF40] hover:bg-[#101010] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                      OUTCOME {outcome.number}
                    </span>
                    <Icon className="h-4 w-4 text-[#A1A1AA] group-hover:text-[#D5FF40] transition-colors" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                    {outcome.title}
                  </h3>

                  <p className="mt-2 text-sm text-white font-medium">
                    {outcome.summary}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                    {outcome.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] group-hover:border-[rgba(213,255,64,0.25)] transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5FF40] font-bold block mb-1">
                    KEY RESULT:
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA] block">
                    {outcome.impactMetrics}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
