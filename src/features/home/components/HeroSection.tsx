"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Compass, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HERO_CONTENT, GROWTH_FRAMEWORK_STEPS } from "@/constants/site-data";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center py-8 lg:py-0 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber w-full py-4 lg:py-6">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-4 lg:space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
                {HERO_CONTENT.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold uppercase leading-[1.08] tracking-tight text-white"
            >
              Build Your Digital Presence. <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">Turn It Into Growth.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm sm:text-base lg:text-lg text-[#B0B0B0] leading-relaxed font-normal"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-1 flex flex-wrap items-center gap-3.5">
              <Link
                href={HERO_CONTENT.primaryCTA.href}
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 sm:px-6 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
              >
                <span>{HERO_CONTENT.primaryCTA.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href={HERO_CONTENT.secondaryCTA.href}
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-transparent text-white px-5 py-3 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:border-[#D5FF40] hover:text-[#D5FF40] hover:bg-[#D5FF40]/5 active:translate-y-[1px] focus-cyber"
              >
                <span>{HERO_CONTENT.secondaryCTA.label}</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* Trust statement */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center gap-2.5 text-xs font-mono text-[#B0B0B0]"
            >
              <Compass className="h-4 w-4 text-[#D5FF40] shrink-0" />
              <span>{HERO_CONTENT.supportingTagline}</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual of Digital Growth Flow */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <div className="relative border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-5 sm:p-6 lg:p-6 xl:p-7 rounded-[2px]">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(213,255,64,0.12)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0]">
                  THE GROWTH FRAMEWORK
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#D5FF40] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                  <span>CONNECTED EXECUTION</span>
                </div>
              </div>

              {/* Step progression */}
              <div className="mt-5 space-y-4 lg:space-y-4 xl:space-y-5">
                {GROWTH_FRAMEWORK_STEPS.map((step, idx) => (
                  <React.Fragment key={step.step}>
                    <div className="group flex items-start gap-3.5 p-1.5 rounded-[2px] transition-colors hover:bg-white/[0.02]">
                      <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2 py-0.5 rounded-[2px] group-hover:border-[#D5FF40] transition-colors shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#D5FF40] font-bold uppercase tracking-wider">
                            {step.phase}
                          </span>
                        </div>
                        <h3 className="font-display text-xs sm:text-sm font-bold uppercase text-white tracking-wide group-hover:text-[#D5FF40] transition-colors">
                          {step.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[#B0B0B0] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {idx < GROWTH_FRAMEWORK_STEPS.length - 1 && (
                      <div className="h-2.5 lg:h-3 border-l border-dashed border-[rgba(213,255,64,0.25)] ml-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-5 pt-3.5 border-t border-[rgba(213,255,64,0.12)] flex items-center justify-between text-[11px] font-mono text-[#B0B0B0]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-[#D5FF40]" />
                  <span>No vanity metrics</span>
                </span>
                <span className="text-white font-medium">Verifiable business outcomes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
