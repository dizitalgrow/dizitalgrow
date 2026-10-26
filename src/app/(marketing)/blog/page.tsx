import type { Metadata } from "next";
import { getBlogPosts, getAllCategories } from "@/lib/sanity";
import { BlogListingClient } from "./BlogListingClient";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Blog & Growth Insights | Dizital Grow",
  description:
    "Actionable digital growth frameworks, SEO playbooks, website optimization guides, and digital marketing insights for growing businesses and creators.",
  alternates: {
    canonical: "https://dizitalgrow.in/blog",
  },
  openGraph: {
    title: "Blog & Growth Insights | Dizital Grow",
    description:
      "Actionable digital growth frameworks, SEO playbooks, website optimization guides, and digital marketing insights.",
    url: "https://dizitalgrow.in/blog",
    type: "website",
    siteName: "Dizital Grow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Growth Insights | Dizital Grow",
    description:
      "Actionable digital growth frameworks, SEO playbooks, website optimization guides, and digital marketing insights.",
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

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Learn How Digital Growth{" "}
            <span className="text-[#D5FF40]">Actually Works.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
            No vanity jargon or empty promises. Practical guides, frameworks, and step-by-step methodologies to help you build a stronger presence, improve conversions, and grow sustainably.
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
