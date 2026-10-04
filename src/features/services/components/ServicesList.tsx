"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_LIST } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesList() {
  return (
    <div className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.15)] bg-[#050505]">
      {SERVICES_LIST.map((service, i) => (
        <Reveal key={service.slug} delay={i * 0.05}>
          <div className="py-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
            {/* Left Column: Service Details & CTA */}
            <div>
              <div className="flex items-center gap-3 text-xs font-mono font-bold mb-3">
                <span className="text-[#D5FF40]">0{i + 1}</span>
                <span className="text-[rgba(213,255,64,0.4)]">//</span>
                <span className="text-[#B0B0B0]">SERVICE</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.name}
              </h2>

              <p className="mt-3 text-lg font-bold text-white">
                {service.headline}
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#B0B0B0] max-w-xl font-normal">
                {service.body}
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-cyber-primary py-2.5 px-5 text-xs font-bold"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: What's Included & Outcome */}
            <div className="space-y-6 lg:pt-2">
              <div className="rounded-[4px] bg-[#101010] border border-[rgba(213,255,64,0.15)] p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40] mb-3">
                  WHAT IS INCLUDED / EXAMPLES
                </p>
                <ul className="space-y-2.5">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-[#B0B0B0] font-normal"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D5FF40]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[4px] bg-[#101010] border border-[rgba(213,255,64,0.2)] p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B0B0B0]">
                  EXPECTED RESULT
                </p>
                <p className="font-display mt-1.5 text-lg font-bold text-white uppercase leading-snug">
                  {service.outcome}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
