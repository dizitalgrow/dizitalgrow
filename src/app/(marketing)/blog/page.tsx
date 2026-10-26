import type { Metadata } from "next";
import { getBlogPosts, getAllCategories } from "@/lib/sanity";
import { BlogListingClient } from "./BlogListingClient";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Digital Growth Guides & Tutorials | DizitalGrow",
  description:
    "Practical guides on website development, web applications, Google Ads, Meta Ads, GA4 analytics, and Meta Conversions API (CAPI) for growing businesses.",
  alternates: {
    canonical: "https://dizitalgrow.in/blog",
  },
  openGraph: {
    title: "Digital Growth Guides & Tutorials | DizitalGrow",
    description:
      "Practical guides on website development, web applications, Google Ads, Meta Ads, GA4 analytics, and Meta Conversions API (CAPI).",
    url: "https://dizitalgrow.in/blog",
    type: "website",
    siteName: "DizitalGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Growth Guides & Tutorials | DizitalGrow",
    description:
      "Practical guides on website development, web applications, Google Ads, Meta Ads, GA4 analytics, and Meta Conversions API (CAPI).",
  },
};

export default async function BlogPage() {
  // Server-side fetching for SEO and fast initial hydration
  const [initialPosts, initialCategories] = await Promise.all([
    getBlogPosts({ limit: 24 }),
    getAllCategories(),
  ]);

  return (
    <div className="py-12 md:py-20">
      <div className="container-cyber space-y-12">
        {/* Header Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
              {"// KNOWLEDGE BASE & GROWTH GUIDES"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] leading-tight">
            Learn How Digital Growth{" "}
            <span className="text-[#D5FF40]">Actually Works.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
            Practical guides, architectural frameworks, and tracking tutorials to help you build, acquire, and measure online growth.
          </p>
        </div>

        {/* Interactive Listing with TanStack Query */}
        <BlogListingClient
          initialPosts={initialPosts}
          initialCategories={initialCategories}
        />
      </div>
    </div>
  );
}
