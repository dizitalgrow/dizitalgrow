import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

interface InternalLinkItem {
  label: string;
  href: string;
  description: string;
  badge: string;
}

interface InternalLinksPillarsProps {
  category?: string;
  tags?: string[];
  currentSlug?: string;
  className?: string;
}

// Map categories to relevant service pillars, solution hubs, and tools
export function getContextualInternalLinks(category = "", tags: string[] = []): InternalLinkItem[] {
  const cat = category.toLowerCase();
  const tagList = tags.map((t) => t.toLowerCase());

  const links: InternalLinkItem[] = [];

  // 1. Web & Development Hub
  if (
    cat.includes("web") ||
    cat.includes("tech") ||
    cat.includes("software") ||
    cat.includes("app") ||
    tagList.some((t) => t.includes("web") || t.includes("code") || t.includes("dev"))
  ) {
    links.push({
      label: "Custom Web Application Engineering",
      href: "/services/web-applications",
      description: "Full-stack architectures, high-concurrency APIs, and bespoke digital platforms.",
      badge: "Core Service",
    });
    links.push({
      label: "Business Website Design & Development",
      href: "/services/web-development",
      description: "Fast, search-indexed marketing websites engineered for brand authority and lead capture.",
      badge: "Core Service",
    });
    links.push({
      label: "Mobile App Development",
      href: "/services/mobile-apps",
      description: "Cross-platform mobile applications for iOS & Android with production backends.",
      badge: "Core Service",
    });
  }

  // 2. Advertising & Paid Media Hub
  if (
    cat.includes("ad") ||
    cat.includes("marketing") ||
    cat.includes("social") ||
    tagList.some((t) => t.includes("ad") || t.includes("google") || t.includes("meta") || t.includes("roi"))
  ) {
    links.push({
      label: "Google Ads Management",
      href: "/services/google-ads",
      description: "High-intent search capture, performance max optimization, and aggressive ROI bidding.",
      badge: "Core Service",
    });
    links.push({
      label: "Meta Ads (Facebook & Instagram)",
      href: "/services/meta-ads",
      description: "Targeted creative testing, audience expansion, and acquisition funnel scaling.",
      badge: "Core Service",
    });
  }

  // 3. Tracking, Analytics & CAPI Hub
  if (
    cat.includes("tracking") ||
    cat.includes("capi") ||
    cat.includes("data") ||
    cat.includes("analytics") ||
    cat.includes("ai") ||
    tagList.some((t) => t.includes("capi") || t.includes("pixel") || t.includes("gtm") || t.includes("tracking"))
  ) {
    links.push({
      label: "Meta Conversions API (CAPI) & Server Telemetry",
      href: "/meta-capi",
      description: "First-party server-side tracking pipelines with 8.5+ event match quality.",
      badge: "Telemetry",
    });
  }

  // 4. Free Growth Tools
  links.push({
    label: "Free Marketing, SEO & UTM Builders",
    href: "/tools/marketing-seo",
    description: "Instant campaign URL builders, slug generators, and ROI calculators.",
    badge: "Free Utility",
  });

  return links.slice(0, 3);
}

export function InternalLinksPillars({
  category = "",
  tags = [],
  className = "",
}: InternalLinksPillarsProps) {
  const recommendations = getContextualInternalLinks(category, tags);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div
      aria-label="Related Services and Platforms"
      className={`border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-4 ${className}`}
    >
      <div className="flex items-center gap-2">
        <Compass className="h-4 w-4 text-[#D5FF40]" />
        <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
          RELATED SERVICES & ARCHITECTURAL PILLARS
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {recommendations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block p-4 bg-[#101010] border border-[rgba(213,255,64,0.12)] rounded-[2px] hover:border-[#D5FF40] transition-colors focus-cyber"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-[#D5FF40] mb-1.5">
              <span className="uppercase tracking-wider">{item.badge}</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-white group-hover:text-[#D5FF40] transition-colors mb-1">
              {item.label}
            </h4>
            <p className="text-[11px] text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed font-normal">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
