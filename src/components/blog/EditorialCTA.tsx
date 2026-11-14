"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { sendGAEvent } from "@/components/analytics/GoogleAnalytics";
import type { ArticleCtaConfig } from "@/lib/sanity";

interface EditorialCTAProps {
  config?: ArticleCtaConfig;
  variant?: "inline" | "mid-article" | "bottom";
  className?: string;
}

const SERVICE_PRESETS: Record<
  string,
  {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  }
> = {
  "web-development": {
    title: "Need a high-performance business website that converts?",
    description:
      "We design and build fast, modern, search-optimized websites that turn visitors into inbound client inquiries.",
    buttonText: "Explore Website Development",
    href: "/services/web-development",
  },
  "web-applications": {
    title: "Planning a custom web application or software platform?",
    description:
      "From database architecture to full-stack Next.js and API integrations, we engineer production web applications built to scale.",
    buttonText: "Explore Web App Development",
    href: "/services/web-applications",
  },
  "mobile-apps": {
    title: "Have a mobile application idea for iOS and Android?",
    description:
      "We build cross-platform mobile apps with native speed, reliable offline sync, and seamless cloud backends.",
    buttonText: "Explore Mobile App Development",
    href: "/services/mobile-apps",
  },
  "google-ads": {
    title: "Want more qualified leads and lower acquisition costs from Google?",
    description:
      "Structured search, performance max, and remarketing campaigns managed with rigorous negative keyword lists and high-intent bidding.",
    buttonText: "Explore Google Ads Services",
    href: "/services/google-ads",
  },
  "meta-ads": {
    title: "Want to grow your revenue with Facebook & Instagram ads?",
    description:
      "Creative testing frameworks, lookalike models, and audience segmentations designed for predictable customer acquisition.",
    buttonText: "Explore Meta Ads Services",
    href: "/services/meta-ads",
  },
  "meta-capi": {
    title: "Measure marketing performance accurately with Server-Side Meta CAPI",
    description:
      "Bypass iOS ad blockers and cookie degradation with first-party server-side telemetry for 15-30% improved event match quality.",
    buttonText: "Explore Conversion Tracking",
    href: "/meta-capi",
  },
};

export function EditorialCTA({
  config,
  variant = "bottom",
  className = "",
}: EditorialCTAProps) {
  const targetKey = config?.targetService || "web-development";
  const preset = SERVICE_PRESETS[targetKey] || SERVICE_PRESETS["web-development"];

  const headline = config?.customTitle || preset.title;
  const description = config?.customDescription || preset.description;
  const buttonText = config?.customButtonText || preset.buttonText;
  const buttonUrl = config?.customButtonUrl || preset.href;

  const handleClick = () => {
    sendGAEvent("editorial_cta_click", {
      cta_type: variant,
      target_service: targetKey,
      button_text: buttonText,
      destination: buttonUrl,
    });
  };

  if (variant === "inline") {
    return (
      <div
        className={`my-8 border-l-2 border-[#D5FF40] bg-[#101010] p-5 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${className}`}
      >
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#D5FF40] font-bold">
            RECOMMENDED SOLUTION
          </span>
          <p className="text-sm font-semibold text-white">{headline}</p>
        </div>
        <Link
          href={buttonUrl}
          onClick={handleClick}
          className="shrink-0 inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-7 sm:p-9 rounded-[2px] space-y-4 ${className}`}
    >
      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold uppercase tracking-wider">
        <Sparkles className="h-3.5 w-3.5" />
        <span>PRACTICAL IMPLEMENTATION PARTNER</span>
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
        {headline}
      </h3>

      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-normal">
        {description}
      </p>

      <div className="pt-2 flex flex-wrap items-center gap-4">
        <Link
          href={buttonUrl}
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
        >
          <span>{buttonText}</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <Link
          href="/contact"
          onClick={() =>
            sendGAEvent("editorial_cta_click", {
              cta_type: "discuss_project_secondary",
              target_service: targetKey,
            })
          }
          className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.3)] bg-transparent text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors focus-cyber"
        >
          <span>Discuss Your Project</span>
        </Link>
      </div>
    </div>
  );
}
