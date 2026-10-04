"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section className="container-cyber pt-12 pb-14 bg-[#050505]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal delay={0.02}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40] bg-[#101010] border border-[rgba(213,255,64,0.25)] px-3.5 py-1 rounded-[2px]">
            <Compass className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span>// ABOUT DIZITALGROW</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            HELPING BUSINESSES GROW THROUGH <br />
            <span className="text-[#D5FF40]">TECHNOLOGY &amp; MARKETING.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal max-w-xl mx-auto">
            We build websites, applications, advertising systems, and tracking infrastructure that help businesses attract customers and increase revenue.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="btn-cyber-primary py-2.5 px-5 text-xs font-bold"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
