"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Layers,
  Radio,
  BarChart3,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HERO_CONTENT } from "@/constants/site-data";

interface EcosystemStage {
  step: string;
  id: string;
  title: string;
  subhead: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  metric: string;
  deliverables: string[];
}

const ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    step: "01",
    id: "web-apps",
    title: "Websites & Applications",
    subhead: "Digital Foundation",
    icon: Layers,
    description:
      "Modern, sub-second web platforms and mobile applications engineered on Next.js. Built for lightning-fast loading, clear proposition hierarchy, and mobile ergonomics.",
    metric: "< 0.8s LCP · Next.js 16",
    deliverables: [
      "Sub-second App Router Architecture",
      "Semantic SEO Schemas",
      "Mobile-Optimized UX",
    ],
  },
  {
    step: "02",
    id: "traffic-acquisition",
    title: "Traffic & Acquisition",
    subhead: "Customer Connection",
    icon: Radio,
    description:
      "High-intent buyer acquisition through coordinated Google Search Ads, targeted Meta campaigns (Instagram & Facebook), and technical organic search engine optimization.",
    metric: "High-Intent Buyer Search",
    deliverables: [
      "Google Search & Shopping Ads",
      "Targeted Meta Funnels",
      "Technical On-Page SEO",
    ],
  },
  {
    step: "03",
    id: "tracking-analytics",
    title: "Tracking & Analytics",
    subhead: "Server-Side Telemetry",
    icon: BarChart3,
    description:
      "End-to-end telemetry setups using Google Tag Manager, GA4, and server-side Meta Conversions API (CAPI) with deduplication to measure exactly which ad channels produce revenue.",
    metric: "Dual-Channel · Event ID Matched",
    deliverables: [
      "GA4 E-commerce & Lead Events",
      "Server-Side Meta CAPI",
      "Zero-Deduplication Conflict",
    ],
  },
  {
    step: "04",
    id: "enquiries-leads",
    title: "Qualified Enquiries",
    subhead: "Conversion Routing",
    icon: MessageSquare,
    description:
      "Frictionless conversion journeys connecting high-intent visitors directly with your team through verified form submissions, WhatsApp gateways, and consultation booking.",
    metric: "High-Intent Inquiries",
    deliverables: [
      "Direct WhatsApp Lead Funnels",
      "Honeypot-Protected Forms",
      "Automated Email Notifications",
    ],
  },
  {
    step: "05",
    id: "business-growth",
    title: "Business Growth",
    subhead: "Compounding Scale",
    icon: TrendingUp,
    description:
      "Dependable, measurable commercial outcomes. Clean code, dedicated telemetry, and continuous feedback loops that turn online traffic into sustainable business expansion.",
    metric: "Grow Beyond Offline",
    deliverables: [
      "Full Code & Data Ownership",
      "Predictable Customer Pipeline",
      "Long-Term Enterprise Longevity",
    ],
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = ECOSYSTEM_STAGES[activeStageIndex];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-[rgba(213,255,64,0.12)] bg-[#050505] py-14 sm:py-20 lg:py-24">
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Headline, Supporting Text & CTAs */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {HERO_CONTENT.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-[1.06] tracking-tight text-white"
            >
              Build Your Digital Presence. <br />
              <span className="text-[#D5FF40]">Reach More People. Grow With Clarity.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal"
            >
              {HERO_CONTENT.supportingText}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href={HERO_CONTENT.primaryCTA.href}
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
              >
                <span>{HERO_CONTENT.primaryCTA.label}</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </Link>

              <Link
                href={HERO_CONTENT.secondaryCTA.href}
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-transparent text-white px-6 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:border-[#D5FF40] hover:text-[#D5FF40] hover:bg-[#D5FF40]/5 active:translate-y-[1px] focus-cyber"
              >
                <span>{HERO_CONTENT.secondaryCTA.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[rgba(213,255,64,0.12)] flex flex-wrap items-center gap-4 text-xs font-mono text-[#B0B0B0]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#D5FF40]" />
                <span className="text-white font-bold">Connected Growth Platform:</span>
              </div>
              {HERO_CONTENT.trustHighlights.map((hl) => (
                <span
                  key={hl}
                  className="bg-[#101010] border border-[rgba(213,255,64,0.15)] px-2.5 py-1 rounded-[2px] text-[#A1A1AA]"
                >
                  {hl}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Connected Digital Growth Ecosystem Visualization */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <div className="relative border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] rounded-[2px] p-5 sm:p-7 cyber-grid-bg">
              {/* Header inside visualization */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(213,255,64,0.12)]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D5FF40] font-bold block">
                    CONNECTED DIGITAL ECOSYSTEM
                  </span>
                  <p className="font-display text-xs font-bold text-white uppercase mt-0.5">
                    How Digital Activities Interconnect to Drive Growth
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] animate-pulse" />
                  <span>5-Stage Flow</span>
                </div>
              </div>

              {/* Connected Flow Bar (Horizontal sequence) */}
              <div className="py-4">
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {ECOSYSTEM_STAGES.map((stg, idx) => {
                    const isSelected = activeStageIndex === idx;
                    const isPassed = activeStageIndex > idx;
                    const Icon = stg.icon;

                    return (
                      <button
                        key={stg.id}
                        type="button"
                        onClick={() => setActiveStageIndex(idx)}
                        className={`p-2 sm:p-2.5 rounded-[2px] border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "border-[#D5FF40] bg-[#141414]"
                            : isPassed
                            ? "border-[#D5FF40]/40 bg-[#101010]"
                            : "border-white/10 bg-[#0c0c0c] hover:border-white/20"
                        }`}
                        title={stg.title}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`font-mono text-[9px] font-bold ${
                              isSelected ? "text-[#D5FF40]" : "text-[#707070]"
                            }`}
                          >
                            {stg.step}
                          </span>
                          <Icon
                            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${
                              isSelected
                                ? "text-[#D5FF40]"
                                : isPassed
                                ? "text-white/80"
                                : "text-[#555]"
                            }`}
                          />
                        </div>
                        <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase text-white truncate block">
                          {stg.subhead}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* SVG Visual Flow Line */}
                <div className="hidden sm:flex items-center justify-between px-6 pt-3 text-[#D5FF40]/40 text-xs font-mono">
                  <span>Web &amp; Apps</span>
                  <ChevronRight className="w-3 h-3 text-[#D5FF40]/60" />
                  <span>Traffic</span>
                  <ChevronRight className="w-3 h-3 text-[#D5FF40]/60" />
                  <span>Telemetry</span>
                  <ChevronRight className="w-3 h-3 text-[#D5FF40]/60" />
                  <span>Inquiries</span>
                  <ChevronRight className="w-3 h-3 text-[#D5FF40]/60" />
                  <span>Growth</span>
                </div>
              </div>

              {/* Active Stage Detail Card */}
              <div className="p-4 sm:p-5 border-t border-[rgba(213,255,64,0.15)] bg-[#101010] rounded-[2px] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#D5FF40] bg-[#D5FF40]/10 px-2 py-0.5 rounded-[2px] border border-[#D5FF40]/20 font-bold">
                      STAGE {activeStage.step}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-white">
                      {activeStage.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#A1A1AA] uppercase px-2 py-0.5 rounded-[2px] bg-white/5 border border-white/10">
                    {activeStage.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeStage.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-white/90">
                      <CheckCircle2 className="w-3 h-3 text-[#D5FF40] shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
