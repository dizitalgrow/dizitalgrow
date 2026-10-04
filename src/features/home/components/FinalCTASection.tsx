"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] border-t border-[rgba(213,255,64,0.15)] relative overflow-hidden">
      <div className="container-cyber relative z-10">
        <Reveal delay={0.05}>
          <div className="rounded-[4px] border border-[rgba(213,255,64,0.25)] bg-[#101010] px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(213,255,64,0.08)]">
            <div className="mx-auto max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40] bg-[#181818] border border-[rgba(213,255,64,0.25)] px-3.5 py-1 rounded-[2px] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#D5FF40] shadow-[0_0_6px_#D5FF40] animate-pulse" />
                <span>LET&apos;S TALK GROWTH</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                READY TO GROW? <br />
                <span className="text-[#D5FF40] drop-shadow-[0_0_30px_rgba(213,255,64,0.3)]">
                  LET&apos;S DISCUSS YOUR PROJECT.
                </span>
              </h2>

              <p className="mt-4 mx-auto max-w-xl text-base text-[#B0B0B0] leading-relaxed font-normal">
                Tell us about your business and what you&apos;d like to build. We&apos;ll respond within one business day with honest advice, clear pricing, and a simple roadmap.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-cyber-primary text-xs font-bold py-3 px-6 group"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="btn-cyber-secondary text-xs font-bold py-3 px-6 flex items-center gap-2"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>Book Call</span>
                </Link>
              </div>

              <div className="mt-10 pt-6 border-t border-[rgba(213,255,64,0.1)] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#B0B0B0]">
                <span>✓ FREE CONSULTATION</span>
                <span className="text-[rgba(213,255,64,0.3)]">//</span>
                <span>✓ CLEAR PRICING</span>
                <span className="text-[rgba(213,255,64,0.3)]">//</span>
                <span>✓ NO TECH JARGON</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
