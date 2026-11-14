"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Megaphone,
  Search,
  LineChart,
  Activity,
  Server,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { HOMEPAGE_SERVICES } from "@/constants/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  LayoutDashboard,
  Smartphone,
  Megaphone,
  Search,
  LineChart,
  Activity,
  Server,
};

export function CapabilitiesSection() {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  CORE CAPABILITIES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Everything You Need to <br />
                <span className="text-[#D5FF40]">Build and Grow Digitally.</span>
              </h2>
              <p className="mt-4 text-base text-[#B0B0B0] leading-relaxed">
                From sub-second web platforms and native mobile apps to targeted advertising, organic search, and server-side telemetry.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* 8 Core Services Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOMEPAGE_SERVICES.map((svc) => {
            const Icon = SERVICE_ICONS[svc.iconName] || Globe;
            return (
              <StaggerItem
                key={svc.slug}
                className="group p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.15)] hover:border-[#D5FF40] hover:bg-[#101010] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-white group-hover:bg-[#D5FF40] group-hover:text-black group-hover:border-[#D5FF40] transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-white/5 border border-white/10">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <Link
                  href={svc.href}
                  className="pt-4 border-t border-[rgba(213,255,64,0.08)] flex items-center justify-between text-xs font-mono text-white group-hover:text-[#D5FF40] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
