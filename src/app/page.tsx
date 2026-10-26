import React from "react";
import type { Metadata } from "next";
import { FAQ_LIST } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { getPublishedPosts } from "@/lib/sanity";
import {
  HeroSection,
  GrowthJourneySection,
  CapabilitiesSection,
  LearnAndGrowSection,
  WhoWeHelpSection,
  AboutSection,
  ProcessSection,
  FinalCTASection,
} from "@/features/home/components";

export const metadata: Metadata = {
  title: "Dizital Grow — Digital Growth Platform for Businesses & Creators",
  description:
    "Dizital Grow helps people and businesses understand digital growth, build a stronger online presence, and take practical steps toward better marketing and business growth.",
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "Dizital Grow — Digital Growth Platform",
    description:
      "Understand what works, build a stronger online presence, and turn your digital efforts into meaningful business opportunities.",
    url: "https://dizitalgrow.in",
    siteName: "Dizital Grow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dizital Grow — Digital Growth Platform",
    description:
      "Practical guidance. Clear strategy. No unnecessary complexity.",
  },
};

export const revalidate = 60; // Next.js ISR: Revalidate homepage every 60 seconds

export default async function HomePage() {
  const publishedPosts = await getPublishedPosts();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_LIST.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dizital Grow",
    url: "https://dizitalgrow.in",
    logo: "https://dizitalgrow.in/icon.png",
    email: "contact@dizitalgrow.in",
    description:
      "Dizital Grow helps people and businesses understand digital growth, build a stronger online presence, and take practical steps toward better marketing.",
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

      {/* Section A: Hero */}
      <HeroSection />

      {/* Section B: The digital growth journey */}
      <GrowthJourneySection />

      {/* Section C: What we can help with */}
      <CapabilitiesSection />

      {/* Section D: Learn and grow */}
      <LearnAndGrowSection posts={publishedPosts} />

      {/* Section E: Who we help */}
      <WhoWeHelpSection />

      {/* Section F: About Dizital Grow */}
      <AboutSection />

      {/* Section G: Our process */}
      <ProcessSection />

      {/* Section H: Frequently asked questions */}
      <FAQAccordion items={FAQ_LIST} showCTA={true} />

      {/* Section I: Final CTA */}
      <FinalCTASection />
    </>
  );
}
