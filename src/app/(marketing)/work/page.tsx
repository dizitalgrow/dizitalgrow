import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  FolderGit2,
  CheckCircle2,
  Info,
  Sparkles,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { HOMEPAGE_SELECTED_WORK } from "@/constants/site-data";

export const metadata: Metadata = {
  title: "Case Studies & Architectural Proofs | DizitalGrow",
  description:
    "Explore how DizitalGrow engineers high-performing websites, web applications, and telemetry systems. Real architectural breakdowns and concept demonstrations.",
  alternates: {
    canonical: "https://dizitalgrow.in/work",
  },
  openGraph: {
    title: "Case Studies & Architectural Proofs | DizitalGrow",
    description:
      "Explore how DizitalGrow engineers high-performing websites, web applications, and telemetry systems.",
    url: "https://dizitalgrow.in/work",
    siteName: "DizitalGrow",
    locale: "en_IE",
    type: "website",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DizitalGrow Selected Work & Architectural Proofs",
    itemListElement: HOMEPAGE_SELECTED_WORK.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        description: item.overview,
        creator: {
          "@type": "Organization",
          name: "DizitalGrow",
          url: "https://dizitalgrow.in",
        },
      },
    })),
  };

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb items={[{ name: "Work & Case Studies" }]} />

      {/* Hero Header */}
      <header className="mb-12 border-b border-[rgba(213,255,64,0.15)] pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proven Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Selected Work & Architectural Proofs
        </h1>
        <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed">
          We believe in honest, transparent demonstrations of our engineering standards. Below are architectural breakdowns showing how we tackle real commercial challenges across web development, conversion tracking, and digital visibility.
        </p>
      </header>

      {/* Honest Presentation Notice */}
      <div className="mb-14 p-5 rounded-[2px] bg-white/[0.02] border border-white/10 flex items-start gap-3 max-w-4xl">
        <Info className="w-4 h-4 text-[#D5FF40] mt-0.5 flex-shrink-0" />
        <p className="text-xs font-mono text-[#B0B0B0] leading-relaxed">
          <strong className="text-white">Honest Presentation Policy:</strong> Projects marked as{" "}
          <span className="text-[#D5FF40] uppercase tracking-wider font-semibold">
            Concept Demonstration
          </span>{" "}
          represent rigorous architectural prototypes designed to illustrate our engineering approach, technical stack, and solution strategy for common industry problems.
        </p>
      </div>

      {/* Projects Showcase */}
      <div className="space-y-16 mb-20">
        {HOMEPAGE_SELECTED_WORK.map((project, idx) => (
          <article
            key={project.id}
            className="p-8 sm:p-10 rounded-[2px] bg-[#101010] border border-white/10 hover:border-[#D5FF40]/30 transition-colors"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider">
                  {"//"} Case Study 0{idx + 1}
                </span>
                <span className="text-white/20">|</span>
                <span className="text-xs font-mono text-[#B0B0B0] uppercase tracking-wider">
                  {project.industry}
                </span>
              </div>
              {project.isConcept && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-[11px] font-mono uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Concept Demonstration
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4">
              {project.title}
            </h2>
            <p className="text-base text-[#B0B0B0] leading-relaxed mb-8 max-w-4xl">
              {project.overview}
            </p>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 rounded-[2px] bg-[#0A0A0A] border border-white/5">
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-2">
                  {"//"} The Challenge
                </span>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
                  {"//"} The Solution
                </span>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features & Deliverables */}
            <div className="mb-8">
              <span className="text-xs font-mono text-white/60 uppercase tracking-wider block mb-3">
                Key Features Delivered:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-sm text-[#B0B0B0]">
                    <CheckCircle2 className="w-4 h-4 text-[#D5FF40] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Services Footer */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono text-[#B0B0B0] uppercase tracking-wider block mb-2">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#B0B0B0] uppercase tracking-wider block mb-2">
                  Services Included:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.servicesDelivered.map((svc, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/20 text-xs font-mono text-[#D5FF40]"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Final CTA */}
      <section className="p-8 sm:p-12 rounded-[2px] bg-[#101010] border border-[#D5FF40]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
            {"//"} Start Your Project
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Have a Specific Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            Whether you need a custom web application, an e-commerce platform, or a complete digital growth setup, we would be glad to discuss your requirements.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[2px] bg-[#D5FF40] text-black font-mono font-medium text-xs uppercase tracking-wider hover:bg-[#c2ea36] transition-colors focus-cyber"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
