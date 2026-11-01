import React from "react";
import Script from "next/script";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-QB43RVRCSZ";

/**
 * Google Analytics (gtag.js) implementation using Next.js Script optimization.
 * Injects Google tag with 'afterInteractive' strategy to protect Core Web Vitals (LCP/INP).
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Utility helper to safely send custom analytics events to GA4
 */
export function sendGAEvent(action: string, params?: Record<string, unknown>) {
  if (
    typeof window !== "undefined" &&
    typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag ===
      "function"
  ) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      action,
      params
    );
  }
}
