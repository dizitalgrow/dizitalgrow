import React from "react";
import { PROCESS_STEPS } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesProcess() {
  return (
    <section className="border-y border-[rgba(213,255,64,0.15)] bg-[#101010] py-16 md:py-24">
      <div className="container-cyber">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
            // OUR PROCESS
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            A SIMPLE, TRANSPARENT WORKFLOW
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <Reveal key={step.no} delay={0.05}>
              <div className="rounded-[4px] border border-[rgba(213,255,64,0.15)] bg-[#050505] p-5 h-full flex flex-col justify-between hover:border-[#D5FF40] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-3xl font-extrabold text-[#D5FF40]">
                      {step.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#B0B0B0] uppercase">
                      STEP
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
