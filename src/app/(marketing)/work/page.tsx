import React from "react";
import type { Metadata } from "next";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { WorkHero, ProjectsList } from "@/features/work/components";

export const metadata: Metadata = {
  title: "Work — Case Studies & Outcomes | DizitalGrow",
  description:
    "Explore how DizitalGrow helps businesses scale through custom apps, high-converting websites, and performance ads.",
  openGraph: {
    title: "Work — DizitalGrow",
    description:
      "Case studies showing the challenge, the solution and the commercial outcome.",
  },
};

/**
 * Work Page Controller (Server Component)
 */
export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectsList />
      <FinalCTA />
    </>
  );
}
