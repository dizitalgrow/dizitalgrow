import React from "react";
import type { Metadata } from "next";
import { FAQ_LIST } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  HeroSection,
  SocialProofSection,
  FeaturesSection,
  CaseStudiesBento,
  ProcessSection,
  FinalCTASection,
} from "@/features/home/components";

export const metadata: Metadata = {
  title: "DizitalGrow — Websites, Apps & Ads That Grow Your Business",
  description:
    "We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.",
};

/**
 * Public Landing / Home Controller
 * Cyber-tech Dark Mode Dominant, Electric Lime Accent, Space Grotesk Headings
 * High Contrast, Modular Bento Grids, Sharp Corners
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <CaseStudiesBento />
      <ProcessSection />
      <FAQAccordion items={FAQ_LIST} showCTA={true} />
      <FinalCTASection />
    </>
  );
}
