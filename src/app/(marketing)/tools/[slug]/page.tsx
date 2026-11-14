import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Wrench,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  HelpCircle,
  Calculator,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TOOL_CATEGORIES, TOOLS_DATA } from "@/constants/tools-data";
import { ToolRenderer } from "@/features/tools/components/ToolRenderer";
import { getToolGuide } from "@/constants/tool-guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categorySlugs = Object.keys(TOOL_CATEGORIES).map((slug) => ({ slug }));
  const toolSlugs = Object.keys(TOOLS_DATA).map((slug) => ({ slug }));
  return [...categorySlugs, ...toolSlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (TOOL_CATEGORIES[slug]) {
    const category = TOOL_CATEGORIES[slug];
    const canonical = `https://dizitalgrow.in/tools/${slug}`;
    return {
      title: `${category.name} Free Tools | DizitalGrow`,
      description: category.description,
      alternates: { canonical },
      openGraph: {
        title: `${category.name} Free Tools | DizitalGrow`,
        description: category.description,
        url: canonical,
        siteName: "DizitalGrow",
        locale: "en_IE",
        type: "website",
      },
    };
  }

  if (TOOLS_DATA[slug]) {
    const tool = TOOLS_DATA[slug];
    const canonical = `https://dizitalgrow.in/tools/${slug}`;
    return {
      title: tool.metaTitle,
      description: tool.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: tool.metaTitle,
        description: tool.metaDescription,
        url: canonical,
        siteName: "DizitalGrow",
        locale: "en_IE",
        type: "website",
      },
    };
  }

  return {
    title: "Tool Not Found | DizitalGrow",
  };
}

