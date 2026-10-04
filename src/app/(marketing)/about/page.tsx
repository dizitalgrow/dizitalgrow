import React from "react";
import type { Metadata } from "next";
import { FinalCTA } from "@/components/ui/FinalCTA";
import {
  AboutHero,
  WhoWeAreSection,
  WhatWeBelieveSection,
} from "@/features/about/components";

export const metadata: Metadata = {
  title: "About — Build • Grow • Scale | DizitalGrow",
  description:
    "DizitalGrow exists to close the gap between digital craft and real business growth. Digital products, precise tracking, and performance media.",
  openGraph: {
    title: "About — DizitalGrow",
    description: "Digital products, precise tracking, and performance media built to grow your business.",
  },
};

/**
 * About Page Controller (Server Component)
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAreSection />
      <WhatWeBelieveSection />
      <FinalCTA />
    </>
  );
}
