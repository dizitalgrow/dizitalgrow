import React from "react";
import { ABOUT_SECTION } from "@/constants/site-data";
import { ShieldCheck, Target, Zap } from "lucide-react";

export function AboutSection() {
  const icons = [Target, Zap, ShieldCheck];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] scroll-mt-16">
      <div className="container-cyber">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// ABOUT DIZITAL GROW"}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Digital growth should be <br className="hidden sm:inline" />
              <span className="text-[#D5FF40]">easier to understand.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal pt-2">
              {ABOUT_SECTION.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Core Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0] font-bold block">
              OUR WORKING PRINCIPLES
            </span>

            <div className="space-y-4">
              {ABOUT_SECTION.commitments.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={item.title}
                    className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 flex items-start gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[rgba(213,255,64,0.1)] pt-4 text-xs font-mono text-[#B0B0B0]">
              <span>Grounded in strategy. Measured by clarity.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
