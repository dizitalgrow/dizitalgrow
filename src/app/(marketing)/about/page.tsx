import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Code, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";
import { PEXELS_IMAGES } from "@/constants/images";

export const metadata: Metadata = {
  title: "About DizitalGrow — Practical Engineering & Marketing",
  description:
    "Learn about DizitalGrow's philosophy: connecting modern web development, high-intent digital advertising, and verified server-side tracking.",
  alternates: {
    canonical: "https://dizitalgrow.in/about",
  },
  openGraph: {
    title: "About DizitalGrow — Digital Growth Agency",
    description:
      "Connecting websites, advertising, and measurement into one coherent system.",
    url: "https://dizitalgrow.in/about",
    siteName: "DizitalGrow",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="container-cyber pt-16 pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// ABOUT DIZITALGROW"}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Connecting Websites, Ads, <br />
              <span className="text-[#D5FF40]">&amp; Measurement.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Most businesses struggle online because their website, advertising campaigns, and analytics do not talk to each other. We build them as one connected system.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Editorial Image & Mission */}
      <section className="container-cyber pb-20">
        <div className="grid gap-10 lg:grid-cols-12 items-center border-t border-[rgba(213,255,64,0.12)] pt-12">
          {/* Editorial Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010]">
              <Image
                src={PEXELS_IMAGES.about.src}
                alt={PEXELS_IMAGES.about.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <p className="mt-2.5 text-[11px] font-mono text-[#B0B0B0]">
              Photography: Authentic digital collaboration and software engineering workflow via Pexels.
            </p>
          </div>

          {/* Philosophy Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
              OUR APPROACH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
              Practical work over vanity impressions.
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
              An ad campaign wastes money if the landing page is confusing. A fast website fails if the right buyers never find it. And you cannot scale what you cannot measure accurately.
            </p>
            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
              DizitalGrow was founded to eliminate digital fragmentation. We unite technical web development (Next.js, React), high-intent ad management (Google &amp; Meta), and server-side telemetry (Meta CAPI &amp; GA4) into one streamlined partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container-cyber pb-20 border-t border-[rgba(213,255,64,0.12)] pt-16">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// PRINCIPLES"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
              What Clients Can Expect
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MotionReveal className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Honest Communication
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
              We explain every recommendation in plain language, keep you updated regularly, and never hide behind agency buzzwords.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08} className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Solid Technical Work
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
              Fast page load times, clean code, responsive layouts tested across all smartphones, and reliable server-side tracking.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.16} className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Real Business Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
              We measure genuine inquiries, completed phone calls, and verified purchases—never superficial vanity clicks or views.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-16 bg-[#080808]">
        <div className="container-cyber">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Ready to work together?
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0]">
              Share your digital goals or existing challenges. We respond with technical recommendations and clear scopes within 24 hours.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
