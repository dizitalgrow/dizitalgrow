"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { ArticleFaqItem } from "@/lib/sanity";

interface FAQSectionProps {
  heading?: string;
  items?: ArticleFaqItem[];
  className?: string;
}

export function FAQSection({
  heading = "Frequently Asked Questions",
  items,
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) {
    return null;
  }

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className={`border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 rounded-[2px] space-y-6 ${className}`}
    >
      <div className="flex items-center gap-2 pb-4 border-b border-[rgba(213,255,64,0.12)]">
        <HelpCircle className="h-4 w-4 text-[#D5FF40]" />
        <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white m-0">
          {heading}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const buttonId = `faq-btn-${idx}`;
          const contentId = `faq-content-${idx}`;

          return (
            <div
              key={item._key || idx}
              className="border border-[rgba(213,255,64,0.12)] bg-[#101010] rounded-[2px] overflow-hidden"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-display font-bold uppercase tracking-tight text-white hover:text-[#D5FF40] transition-colors focus-cyber"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#D5FF40] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[rgba(213,255,64,0.08)] pt-4"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
