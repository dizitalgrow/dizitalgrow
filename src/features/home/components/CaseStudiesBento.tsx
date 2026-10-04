"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/constants/site-data";

export function CaseStudiesBento() {
  const featured = CASE_STUDIES[0];
  const others = CASE_STUDIES.slice(1);

  return (
    <section className="py-20 md:py-28 bg-[#050505] border-t border-[rgba(213,255,64,0.15)] relative overflow-hidden" id="work">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(213,255,64,0.15)]">
          <div className="max-w-2xl">
            <Reveal delay={0.02}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
                <span>// RECENT PROJECTS</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
                RECENT WORK <br />
                <span className="text-[#D5FF40]">THAT DELIVERS.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] font-normal leading-relaxed">
                A selection of websites, applications, and growth campaigns we&apos;ve built for clients.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <Link
              href="/work"
              className="btn-cyber-secondary shrink-0 py-2.5 px-5 text-xs font-bold"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="pt-12 grid gap-6 lg:grid-cols-12">
          {/* Featured Large Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="cyber-card group h-full flex flex-col justify-between p-7 sm:p-9 border-[rgba(213,255,64,0.3)] bg-gradient-to-br from-[#101010] to-[#141414]">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs bg-[rgba(213,255,64,0.1)] text-[#D5FF40] border border-[rgba(213,255,64,0.25)] px-3 py-1 font-bold uppercase tracking-wider rounded-[2px]">
                      FEATURED // {featured.industry}
                    </span>
                    <span className="font-mono text-xs text-[#B0B0B0]">
                      PROJECT {featured.id}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase leading-tight group-hover:text-[#D5FF40] transition-colors">
                    {featured.title}
                  </h3>

                  {/* Problem & Solution Grid */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 pt-6 border-t border-[rgba(213,255,64,0.15)] text-sm">
                    <div>
                      <span className="font-mono text-xs text-[#B0B0B0] font-bold uppercase tracking-wider block mb-2">
                        THE PROBLEM
                      </span>
                      <p className="text-[#B0B0B0] leading-relaxed">
                        {featured.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs text-[#D5FF40] font-bold uppercase tracking-wider block mb-2">
                        OUR SOLUTION
                      </span>
                      <p className="text-white leading-relaxed">
                        {featured.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="mt-8 pt-6 border-t border-[rgba(213,255,64,0.15)] flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#B0B0B0] uppercase block">
                      KEY RESULT // {featured.metricLabel}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#D5FF40] leading-none mt-1.5 block drop-shadow-[0_0_20px_rgba(213,255,64,0.25)]">
                      {featured.metricValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {featured.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-[#B0B0B0] bg-[#050505] border border-[rgba(213,255,64,0.1)] px-2.5 py-1 rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((item, idx) => (
              <Reveal key={item.id} delay={0.1 + idx * 0.08}>
                <div className="cyber-card group flex flex-col justify-between h-full p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="font-mono text-xs text-[#D5FF40] font-bold uppercase tracking-wider">
                        {item.industry}
                      </span>
                      <span className="font-mono text-xs text-[#B0B0B0]">
                        PROJECT {item.id}
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white uppercase leading-tight group-hover:text-[#D5FF40] transition-colors">
                      {item.title}
                    </h4>

                    <div className="mt-3 space-y-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                      <p><strong className="text-white font-mono text-[11px] uppercase">Problem:</strong> {item.problem}</p>
                      <p><strong className="text-[#D5FF40] font-mono text-[11px] uppercase">Solution:</strong> {item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#B0B0B0] uppercase block">
                        RESULT
                      </span>
                      <span className="font-display text-2xl font-bold text-[#D5FF40]">
                        {item.metricValue}
                      </span>
                    </div>

                    <Link
                      href="/work"
                      className="h-8 w-8 rounded-full border border-[rgba(213,255,64,0.25)] flex items-center justify-center text-white group-hover:border-[#D5FF40] group-hover:bg-[#D5FF40] group-hover:text-[#050505] transition-all"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
