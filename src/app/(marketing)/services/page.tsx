import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, PhoneCall } from "lucide-react";
import { CAPABILITIES_PILLARS, MASTER_FAQS } from "@/constants/site-data";
import { VERIFIED_WHATSAPP_PHONE, PRIMARY_CTA_LABEL } from "@/constants/navigation";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Digital Solutions & Capabilities — Build, Reach, Convert & Measure | DizitalGrow",
  description:
    "Explore our complete digital solutions architecture: Website Development, Web Applications, Mobile Apps, Google & Meta Ads Management, SEO, and Server-Side Meta CAPI Telemetry.",
  alternates: {
    canonical: "https://dizitalgrow.in/services",
  },
  openGraph: {
    title: "Digital Solutions & Capabilities — DizitalGrow",
    description:
      "Modern web engineering, customer acquisition advertising, and server-side conversion telemetry for growing businesses.",
    url: "https://dizitalgrow.in/services",
    siteName: "DizitalGrow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions & Capabilities — DizitalGrow",
    description:
      "Web development, customer acquisition advertising, and server-side tracking.",
  },
};

export default function ServicesPage() {
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DizitalGrow Digital Solutions",
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

  return (
    <div className="w-full bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />

      {/* Hero Section */}
      <section className="container-cyber pt-16 pb-14 border-b border-[rgba(213,255,64,0.12)]">
        <Reveal>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                SOLUTIONS & CAPABILITIES
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Everything You Need to <br />
              <span className="text-[#D5FF40]">Move Forward Digitally.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              We organize our capabilities around three core business needs: establishing your digital foundation, connecting with high-intent buyers, and accurately measuring what drives revenue.
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
                  "Hi DizitalGrow, I would like to explore your solutions."
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

      {/* 3 Core Pillars Navigation / Anchors */}
      <section className="container-cyber py-8 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[#B0B0B0] uppercase font-bold tracking-wider">
            QUICK PILLAR JUMP:
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

                    <div className="mt-6 pt-3">
                      <Link
                        href={cap.href}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
                      >
                        <span>Explore Dedicated Page</span>
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

      {/* Frequently Asked Questions */}
      <section className="container-cyber py-16 md:py-24 border-t border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1">
            Questions About Our Solutions
          </h2>
          <p className="text-sm text-[#B0B0B0] mt-2">
            Clear, honest answers about scopes, pricing, and execution.
          </p>
        </div>

        <FAQAccordion items={MASTER_FAQS.slice(0, 6)} showCTA={false} />
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
            Whether you are starting from scratch or looking to grow an existing business, let&apos;s explore how digital can create new opportunities for you.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              <span>Let&apos;s Talk About Your Goals</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
