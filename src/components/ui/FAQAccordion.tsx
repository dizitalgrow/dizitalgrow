"use client";

import React from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FAQItem } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { useAccordion } from "@/hooks";

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
  const { isOpen, toggle } = useAccordion(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16"
    >
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading & Quick CTA */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  {"// FAQ"}
                </span>
              </div>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                {title}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                Simple answers to common questions about websites, advertising, and tracking.
              </p>

              {showCTA && (
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </Reveal>
          </div>

          {/* Right Column: Accessible Animated Accordion */}
          <div className="lg:col-span-7 border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.15)]">
            {items.map((item, idx) => {
              const isExpanded = isOpen(idx);
              const buttonId = `faq-btn-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div key={idx} className="py-5 sm:py-6 group">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-6 text-left cursor-pointer transition-colors focus-cyber rounded-[2px]"
                  >
                    <span
                      className={`font-display text-base sm:text-lg font-bold transition-colors leading-snug ${
                        isExpanded
                          ? "text-[#D5FF40]"
                          : "text-white group-hover:text-[#D5FF40]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border transition-all duration-200 ${
                        isExpanded
                          ? "border-[#D5FF40] bg-[#D5FF40]/10 text-[#D5FF40]"
                          : "border-[rgba(213,255,64,0.2)] text-[#D5FF40] group-hover:border-[#D5FF40] group-hover:bg-[#D5FF40]/5"
                      }`}
                    >
                      {isExpanded ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0.01 : 0.25,
                          ease: [0.16, 1, 0.3, 1] as const,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pr-8 text-sm text-[#B0B0B0] leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
