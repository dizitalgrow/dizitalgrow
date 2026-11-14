import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HOMEPAGE_INDUSTRIES } from "@/constants/site-data";

export function IndustriesPreviewSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                SECTOR SPECIFIC
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Industries We <br />
              <span className="text-[#D5FF40]">Build For.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] max-w-2xl leading-relaxed">
              We understand the specialized compliance, buyer journeys, and conversion funnels of your commercial sector.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
          >
            <span>Explore All Industries</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_INDUSTRIES.map((ind, idx) => (
            <Link
              key={ind.slug}
              href={ind.href}
              className="group p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.15)] hover:border-[#D5FF40] hover:bg-[#101010] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#D5FF40] uppercase tracking-wider">
                    {"//"} 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B0B0B0] bg-white/5 px-2 py-0.5 rounded-[2px] border border-white/10">
                    {ind.focus}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.08)] flex items-center justify-between text-xs font-mono text-white group-hover:text-[#D5FF40] transition-colors">
                <span>Explore Sector Playbook</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
