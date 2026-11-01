"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MASTER_FAQS } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/motion";

export function HomeFAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Clear Answers to <br />
              <span className="text-[#D5FF40]">Common Questions.</span>
            </h2>
            <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
              Everything you need to know about partnering with DizitalGrow, our capabilities, and how we deliver results.
            </p>
          </div>
        </Reveal>

        {/* Accordion Component with all 9 Master Questions */}
        <FAQAccordion items={MASTER_FAQS} showCTA={false} />

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-sm font-bold uppercase text-white">
              Have a specific question about your project?
            </h3>
            <p className="text-xs text-[#B0B0B0] mt-0.5">
              We provide straight answers without high-pressure sales pitches.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
