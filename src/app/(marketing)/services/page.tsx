import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  PhoneCall,
  Cpu,
  TrendingUp,
  Database,
  Layers,
  HelpCircle,
} from "lucide-react";
import { CAPABILITIES_PILLARS } from "@/constants/site-data";
import { VERIFIED_WHATSAPP_PHONE, PRIMARY_CTA_LABEL } from "@/constants/navigation";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Services & Capabilities — Web Engineering, Acquisition & Telemetry | DizitalGrow",
  description:
    "Explore DizitalGrow's 8 core capabilities across modern web development, high-intent Google & Meta advertising, and server-side conversion telemetry.",
  alternates: {
    canonical: "https://dizitalgrow.in/services",
  },
  openGraph: {
    title: "Services & Capabilities — DizitalGrow",
    description:
      "Modern web engineering, customer acquisition advertising, and server-side conversion telemetry for growing businesses.",
    url: "https://dizitalgrow.in/services",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Capabilities — DizitalGrow",
    description:
      "Modern web development, customer acquisition advertising, and server-side telemetry.",
  },
};

const SERVICES_FAQS = [
  {
    question: "How does DizitalGrow determine which services our business needs first?",
    answer:
      "We begin with a technical and acquisition audit of your current digital footprint. If your website is slow or poorly structured, sending paid traffic to it burns budget. We first ensure your conversion foundation (website and tracking) is solid before scaling acquisition channels like Google Ads, Meta Ads, or long-term SEO.",
  },
  {
    question: "Can we engage for only one specific service, such as Meta Ads or Website Development?",
    answer:
      "Yes. While our integrated model delivers the highest compounded ROI, every capability is available independently. You can engage us strictly for a Next.js web application, Google Search Ads management, or a standalone Server-Side Meta Conversions API setup.",
  },
  {
    question: "Why do you emphasize server-side conversion tracking before scaling ad spend?",
    answer:
      "Browser privacy controls (such as Apple iOS App Tracking Transparency) and ad blockers prevent 15% to 30% of web events from reaching ad platforms via client-side pixels alone. Server-side tracking (Meta CAPI & GA4) ensures attribution accuracy, allows ad algorithms to optimize towards verified purchases or leads, and lowers customer acquisition costs.",
  },
  {
    question: "How does custom Next.js web development differ from standard WordPress or page builders?",
    answer:
      "Custom Next.js engineering eliminates bloated plugins, database queries on every page hit, and sluggish page loads. Our codebases achieve sub-second load times, flawless 95+ Core Web Vitals, enterprise security, and flexible custom component architectures that cannot break during third-party plugin updates.",
  },
  {
    question: "What is the distinction between a 'Service' and a 'Solution' at DizitalGrow?",
    answer:
      "Services represent our fundamental technical craft—what we do every day (e.g., Next.js coding, Google Ads bidding, GA4 event tagging). Solutions represent client business outcomes—what you actually launch (e.g., a Corporate Website, a Local Lead Engine, or a Client Portal). A single Solution combines multiple Services seamlessly.",
  },
  {
    question: "Do you offer ongoing retainer support after our platform or ad campaigns go live?",
    answer:
      "Yes. We offer structured monthly growth retainers covering ad optimization, technical SEO maintenance, conversion rate testing, software updates, and server infrastructure monitoring.",
  },
];

const ENGAGEMENT_MATRIX = [
  {
    stage: "Starting or Rebranding",
    recommendedServices: ["Website Development", "Conversion Tracking", "SEO & Visibility"],
    why: "You need a fast, authoritative digital anchor and clean analytics before spending budget on paid advertising.",
    solutionLink: { name: "Corporate Website", href: "/solutions/corporate-website" },
  },
  {
    stage: "High In-Market Demand",
    recommendedServices: ["Google Ads", "Conversion Tracking", "Website Development"],
    why: "Capture buyers who are already searching Google with active commercial intent for your exact products or services.",
    solutionLink: { name: "Local Lead Engine", href: "/solutions/local-lead-engine" },
  },
  {
    stage: "Visual Product or Mass Appeal",
    recommendedServices: ["Meta Ads", "Meta Conversions API", "Conversion Tracking"],
    why: "Generate demand visually on Instagram and Facebook with server-side CAPI event deduplication to preserve attribution.",
    solutionLink: { name: "High-Converting Landing Page", href: "/solutions/landing-page-funnel" },
  },
  {
    stage: "Operational Bottlenecks & Scale",
    recommendedServices: ["Web Application Development", "Mobile App Development"],
    why: "Replace manual Google Sheets or fragmented off-the-shelf software with proprietary client dashboards and workflow tools.",
    solutionLink: { name: "Client Portal & Dashboard", href: "/solutions/portal-dashboard" },
  },
];

