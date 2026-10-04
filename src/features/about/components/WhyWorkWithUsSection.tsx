import React from "react";
import { ABOUT_EXPECTATIONS } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function WhyWorkWithUsSection() {
  return (
    <section className="container-cyber py-20 sm:py-28 border-t border-[rgba(213,255,64,0.15)] bg-[#050505]">
      <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
        [ PROTOCOL: OPERATIONAL STANDARDS ]
      </p>
      <h2 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
        WHAT YOU CAN EXPECT
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {ABOUT_EXPECTATIONS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="cyber-card p-8 border border-[rgba(213,255,64,0.15)] bg-[#101010] hover:border-[#D5FF40] transition-colors">
              <span className="font-mono text-xs text-[#D5FF40] font-bold">
                0{i + 1} // STANDARD
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold text-white uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-[#B0B0B0] leading-relaxed font-normal">
                {item.copy}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
