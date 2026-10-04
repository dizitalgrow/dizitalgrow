"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { STATS, CLIENT_LOGOS } from "@/constants/site-data";

export function SocialProofSection() {
  return (
    <section className="bg-[#101010] border-y border-[rgba(213,255,64,0.15)] py-16 md:py-20 relative overflow-hidden">
      <div className="container-cyber">
        {/* Header & Client Categories */}
        <div className="pb-12 border-b border-[rgba(213,255,64,0.1)]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold block mb-2">
              // RESULTS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white">
              REAL RESULTS FOR REAL BUSINESSES
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center p-3.5 rounded-[2px] bg-[#050505] border border-[rgba(213,255,64,0.1)] hover:border-[#D5FF40] transition-colors group cursor-default"
              >
                <span className="font-display font-bold text-sm sm:text-base text-[#B0B0B0] group-hover:text-white transition-colors uppercase tracking-wider">
                  {client.name}
                </span>
                <span className="font-mono text-[9px] text-[#B0B0B0]/60 group-hover:text-[#D5FF40] tracking-widest uppercase mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Big Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l-2 border-[#D5FF40] pl-5 py-1">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D5FF40] tracking-tight block leading-none drop-shadow-[0_0_20px_rgba(213,255,64,0.2)]">
                  {stat.value}
                </span>
                <span className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white mt-2.5 block">
                  {stat.label}
                </span>
                <p className="mt-1 text-xs text-[#B0B0B0] font-normal">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
