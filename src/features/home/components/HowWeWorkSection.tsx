"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

const WORK_STEPS = [
  {
    step: "01",
    name: "Understand",
    summary: "Identify the business goal and current challenges.",
    detail: "We audit your audience, current website friction, and advertising setup to define a fixed scope and realistic timeline.",
  },
  {
    step: "02",
    name: "Build",
    summary: "Create the website, campaign, or tracking setup.",
    detail: "We develop responsive pages, configure search and social campaigns, and install server-side tracking before launch.",
  },
  {
    step: "03",
    name: "Improve",
    summary: "Review performance and make informed improvements.",
    detail: "We measure verified inquiries, eliminate underperforming ad spend, and refine conversion rates based on real data.",
  },
];

export function HowWeWorkSection() {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  {"// HOW WE WORK"}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Three Simple Steps. <br />
                <span className="text-[#D5FF40]">Zero Guesswork.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Clear communication, transparent scopes, and direct access to the team building your project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
            >
              <span>See Full 5-Stage Timeline</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        {/* 3 Steps Horizontal / Vertical Sequence */}
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {WORK_STEPS.map((step, index) => (
            <StaggerItem
              key={step.step}
              className="group relative border-t-2 border-[rgba(213,255,64,0.3)] pt-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#D5FF40]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px] group-hover:border-[#D5FF40] transition-colors">
                    PHASE {step.step}
                  </span>
                  <span className="font-mono text-xs text-[#B0B0B0]">
                    {index + 1} of 3
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {step.name}
                </h3>

                <p className="mt-2 text-sm text-white font-medium">
                  {step.summary}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-xs font-mono text-[#B0B0B0]">
                <span>Verified Milestones</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
