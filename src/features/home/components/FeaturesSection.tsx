"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Smartphone, Share2, Search, LineChart, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES_LIST, WHY_CHOOSE_US } from "@/constants/site-data";

const SERVICE_ICONS = [Globe, Layers, Smartphone, Share2, Search, LineChart];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden" id="services">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(213,255,64,0.15)]">
          <div className="max-w-2xl">
            <Reveal delay={0.02}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
                <span>// WHAT WE DO</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
                OUR SERVICES <br />
                <span className="text-[#D5FF40]">BUILT FOR GROWTH.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] font-normal leading-relaxed">
                Everything you need to attract customers, streamline operations, and increase revenue online.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <Link
              href="/services"
              className="btn-cyber-primary shrink-0 py-2.5 px-5 text-xs font-bold"
            >
              <span>View All Services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* 6 Bold Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
          {SERVICES_LIST.map((service, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            const num = (i + 1).toString().padStart(2, "0");

            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="cyber-card group flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden p-6 sm:p-7">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[rgba(213,255,64,0.3)] group-hover:border-[#D5FF40] transition-colors" />

                  <div>
                    {/* Top Row: Number + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-[#D5FF40] tracking-widest">
                        0{i + 1}
                      </span>
                      <div className="h-9 w-9 rounded-[2px] bg-[#181818] border border-[rgba(213,255,64,0.2)] flex items-center justify-center text-[#D5FF40] group-hover:bg-[#D5FF40] group-hover:text-[#050505] transition-all">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase leading-tight group-hover:text-[#D5FF40] transition-colors">
                      {service.name}
                    </h3>

                    {/* Plain Description */}
                    <p className="mt-3 text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                      {service.body}
                    </p>
                  </div>

                  {/* Bottom Outcome & Link */}
                  <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#D5FF40] font-bold uppercase tracking-wider">
                      {service.outcome}
                    </span>
                    <Link
                      href="/services"
                      aria-label={`View details about ${service.name}`}
                      className="h-8 w-8 rounded-full border border-[rgba(213,255,64,0.3)] flex items-center justify-center text-white group-hover:border-[#D5FF40] group-hover:bg-[#D5FF40] group-hover:text-[#050505] transition-all"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Why Businesses Choose Us Section */}
        <div className="mt-20 pt-16 border-t border-[rgba(213,255,64,0.15)]">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold block mb-2">
              // ADVANTAGES
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white">
              WHY BUSINESSES CHOOSE US
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_CHOOSE_US.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.15)] p-5 h-full hover:border-[#D5FF40] transition-colors">
                  <div className="flex items-center gap-2 text-[#D5FF40] mb-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span className="font-display font-bold text-sm text-white uppercase">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
