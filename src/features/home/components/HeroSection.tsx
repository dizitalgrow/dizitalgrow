"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Activity, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-12 bg-[#050505] cyber-grid-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(213,255,64,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-cyber relative z-10">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Column: Clear, High-Converting Business Headline & CTAs */}
          <div>
            <Reveal delay={0.02}>
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(213,255,64,0.25)] bg-[#101010] px-3 py-1 text-[11px] font-mono font-bold tracking-wider text-[#D5FF40]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] shadow-[0_0_8px_#D5FF40] animate-ping" />
                <span>// WEBSITES • APPS • ADVERTISING</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              {/* High-Impact Clear H1 Headline */}
              <h1 className="font-display mt-3.5 text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold uppercase leading-[0.98] tracking-tight sm:tracking-[-2px] text-white">
                WEBSITES, APPS &amp; ADS <br />
                <span className="text-[#D5FF40] drop-shadow-[0_0_25px_rgba(213,255,64,0.25)]">
                  THAT GROW YOUR BUSINESS
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Plain English Subheadline */}
              <p className="mt-3.5 max-w-lg text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-cyber-primary group py-2.5 px-5 text-xs font-bold"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/work"
                  className="btn-cyber-secondary py-2.5 px-5 text-xs font-bold"
                >
                  <span>View Work</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              {/* Trust & Guarantee Ticker */}
              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.15)] flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono text-[#B0B0B0]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>FAST 2–4 WEEK DELIVERY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>MOBILE-FIRST DESIGN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>CLEAR COMMUNICATION</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clear Business Growth Dashboard Card */}
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-[4px] border border-[rgba(213,255,64,0.25)] bg-[#101010] p-4 sm:p-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(213,255,64,0.08)]">
                {/* Dashboard Card Header */}
                <div className="flex items-center justify-between border-b border-[rgba(213,255,64,0.15)] pb-2.5 mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#181818] border border-[rgba(213,255,64,0.3)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#181818] border border-[rgba(213,255,64,0.3)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D5FF40] shadow-[0_0_6px_#D5FF40]" />
                    <span className="font-mono text-[11px] text-[#B0B0B0] ml-2 tracking-wider">
                      DIZITALGROW // CLIENT GROWTH DASHBOARD
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D5FF40] font-bold">
                    VERIFIED RESULTS
                  </span>
                </div>

                {/* Growth Metrics Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {/* Metric 1 */}
                  <div className="rounded-[2px] bg-[#181818] border border-[rgba(213,255,64,0.15)] p-3">
                    <span className="font-mono text-[10px] text-[#B0B0B0] uppercase block">
                      NEW LEADS &amp; INQUIRIES
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1.5">
                      <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#D5FF40]">
                        +380%
                      </span>
                      <span className="text-[11px] font-mono text-[#D5FF40] flex items-center">
                        <TrendingUp className="h-3 w-3 inline mr-0.5" /> +42%
                      </span>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="rounded-[2px] bg-[#181818] border border-[rgba(213,255,64,0.15)] p-3">
                    <span className="font-mono text-[10px] text-[#B0B0B0] uppercase block">
                      AVG. AD RETURN (ROAS)
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1.5">
                      <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                        4.8x
                      </span>
                      <span className="text-[10px] font-mono text-[#D5FF40]">
                        RETURN ON AD SPEND
                      </span>
                    </div>
                  </div>
                </div>

                {/* Revenue Scaling Graph */}
                <div className="rounded-[2px] bg-[#050505] border border-[rgba(213,255,64,0.15)] p-3 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#D5FF40]" />
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">
                        MONTHLY REVENUE GROWTH
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#D5FF40] bg-[#101010] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5">
                      WEBSITES + APPS + ADS
                    </span>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative h-20 w-full overflow-hidden">
                    <svg
                      viewBox="0 0 500 100"
                      preserveAspectRatio="none"
                      className="h-full w-full stroke-[#D5FF40] fill-none"
                    >
                      <defs>
                        <linearGradient id="revenueGrowthGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D5FF40" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#D5FF40" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(213,255,64,0.08)" strokeDasharray="4 4" />
                      <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(213,255,64,0.08)" strokeDasharray="4 4" />
                      <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(213,255,64,0.08)" strokeDasharray="4 4" />

                      <path
                        d="M0,85 Q60,75 120,55 T240,45 T360,25 T500,8 L500,100 L0,100 Z"
                        fill="url(#revenueGrowthGradient)"
                      />
                      <path
                        d="M0,85 Q60,75 120,55 T240,45 T360,25 T500,8"
                        stroke="#D5FF40"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="500" cy="8" r="4" fill="#D5FF40" />
                      <circle cx="360" cy="25" r="3" fill="#FFFFFF" />
                      <circle cx="240" cy="45" r="3" fill="#D5FF40" />
                    </svg>
                  </div>
                </div>

                {/* Practical Client Results Highlights */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between rounded-[2px] bg-[#181818] px-3 py-1.5 text-[11px] font-mono">
                    <span className="text-white">Hospital App // 3x Faster Online Bookings</span>
                    <span className="text-[#D5FF40] font-bold">HEALTHCARE</span>
                  </div>

                  <div className="flex items-center justify-between rounded-[2px] bg-[#181818] px-3 py-1.5 text-[11px] font-mono">
                    <span className="text-white">Real Estate System // 5 Min Avg. Response Time</span>
                    <span className="text-[#D5FF40] font-bold">REAL ESTATE</span>
                  </div>

                  <div className="flex items-center justify-between rounded-[2px] bg-[#181818] px-3 py-1.5 text-[11px] font-mono">
                    <span className="text-white">E-Commerce Brand // 2.4x Higher Verified Sales</span>
                    <span className="text-[#D5FF40] font-bold">E-COMMERCE</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
