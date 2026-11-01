"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { CAPABILITIES_PILLARS } from "@/constants/site-data";
import { Reveal, MotionReveal } from "@/components/ui/motion";

export function CapabilitiesSection() {
  const [activePillarId, setActivePillarId] = useState(
    CAPABILITIES_PILLARS[0].id
  );

  const selectedPillar =
    CAPABILITIES_PILLARS.find((p) => p.id === activePillarId) ||
    CAPABILITIES_PILLARS[0];

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  OUR CAPABILITIES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Everything You Need to <br />
                <span className="text-[#D5FF40]">Move Forward Digitally.</span>
              </h2>
              <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
                Organized into three essential pillars. Select a category below to explore specific business problems solved.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
            >
              <span>Explore All Capabilities</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* 3 Pillars Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {CAPABILITIES_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 rounded-[2px] border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#D5FF40] bg-[#141414]"
                    : "border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] hover:border-[#D5FF40]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-[#D5FF40]">
                    0{pillar.pillarNumber}
                  </span>
                  <span className="font-mono text-[10px] text-[#A1A1AA] uppercase">
                    PILLAR
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {pillar.pillar}
                </h3>
                <p className="text-xs text-[#B0B0B0] mt-1 line-clamp-1">
                  {pillar.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Capabilities Grid */}
        <MotionReveal
          key={selectedPillar.id}
          className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-10 rounded-[2px]"
        >
          <div className="border-b border-[rgba(213,255,64,0.12)] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {selectedPillar.pillar} · CAPABILITIES & PROBLEMS SOLVED
              </span>
              <p className="text-sm text-[#B0B0B0] mt-1 max-w-2xl">
                {selectedPillar.description}
              </p>
            </div>

            <Link
              href={`/services#${selectedPillar.id}`}
              className="text-xs font-mono text-white hover:text-[#D5FF40] uppercase font-bold tracking-wider shrink-0 flex items-center gap-1"
            >
              <span>View Full Pillar</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedPillar.capabilities.map((cap) => (
              <div
                key={cap.name}
                className="group border border-[rgba(213,255,64,0.15)] bg-[#101010] p-6 rounded-[2px] flex flex-col justify-between hover:border-[#D5FF40] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                    <ArrowUpRight className="h-4 w-4 text-[#D5FF40] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-display text-base font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                    {cap.name}
                  </h4>

                  <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed">
                    {cap.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[rgba(213,255,64,0.1)]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5FF40] font-bold block mb-1">
                      PROBLEM IT SOLVES:
                    </span>
                    <p className="text-[11px] text-[#A1A1AA] leading-snug">
                      {cap.solves}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
