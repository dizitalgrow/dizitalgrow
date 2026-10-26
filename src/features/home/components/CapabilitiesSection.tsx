"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CAPABILITIES, META_CAPI_FEATURE } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";

export function CapabilitiesSection() {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// CORE SERVICES & DIGITAL CAPABILITIES"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Websites, Apps, <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Ads &amp; Tracking.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              Seven core services to help your business grow online. Hire us for a single service or an integrated setup.
            </p>
          </div>
        </Reveal>

        {/* Minimal Numbered Service Rows */}
        <div className="divide-y divide-[rgba(213,255,64,0.15)] border-y border-[rgba(213,255,64,0.15)]">
          {CAPABILITIES.map((item, index) => (
            <MotionReveal
              key={item.id}
              delay={index * 0.03}
              className="py-8 sm:py-10 grid gap-6 lg:grid-cols-12 items-start group transition-colors duration-200 hover:bg-white/[0.01]"
            >
              {/* Service Title & Benefit */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#D5FF40]">
                    {"//"} {item.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B0B0B0] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 rounded-[2px]">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed font-normal max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Key Deliverables & Quick CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between sm:pt-2 space-y-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                      <Check className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                      <span className="leading-snug">{del}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline focus-cyber"
                  >
                    <span>Discuss {item.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Dedicated Meta Conversions API (CAPI) Showcase */}
        <div id="tracking" className="mt-16 scroll-mt-24">
          <MotionReveal>
            <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-8 sm:p-10 lg:p-12 rounded-[2px] relative">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                    {"// " + META_CAPI_FEATURE.eyebrow}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
                  {META_CAPI_FEATURE.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                  {META_CAPI_FEATURE.description}
                </p>

                <div className="grid gap-6 sm:grid-cols-2 mt-8 pt-8 border-t border-[rgba(213,255,64,0.15)]">
                  {META_CAPI_FEATURE.keyPoints.map((point) => (
                    <div key={point.title} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                        <h4 className="font-display text-sm font-bold uppercase text-white">
                          {point.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#B0B0B0] leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(213,255,64,0.1)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
                  <p>Implementation depends on your website architecture and ad account access.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#D5FF40] hover:underline uppercase font-bold tracking-wider"
                  >
                    <span>Request CAPI Audit</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Bottom Note */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
            <p>Unsure whether you need website development, ad management, or tracking first?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[#D5FF40] hover:underline uppercase font-bold tracking-wider focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5FF40]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
