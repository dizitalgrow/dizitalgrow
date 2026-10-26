"use client";

import React from "react";
import { WHO_WE_HELP } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function WhoWeHelpSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// WHO WE WORK WITH"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Built for Businesses <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Ready to Grow.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              We partner with founders, local businesses, and online stores looking for clear work, honest communication, and real results.
            </p>
          </div>
        </Reveal>

        {/* Audience List */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_WE_HELP.map((item) => (
            <StaggerItem
              key={item.title}
              className="group border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between transition-colors duration-200 hover:border-[#D5FF40] hover:bg-[#101010]"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold bg-[#D5FF40]/10 border border-[#D5FF40]/25 px-2.5 py-0.5 rounded-[2px] inline-block mb-3">
                  {item.tag}
                </span>

                <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] group-hover:border-[rgba(213,255,64,0.25)] flex items-center justify-between text-[11px] font-mono text-[#B0B0B0] transition-colors">
                <span>Verified Partnership</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
