"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

const PROJECT_IMAGES = [
  "/project-villa.jpg",
  "/project-dashboard.jpg",
  "/showcase-identity.jpg",
];

export function ProjectsList() {
  return (
    <div className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.15)] pt-12 bg-[#050505]">
      <div className="grid gap-10 lg:grid-cols-3">
        {CASE_STUDIES.map((project, i) => {
          const imageSrc = PROJECT_IMAGES[i % PROJECT_IMAGES.length];
          return (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="cyber-card group flex h-full flex-col justify-between p-6 sm:p-7 border-[rgba(213,255,64,0.2)]">
                <div>
                  {/* Visual Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-[#050505] border border-[rgba(213,255,64,0.15)]">
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 rounded-[2px] bg-[#050505]/90 border border-[rgba(213,255,64,0.3)] px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#D5FF40] backdrop-blur-md">
                      {project.industry}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                      PROJECT 0{i + 1}
                    </span>
                    <h2 className="font-display mt-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase group-hover:text-[#D5FF40] transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  {/* Problem -> Solution -> Result */}
                  <div className="mt-5 space-y-3.5 border-t border-[rgba(213,255,64,0.15)] pt-5 text-xs sm:text-sm">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B0B0B0]">
                        PROBLEM:
                      </p>
                      <p className="mt-1 text-[#B0B0B0] leading-relaxed font-normal">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D5FF40]">
                        SOLUTION:
                      </p>
                      <p className="mt-1 text-white leading-relaxed font-normal">
                        {project.solution}
                      </p>
                    </div>

                    <div className="border-t border-[rgba(213,255,64,0.1)] pt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D5FF40]">
                        RESULT:
                      </p>
                      <p className="font-display mt-1 text-base sm:text-lg font-bold text-white uppercase leading-snug">
                        {project.results}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.15)] flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#050505] border border-[rgba(213,255,64,0.1)] px-2 py-0.5 rounded-[2px] text-[10px] font-mono text-[#B0B0B0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="h-8 w-8 shrink-0 rounded-[2px] border border-[rgba(213,255,64,0.25)] bg-[#050505] text-[#D5FF40] hover:bg-[#D5FF40] hover:text-[#050505] transition-all flex items-center justify-center ml-2"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Bottom Action Banner */}
      <div className="mt-20 border-t border-[rgba(213,255,64,0.15)] pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            LET&apos;S BUILD YOUR PROJECT
          </h3>
          <p className="mt-1 text-sm text-[#B0B0B0] font-normal">
            Tell us about your business goals and what you need built. We&apos;ll provide a clear roadmap and quote.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-cyber-primary shrink-0 py-2.5 px-5 text-xs font-bold"
        >
          <span>Start Your Project</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
