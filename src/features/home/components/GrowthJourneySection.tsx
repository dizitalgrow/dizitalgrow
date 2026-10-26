"use client";

import React from "react";
import { GROWTH_JOURNEY_STAGES } from "@/constants/site-data";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function GrowthJourneySection() {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// HOW IT WORKS"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Build Better Sites. <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Reach Real Buyers. Measure Results.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              Online growth works best when your website, ads, and tracking work together as one simple system.
            </p>
          </div>
        </Reveal>

        {/* Three Stages Editorial Grid */}
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {GROWTH_JOURNEY_STAGES.map((stage) => (
            <StaggerItem
              key={stage.step}
              className="border-t border-[rgba(213,255,64,0.25)] pt-6 flex flex-col justify-between group transition-colors duration-200 hover:border-[#D5FF40]"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] group-hover:border-[#D5FF40] transition-colors">
                    STAGE {stage.step}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] group-hover:border-[rgba(213,255,64,0.25)] transition-colors">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#D5FF40] font-semibold mb-2.5">
                  PRACTICAL FOCUS
                </p>
                <ul className="space-y-2">
                  {stage.practicalFocus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                      <Check className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
