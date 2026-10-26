"use client";

import React from "react";
import { PROCESS_STEPS } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// OUR 5-STAGE PROCESS"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              How We Work: <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Simple 5-Step Process.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              Every project follows five clear stages, so you always know what is happening next.
            </p>
          </div>
        </Reveal>

        {/* 5 Process Steps Editorial Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem
              key={step.step}
              className="group border-t border-[rgba(213,255,64,0.3)] pt-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#D5FF40]"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] inline-block mb-3 group-hover:border-[#D5FF40] transition-colors">
                  STEP {step.step}
                </span>

                <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors leading-snug">
                  {step.name}
                </h3>

                <p className="mt-3 text-xs text-[#B0B0B0] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(213,255,64,0.1)] group-hover:border-[rgba(213,255,64,0.25)] flex items-center justify-between text-[11px] font-mono text-[#B0B0B0] transition-colors">
                <span>Stage {step.step} / 05</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note on Scope, Timelines & Guarantees */}
        <Reveal delay={0.2}>
          <div className="mt-12 border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] text-xs text-[#B0B0B0] leading-relaxed">
            <p>
              <span className="text-white font-semibold">Scope &amp; Timelines:</span> Clear project scopes and fixed timelines before work begins. Honest work and reliable results.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
