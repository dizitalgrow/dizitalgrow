import React from "react";
import type { Metadata } from "next";
import {
  ContactForm,
  ContactMethods,
  WhatHappensNext,
} from "@/features/contact/components";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Discuss Your Project — Web Development, Advertising & Tracking | DizitalGrow",
  description:
    "Tell us about your digital goals. From business websites and custom web apps to Google Ads, Meta Ads, and Meta CAPI tracking, we provide clear recommendations without high-pressure sales.",
  alternates: {
    canonical: "https://dizitalgrow.in/contact",
  },
  openGraph: {
    title: "Discuss Your Project — DizitalGrow",
    description:
      "Share your business challenges and growth goals. Honest advice, technical recommendations, and clear scoping without high-pressure sales.",
    url: "https://dizitalgrow.in/contact",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discuss Your Project — DizitalGrow",
    description:
      "Practical digital growth, development, advertising, and tracking advice for businesses.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Discuss Your Project with DizitalGrow",
    url: "https://dizitalgrow.in/contact",
    description:
      "Tell us about your digital goals. From business websites and custom web apps to Google Ads, Meta Ads, and Meta CAPI tracking, we provide clear recommendations without high-pressure sales.",
    mainEntity: {
      "@type": "Organization",
      name: "DizitalGrow",
      email: "contact@dizitalgrow.in",
      url: "https://dizitalgrow.in",
    },
  };

  return (
    <div className="min-h-screen text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Header Section */}
      <section className="container-cyber pt-16 pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// DISCUSS YOUR PROJECT"}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] uppercase leading-tight">
              Tell Us What You&apos;re Building. <br />
              <span className="text-[#D5FF40]">We&apos;ll Plan the Next Steps.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
              Share your digital goals, website challenges, or ad tracking questions. We review every inquiry thoroughly and respond with practical recommendations within one business day.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Main Grid: Form & Direct Info */}
      <section className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.12)] pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <MotionReveal delay={0.1}>
            <ContactForm />
          </MotionReveal>

          <MotionReveal delay={0.2} className="space-y-8">
            <ContactMethods />
            <WhatHappensNext />
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
