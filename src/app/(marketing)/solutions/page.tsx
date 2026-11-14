import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Split,
  UserCheck,
  Building2,
  Code2,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SOLUTIONS_DATA, SolutionDetail } from "@/constants/solutions-data";

export const metadata: Metadata = {
  title: "Solutions Hub — Business Architecture by Growth Stage | DizitalGrow",
  description:
    "Tailored digital solutions categorized across personal authority, commercial customer acquisition, and custom software application development.",
  alternates: {
    canonical: "https://dizitalgrow.in/solutions",
  },
  openGraph: {
    title: "Solutions Hub — Digital Solutions for Every Growth Stage | DizitalGrow",
    description:
      "Explore tailored digital architecture: personal authority platforms, corporate websites, high-converting landing pages, custom web applications, and SaaS products.",
    url: "https://dizitalgrow.in/solutions",
    siteName: "DizitalGrow",
    locale: "en_IE",
    type: "website",
  },
};

const SOLUTIONS_FAQS = [
  {
    question: "What is the core difference between a 'Service' and a 'Solution' at DizitalGrow?",
    answer:
      "Services represent our technical craft and individual capabilities (e.g. Next.js web development, Google Ads management, GA4 telemetry). Solutions are pre-engineered business blueprints designed to solve a specific commercial objective (e.g. launching a Corporate Website to establish market credibility, or deploying a Landing Page to capture campaign leads). A single Solution bundles the right mix of development, design, and telemetry into a turn-key project.",
  },
  {
    question: "Should I build a comprehensive Business Website or a focused Landing Page?",
    answer:
      "If your goal is overarching brand authority, organic Google SEO across multiple services, and corporate legitimacy, build a multi-page Business Website. If you are launching a specific paid ad campaign, product offer, or webinar with a single conversion goal, choose a high-converting Landing Page to maximize lead conversion without distracting navigation links.",
  },
  {
    question: "What is the difference between a Custom Web Application and a SaaS Product MVP?",
    answer:
      "A Custom Web Application is typically built for internal operations, client portals, or single-tenant workflow automation. A SaaS Product MVP includes multi-tenant architectures, customer account provisioning, role-based access control, subscription billing, and usage telemetry engineered for market validation.",
  },
  {
    question: "Can our solution evolve as our business grows?",
    answer:
      "Yes. Because we build with modular Next.js, TypeScript, and clean API boundaries, you can start with a focused Landing Page or Business Website and seamlessly add a Client Portal, custom web tools, or an e-commerce catalog later without rewriting your entire stack.",
  },
  {
    question: "How long does it take to launch a typical digital solution?",
    answer:
      "High-converting landing pages and personal websites typically launch in 10 to 14 business days. Comprehensive corporate websites require 3 to 5 weeks. Complex web applications, client portals, and SaaS MVPs range between 6 to 12 weeks depending on technical specifications.",
  },
];

const COMPARISON_MATRIX = [
  {
    comparison: "Personal Brand vs. Portfolio Website",
    contextA: "Personal Brand & Authority",
    descA: "Focuses on intellectual authority, consulting offers, essays, speaking engagements, and media mentions. Tailored for executives, consultants, and founders.",
    contextB: "Creative & Technical Portfolio",
    descB: "Focuses on visual case studies, project galleries, interactive previews, and client deliverables. Tailored for designers, architects, and technical creators.",
    recommendation: "Choose Personal Brand if clients buy your advice; choose Portfolio if clients evaluate your past visual/code artifacts.",
  },
  {
    comparison: "Business Website vs. High-Converting Landing Page",
    contextA: "Corporate Business Website",
    descA: "Multi-page foundation with company story, full service directories, career pages, blog insights, and comprehensive SEO architecture.",
    contextB: "High-Converting Landing Page",
    descB: "Single-objective, distraction-free page tailored to a specific traffic source (Google/Meta Ads) with a dedicated form or call to action.",
    recommendation: "Build the Business Website for permanent organic credibility; pair it with targeted Landing Pages for paid acquisition campaigns.",
  },
  {
    comparison: "Custom Web Application vs. SaaS Product MVP",
    contextA: "Internal Portal / Web App",
    descA: "Engineered to automate internal team bottlenecks, client document exchanges, and proprietary business workflows.",
    contextB: "SaaS Product MVP",
    descB: "Engineered for external subscription customers with self-service signup, stripe billing, user authentication, and multi-tenancy.",
    recommendation: "Build a Web App to streamline operational costs; build a SaaS MVP to launch an independent recurring revenue software product.",
  },
];

