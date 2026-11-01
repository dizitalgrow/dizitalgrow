"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Sparkles, Activity, Users, Megaphone, BarChart3, TrendingUp, Smartphone, Globe } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HERO_CONTENT } from "@/constants/site-data";

interface EcosystemNode {
  id: string;
  label: string;
  category: "Foundation" | "Reach" | "Telemetry" | "Outcome";
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  metric: string;
  x: number; // percentage in coordinate space
  y: number;
}

const NODES: EcosystemNode[] = [
  {
    id: "website",
    label: "Website",
    category: "Foundation",
    icon: Globe,
    description: "Next.js App Router for sub-second page rendering and mobile ergonomics.",
    metric: "< 0.8s LCP",
    x: 18,
    y: 24,
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    category: "Foundation",
    icon: Smartphone,
    description: "Cross-platform iOS and Android app with offline caching and push notifications.",
    metric: "iOS & Android",
    x: 18,
    y: 72,
  },
  {
    id: "audience",
    label: "Target Audience",
    category: "Reach",
    icon: Users,
    description: "High-intent buyer segmentation filtering out low-value vanity clicks.",
    metric: "Verified Intent",
    x: 48,
    y: 18,
  },
  {
    id: "advertising",
    label: "Paid Ads",
    category: "Reach",
    icon: Megaphone,
    description: "Coordinated Google Search Ads and Meta Instagram/Facebook campaigns.",
    metric: "Google + Meta",
    x: 48,
    y: 48,
  },
  {
    id: "analytics",
    label: "Analytics & CAPI",
    category: "Telemetry",
    icon: BarChart3,
    description: "Server-side Meta CAPI and GA4 telemetry bypassing browser ad blockers.",
    metric: "Dual-Channel",
    x: 48,
    y: 80,
  },
  {
    id: "leads",
    label: "Qualified Enquiries",
    category: "Outcome",
    icon: Activity,
    description: "Frictionless form submissions and direct 1-on-1 WhatsApp chat gateways.",
    metric: "Real Leads",
    x: 82,
    y: 32,
  },
  {
    id: "growth",
    label: "Business Growth",
    category: "Outcome",
    icon: TrendingUp,
    description: "Measurable customer acquisition and sustainable compounding revenue.",
    metric: "Grow Beyond Offline",
    x: 82,
    y: 72,
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<EcosystemNode>(NODES[0]);

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
              The Digital World Has Opportunities. <br />
              <span className="text-[#D5FF40]">Let&apos;s Help You Grow With Them.</span>
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

          {/* Right Column: Interactive Digital Ecosystem Visualization */}
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
            <div className="relative border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] rounded-[2px] p-4 sm:p-7 cyber-grid-bg">
              {/* Header inside visualization */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(213,255,64,0.12)]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D5FF40] font-bold block">
                    CONNECTED DIGITAL ECOSYSTEM
                  </span>
                  <p className="font-display text-xs font-bold text-white uppercase mt-0.5">
                    How Digital Activities Interconnect
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 rounded-[2px] shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] animate-pulse" />
                  <span>Interactive Flow</span>
                </div>
              </div>

              {/* Node Network Map (Responsive Grid with Connected Connectors) */}
              <div className="py-4 sm:py-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
                  {/* Column 1: Foundation */}
                  <div className="space-y-2 sm:space-y-3">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#B0B0B0] block text-center truncate">
                      01 · FOUNDATION
                    </span>
                    {[NODES[0], NODES[1]].map((node) => {
                      const Icon = node.icon;
                      const isSelected = activeNode.id === node.id;
                      return (
                        <button
                          key={node.id}
                          type="button"
                          onClick={() => setActiveNode(node)}
                          className={`w-full text-left p-2 sm:p-3 rounded-[2px] border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#D5FF40] bg-[#141414]"
                              : "border-[rgba(213,255,64,0.15)] bg-[#101010] hover:border-[rgba(213,255,64,0.35)]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                            <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 ${isSelected ? "text-[#D5FF40]" : "text-[#B0B0B0]"}`} />
                            <span className="font-display text-[11px] sm:text-xs font-bold uppercase text-white truncate">
                              {node.label}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#A1A1AA] block truncate">
                            {node.metric}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Column 2: Reach & Telemetry */}
                  <div className="space-y-2 sm:space-y-3">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#B0B0B0] block text-center truncate">
                      02 · TRAFFIC & DATA
                    </span>
                    {[NODES[2], NODES[3], NODES[4]].map((node) => {
                      const Icon = node.icon;
                      const isSelected = activeNode.id === node.id;
                      return (
                        <button
                          key={node.id}
                          type="button"
                          onClick={() => setActiveNode(node)}
                          className={`w-full text-left p-2 sm:p-3 rounded-[2px] border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#D5FF40] bg-[#141414]"
                              : "border-[rgba(213,255,64,0.15)] bg-[#101010] hover:border-[rgba(213,255,64,0.35)]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                            <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 ${isSelected ? "text-[#D5FF40]" : "text-[#B0B0B0]"}`} />
                            <span className="font-display text-[11px] sm:text-xs font-bold uppercase text-white truncate">
                              {node.label}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#A1A1AA] block truncate">
                            {node.metric}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Column 3: Outcomes */}
                  <div className="space-y-2 sm:space-y-3">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#B0B0B0] block text-center truncate">
                      03 · REVENUE
                    </span>
                    {[NODES[5], NODES[6]].map((node) => {
                      const Icon = node.icon;
                      const isSelected = activeNode.id === node.id;
                      return (
                        <button
                          key={node.id}
                          type="button"
                          onClick={() => setActiveNode(node)}
                          className={`w-full text-left p-2 sm:p-3 rounded-[2px] border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#D5FF40] bg-[#141414]"
                              : "border-[rgba(213,255,64,0.15)] bg-[#101010] hover:border-[rgba(213,255,64,0.35)]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                            <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 ${isSelected ? "text-[#D5FF40]" : "text-[#B0B0B0]"}`} />
                            <span className="font-display text-[11px] sm:text-xs font-bold uppercase text-white truncate">
                              {node.label}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#A1A1AA] block truncate">
                            {node.metric}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Active Node Detail Card */}
              <div className="p-4 border-t border-[rgba(213,255,64,0.15)] bg-[#101010] rounded-[2px] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5FF40]" />
                    <span className="font-display text-xs font-bold uppercase text-white">
                      {activeNode.label} ({activeNode.category})
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D5FF40] uppercase">
                    {activeNode.metric}
                  </span>
                </div>
                <p className="text-xs text-[#B0B0B0] leading-relaxed">
                  {activeNode.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
