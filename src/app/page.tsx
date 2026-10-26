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
  title: "DizitalGrow — Digital Growth Agency | Web Development, Advertising & Tracking",
  description:
    "From business websites and custom web applications to Google Ads, Meta Ads, and Meta CAPI conversion tracking, DizitalGrow helps businesses build, reach, measure, and improve their online growth.",
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "We build the digital experiences, customer acquisition systems, and tracking infrastructure businesses need to grow online.",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "Build better digital experiences. Reach the right customers. Measure what matters.",
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
    name: "DizitalGrow",
    url: "https://dizitalgrow.in",
    logo: "https://dizitalgrow.in/icon.png",
    email: "contact@dizitalgrow.in",
    description:
      "DizitalGrow connects digital product development, customer acquisition (Google & Meta Ads), and conversion tracking (GA4 & Meta CAPI) to build sustainable online performance.",
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
