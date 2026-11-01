import React from "react";
import type { Metadata } from "next";
import { MASTER_FAQS } from "@/constants/site-data";
import { getBlogPosts } from "@/lib/sanity";
import {
  HeroSection,
  DigitalOpportunitySection,
  WhoWeHelpSection,
  OutcomesSection,
  GrowthFrameworkSection,
  CapabilitiesSection,
  WhyDizitalGrowSection,
  WorkShowcaseSection,
  LearnAndGrowSection,
  HomeFAQSection,
  FinalCTASection,
} from "@/features/home/components";

export const metadata: Metadata = {
  title: "DizitalGrow — Grow Beyond Offline | Digital Growth Platform",
  description:
    "We help individuals, startups, and growing businesses establish their digital presence, reach the right audience, and turn online opportunities into measurable growth through technology, marketing, and data-driven strategies.",
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow — Grow Beyond Offline",
    description:
      "The Digital World Has Opportunities. Let's Help You Grow With Them. Web development, high-intent advertising, and verified server-side telemetry.",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Grow Beyond Offline",
    description:
      "From building your digital presence to reaching the right audience and turning visitors into customers, we help you make the most of the digital world.",
  },
};

export const revalidate = 60; // Next.js ISR: Revalidate homepage every 60 seconds

export default async function HomePage() {
  const publishedPosts = await getBlogPosts({ limit: 6 });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DizitalGrow",
    url: "https://dizitalgrow.in",
    logo: "https://dizitalgrow.in/icon.png",
    email: "contact@dizitalgrow.in",
    slogan: "Grow Beyond Offline.",
    description:
      "DizitalGrow helps individuals, startups, and businesses establish their digital presence, reach the right audience, and generate measurable growth through technology, marketing, and data-driven strategies.",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DizitalGrow",
    url: "https://dizitalgrow.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dizitalgrow.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MASTER_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Hero Experience */}
      <HeroSection />

      {/* Section 2: The Digital Opportunity */}
      <DigitalOpportunitySection />

      {/* Section 3: Who We Help (5 Target Audiences) */}
      <WhoWeHelpSection />

      {/* Section 4: What We Help You Achieve (5 Outcomes) */}
      <OutcomesSection />

      {/* Section 5: Signature Digital Growth Framework (LEARN → BUILD → REACH → CONVERT → GROW) */}
      <GrowthFrameworkSection />

      {/* Section 6: Capabilities (BUILD, REACH, CONVERT & MEASURE) */}
      <CapabilitiesSection />

      {/* Section 7: Why DizitalGrow? (Honest Differentiators) */}
      <WhyDizitalGrowSection />

      {/* Section 8: Work and Case Studies */}
      <WorkShowcaseSection />

      {/* Section 9: Knowledge and Insights */}
      <LearnAndGrowSection posts={publishedPosts} />

      {/* Section 10: Frequently Asked Questions */}
      <HomeFAQSection />

      {/* Section 11: Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
