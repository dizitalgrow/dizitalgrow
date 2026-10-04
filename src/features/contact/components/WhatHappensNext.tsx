"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WhatHappensNext() {
  const steps = [
    {
      title: "1. We review your requirements",
      desc: "Our lead strategist reviews your business details, current setup, and goals within 24 hours.",
    },
    {
      title: "2. We send a clear recommendation & quote",
      desc: "You get a transparent scope of work, timeline, and fixed price quote tailored to your budget.",
    },
    {
      title: "3. Zero pushy sales pressure",
      desc: "Take your time to decide. We focus on giving you honest advice that benefits your business.",
    },
  ];

  return (
    <Reveal delay={0.12}>
      <div className="rounded-[4px] border border-[rgba(213,255,64,0.15)] bg-[#101010] p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
          // OUR PROMISE
        </span>
        <h3 className="font-display mt-2 text-xl sm:text-2xl font-bold text-white uppercase">
          WHAT HAPPENS NEXT?
        </h3>

        <div className="mt-5 space-y-4 border-t border-[rgba(213,255,64,0.15)] pt-5">
          {steps.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold text-white text-sm uppercase">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-[#B0B0B0] mt-1 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
