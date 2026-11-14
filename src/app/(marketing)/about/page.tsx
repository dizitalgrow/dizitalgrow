import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Code,
  BarChart3,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Reveal, MotionReveal } from "@/components/ui/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GROWTH_FRAMEWORK_STAGES } from "@/constants/site-data";
import { PRIMARY_CTA_LABEL, BRAND_TAGLINE } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "About DizitalGrow — Grow Beyond Offline | Mission, Vision & Philosophy",
  description:
    "Learn why DizitalGrow exists: making digital opportunities accessible and helping businesses grow through technology, marketing, and measurable strategies.",
  alternates: {
    canonical: "https://dizitalgrow.in/about",
  },
  openGraph: {
    title: "About DizitalGrow — Digital Growth Platform",
    description:
      "To make digital opportunities more accessible and help people and businesses grow through technology and digital innovation.",
    url: "https://dizitalgrow.in/about",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DizitalGrow — Digital Growth Platform",
    description:
      "Learn how DizitalGrow simplifies the digital journey by uniting engineering, marketing, and verified telemetry.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About DizitalGrow",
    description:
      "DizitalGrow helps individuals, startups, and growing businesses establish their digital presence, reach the right audience, and generate measurable growth.",
    url: "https://dizitalgrow.in/about",
    mainEntity: {
      "@type": "Organization",
      name: "DizitalGrow",
      url: "https://dizitalgrow.in",
      email: "contact@dizitalgrow.in",
      slogan: BRAND_TAGLINE,
    },
  };

  return (
    <div className="w-full bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero Section */}
      <section className="container-cyber pt-16 pb-14 border-b border-[rgba(213,255,64,0.12)]">
        <Breadcrumb items={[{ name: "About" }]} />
        <Reveal>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                ABOUT DIZITALGROW
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Grow Beyond Offline. <br />
              <span className="text-[#D5FF40]">Built for Real Outcomes.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              DizitalGrow was created with one simple conviction: the digital world is full of opportunities, but most businesses struggle because technology, advertising, and measurement operate in disconnected silos.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Vision & Mission Cards */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)]">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <MotionReveal className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-10 rounded-[2px] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D5FF40]">
              <Target className="h-4 w-4" />
              <span>OUR VISION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-snug">
              To make digital opportunities more accessible and help people and businesses grow through technology and digital innovation.
            </h2>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              We believe every ambitious founder, creator, and business owner deserves an uncompromising digital footprint that operates as effectively as an enterprise-grade platform.
            </p>
          </MotionReveal>

          {/* Mission */}
          <MotionReveal delay={0.1} className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-10 rounded-[2px] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D5FF40]">
              <Compass className="h-4 w-4" />
              <span>OUR MISSION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-snug">
              To simplify the digital journey by combining technology, marketing and measurable strategies that create meaningful business opportunities.
            </h2>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              We remove the confusion from digital growth—delivering clean code, honest advertising management, and verified server telemetry under one roof.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              THE PROBLEM
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
              Why We Started DizitalGrow
            </h2>
            <p className="text-sm text-[#B0B0B0] leading-relaxed">
              We saw too many businesses get burned by agency promises: pretty websites that generated zero enquiries, expensive ad clicks that bounced, and analytics that nobody understood.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                The Disconnection Problem
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                Developers build websites without understanding customer acquisition. Marketers run ads without understanding landing page UX. Analytics consultants install tags without validating revenue data. When things fail, each party blames the other.
              </p>
            </div>

            <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                The Honest Alternative
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                DizitalGrow unites technical engineering, high-intent advertising, and server-side telemetry. We treat digital as one coherent discipline designed to move real business needles.
              </p>
            </div>

            <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                Honest Positioning
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                We are an agile, growing modern growth partner. We don&apos;t invent decades of corporate heritage or hundreds of staff. You get direct access to practitioners who actually design, code, and optimize your systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Growth Framework Highlight */}
      <section className="container-cyber py-16 md:py-24 border-b border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            OUR FRAMEWORK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
            A Smarter Way to Grow Digitally
          </h2>
          <p className="text-sm text-[#B0B0B0] mt-2">
            Every engagement follows our five-stage connected methodology.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {GROWTH_FRAMEWORK_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-5 rounded-[2px] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2 py-0.5 rounded-[2px] inline-block mb-2">
                  STAGE {stage.step}
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {stage.phase}
                </h3>
                <p className="mt-1 text-xs text-[#B0B0B0] leading-snug">
                  {stage.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[rgba(213,255,64,0.1)] text-[11px] font-mono text-[#D5FF40]">
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="container-cyber py-16 md:py-24 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            OUR VALUES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
            Principles We Refuse to Compromise
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Transparent Truth
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              We never inflate metrics, invent fake case studies, or promise guaranteed instant wealth. We provide realistic recommendations based on practical market facts.
            </p>
          </div>

          <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Engineering Quality
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              Sub-second page speeds, clean TypeScript, mobile ergonomics, and resilient server-side telemetry. We build platforms designed to endure.
            </p>
          </div>

          <div className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold uppercase text-white">
              Measurable Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              We evaluate success by verified inquiries, completed calls, and actual customer revenue—never by superficial clicks or vanity social impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-cyber py-20 bg-[#050505]">
        <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 rounded-[2px] text-center max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
            Ready to Plan Your Digital Growth?
          </h2>
          <p className="text-base text-[#B0B0B0] leading-relaxed">
            Share your goals with us. We will provide an honest evaluation, identify current bottlenecks, and outline a realistic written plan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              <span>{PRIMARY_CTA_LABEL}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
