import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Users,
  Compass,
  MapPin,
  CalendarCheck,
  Briefcase,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { INDUSTRIES_DATA } from "@/constants/industries-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    return { title: "Industry Not Found | DizitalGrow" };
  }

  const canonical = `https://dizitalgrow.in/industries/${slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: canonical,
      siteName: "DizitalGrow",
      locale: "en_IE",
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];

  if (!industry) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Industries", href: "/industries" },
          { name: industry.title },
        ]}
      />

      {/* Hero Header */}
      <header className="mb-14 border-b border-[rgba(213,255,64,0.15)] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#D5FF40]/10 border border-[#D5FF40]/25 text-[#D5FF40] text-xs font-mono uppercase tracking-[0.15em] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>{"//"} {industry.eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
          {industry.h1}
        </h1>
        <p className="text-base sm:text-lg text-[#B0B0B0] max-w-3xl leading-relaxed mb-8">
          {industry.heroDescription}
        </p>

        {/* Target Audiences if present */}
        {industry.targetAudiences && industry.targetAudiences.length > 0 && (
          <div className="mb-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Target Audiences & Advisory Practices</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {industry.targetAudiences.map((aud, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-[2px] bg-white/[0.04] border border-white/10 text-xs font-mono text-white/90"
                >
                  {aud}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] bg-[#D5FF40] text-black font-mono font-medium text-xs uppercase tracking-wider hover:bg-[#c2ea36] transition-colors focus-cyber"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors focus-cyber"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>
      </header>

      {/* Challenges & Digital Requirements */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Industry Challenges */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
            <AlertCircle className="w-4 h-4" />
            <span>Bottlenecks Solved</span>
          </div>
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Industry-Specific Challenges
          </h2>
          <div className="space-y-4">
            {industry.industryChallenges.map((challenge, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D5FF40] flex items-center justify-center mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Requirements */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Core Imperatives</span>
          </div>
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
            What Businesses in This Sector Need
          </h2>
          <div className="space-y-6">
            {industry.digitalRequirements.map((req, idx) => (
              <div key={idx} className="border-l-2 border-[#D5FF40]/40 pl-4">
                <h3 className="text-base font-display font-bold text-white mb-1">
                  {req.title}
                </h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Behavior Patterns (if present) */}
      {industry.searchBehaviors && industry.searchBehaviors.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
              {"//"} Intent Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
              How Clients Search for High-Trust Advisory Services
            </h2>
            <p className="text-sm text-[#B0B0B0] max-w-2xl">
              Clients seeking professional counsel don&apos;t browse casually. They search with urgent problems, scrutinize credentials, and compare depth before initiating confidential discussions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.searchBehaviors.map((item, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
                    <Search className="w-3.5 h-3.5" />
                    <span>{item.intentType}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block mb-2">
                      Representative Queries:
                    </span>
                    <ul className="space-y-1.5">
                      {item.queryExamples.map((query, qIdx) => (
                        <li key={qIdx} className="text-xs font-mono text-white/90 bg-white/[0.03] px-2.5 py-1 rounded-[2px] border border-white/5">
                          &quot;{query}&quot;
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed mb-4">
                    <strong className="text-white">Client Mindset:</strong> {item.userMindset}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono text-[#D5FF40] uppercase tracking-wider block mb-1">
                    Conversion Architecture:
                  </span>
                  <p className="text-xs text-[#B0B0B0]">
                    {item.recommendedLandingApproach}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practice Architecture Guide (if present) */}
      {industry.practiceArchitectureGuide && industry.practiceArchitectureGuide.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
              {"//"} Information Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
              Practice-Area & Service-Page Architecture
            </h2>
            <p className="text-sm text-[#B0B0B0] max-w-2xl">
              A single generic &quot;Services&quot; page fails search engines and undermines authority. We structure dedicated practice silos with deep contextual interlinking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.practiceArchitectureGuide.map((guide, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{guide.category}</span>
                </div>
                <p className="text-xs text-[#B0B0B0] mb-4 leading-relaxed">
                  {guide.description}
                </p>
                <div>
                  <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block mb-2">
                    Recommended Sub-Pages:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {guide.recommendedPages.map((page, pIdx) => (
                      <span key={pIdx} className="text-xs font-mono text-white bg-white/[0.04] px-2.5 py-1 rounded-[2px] border border-white/10">
                        {page}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trust & Credibility Framework (if present) */}
      {industry.trustAndCredibilityElements && industry.trustAndCredibilityElements.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
              {"//"} Ethics & Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
              Trust-Building & Credibility Framework
            </h2>
            <p className="text-sm text-[#B0B0B0] max-w-2xl">
              Professional advisory marketing must respect regulatory boundaries. We build authority through demonstrated technical competence rather than exaggerated promotional claims.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.trustAndCredibilityElements.map((el, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{el.title}</span>
                  </div>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed mb-4">
                    {el.importance}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5FF40] block mb-1">
                    Implementation:
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {el.implementation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Consultation Workflow & Enquiry Routing (if present) */}
      {industry.consultationFlowSteps && industry.consultationFlowSteps.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
              {"//"} Conversion Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
              Consultation & High-Value Enquiry Flow
            </h2>
            <p className="text-sm text-[#B0B0B0] max-w-2xl">
              High-value legal and consulting clients do not convert on low-friction impulse triggers. They require structured, confidence-inspiring communication funnels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.consultationFlowSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10 relative">
                <span className="text-2xl font-mono font-bold text-[#D5FF40]/30 block mb-2">
                  {step.stage}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <CalendarCheck className="w-4 h-4 text-[#D5FF40]" />
                  <h3 className="text-base font-display font-bold uppercase text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Local & National Coverage (if present) */}
      {industry.localAndNationalRelevance && (
        <section className="mb-16 p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>{"//"} Search Geography</span>
          </div>
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-3">
            {industry.localAndNationalRelevance.headline}
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-3xl leading-relaxed mb-6">
            {industry.localAndNationalRelevance.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.localAndNationalRelevance.coverageHighlights.map((hl, idx) => (
              <div key={idx} className="p-4 rounded-[2px] bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5FF40] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/90 font-mono leading-relaxed">{hl}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practical Illustrative Scenarios (if present) */}
      {industry.practicalScenarios && industry.practicalScenarios.length > 0 && (
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
              {"//"} Practical Blueprints
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
              Illustrative Advisory Firm Architectures
            </h2>
            <p className="text-sm text-[#B0B0B0] max-w-2xl">
              Concrete architectural patterns demonstrating how specific professional firm types solve client acquisition challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {industry.practicalScenarios.map((sc, idx) => (
              <div key={idx} className="p-6 rounded-[2px] bg-[#101010] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Scenario 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase text-white mb-3">
                    {sc.firmType}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-0.5">
                        Operating Challenge:
                      </span>
                      <p className="text-xs text-[#B0B0B0] leading-relaxed">{sc.context}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5FF40] block mb-0.5">
                        Information Architecture:
                      </span>
                      <p className="text-xs text-[#B0B0B0] leading-relaxed">{sc.architectureNeeded}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-0.5">
                        Enquiry Funnel:
                      </span>
                      <p className="text-xs text-[#B0B0B0] leading-relaxed">{sc.enquiryJourney}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                    Key Deliverable:
                  </span>
                  <p className="text-xs font-mono text-white/90">{sc.keyDeliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommended Digital Features */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} High-Impact Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Recommended Digital Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.recommendedFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#101010] border border-white/10 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#D5FF40] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-white font-medium leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How DizitalGrow Helps */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Sector Playbook
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            How DizitalGrow Helps {industry.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.howWeHelp.map((step, idx) => (
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

      {/* Related Services & Solutions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Services */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Related Core Services
          </h2>
          <div className="space-y-4">
            {industry.relatedServices.map((svc, idx) => (
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

        {/* Solutions */}
        <div className="p-8 rounded-[2px] bg-[#101010] border border-white/10">
          <h2 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Recommended Solution Blueprints
          </h2>
          <div className="space-y-4">
            {industry.relatedSolutions.map((sol, idx) => (
              <Link
                key={idx}
                href={sol.href}
                className="group p-4 rounded-[2px] bg-white/[0.02] border border-white/5 hover:border-[#D5FF40]/40 transition-colors block"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D5FF40]" />
                    <span className="text-sm font-display font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                      {sol.name}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B0B0B0] group-hover:text-[#D5FF40] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-[#B0B0B0]">{sol.description}</p>
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
            <span>{"//"} Sector FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {industry.faqs.map((faq, idx) => (
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
            {"//"} Transform Your Operations
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Ready to Build a High-Performing {industry.title} Platform?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            From technical compliance to customer acquisition, we help {industry.title.toLowerCase()} leaders build digital infrastructure that generates dependable commercial growth.
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