export default function SolutionsDirectoryPage() {
  const allSolutions = Object.values(SOLUTIONS_DATA);

  // Group into 3 strategic tracks
  const track1Slugs = ["personal-websites", "portfolio-websites", "professional-websites"];
  const track2Slugs = ["business-websites", "landing-pages", "ecommerce-websites"];
  const track3Slugs = ["web-applications", "saas-development", "mobile-applications"];

  const track1Solutions = allSolutions.filter((s) => track1Slugs.includes(s.slug));
  const track2Solutions = allSolutions.filter((s) => track2Slugs.includes(s.slug));
  const track3Solutions = allSolutions.filter((s) => track3Slugs.includes(s.slug));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOLUTIONS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const renderSolutionCard = (solution: SolutionDetail, indexNumber: number) => (
    <div
      key={solution.slug}
      className="group p-7 rounded-[2px] bg-[#101010] border border-white/10 hover:border-[#D5FF40]/40 transition-colors flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#D5FF40]">
            {"//"} 0{indexNumber}
          </span>
          <span className="text-[10px] font-mono text-[#B0B0B0] uppercase tracking-widest px-2 py-0.5 rounded-[2px] bg-white/5 border border-white/10">
            {solution.eyebrow}
          </span>
        </div>
        <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-[#D5FF40] transition-colors mb-3">
          {solution.title}
        </h3>
        <p className="text-sm text-[#B0B0B0] leading-relaxed mb-6">
          {solution.heroDescription}
        </p>

        {/* Who It's For Highlights */}
        <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-white/70 block mb-2">
            Target Scenarios:
          </span>
          {solution.whoNeedsThis.slice(0, 2).map((who, wIdx) => (
            <div key={wIdx} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D5FF40] mt-0.5 flex-shrink-0" />
              <span>{who.audience}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={`/solutions/${solution.slug}`}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#D5FF40] transition-colors pt-4 border-t border-white/10"
      >
        <span>Explore Solution Blueprint</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={[{ name: "Solutions" }]} />

      {/* Hero Header */}
      <header className="mb-12 border-b border-[rgba(213,255,64,0.15)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{"//"} Solutions Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Solutions for Different Digital Needs
        </h1>
        <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed">
          Different stages of professional and commercial growth demand distinct technical architectures. Whether you need an executive personal platform, a high-converting lead generation funnel, or an enterprise SaaS product, we engineer systems that drive measurable business outcomes.
        </p>
      </header>

      {/* Distinction Banner: Services vs Solutions */}
      <section className="mb-16 p-6 sm:p-8 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.25)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Understanding Our Framework</span>
          </div>
          <h2 className="text-lg sm:text-xl font-display font-bold uppercase text-white mb-2">
            Services vs. Solutions: How They Differ
          </h2>
          <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
            <strong className="text-white">Services</strong> represent our technical craft—what we do (Next.js engineering, Meta Ads management, conversion tracking). <br />
            <strong className="text-white">Solutions</strong> represent what you launch—the complete business asset (a Corporate Website, a Local Lead Engine, or a SaaS MVP) designed around your commercial milestone.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors shrink-0 focus-cyber"
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* Track 1: Personal Brand & Professional Authority */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <UserCheck className="w-4 h-4" />
            <span>Track 01</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">
            Personal Brand &amp; Professional Authority
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl">
            High-trust platforms for consultants, executives, and practitioners designed to validate credentials and capture advisory opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track1Solutions.map((sol, idx) => renderSolutionCard(sol, idx + 1))}
        </div>
      </section>

      {/* Track 2: Commercial Growth & Lead Generation */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            <span>Track 02</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">
            Commercial Growth &amp; Customer Acquisition
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl">
            Revenue-focused websites and high-velocity conversion funnels engineered to convert commercial search intent into qualified client pipelines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track2Solutions.map((sol, idx) => renderSolutionCard(sol, idx + 4))}
        </div>
      </section>

      {/* Track 3: Custom Software & Digital Products */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <Code2 className="w-4 h-4" />
            <span>Track 03</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">
            Custom Software &amp; Digital Applications
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl">
            Bespoke web applications, client portals, and SaaS minimum viable products engineered with enterprise security and scalable data architectures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track3Solutions.map((sol, idx) => renderSolutionCard(sol, idx + 7))}
        </div>
      </section>

      {/* Decision Guide & Comparison Matrix */}
      <section className="mb-16 p-8 rounded-[2px] bg-[#0A0A0A] border border-white/10">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <Split className="w-4 h-4" />
            <span>{"//"} Decision Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            How to Choose the Right Solution
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl">
            Evaluate key architectural differences between related solutions to ensure your investment aligns with your immediate operational priorities.
          </p>
        </div>

        <div className="space-y-6">
          {COMPARISON_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#101010] border border-white/5 space-y-4"
            >
              <h3 className="text-lg font-display font-bold uppercase text-[#D5FF40]">
                {item.comparison}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-2 border-white/20 pl-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                    Option A: {item.contextA}
                  </h4>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed">{item.descA}</p>
                </div>
                <div className="border-l-2 border-[#D5FF40]/40 pl-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                    Option B: {item.contextB}
                  </h4>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed">{item.descB}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-[#D5FF40] uppercase tracking-wider block mb-1">
                  Strategic Recommendation:
                </span>
                <p className="text-xs text-white/90 leading-relaxed">
                  {item.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution FAQs */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{"//"} Solutions FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS_FAQS.map((faq, idx) => (
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

      {/* Bottom Conversion Section */}
      <section className="p-8 sm:p-12 rounded-[2px] bg-[#101010] border border-[#D5FF40]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D5FF40] block mb-2">
            {"//"} Technical Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Unsure Which Solution Fits Your Current Stage?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            Schedule a direct architecture consultation with our engineering team. We will analyze your business objectives, technical requirements, and budget to design an optimal execution roadmap.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors focus-cyber"
          >
            <span>View All Services</span>
          </Link>
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
