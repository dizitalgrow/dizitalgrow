import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/constants/site-data";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// PRACTICAL CAPABILITIES"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            What we can <br className="hidden sm:inline" />
            <span className="text-[#D5FF40]">help with.</span>
          </h2>
          <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
            The right approach depends on your business, audience, goals, and budget. Not every business needs every channel—we help you identify and execute what actually moves you forward.
          </p>
        </div>

        {/* Numbered Editorial Rows */}
        <div className="divide-y divide-[rgba(213,255,64,0.15)] border-y border-[rgba(213,255,64,0.15)]">
          {CAPABILITIES.map((item) => (
            <div
              key={item.id}
              className="py-10 grid gap-6 lg:grid-cols-12 items-start"
            >
              {/* Number and Title */}
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-[#D5FF40] block mb-2">
                  {"//"} {item.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                  {item.title}
                </h3>
              </div>

              {/* Problem & Who Needs It */}
              <div className="lg:col-span-4 space-y-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0] font-semibold block mb-1">
                    THE PROBLEM IT SOLVES
                  </span>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {item.problem}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0] font-semibold block mb-1">
                    WHO MAY NEED IT
                  </span>
                  <p className="text-xs text-[#B0B0B0]/90 leading-relaxed font-normal">
                    {item.whoNeedsIt}
                  </p>
                </div>
              </div>

              {/* First Practical Step */}
              <div className="lg:col-span-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.15)] p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#D5FF40] font-bold block mb-1.5">
                  FIRST PRACTICAL STEP
                </span>
                <p className="text-xs text-white leading-relaxed font-medium">
                  {item.firstStep}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
          <p>Unsure which channel makes sense for your stage? We will help you audit your options.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[#D5FF40] hover:underline uppercase font-bold tracking-wider"
          >
            <span>Discuss your priorities</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
