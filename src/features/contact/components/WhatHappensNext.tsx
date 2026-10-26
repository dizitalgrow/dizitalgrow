import React from "react";
import { CheckCircle } from "lucide-react";

export function WhatHappensNext() {
  const steps = [
    {
      title: "1. We review your details",
      desc: "We look over your current website or goals to understand what you need help with.",
    },
    {
      title: "2. We send practical advice",
      desc: "We email you back within one business day with honest feedback, realistic recommendations, and next steps.",
    },
    {
      title: "3. Zero high-pressure sales",
      desc: "No aggressive follow-ups or pushy pitches. Take your time to review the ideas and decide what works best for you.",
    },
  ];

  return (
    <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8">
      <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
        {"// OUR COMMITMENT"}
      </span>
      <h3 className="font-display mt-2 text-xl font-bold text-white uppercase">
        What Happens Next?
      </h3>

      <div className="mt-5 space-y-4 border-t border-[rgba(213,255,64,0.15)] pt-5">
        {steps.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-white text-xs sm:text-sm uppercase">
                {item.title}
              </p>
              <p className="text-xs text-[#B0B0B0] mt-1 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
