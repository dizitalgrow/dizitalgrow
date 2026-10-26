"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { VERIFIED_EMAIL } from "@/constants/navigation";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#080808]">
      <div className="container-cyber">
        <Reveal>
          <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 rounded-[2px]">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  {"// START YOUR PROJECT"}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Tell Us About Your Project. <br />
                <span className="text-[#D5FF40]">Get a Clear Plan in 24 Hours.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                Share what you want to build or improve. We will send back a clear plan and pricing within one business day.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={`mailto:${VERIFIED_EMAIL}`}
                  className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-transparent text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:border-[#D5FF40] hover:text-[#D5FF40] hover:bg-[#D5FF40]/5 active:translate-y-[1px] focus-cyber"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email DizitalGrow Directly</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.1)] text-xs font-mono text-[#B0B0B0]">
                <span>Honest advice. Clear pricing. Zero pushy sales pitches.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
