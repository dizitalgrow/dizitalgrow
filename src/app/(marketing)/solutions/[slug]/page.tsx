import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  HelpCircle,
  Code2,
  Layout,
  Sparkles,
  ArrowUpRight,
  Wrench,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SOLUTIONS_DATA } from "@/constants/solutions-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];

  if (!solution) {
    return { title: "Solution Not Found | DizitalGrow" };
  }

  const canonical = `https://dizitalgrow.in/solutions/${slug}`;

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url: canonical,
      siteName: "DizitalGrow",
      locale: "en_IE",
      type: "website",
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];

  if (!solution) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Solutions", href: "/solutions" },
          { name: solution.title },
        ]}
      />

      {/* Hero Header */}
      <header className="mb-14 border-b border-[rgba(213,255,64,0.15)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{"//"} {solution.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
          {solution.h1}
        </h1>
        <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed mb-8">
          {solution.heroDescription}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] bg-[#D5FF40] text-black font-mono font-medium text-xs uppercase tracking-wider hover:bg-[#c2ea36] transition-colors focus-cyber"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors focus-cyber"
          >
            <span>View Case Studies</span>
          </Link>
        </div>
      </header>

      {/* Who Needs This & Why Useful */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Who Needs This */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Target Audiences
          </span>
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Who Needs This Solution
          </h2>
          <div className="space-y-6">
            {solution.whoNeedsThis.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#D5FF40]/40 pl-4">
                <h3 className="text-base font-display font-bold text-white mb-1">
                  {item.audience}
                </h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Useful */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Business Impact
          </span>
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Why This Solution Delivers Real Value
          </h2>
          <ul className="space-y-4">
            {solution.whyUseful.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D5FF40] mt-1 flex-shrink-0" />
                <span className="text-sm text-[#B0B0B0] leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended Pages / Structure */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Architecture & IA
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Recommended Pages & Information Architecture
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.recommendedPages.map((page, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#101010] border border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layout className="w-4 h-4 text-[#D5FF40]" />
                <span className="text-xs font-mono text-[#B0B0B0]">
                  Core Template 0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2">
                {page.page}
              </h3>
              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                {page.purpose}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Design & Technical Considerations */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Design Considerations</span>
          </div>
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            User Experience & Visual Polish
          </h2>
          <ul className="space-y-3">
            {solution.designConsiderations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#B0B0B0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF40] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
            <Code2 className="w-4 h-4" />
            <span>Technical Considerations</span>
          </div>
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Performance, SEO & Security
          </h2>
          <ul className="space-y-3">
            {solution.technicalConsiderations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#B0B0B0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF40] mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How DizitalGrow Helps */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Delivery Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            How DizitalGrow Builds Your Solution
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.howWeHelp.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#101010] border border-white/10 relative"
            >
              <span className="text-2xl font-mono font-bold text-[#D5FF40]/30 block mb-3">
                {step.step}
              </span>
              <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#B0B0B0] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services & Tools */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Services */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Complementary Core Services
          </h2>
          <div className="space-y-4">
            {solution.relatedServices.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.href}
                className="group p-4 rounded-[2px] bg-white/[0.02] border border-white/5 hover:border-[#D5FF40]/40 transition-colors block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-display font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                    {svc.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B0B0B0] group-hover:text-[#D5FF40] transition-colors" />
                </div>
                <p className="text-xs text-[#B0B0B0]">{svc.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Free Online Utilities
          </h2>
          <div className="space-y-4">
            {solution.relatedTools.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.href}
                className="group p-4 rounded-[2px] bg-white/[0.02] border border-white/5 hover:border-[#D5FF40]/40 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 text-[#D5FF40]" />
                  <span className="text-sm font-display font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                    {tool.name}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#B0B0B0] group-hover:text-[#D5FF40] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{"//"} Clarity &amp; Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {solution.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#101010] border border-white/10"
            >
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

      {/* Final Call to Action */}
      <section className="p-8 sm:p-12 rounded-[2px] bg-[#101010] border border-[#D5FF40]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
            {"//"} Start Building
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Ready to Build Your {solution.title}?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            Let us design, develop, and deploy a custom solution aligned precisely with your growth targets. Transparent timelines, clean architecture, and zero generic templates.
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
    </main>
  );
}