export default async function ToolOrCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // Check if it's a category
  if (TOOL_CATEGORIES[slug]) {
    const category = TOOL_CATEGORIES[slug];
    const tools = category.toolSlugs
      .map((s) => TOOLS_DATA[s])
      .filter(Boolean);

    return (
      <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { name: "Free Tools", href: "/tools" },
            { name: category.name },
          ]}
        />

        {/* Category Header */}
        <header className="mb-12 border-b border-[rgba(213,255,64,0.15)] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Category Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
            {category.name}
          </h1>
          <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </header>

        {/* Tools Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white">
              Available Tools ({tools.length})
            </h2>
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider">
              100% Free · Client-Side
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.slug}
                className="group p-6 rounded-[2px] bg-[#101010] border border-white/10 hover:border-[#D5FF40]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5FF40] bg-[#D5FF40]/10 px-2 py-0.5 rounded-[2px] border border-[#D5FF40]/20">
                      {category.name}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#D5FF40] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white group-hover:text-[#D5FF40] transition-colors mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed mb-6">
                    {tool.tagline}
                  </p>
                </div>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#D5FF40] transition-colors pt-4 border-t border-white/5"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Related Service Recommendation */}
        <section className="p-8 rounded-[2px] bg-[#101010] border border-[#D5FF40]/20 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
              {"//"} Professional Scale
            </span>
            <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2">
              Need Custom Software or Marketing Architecture?
            </h3>
            <p className="text-sm text-[#B0B0B0] leading-relaxed">
              While our free browser utilities solve tactical day-to-day needs, DizitalGrow engineers bespoke digital platforms, custom web applications, and automated conversion systems tailored to your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[2px] bg-[#D5FF40] text-black font-mono font-medium text-xs uppercase tracking-wider hover:bg-[#c2ea36] transition-colors whitespace-nowrap focus-cyber"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    );
  }

  // Check if it's an individual tool
  if (TOOLS_DATA[slug]) {
    const tool = TOOLS_DATA[slug];
    const category = TOOL_CATEGORIES[tool.categorySlug];
    const guide = getToolGuide(tool.slug, tool.categorySlug);

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: tool.description,
      url: `https://dizitalgrow.in/tools/${tool.slug}`,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    return (
      <div className="min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Free Tools", href: "/tools" },
            { name: category?.name || "Tools", href: `/tools/${tool.categorySlug}` },
            { name: tool.title },
          ]}
        />

        {/* Tool Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
            <span>{"//"} {tool.categoryName}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
            {tool.h1}
          </h1>
          <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed">
            {tool.description}
          </p>
        </header>

        {/* Tool Interactive App — Kept at top for immediate utility */}
        <section className="mb-16">
          <ToolRenderer slug={slug} />
        </section>

        {/* Instructions & Practical Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* How to use */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-[#101010] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Step-by-Step Instructions</span>
            </div>
            <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
              How to Use This Tool
            </h2>
            <ol className="space-y-4">
              {tool.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D5FF40]/10 border border-[#D5FF40]/30 text-[#D5FF40] text-xs font-mono flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-[#B0B0B0] leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Example Use Cases */}
          <div className="p-6 sm:p-8 rounded-[2px] bg-[#101010] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>Target Applications</span>
            </div>
            <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Recommended Use Cases
            </h2>
            <ul className="space-y-4">
              {tool.exampleUseCases.map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF40] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#B0B0B0] leading-relaxed">
                    {useCase}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formulas & Calculation Logic */}
        <section className="mb-16 p-6 sm:p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            <span>Underlying Mechanics &amp; Assumptions</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white mb-4">
            How the Calculations Work
          </h2>
          <div className="bg-[#050505] p-5 rounded-[2px] border border-white/5 mb-6">
            <pre className="text-xs sm:text-sm font-mono text-[#D5FF40] whitespace-pre-wrap leading-relaxed">
              {guide.formulaOrLogic}
            </pre>
          </div>
          {guide.assumptions && guide.assumptions.length > 0 && (
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-3">
                Key Parameters &amp; Assumptions:
              </span>
              <ul className="space-y-2">
                {guide.assumptions.map((assump, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs text-[#B0B0B0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                    <span>{assump}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Common Pitfalls & Best-Practice Tips */}
        {guide.commonMistakesAndTips && guide.commonMistakesAndTips.length > 0 && (
          <section className="mb-16 p-6 sm:p-8 rounded-[2px] bg-[#101010] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>Important Considerations</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Common Mistakes to Avoid &amp; Pro Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.commonMistakesAndTips.map((tip, tIdx) => (
                <div key={tIdx} className="p-4 rounded-[2px] bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-[#D5FF40] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#B0B0B0] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tool FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>{"//"} Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
                Questions About {tool.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guide.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10">
                  <h3 className="text-base font-display font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        {tool.relatedToolSlugs && tool.relatedToolSlugs.length > 0 && (
          <section className="mb-16 border-t border-white/10 pt-12">
            <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Related Utilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tool.relatedToolSlugs.map((relatedSlug) => {
                const related = TOOLS_DATA[relatedSlug];
                if (!related) return null;
                return (
                  <Link
                    key={related.slug}
                    href={`/tools/${related.slug}`}
                    className="group p-5 rounded-[2px] bg-[#101010] border border-white/10 hover:border-[#D5FF40]/40 transition-colors block"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5FF40]">
                        {related.categoryName}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B0B0B0] group-hover:text-[#D5FF40] transition-colors" />
                    </div>
                    <h3 className="text-base font-display font-bold uppercase tracking-tight text-white group-hover:text-[#D5FF40] transition-colors mb-1">
                      {related.title}
                    </h3>
                    <p className="text-xs text-[#B0B0B0] line-clamp-2">
                      {related.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Service CTA */}
        <section className="p-8 rounded-[2px] bg-[#101010] border border-[#D5FF40]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
              {"//"} Scale Beyond Browser Tools
            </span>
            <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2">
              Need Professional {tool.relatedServiceName || "Web Application"} Development?
            </h3>
            <p className="text-sm text-[#B0B0B0] leading-relaxed">
              We build custom web platforms, automated workflows, and robust conversion architectures designed for sustainable commercial growth.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {tool.relatedServiceSlug && (
              <Link
                href={`/services/${tool.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors focus-cyber"
              >
                <span>View Service</span>
              </Link>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[2px] bg-[#D5FF40] text-black font-mono font-medium text-xs uppercase tracking-wider hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  notFound();
}
