"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { FAQItem } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  showCTA?: boolean;
}

export function FAQAccordion({
  items,
  title = "FREQUENTLY ASKED QUESTIONS",
  showCTA = true,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-28 md:py-36 bg-[#050505] border-t border-[rgba(213,255,64,0.15)] relative overflow-hidden" id="faq">
      <div className="container-cyber">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr] items-start">
          {/* Left Column: Title & CTA */}
          <div>
            <Reveal delay={0.02}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
                <span>// FAQ</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                {title}
              </h2>
            </Reveal>

            {showCTA && (
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-5">
                  <p className="text-base text-[#B0B0B0] leading-relaxed font-normal">
                    Have a specific question about your business or need a custom estimate? Reach out directly to our team.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-cyber-primary py-2.5 px-5 text-xs font-bold"
                  >
                    <span>Start Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Cyber Accordion */}
          <div className="border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.15)]">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-6 sm:py-8 group">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-6 text-left cursor-pointer"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#D5FF40] transition-colors uppercase tracking-tight">
                      {item.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-all group-hover:border-[#D5FF40]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-10 text-base text-[#B0B0B0] leading-relaxed font-normal animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
