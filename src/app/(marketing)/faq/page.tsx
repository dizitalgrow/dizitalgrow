import React from "react";
import type { Metadata } from "next";
import { FAQ_LIST } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/ui/FinalCTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — FAQ | DizitalGrow",
  description:
    "Clear, straightforward answers about our project timelines, pricing, mobile apps, ad management, and ongoing support.",
};

export default function FAQPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <section className="container-cyber pt-16 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
          // FAQ
        </p>
        <h1 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
          FREQUENTLY ASKED <br />
          <span className="text-[#D5FF40]">QUESTIONS.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
          Clear, straightforward answers about how long projects take, what they cost, and how we help your business grow.
        </p>
      </section>

      <FAQAccordion items={FAQ_LIST} showCTA={false} />
      <FinalCTA />
    </div>
  );
}
