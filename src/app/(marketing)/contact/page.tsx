import React from "react";
import type { Metadata } from "next";
import {
  ContactForm,
  ContactMethods,
  WhatHappensNext,
} from "@/features/contact/components";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Start Your Project — Contact | DizitalGrow",
  description:
    "Tell us about your business and what you'd like to build. We respond within one business day with honest advice and clear pricing.",
  openGraph: {
    title: "Contact — DizitalGrow",
    description: "Start a project with DizitalGrow.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <section className="container-cyber pt-16 pb-12">
        <div className="max-w-3xl">
          <Reveal delay={0.02}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
              <span>// CONTACT</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
              START YOUR <br />
              <span className="text-[#D5FF40]">PROJECT TODAY.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Tell us about your business and what you&apos;d like to build. We&apos;ll get back to you within one business day with clear recommendations and a custom quote.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.15)] pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <ContactMethods />
            <WhatHappensNext />
          </div>
        </div>
      </section>
    </div>
  );
}