export default function ServicesPage() {
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DizitalGrow Digital Capabilities",
    description:
      "Complete capabilities across website development, web applications, advertising, and server-side telemetry.",
    itemListElement: CAPABILITIES_PILLARS.flatMap((pillar, pIdx) =>
      pillar.capabilities.map((cap, cIdx) => ({
        "@type": "ListItem",
        position: pIdx * 10 + cIdx + 1,
        name: cap.name,
        url: `https://dizitalgrow.in${cap.href}`,
        description: cap.summary,
      }))
    ),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICES_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="container-cyber pt-16 pb-14 border-b border-[rgba(213,255,64,0.12)]">
        <Breadcrumb items={[{ name: "Services" }]} />
        <Reveal>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                CAPABILITIES & DISCIPLINES
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Engineering, Traffic &amp; <br />
              <span className="text-[#D5FF40]">Attribution Telemetry.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Digital growth fails when disciplines operate in silos. We organize our 8 core capabilities into an integrated triad: building high-performance platforms, driving high-intent traffic, and measuring commercial outcomes with server-side precision.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
              >
                <span>{PRIMARY_CTA_LABEL}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href={formatWhatsAppUrl(
                  VERIFIED_WHATSAPP_PHONE,
                  "Hi DizitalGrow, I would like to explore your services and capabilities."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#D5FF40]" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Integrated Growth Architecture Explanation */}
      <section className="container-cyber py-16 border-b border-[rgba(213,255,64,0.12)]">
        <div className="mb-10">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} The Triad Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            Why Development, Traffic &amp; Telemetry Must Work Together
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl leading-relaxed">
            Most agencies offer either development, or ads, or SEO. When these functions are separated, your growth breaks down in the handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#D5FF40] mb-3">
                <Cpu className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Pillar 01: Engineering</span>
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                Conversion Foundations
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                Sub-second Next.js pages, clear typography, and intuitive information architecture that retain visitors and articulate your core value proposition.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase text-red-400 block mb-1">
                Without Acquisition Traffic:
              </span>
              <p className="text-xs text-white/70">
                A masterpiece website that nobody visits. Zero inbound discovery.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#D5FF40] mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Pillar 02: Acquisition</span>
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                High-Intent Traffic
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                Targeted Google Search, Meta ads, and technical SEO designed to intercept prospective buyers actively looking for a solution.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase text-red-400 block mb-1">
                Without Conversion Foundation:
              </span>
              <p className="text-xs text-white/70">
                Expensive ad clicks landing on slow pages with high bounce rates and wasted ad spend.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[2px] bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#D5FF40] mb-3">
                <Database className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Pillar 03: Telemetry</span>
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                Server-Side Attribution
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                Full-funnel GA4 setups and Meta CAPI server deduplication measuring actual phone calls, leads, and sales rather than surface vanity metrics.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono uppercase text-red-400 block mb-1">
                Without Telemetry:
              </span>
              <p className="text-xs text-white/70">
                Flying blind. Inability to identify which campaigns or keywords drive profitable customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Navigation / Anchors */}
      <section className="container-cyber py-8 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[#B0B0B0] uppercase font-bold tracking-wider">
            QUICK CAPABILITY JUMP:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {CAPABILITIES_PILLARS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-3 py-1.5 rounded-[2px] border border-[rgba(213,255,64,0.2)] text-white hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                0{p.pillarNumber} · {p.pillar}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pillars Sections */}
      <div className="space-y-24 py-16 md:py-24">
        {CAPABILITIES_PILLARS.map((pillar) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="container-cyber scroll-mt-24"
          >
            <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 rounded-[2px] space-y-10">
              {/* Pillar Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(213,255,64,0.12)]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                      PILLAR 0{pillar.pillarNumber}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      {pillar.pillar}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mt-1">
                    {pillar.tagline}
                  </h2>
                  <p className="mt-2 text-sm text-[#B0B0B0] max-w-2xl leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline shrink-0"
                >
                  <span>Discuss {pillar.pillar} Requirements</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Pillar Capabilities Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pillar.capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    className="group border border-[rgba(213,255,64,0.15)] bg-[#101010] p-6 rounded-[2px] flex flex-col justify-between hover:border-[#D5FF40] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
                        <ArrowUpRight className="h-4 w-4 text-[#D5FF40] opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                        {cap.name}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                        {cap.summary}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[rgba(213,255,64,0.1)]">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5FF40] font-bold block mb-1">
                          PROBLEM IT SOLVES:
                        </span>
                        <p className="text-[11px] text-[#A1A1AA] leading-snug">
                          {cap.solves}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 flex items-center justify-between">
                      <Link
                        href={cap.href}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
                      >
                        <span>Dedicated Service Page</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* When to Engage Each Service (Decision Framework) */}
      <section className="container-cyber py-16 border-t border-[rgba(213,255,64,0.12)]">
        <div className="mb-10">
          <span className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider block mb-2">
            {"//"} Strategic Alignment
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
            When Should Your Business Engage Each Service?
          </h2>
          <p className="text-sm text-[#B0B0B0] max-w-2xl leading-relaxed">
            Choose capabilities based on your operational maturity and immediate commercial priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGAGEMENT_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#0A0A0A] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-[#D5FF40] tracking-wider">
                    Stage 0{idx + 1}
                  </span>
                  <Link
                    href={item.solutionLink.href}
                    className="inline-flex items-center gap-1 text-xs font-mono text-white/70 hover:text-[#D5FF40] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#D5FF40]" />
                    <span>See Solution: {item.solutionLink.name}</span>
                  </Link>
                </div>
                <h3 className="text-lg font-display font-bold uppercase text-white mb-2">
                  {item.stage}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-4">
                  {item.why}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                  Recommended Core Services:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.recommendedServices.map((svc, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-[2px] bg-white/[0.04] border border-white/10 text-xs font-mono text-white"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container-cyber py-16 md:py-24 border-t border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{"//"} Service Architecture FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
            Questions About Our Capabilities
          </h2>
          <p className="text-sm text-[#B0B0B0] mt-2">
            Clear, honest answers about capabilities, technology choices, attribution telemetry, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[2px] bg-[#0A0A0A] border border-white/10"
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

      {/* Bottom CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-20 bg-[#070707]">
        <div className="container-cyber text-center max-w-3xl space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            GET STARTED
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            Your Digital Growth Journey <br />
            <span className="text-[#D5FF40]">Starts With One Step.</span>
          </h2>
          <p className="text-base text-[#B0B0B0] leading-relaxed">
            Whether you are building from scratch or looking to accelerate an existing brand, let&apos;s review your technical stack and engineer an acquisition roadmap.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              <span>Discuss Your Requirements</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
