import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, AlertCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { INDUSTRIES_DATA } from "@/constants/industries-data";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Solutions | DizitalGrow",
  description:
    "Tailored website development, digital advertising, and technical conversion systems engineered for healthcare, real estate, education, retail, manufacturing, and professional services.",
  alternates: {
    canonical: "https://dizitalgrow.in/industries",
  },
  openGraph: {
    title: "Industry-Specific Digital Solutions | DizitalGrow",
    description:
      "Digital growth systems engineered for healthcare, real estate, education, retail, manufacturing, and professional services.",
    url: "https://dizitalgrow.in/industries",
    siteName: "DizitalGrow",
    locale: "en_IE",
    type: "website",
  },
};

export default function IndustriesDirectoryPage() {
  const industries = Object.values(INDUSTRIES_DATA);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: industries.map((ind, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: ind.title,
        description: ind.heroDescription,
        url: `https://dizitalgrow.in/industries/${ind.slug}`,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb items={[{ name: "Industries" }]} />

      {/* Hero Header */}
      <header className="mb-14 border-b border-[rgba(213,255,64,0.15)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Sector-Specific Systems</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Industries We Build For
        </h1>
        <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed">
          Every industry has unique buyer journeys, regulatory considerations, and operational workflows. We do not use cookie-cutter templates. Instead, we engineer digital platforms and growth campaigns tailored specifically to the operational realities of your sector.
        </p>
      </header>

      {/* Industries Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={ind.slug}
              className="group p-7 rounded-[2px] bg-[#101010] border border-white/10 hover:border-[#D5FF40]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5FF40]">
                    {"//"} 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-[#B0B0B0] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-white/5 border border-white/10">
                    {ind.eyebrow}
                  </span>
                </div>
                <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-[#D5FF40] transition-colors mb-3">
                  {ind.title}
                </h2>
                <p className="text-sm text-[#B0B0B0] leading-relaxed mb-6">
                  {ind.heroDescription}
                </p>

                {/* Key Challenges */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/70 block mb-2">
                    Core Challenges Solved:
                  </span>
                  {ind.industryChallenges.slice(0, 2).map((challenge, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D5FF40] mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#D5FF40] transition-colors pt-4 border-t border-white/10"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Section */}
      <section className="p-8 sm:p-12 rounded-[2px] bg-[#101010] border border-[#D5FF40]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
            {"//"} Industry Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Operating in a Specialized Niche?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            Even if your sector is not explicitly listed, our digital architecture frameworks adapt seamlessly to complex B2B sales cycles, professional practices, and service businesses.
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
