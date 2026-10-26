"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PEXELS_IMAGES } from "@/constants/images";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Clear Editorial Value Proposition */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Minimal Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// DIGITAL AGENCY"}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-[1.04] tracking-tight text-white"
            >
              Build better. <br />
              Reach more. <br />
              <span className="text-[#D5FF40]">Grow smarter.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal"
            >
              Websites, digital advertising, and reliable tracking to help your business grow online.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-transparent text-white px-6 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:border-[#D5FF40] hover:text-[#D5FF40] hover:bg-[#D5FF40]/5 active:translate-y-[1px] focus-cyber"
              >
                <span>Explore Services</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Minimal Trust Indicator */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[rgba(213,255,64,0.12)] flex items-center gap-2.5 text-xs font-mono text-[#B0B0B0]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#D5FF40] shrink-0" />
              <span>Engineered digital products with verified server-side tracking.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Compelling Image-Led Composition */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <div className="relative overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010] group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src={PEXELS_IMAGES.hero.src}
                  alt={PEXELS_IMAGES.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              </div>

              {/* Minimal Editorial Badge Overlay */}
              <div className="p-4 sm:p-5 border-t border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D5FF40] font-bold block">
                    {"// CORE FOCUS"}
                  </span>
                  <p className="font-display text-sm font-bold text-white uppercase mt-0.5">
                    Websites · Advertising · Meta CAPI
                  </p>
                </div>
                <span className="font-mono text-xs text-[#B0B0B0]">
                  01 / 03
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
