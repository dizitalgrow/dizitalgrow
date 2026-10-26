"use client";

import React from "react";
import { ABOUT_SECTION } from "@/constants/site-data";
import { ShieldCheck, Target, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function AboutSection() {
  const icons = [Target, Zap, ShieldCheck];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading and Narrative */}
          <Reveal className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// ABOUT DIZITALGROW"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Connected Development, <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Ads &amp; Measurement.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal pt-2">
              {ABOUT_SECTION.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Core Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0] font-bold block">
              OUR WORKING PRINCIPLES
            </span>

            <StaggerContainer className="space-y-4">
              {ABOUT_SECTION.commitments.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <StaggerItem
                    key={item.title}
                    className="group border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] flex items-start gap-4 transition-colors duration-200 hover:border-[#D5FF40] hover:bg-[#101010]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] group-hover:border-[#D5FF40] group-hover:bg-[#D5FF40]/10 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <Reveal delay={0.2}>
              <div className="border-t border-[rgba(213,255,64,0.1)] pt-4 text-xs font-mono text-[#B0B0B0]">
                <span>Clear strategy. Measured by real customer inquiries and sales.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
