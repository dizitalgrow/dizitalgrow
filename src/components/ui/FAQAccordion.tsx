"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { FAQItem } from "@/constants/site-data";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  showCTA?: boolean;
}

export function FAQAccordion({
  items,
  title = "Frequently asked questions.",
  showCTA = true,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16"
    >
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading & Quick CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// FAQ"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
              Answers to common questions about digital growth, marketing foundations, and practical first steps.
            </p>

            {showCTA && (
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
                >
                  <span>Get Growth Advice</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Accessible Accordion */}
          <div className="lg:col-span-7 border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.15)]">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div key={idx} className="py-5 sm:py-6 group">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#D5FF40] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] group-hover:border-[#D5FF40] transition-colors"
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="pt-3 pr-8 text-sm text-[#B0B0B0] leading-relaxed font-normal animate-in fade-in duration-150"
                    >
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
