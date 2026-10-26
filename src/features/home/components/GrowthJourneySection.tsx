import React from "react";
import { GROWTH_JOURNEY_STAGES } from "@/constants/site-data";
import { Check } from "lucide-react";

export function GrowthJourneySection() {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)]">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// THE STAGES OF GROWTH"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            Your digital growth starts with the <br className="hidden sm:inline" />
            <span className="text-[#D5FF40]">right foundations.</span>
          </h2>
          <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
            Successful digital marketing is not about doing everything at once. It is about taking the right steps in the right order so your efforts compound into real business results.
          </p>
        </div>

        {/* Three Stages Editorial Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {GROWTH_JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="border-t border-[rgba(213,255,64,0.25)] pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-[#D5FF40]">
                    STAGE {stage.step}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm text-[#B0B0B0] leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#D5FF40] font-semibold mb-2.5">
                  PRACTICAL FOCUS
                </p>
                <ul className="space-y-2">
                  {stage.practicalFocus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                      <Check className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
