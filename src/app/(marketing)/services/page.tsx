import React from "react";
import type { Metadata } from "next";
import { SERVICES_FAQ } from "@/constants/site-data";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/ui/FinalCTA";
import {
  ServicesHero,
  ServicesList,
} from "@/features/services/components";

export const metadata: Metadata = {
  title: "Services — Build • Grow • Scale | DizitalGrow",
  description:
    "Websites, custom web and mobile apps, Google Ads, Meta Ads, and server-side tracking designed for real commercial growth.",
  openGraph: {
    title: "Services — DizitalGrow",
    description:
      "Websites, applications and performance marketing with accurate conversion tracking.",
  },
};

/**
 * Services Page Controller (Server Component)
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <FAQAccordion items={SERVICES_FAQ} title="Frequently asked questions about our services" showCTA={true} />
      <FinalCTA />
    </>
  );
}
