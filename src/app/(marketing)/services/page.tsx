import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PEXELS_IMAGES } from "@/constants/images";

export const metadata: Metadata = {
  title: "Services & Capabilities — Websites, Ads & Tracking | DizitalGrow",
  description:
    "Explore our three core digital service categories: Websites & Web Applications, Google & Meta Ads Management, and Server-Side Meta CAPI Analytics.",
  alternates: {
    canonical: "https://dizitalgrow.in/services",
  },
  openGraph: {
    title: "Services & Capabilities — DizitalGrow",
    description:
      "Web development, customer acquisition advertising, and server-side conversion tracking.",
    url: "https://dizitalgrow.in/services",
    siteName: "DizitalGrow",
    type: "website",
  },
};

const SERVICE_GROUPS = [
  {
    id: "build",
    categoryNumber: "01",
    categoryTitle: "Websites and Digital Products",
    headline: "Fast, accessible web products engineered to convert visitors into inquiries.",
    description:
      "We design and build clean corporate websites, interactive web applications, e-commerce stores, and cross-platform mobile apps with sub-second page loads and mobile responsiveness.",
    image: PEXELS_IMAGES.capabilityBuild,
    services: [
      {
        name: "Business & Corporate Websites",
        detail: "Next.js marketing websites with built-in search engine foundations, structured schema, and instant email alerts.",
        deliverables: [
          "Custom responsive mobile-first design",
          "Next.js App Router for sub-second page loads",
          "Built-in Google search SEO architecture",
          "Simple lead capture forms with email alerts",
        ],
      },
      {
        name: "Custom Web Applications & Portals",
        detail: "Interactive web applications, customer portals, and internal team dashboards with secure authentication and database tools.",
        deliverables: [
          "User authentication, roles & permissions",
          "Secure database architecture and API integrations",
          "Client-facing dashboards and workflows",
          "Automated business notifications",
        ],
      },
      {
        name: "E-Commerce Websites & Stores",
        detail: "High-performance online stores with quick product navigation, secure payment checkout, and server-side order telemetry.",
        deliverables: [
          "Fast-loading catalog and product pages",
          "Friction-free checkout workflows",
          "Order status alerts and email confirmations",
          "Server-side purchase tracking integrations",
        ],
      },
      {
        name: "Mobile Application Development",
        detail: "Smooth mobile apps for iOS and Android built on clean cross-platform frameworks with offline support and push alerts.",
        deliverables: [
          "Cross-platform iOS and Android builds",
          "Push notifications and background sync",
          "Secure API connections",
          "App Store & Google Play preparation",
        ],
      },
    ],
  },
  {
    id: "reach",
    categoryNumber: "02",
    categoryTitle: "Customer Acquisition",
    headline: "Targeted advertising campaigns that capture high-intent buyers.",
    description:
      "We build and manage search and social campaigns across Google Ads and Meta (Facebook & Instagram). We focus on qualified inquiries and purchases rather than vanity clicks.",
    image: PEXELS_IMAGES.capabilityReach,
    services: [
      {
        name: "Google Ads Management",
        detail: "Targeted Search, Display, and Shopping campaigns showing your services to customers actively searching to buy.",
        deliverables: [
          "High-intent keyword discovery & negative lists",
          "Persuasive ad copy and extensions",
          "Conversion-focused landing page testing",
          "Weekly bid adjustments and query audits",
        ],
      },
      {
        name: "Meta Ads Management (Facebook & Instagram)",
        detail: "Targeted social ad campaigns that build customer demand, test creative hooks, and generate consistent leads.",
        deliverables: [
          "Audience segmentation and interest targeting",
          "Ad creative direction and visual hook testing",
          "Lead-generation and dynamic catalog funnels",
          "Retargeting warm prospects without ad fatigue",
        ],
      },
    ],
  },
  {
    id: "measure",
    categoryNumber: "03",
    categoryTitle: "Analytics and Measurement",
    headline: "Server-side tracking that eliminates lost sales and ad-blocker gaps.",
    description:
      "Standard browser pixels miss up to 30% of sales data due to iOS privacy controls and ad blockers. We configure server-side telemetry so your ad data is accurate and never double-counted.",
    image: PEXELS_IMAGES.capabilityMeasure,
    services: [
      {
        name: "Analytics & Tracking Audit",
        detail: "Complete inspection of your GTM container, Google Analytics 4, and ad tags to locate missing events and tracking errors.",
        deliverables: [
          "Google Tag Manager container audit",
          "GA4 key events and purchase tracking setup",
          "Phone call and contact form event triggers",
          "Data privacy compliance inspection",
        ],
      },
      {
        name: "Server-Side Meta Conversions API (CAPI)",
        detail: "Direct server-to-server event dispatch with unique event IDs to deduplicate browser pixel and server signals.",
        deliverables: [
          "Direct server-side event transmission",
          "Automatic browser & server deduplication",
          "Higher Event Match Quality (EMQ) scores",
          "Accurate return-on-ad-spend (ROAS) reporting",
        ],
      },
    ],
  },
];

const SERVICES_FAQS = [
  {
    question: "Can we hire DizitalGrow for a single service?",
    answer:
      "Yes. Many clients hire us exclusively for web development, while others work with us solely for ad management or Meta CAPI tracking. You are never forced into an all-in-one package.",
  },
  {
    question: "How do project pricing and timelines work?",
    answer:
      "Websites typically take 2–4 weeks. Ad management and tracking setups are billed with fixed, transparent monthly management fees completely separate from your ad spend.",
  },
  {
    question: "Do you provide maintenance after a website is launched?",
    answer:
      "Yes. We offer ongoing maintenance covering security updates, performance monitoring, bug fixes, and feature additions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="container-cyber pt-16 pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// SERVICES & CAPABILITIES"}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Websites, Advertising, <br />
              <span className="text-[#D5FF40]">&amp; Verified Tracking.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Practical digital services grouped into three core disciplines. We build the digital foundation, reach the right buyers, and measure real outcomes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Service Groups */}
      <div className="space-y-24 pb-20">
        {SERVICE_GROUPS.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="border-t border-[rgba(213,255,64,0.15)] pt-16 scroll-mt-20"
          >
            <div className="container-cyber">
              {/* Category Header with Image */}
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-14 items-center mb-14">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px]">
                      CATEGORY {group.categoryNumber}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0]">
                      {group.categoryTitle}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
                    {group.headline}
                  </h2>

                  <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010]">
                    <Image
                      src={group.image.src}
                      alt={group.image.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Individual Services in this Category */}
              <div className="grid gap-6 md:grid-cols-2">
                {group.services.map((service) => (
                  <MotionReveal
                    key={service.name}
                    className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                        {service.detail}
                      </p>

                      <div className="mt-5 pt-4 border-t border-[rgba(213,255,64,0.12)]">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#D5FF40] font-semibold block mb-2">
                          WHAT WE DELIVER
                        </span>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((del) => (
                            <li key={del} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                              <Check className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#B0B0B0]">
                        Fixed scope &amp; timeline
                      </span>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.name)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
                      >
                        <span>Discuss Service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="border-t border-[rgba(213,255,64,0.15)] pt-12 pb-16">
        <div className="container-cyber">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// COMMON QUESTIONS"}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
              Service Delivery &amp; Working Terms
            </h2>
          </div>
          <FAQAccordion items={SERVICES_FAQS} showCTA={false} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-16 bg-[#080808]">
        <div className="container-cyber">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Ready to discuss your requirements?
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0]">
              Share your goals, website challenges, or ad questions. We reply with technical scoping and clear recommendations within 24 hours.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
