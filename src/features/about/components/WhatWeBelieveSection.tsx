"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/constants/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeBelieveSection() {
  return (
    <section className="bg-[#101010] text-white py-20 md:py-28 border-t border-[rgba(213,255,64,0.15)]">
      <div className="container-cyber">
        <div className="max-w-3xl pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
            // ADVANTAGES
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase">
            WHAT MAKES US DIFFERENT.
          </h2>
        </div>

        {/* 4 Pillars in Clean Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CONTENT.principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="rounded-[4px] border border-[rgba(213,255,64,0.15)] bg-[#050505] p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#D5FF40] transition-colors">
                <div>
                  <span className="font-mono text-xs text-[#D5FF40] font-bold">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {item.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(213,255,64,0.1)] flex justify-end">
          <Link
            href="/contact"
            className="btn-cyber-primary py-2.5 px-5 text-xs font-bold"
          >
            <span>Work With Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
