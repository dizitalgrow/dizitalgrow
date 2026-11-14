import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Wrench, Sparkles, Calculator, Share2, Code2, UserCheck, Briefcase } from "lucide-react";
import { TOOL_CATEGORIES, TOOLS_DATA } from "@/constants/tools-data";
import { Reveal } from "@/components/ui/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Free Online Tools Directory — Career, Marketing, Developer & Everyday | DizitalGrow",
  description:
    "Explore 24+ free browser-based tools for freelancers, marketers, creators, and developers. No login, zero ads, no server data collection. 100% free.",
  alternates: {
    canonical: "https://dizitalgrow.in/tools",
  },
  openGraph: {
    title: "Free Online Tools Directory | DizitalGrow",
    description:
      "24 free client-side calculators, generators, and developer utilities. Fast, privacy-safe, and 100% free.",
    url: "https://dizitalgrow.in/tools",
    siteName: "DizitalGrow",
    type: "website",
  },
};

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "career-students": UserCheck,
  "business-freelancers": Briefcase,
  "marketing-seo": Share2,
  "creators-social-media": Sparkles,
  "developer-utilities": Code2,
  "everyday-calculators": Calculator,
};

export default function ToolsDirectoryPage() {
  const toolsCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DizitalGrow Free Tools Directory",
    url: "https://dizitalgrow.in/tools",
    description:
      "Free browser tools for career advancement, business invoicing, marketing SEO, creator formatting, and developer utilities.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: Object.values(TOOLS_DATA).map((tool, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: tool.title,
        url: `https://dizitalgrow.in/tools/${tool.slug}`,
        description: tool.description,
      })),
    },
  };

  return (
    <div className="w-full bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsCollectionSchema) }}
      />

      {/* Hero Section */}
      <section className="container-cyber pt-16 pb-12 border-b border-[rgba(213,255,64,0.12)]">
        <Breadcrumb items={[{ name: "Free Tools" }]} />

        <Reveal>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                FREE ONLINE UTILITIES
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Free Tools to Help You <br />
              <span className="text-[#D5FF40]">Work Smarter.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              A curated collection of lightweight, client-side tools designed for freelancers, developers, marketers, and creators. No signup required, zero paywalls, and your data never leaves your browser.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#B0B0B0]">
              <span className="bg-[#101010] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] text-white">
                24 Functional Tools
              </span>
              <span className="bg-[#101010] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] text-white">
                100% Client-Side Privacy
              </span>
              <span className="bg-[#101010] border border-[rgba(213,255,64,0.2)] px-2.5 py-1 rounded-[2px] text-white">
                Zero Ads or Sign-In
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Category Quick Jumper */}
      <section className="container-cyber py-6 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#B0B0B0] uppercase font-bold tracking-wider">
            JUMP TO CATEGORY:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {Object.values(TOOL_CATEGORIES).map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="px-2.5 py-1 rounded-[2px] border border-[rgba(213,255,64,0.2)] text-white hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Tools Showcase */}
      <div className="container-cyber py-16 space-y-20">
        {Object.values(TOOL_CATEGORIES).map((category) => {
          const Icon = CATEGORY_ICONS[category.slug] || Wrench;
          const categoryTools = category.toolSlugs
            .map((slug) => TOOLS_DATA[slug])
            .filter(Boolean);

          return (
            <section
              key={category.slug}
              id={category.slug}
              className="scroll-mt-24 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[rgba(213,255,64,0.15)]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold uppercase tracking-wider mb-1">
                    <Icon className="h-4 w-4" />
                    <span>CATEGORY</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#B0B0B0] mt-1 max-w-xl">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/tools/${category.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
                >
                  <span>View Category Hub</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Tools Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categoryTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="group border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-5 rounded-[2px] flex flex-col justify-between hover:border-[#D5FF40] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#D5FF40] opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors leading-snug">
                        {tool.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed line-clamp-3">
                        {tool.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[rgba(213,255,64,0.08)] flex items-center justify-between text-[11px] font-mono text-[#D5FF40]">
                      <span>Open Free Tool</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Consultation CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-16 bg-[#070707]">
        <div className="container-cyber text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            CUSTOM SOFTWARE SOLUTIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
            Need a Custom Calculator or Internal Tool for Your Business?
          </h2>
          <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
            We build bespoke web applications, client calculation engines, and interactive customer portals tailored to your exact business workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
            >
              <span>Discuss Custom Tool Development</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
