"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/constants/site-data";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] border-t border-[rgba(213,255,64,0.15)] relative overflow-hidden" id="process">
      <div className="container-cyber">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(213,255,64,0.15)]">
          <div className="max-w-2xl">
            <Reveal delay={0.02}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
                <span>// PROCESS</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
                HOW WE WORK.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] font-normal leading-relaxed">
                A simple and transparent workflow from day one. You always know what is being built, when it will be ready, and how it will perform.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <Link
              href="/process"
              className="btn-cyber-primary shrink-0 py-2.5 px-5 text-xs font-bold"
            >
              <span>See Our Process</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Process Steps Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {PROCESS_STEPS.slice(0, 4).map((step, idx) => (
            <Reveal key={step.no} delay={idx * 0.08}>
              <div className="cyber-card group flex flex-col justify-between h-full p-6 sm:p-7 relative overflow-hidden border-[rgba(213,255,64,0.15)] hover:border-[#D5FF40]">
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#D5FF40] leading-none drop-shadow-[0_0_15px_rgba(213,255,64,0.2)]">
                      {step.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#B0B0B0] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 uppercase tracking-wider rounded-[2px]">
                      STEP {idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#D5FF40] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-xs font-mono text-[#D5FF40]">
                  <span>STEP COMPLETED</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→ NEXT</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
