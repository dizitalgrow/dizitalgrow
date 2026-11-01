"use client";

import React, { useState } from "react";
import { Check, Activity, Cpu, Radio, Zap, TrendingUp } from "lucide-react";
import { GROWTH_FRAMEWORK_STAGES } from "@/constants/site-data";
import { Reveal, MotionReveal } from "@/components/ui/motion";

const STAGE_ICONS = {
  LEARN: Cpu,
  BUILD: Zap,
  REACH: Radio,
  CONVERT: Activity,
  GROW: TrendingUp,
};

export function GrowthFrameworkSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = GROWTH_FRAMEWORK_STAGES[activeStageIndex];
  const CurrentIcon = STAGE_ICONS[currentStage.phase];

  return (
    <section id="framework" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#070707] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                SIGNATURE FRAMEWORK
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              A Smarter Way to <br />
              <span className="text-[#D5FF40]">Grow Digitally.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed">
              Most digital initiatives fail because steps are skipped or tackled out of order. Our five-stage framework ensures your technology, traffic, and tracking build upon each other.
            </p>
          </div>
        </Reveal>

        {/* Visually Connected Stepper Pipeline */}
        <div className="relative mb-12">
          {/* Connecting Line (hidden on very small screens, visible on md+) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[rgba(213,255,64,0.15)] z-0" />

          {/* Stepper Buttons */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {GROWTH_FRAMEWORK_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;
              const Icon = STAGE_ICONS[stage.phase];

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-[2px] border text-left transition-all cursor-pointer last:col-span-2 sm:last:col-span-1 md:last:col-span-1 ${
                    isSelected
                      ? "border-[#D5FF40] bg-[#141414]"
                      : isPassed
                      ? "border-[rgba(213,255,64,0.3)] bg-[#0A0A0A] hover:border-[#D5FF40]"
                      : "border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] hover:border-[rgba(213,255,64,0.35)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#D5FF40]">
                      0{idx + 1}
                    </span>
                    <Icon className={`h-4 w-4 ${isSelected ? "text-[#D5FF40]" : "text-[#A1A1AA]"}`} />
                  </div>

                  <span className="font-display text-sm sm:text-base font-extrabold uppercase text-white block">
                    {stage.phase}
                  </span>

                  <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider block mt-0.5 truncate">
                    {stage.tagline}
                  </span>

                  {isSelected && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D5FF40]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Active Stage Deep Dive */}
        <MotionReveal
          key={currentStage.step}
          className="border border-[rgba(213,255,64,0.22)] bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 rounded-[2px]"
        >
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Summary & Deliverable */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                  STAGE {currentStage.step} OF 05
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                  {currentStage.phase} PHASE
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CurrentIcon className="h-6 w-6 text-[#D5FF40] shrink-0" />
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {currentStage.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                {currentStage.description}
              </p>

              <div className="p-4 border border-[rgba(213,255,64,0.18)] bg-[#101010] rounded-[2px] space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-[#D5FF40]">
                  PRIMARY DELIVERABLE:
                </span>
                <p className="font-display text-sm font-bold text-white uppercase">
                  {currentStage.deliverable}
                </p>
              </div>
            </div>

            {/* Right: Key Activities & Progression CTA */}
            <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-[rgba(213,255,64,0.12)] lg:pl-10">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
                  KEY ACTIVITIES IN THIS STAGE:
                </span>
                {currentStage.activities.map((activity, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#B0B0B0] bg-[#101010] p-3 rounded-[2px] border border-[rgba(213,255,64,0.1)]"
                  >
                    <Check className="h-4 w-4 text-[#D5FF40] stroke-[3] shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-mono font-bold uppercase text-[#B0B0B0] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous Stage
                </button>

                <button
                  type="button"
                  disabled={activeStageIndex === GROWTH_FRAMEWORK_STAGES.length - 1}
                  onClick={() =>
                    setActiveStageIndex((prev) =>
                      Math.min(GROWTH_FRAMEWORK_STAGES.length - 1, prev + 1)
                    )
                  }
                  className="text-xs font-mono font-bold uppercase text-[#D5FF40] hover:underline disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
