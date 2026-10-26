import React from "react";
import { PROCESS_STEPS } from "@/constants/site-data";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// OUR PROCESS"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            A clear path from <br className="hidden sm:inline" />
            <span className="text-[#D5FF40]">idea to action.</span>
          </h2>
          <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
            We work transparently through four structured stages so you always understand where we are, what is happening next, and why.
          </p>
        </div>

        {/* 4 Process Steps Editorial Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="border-t border-[rgba(213,255,64,0.3)] pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D5FF40] block mb-3">
                  STEP {step.step}
                </span>

                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {step.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-[rgba(213,255,64,0.1)] text-[11px] font-mono text-[#B0B0B0]">
                <span>Stage {step.step} / 04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Scope & Guarantees */}
        <div className="mt-12 border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-5 text-xs text-[#B0B0B0] leading-relaxed">
          <p>
            <span className="text-white font-semibold">Scope &amp; Timelines:</span> Deliverables, timelines, and reporting cadence depend on the agreed scope of work. We do not make false promises of overnight rankings or guaranteed advertising returns; we focus on executing proven, disciplined strategies that build compounding value over time.
          </p>
        </div>
      </div>
    </section>
  );
}
