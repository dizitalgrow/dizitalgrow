"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";
import { PEXELS_IMAGES } from "@/constants/images";

interface CapabilityGroup {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  image: {
    src: string;
    alt: string;
  };
  link: string;
  linkText: string;
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    number: "01",
    phase: "BUILD",
    title: "Websites & Digital Products",
    description:
      "Modern, fast business websites, custom web applications, e-commerce stores, and cross-platform mobile apps engineered to convert visitors into inquiries.",
    deliverables: [
      "Custom responsive Next.js websites",
      "Interactive client portals & dashboards",
      "E-commerce stores with fast checkout",
      "iOS and Android mobile apps",
    ],
    image: {
      src: PEXELS_IMAGES.capabilityBuild.src,
      alt: PEXELS_IMAGES.capabilityBuild.alt,
    },
    link: "/services#build",
    linkText: "Explore Digital Products",
  },
  {
    number: "02",
    phase: "REACH",
    title: "Targeted Customer Acquisition",
    description:
      "Google Search and Meta Ads campaigns designed to reach people with immediate buying intent while avoiding wasted ad spend on vanity impressions.",
    deliverables: [
      "High-intent Google Search campaigns",
      "Targeted Meta Ads (Facebook & Instagram)",
      "Ad creative testing & visual hooks",
      "Focused conversion landing pages",
    ],
    image: {
      src: PEXELS_IMAGES.capabilityReach.src,
      alt: PEXELS_IMAGES.capabilityReach.alt,
    },
    link: "/services#reach",
    linkText: "Explore Advertising Management",
  },
  {
    number: "03",
    phase: "MEASURE",
    title: "Analytics & Meta Conversions API",
    description:
      "Server-side telemetry that bypasses browser ad blockers, prevents lost sales events, and feeds accurate conversion signals back into ad networks.",
    deliverables: [
      "Server-side Meta Conversions API (CAPI)",
      "Google Tag Manager & GA4 key events",
      "Browser & server event deduplication",
      "Form, call & checkout revenue tracking",
    ],
    image: {
      src: PEXELS_IMAGES.capabilityMeasure.src,
      alt: PEXELS_IMAGES.capabilityMeasure.alt,
    },
    link: "/meta-capi",
    linkText: "Explore Meta CAPI Tracking",
  },
];

export function CoreCapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// THREE CORE CAPABILITIES"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
              Build. Reach. <span className="text-[#D5FF40]">Measure.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
              Digital growth works best when your website, advertising campaigns, and server analytics operate as one unified system.
            </p>
          </div>
        </Reveal>

        {/* 3 Balanced Editorial Groups */}
        <div className="space-y-16 lg:space-y-20">
          {CAPABILITY_GROUPS.map((group, index) => {
            const isReversed = index % 2 === 1;

            return (
              <MotionReveal
                key={group.phase}
                delay={index * 0.08}
                className="grid gap-8 lg:grid-cols-12 lg:gap-14 items-center border-t border-[rgba(213,255,64,0.15)] pt-12"
              >
                {/* Left/Right Text Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                      {group.number}
                    </span>
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      {group.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
                    {group.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                    {group.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {group.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#B0B0B0]">
                        <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3">
                    <Link
                      href={group.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline focus-cyber"
                    >
                      <span>{group.linkText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Left/Right Visual Preview Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#101010] aspect-[16/10] w-full group">
                    <Image
                      src={group.image.src}
                      alt={group.image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
