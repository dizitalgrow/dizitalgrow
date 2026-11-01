"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { DIGITAL_OPPORTUNITY } from "@/constants/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function DigitalOpportunitySection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {DIGITAL_OPPORTUNITY.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              {DIGITAL_OPPORTUNITY.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
              {DIGITAL_OPPORTUNITY.leadParagraph}
            </p>
          </div>
        </Reveal>

        {/* 6 Bottlenecks Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIGITAL_OPPORTUNITY.bottlenecks.map((item) => (
            <StaggerItem
              key={item.id}
              className="group border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between hover:border-[rgba(213,255,64,0.4)] hover:bg-[#101010] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2.5 py-0.5 rounded-[2px]">
                    {item.number}
                  </span>
                  <AlertCircle className="h-4 w-4 text-[#A1A1AA] opacity-50 group-hover:text-[#D5FF40] group-hover:opacity-100 transition-colors" />
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                <span>Understand &amp; Solve</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Empathy & Bridge Statement */}
        <div className="mt-14 p-6 sm:p-8 border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase text-[#D5FF40]">
              WE UNDERSTAND THESE CHALLENGES
            </span>
            <p className="text-sm text-white font-medium">
              You don&apos;t need another generic marketing agency. You need a partner that builds your digital presence, connects with the right buyers, and proves return on investment.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#050505] bg-[#D5FF40] hover:bg-[#c2ea36] px-5 py-3 rounded-[2px] transition-colors shrink-0"
          >
            <span>See How We Solve These</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
