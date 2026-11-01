"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECT_SHOWCASE } from "@/constants/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function WorkShowcaseSection() {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  WORK & CASE STUDIES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Ideas Turned Into <br />
                <span className="text-[#D5FF40]">Digital Experiences.</span>
              </h2>
              <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
                A selection of representative platforms, funnels, and telemetry architectures engineered for clients and industry partners.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
            >
              <span>Discuss Your Use Case</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Project Showcase 2x2 Grid */}
        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {PROJECT_SHOWCASE.map((project) => (
            <StaggerItem
              key={project.id}
              className="group border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 rounded-[2px] flex flex-col justify-between hover:border-[#D5FF40] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                    {project.clientIndustry}
                  </span>
                  <span className="font-mono text-xs text-[#A1A1AA]">
                    Architecture Showcase
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {project.overview}
                </p>

                {/* Challenge & Solution Mini-Blocks */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3 rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.1)]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-0.5">
                      THE CHALLENGE:
                    </span>
                    <p className="text-xs text-[#A1A1AA] leading-snug">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-3 rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.1)]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold block mb-0.5">
                      OUR SOLUTION:
                    </span>
                    <p className="text-xs text-white leading-snug">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[#A1A1AA] bg-[#141414] px-2 py-0.5 rounded-[2px] border border-[rgba(213,255,64,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between">
                <Link
                  href={project.liveHref || "/contact"}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
                >
                  <span>{project.linkText || "Learn More"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
