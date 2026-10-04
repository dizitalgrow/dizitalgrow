"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WorkHero() {
  return (
    <section className="container-cyber pt-12 pb-14 bg-[#050505]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal delay={0.02}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40] bg-[#101010] border border-[rgba(213,255,64,0.25)] px-3.5 py-1 rounded-[2px]">
            <FolderGit2 className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span>// WORK</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            RECENT PROJECTS. <br />
            <span className="text-[#D5FF40]">REAL CLIENT OUTCOMES.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal max-w-xl mx-auto">
            A selection of projects we&apos;ve built for clients. We design each project around clear business goals: more appointments, faster customer response, and higher sales.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="btn-cyber-primary py-2.5 px-5 text-xs font-bold"
            >
              <span>Let&apos;s Build Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
