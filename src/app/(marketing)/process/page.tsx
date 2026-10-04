import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "@/constants/site-data";
import { FinalCTA } from "@/components/ui/FinalCTA";

export const metadata: Metadata = {
  title: "Process — How We Work | DizitalGrow",
  description:
    "Our simple and transparent 5-step workflow: Discovery, Planning, Design & Development, Launch, Support & Growth.",
};

export default function ProcessPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Process Header */}
      <section className="container-cyber pt-16 pb-12">
        <div className="border-b border-[rgba(213,255,64,0.15)] pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
            // OUR PROCESS
          </p>
          <h1 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            A SIMPLE AND <br />
            <span className="text-[#D5FF40]">TRANSPARENT WORKFLOW.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
            No technical confusion or unexpected surprises. We break every project down into 5 straightforward steps with clear deliverables along the way.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container-cyber pb-20 divide-y divide-[rgba(213,255,64,0.15)]">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.no}
            className="py-12 grid gap-6 md:grid-cols-[6rem_1.2fr_2fr] items-start"
          >
            {/* Step Number */}
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#D5FF40] leading-none drop-shadow-[0_0_15px_rgba(213,255,64,0.2)]">
              {step.no}
            </span>

            {/* Step Name */}
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-[#B0B0B0] block mb-1">
                STEP {step.no}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                {step.title}
              </h2>
            </div>

            {/* Step Description */}
            <div className="max-w-xl">
              <p className="text-base text-[#B0B0B0] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        {/* Alignment Note & CTA */}
        <div className="py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0]">
            // READY TO START STEP 1? LET&apos;S TALK ABOUT YOUR PROJECT.
          </p>
          <Link
            href="/contact"
            className="btn-cyber-primary shrink-0 py-2.5 px-5 text-xs font-bold"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
