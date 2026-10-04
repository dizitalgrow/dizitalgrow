"use client";

import React from "react";
import { Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesHero() {
  return (
    <section className="container-cyber pt-12 pb-14 bg-[#050505]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal delay={0.02}>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40] bg-[#101010] border border-[rgba(213,255,64,0.25)] px-3.5 py-1 rounded-[2px]">
            <Layers className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span>// SERVICES</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            EVERYTHING YOU NEED TO BUILD <br />
            <span className="text-[#D5FF40]">&amp; GROW YOUR BUSINESS ONLINE.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal max-w-xl mx-auto">
            From professional websites and custom software to profitable Facebook and Google ads, we provide everything needed to get more customers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
