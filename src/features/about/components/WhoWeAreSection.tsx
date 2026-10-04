"use client";

import React from "react";
import { ABOUT_CONTENT } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function WhoWeAreSection() {
  return (
    <section className="container-cyber pb-20 border-t border-[rgba(213,255,64,0.15)] pt-16 bg-[#050505]">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-[18rem_1fr] items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
              // OUR MISSION
            </p>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug">
              TO HELP BUSINESSES USE TECHNOLOGY TO GROW FASTER.
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#B0B0B0] font-normal">
            {ABOUT_CONTENT.body.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
