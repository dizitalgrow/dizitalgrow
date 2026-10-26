"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";
import { PEXELS_IMAGES } from "@/constants/images";

interface ConceptItem {
  id: string;
  title: string;
  tag: "Concept Project" | "Design Exploration" | "Illustrative Example";
  sector: string;
  summary: string;
  techStack: string[];
  image: {
    src: string;
    alt: string;
  };
}

const CONCEPTS_LIST: ConceptItem[] = [
  {
    id: "corporate-platform",
    title: PEXELS_IMAGES.concepts.corporateWebsite.title,
    tag: PEXELS_IMAGES.concepts.corporateWebsite.tag as "Design Exploration",
    sector: PEXELS_IMAGES.concepts.corporateWebsite.sector,
    summary: PEXELS_IMAGES.concepts.corporateWebsite.summary,
    techStack: ["Next.js App Router", "Tailwind CSS", "Sanity CMS", "Semantic SEO"],
    image: {
      src: PEXELS_IMAGES.concepts.corporateWebsite.src,
      alt: PEXELS_IMAGES.concepts.corporateWebsite.alt,
    },
  },
  {
    id: "ecommerce-store",
    title: PEXELS_IMAGES.concepts.ecommercePlatform.title,
    tag: PEXELS_IMAGES.concepts.ecommercePlatform.tag as "Concept Project",
    sector: PEXELS_IMAGES.concepts.ecommercePlatform.sector,
    summary: PEXELS_IMAGES.concepts.ecommercePlatform.summary,
    techStack: ["React", "Fast Checkout Flow", "Product Filtering", "CAPI Purchases"],
    image: {
      src: PEXELS_IMAGES.concepts.ecommercePlatform.src,
      alt: PEXELS_IMAGES.concepts.ecommercePlatform.alt,
    },
  },
  {
    id: "acquisition-funnel",
    title: PEXELS_IMAGES.concepts.acquisitionFunnel.title,
    tag: PEXELS_IMAGES.concepts.acquisitionFunnel.tag as "Illustrative Example",
    sector: PEXELS_IMAGES.concepts.acquisitionFunnel.sector,
    summary: PEXELS_IMAGES.concepts.acquisitionFunnel.summary,
    techStack: ["Meta Ads", "Google Search", "Landing Page", "Lead Verification"],
    image: {
      src: PEXELS_IMAGES.concepts.acquisitionFunnel.src,
      alt: PEXELS_IMAGES.concepts.acquisitionFunnel.alt,
    },
  },
  {
    id: "analytics-suite",
    title: PEXELS_IMAGES.concepts.analyticsDashboard.title,
    tag: PEXELS_IMAGES.concepts.analyticsDashboard.tag as "Concept Project",
    sector: PEXELS_IMAGES.concepts.analyticsDashboard.sector,
    summary: PEXELS_IMAGES.concepts.analyticsDashboard.summary,
    techStack: ["Meta Conversions API", "GA4 Measurement", "Deduplication", "Webhook Routing"],
    image: {
      src: PEXELS_IMAGES.concepts.analyticsDashboard.src,
      alt: PEXELS_IMAGES.concepts.analyticsDashboard.alt,
    },
  },
];

export function ConceptProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-[rgba(213,255,64,0.12)] bg-[#050505] scroll-mt-16">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                  {"// WORK & CONCEPTS"}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                Design Explorations <br />
                <span className="text-[#D5FF40]">&amp; Prototypes.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Representative examples illustrating our design aesthetics, engineering quality, and tracking standards.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
            >
              <span>View All Explorations</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {CONCEPTS_LIST.map((item, idx) => (
            <MotionReveal
              key={item.id}
              delay={idx * 0.08}
              className="group border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] rounded-[2px] overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-[#D5FF40]"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101010]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

                {/* Tag pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#050505] bg-[#D5FF40] px-2.5 py-1 rounded-[2px]">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#B0B0B0] uppercase tracking-wider block mb-1.5">
                    {item.sector}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.12)] flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase text-[#B0B0B0] bg-[#141414] border border-[rgba(213,255,64,0.15)] px-2 py-0.5 rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Honest Disclosure Note */}
        <Reveal delay={0.2}>
          <div className="mt-10 p-4 border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] rounded-[2px] flex items-center gap-3 text-xs font-mono text-[#B0B0B0]">
            <Layers className="h-4 w-4 text-[#D5FF40] shrink-0" />
            <span>
              <strong className="text-white">Honest Standards:</strong> These projects are clearly disclosed concept explorations designed to showcase technical capabilities and layout standards without inventing fabricated client results.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
