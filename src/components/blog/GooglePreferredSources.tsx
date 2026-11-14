"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { Bookmark, Info } from "lucide-react";

export interface GooglePreferredSourcesProps {
  className?: string;
  variant?: "top" | "side" | "inline";
}

/**
 * Google Preferred Sources Publisher Integration
 * Official Documentation: https://developers.google.com/search/docs/appearance/preferred-sources
 *
 * Requirements Met:
 * 1. Official publisher.js script loaded via Next.js Script optimization.
 * 2. Official container tag: <div google-add-preferred-source-btn=""></div>
 * 3. Script deduplication: Handled via unique Script id="google-publisher-swg".
 * 4. Placement:
 *    - At top of article (variant="top"): Reader-engagement banner matching visual design.
 *    - On the side along with social sharing (variant="side"): Compact sticky sidebar card.
 *    - Inline quick action (variant="inline"): For mobile header or inline toolbars.
 * 5. Light and dark theme compatibility (data-theme="dark").
 */
export function GooglePreferredSources({
  className = "",
  variant = "top",
}: GooglePreferredSourcesProps) {
  useEffect(() => {
    // If Google publisher library is already initialized in window, trigger re-scan of containers
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        PREFERRED_SOURCE?: { api?: { init?: () => void } };
        SWG?: { init?: () => void };
      };
      try {
        win.PREFERRED_SOURCE?.api?.init?.();
        win.SWG?.init?.();
      } catch {
        // Safe fallback
      }
    }
  }, []);

  // Shared Next.js Script element (deduplicated by id="google-publisher-swg")
  const publisherScript = (
    <Script
      id="google-publisher-swg"
      src="https://news.google.com/swg/js/v1/publisher.js"
      strategy="lazyOnload"
    />
  );

  // Variant: Side (compact card designed for sidebar alongside share buttons)
  if (variant === "side") {
    return (
      <aside
        aria-label="Google Preferred Sources Side Subscription"
        className={`border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-4 rounded-[2px] space-y-3 ${className}`}
      >
        {publisherScript}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Bookmark className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D5FF40]">
              Google Preferred
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#B0B0B0]">Search Source</span>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          Follow DizitalGrow in Google Search to receive verified playbooks on web development, ad platforms, and tracking architectures.
        </p>

        {/* Official Google Preferred Source Container */}
        <div className="pt-1 flex items-center justify-start min-h-[44px]">
          <div google-add-preferred-source-btn="" data-theme="dark" />
        </div>

        {/* Transparency Note */}
        <div className="pt-2 border-t border-[rgba(213,255,64,0.1)] flex items-start gap-1.5 text-[10px] font-mono text-[#888888]">
          <Info className="h-3 w-3 text-[#D5FF40] shrink-0 mt-0.5" />
          <span>Requires a Google Account signed into Search.</span>
        </div>
      </aside>
    );
  }

  // Variant: Inline (compact horizontal pill)
  if (variant === "inline") {
    return (
      <div
        aria-label="Google Preferred Sources Inline Action"
        className={`flex items-center gap-2 ${className}`}
      >
        {publisherScript}
        <div google-add-preferred-source-btn="" data-theme="dark" />
      </div>
    );
  }

  // Variant: Top (prominent full-width hero engagement card)
  return (
    <aside
      aria-label="Google Preferred Sources Subscription"
      className={`border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-5 sm:p-6 rounded-[2px] space-y-4 ${className}`}
    >
      {publisherScript}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-[#D5FF40]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Stay Updated with DizitalGrow
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
            Follow our verified publication to receive practical playbooks on web development, ad platforms, and tracking architectures directly in Google.
          </p>
        </div>

        {/* Official Google Preferred Source Container */}
        <div className="shrink-0 flex items-center justify-start sm:justify-end min-h-[44px]">
          <div google-add-preferred-source-btn="" data-theme="dark" />
        </div>
      </div>

      {/* Transparency Note */}
      <div className="flex items-start gap-2 pt-2 border-t border-[rgba(213,255,64,0.1)] text-[11px] font-mono text-[#B0B0B0]">
        <Info className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
        <span>
          Domain-level preference via Google Source Preferences. Requires a Google Account signed into Search.
        </span>
      </div>
    </aside>
  );
}
