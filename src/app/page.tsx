import React from "react";
import type { Metadata } from "next";
import { MASTER_FAQS } from "@/constants/site-data";
import { getBlogPosts } from "@/lib/sanity";
import {
  HeroSection,
  DigitalOpportunitySection,
  CapabilitiesSection,
  SolutionsPreviewSection,
  IndustriesPreviewSection,
  WhyDizitalGrowSection,
  GrowthFrameworkSection,
  WorkShowcaseSection,
  ToolsPreviewSection,
  LearnAndGrowSection,
  HomeFAQSection,
  FinalCTASection,
} from "@/features/home/components";

export const metadata: Metadata = {
  title: "DizitalGrow | Web Development & Digital Marketing Agency",
  description:
    "DizitalGrow is a web development and digital marketing agency engineering high-performance websites, web applications, Meta Ads, Google Ads, SEO, and server-side conversion tracking for growing businesses.",
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow | Web Development & Digital Marketing Agency",
    description:
      "DizitalGrow is a web development and digital marketing agency engineering high-performance websites, web applications, Meta Ads, Google Ads, SEO, and server-side conversion tracking for growing businesses.",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow | Web Development & Digital Marketing Agency",
    description:
      "DizitalGrow is a web development and digital marketing agency engineering high-performance websites, web applications, Meta Ads, Google Ads, SEO, and server-side conversion tracking for growing businesses.",
  },
};

export const revalidate = 60; // Next.js ISR: Revalidate homepage every 60 seconds

export default async function HomePage() {
  const publishedPosts = await getBlogPosts({ limit: 6 });

  const agencySchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "DizitalGrow",
    url: "https://dizitalgrow.in",
    logo: "https://dizitalgrow.in/icon.png",
    image: "https://dizitalgrow.in/icon.png",
    email: "contact@dizitalgrow.in",
    telephone: "+919187126193",
    slogan: "Grow Beyond Offline.",
    description:
      "DizitalGrow is a web development and digital marketing agency helping individuals, professional practices, startups, and businesses establish high-performance digital platforms, acquire customers through high-intent advertising, and measure conversions with server-side telemetry.",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "City",
        name: "Bengaluru",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://whatsapp.com/channel/0029Vb4w2hL0bIdtE14Y8w0s",
      "https://instagram.com/dizitalgrow",
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Business Problems */}
      <DigitalOpportunitySection />

      {/* Section 3: Services (8 Core Capabilities) */}
      <CapabilitiesSection />

      {/* Section 4: Solutions (9 Tailored Blueprints) */}
      <SolutionsPreviewSection />

      {/* Section 5: Industries (6 Sector Systems) */}
      <IndustriesPreviewSection />

      {/* Section 6: Why DizitalGrow (5 Differentiators) */}
      <WhyDizitalGrowSection />

      {/* Section 7: Approach (How We Work — 5 Stages) */}
      <GrowthFrameworkSection />

      {/* Section 8: Selected Work */}
      <WorkShowcaseSection />

      {/* Section 9: Free Tools Preview */}
      <ToolsPreviewSection />

      {/* Section 10: Blog & Insights Preview */}
      <LearnAndGrowSection posts={publishedPosts} />

      {/* Section 11: Frequently Asked Questions */}
      <HomeFAQSection />

      {/* Section 12: Final Call to Action */}
      <FinalCTASection />
    </>
  );
}
