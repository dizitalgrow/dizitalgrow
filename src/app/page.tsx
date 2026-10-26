import React from "react";
import type { Metadata } from "next";
import { FAQ_LIST } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPublishedPosts } from "@/lib/sanity";
import {
  HeroSection,
  CoreCapabilitiesSection,
  HowWeWorkSection,
  LearnAndGrowSection,
  FinalCTASection,
} from "@/features/home/components";

export const metadata: Metadata = {
  title: "DizitalGrow — Build Better. Reach More. Grow Smarter.",
  description:
    "Websites, digital advertising, and reliable tracking to help your business grow online. High-performance Next.js development, Google Ads, Meta Ads, and Meta Conversions API.",
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "Websites, digital advertising, and reliable tracking to help your business grow online.",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "Build better. Reach more. Grow smarter. Websites, digital advertising, and reliable tracking.",
  },
};

export const revalidate = 60; // Next.js ISR: Revalidate homepage every 60 seconds

export default async function HomePage() {
  const publishedPosts = await getPublishedPosts();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DizitalGrow",
    url: "https://dizitalgrow.in",
    logo: "https://dizitalgrow.in/icon.png",
    email: "contact@dizitalgrow.in",
    description:
      "DizitalGrow builds business websites, web applications, targeted advertising campaigns, and server-side tracking infrastructure.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_LIST.slice(0, 6).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section B: Hero with authentic digital agency imagery */}
      <HeroSection />

      {/* Section C: Three Core Capabilities (Build, Reach, Measure) */}
      <CoreCapabilitiesSection />

      {/* Section D: How We Work (3 concise steps: Understand, Build, Improve) */}
      <HowWeWorkSection />

      {/* Section E: Blog & Practical Insights (Max 3 articles) */}
      <LearnAndGrowSection posts={publishedPosts} />

      {/* Frequently Asked Questions */}
      <FAQAccordion items={FAQ_LIST.slice(0, 6)} showCTA={false} />

      {/* Section F: Final Clear Call to Action */}
      <FinalCTASection />
    </>
  );
}
