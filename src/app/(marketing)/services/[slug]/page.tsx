import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  AlertCircle,
  HelpCircle,
  PhoneCall,
  Check,
} from "lucide-react";
import { SERVICE_DETAIL_PAGES } from "@/constants/site-data";
import { VERIFIED_WHATSAPP_PHONE, PRIMARY_CTA_LABEL } from "@/constants/navigation";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Reveal, MotionReveal } from "@/components/ui/motion";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAIL_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAIL_PAGES[slug];

  if (!service) {
    return {
      title: "Service Not Found | DizitalGrow",
    };
  }

  const title = `${service.title} — ${service.tagline} | DizitalGrow`;
  const description = service.heroDescription;
  const canonical = `https://dizitalgrow.in/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "DizitalGrow",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAIL_PAGES[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.heroDescription,
    provider: {
      "@type": "Organization",
      name: "DizitalGrow",
      url: "https://dizitalgrow.in",
    },
    areaServed: "IN",
    serviceType: service.category,
    url: `https://dizitalgrow.in/services/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dizitalgrow.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://dizitalgrow.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://dizitalgrow.in/services/${slug}`,
      },
    ],
  };

  return (
    <div className="w-full bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Hero Section */}
      <section className="container-cyber pt-14 pb-16 border-b border-[rgba(213,255,64,0.12)]">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#B0B0B0] mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <span>/</span>
          <span className="text-[#D5FF40] font-bold uppercase">{service.title}</span>
        </div>

        <Reveal>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {`${service.category} SOLUTION`}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href={`/contact?service=${slug}`}
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
              >
                <span>{PRIMARY_CTA_LABEL}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href={formatWhatsAppUrl(
                  VERIFIED_WHATSAPP_PHONE,
                  `Hi DizitalGrow, I would like to discuss ${service.title}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-[#D5FF40]" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Problems This Service Solves */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              THE CHALLENGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
              Common Bottlenecks We Eliminate
            </h2>
            <p className="text-sm text-[#B0B0B0] leading-relaxed">
              Most businesses lose momentum not because their core service is poor, but because digital friction prevents prospects from completing inquiries.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {service.problemsSolved.map((problem, idx) => (
              <MotionReveal
                key={idx}
                delay={idx * 0.05}
                className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-4 sm:p-5 rounded-[2px] flex items-start gap-3.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] bg-red-950/40 border border-red-500/30 text-red-400 mt-0.5">
                  <AlertCircle className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {problem}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes & Benefits */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            MEASURABLE OUTCOMES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mt-1">
            What You Can Expect
          </h2>
          <p className="text-sm text-[#B0B0B0] mt-2">
            Clear technical execution focused on customer action and commercial performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {service.expectedOutcomes.map((outcome, idx) => (
            <MotionReveal
              key={idx}
              delay={idx * 0.05}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3"
            >
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#D5FF40] stroke-[3]" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Deliverable {idx + 1}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                {outcome}
              </p>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Who Needs This Service */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            AUDIENCE FIT
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mt-1">
            Who This Solution Is For
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.whoNeedsThis.map((item, idx) => (
            <MotionReveal
              key={idx}
              delay={idx * 0.06}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 rounded-[2px] inline-block mb-3">
                  0{idx + 1} · PROFILE
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {item.audience}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(213,255,64,0.1)] text-xs font-mono text-[#D5FF40]">
                <span>Tailored Pathway →</span>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Our 4-Step Approach */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            OUR APPROACH
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white mt-1">
            How We Execute This Service
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.ourApproach.map((step) => (
            <div
              key={step.step}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.25)] px-2.5 py-0.5 rounded-[2px] inline-block">
                STEP {step.step}
              </span>
              <h3 className="font-display text-base font-bold uppercase text-white">
                {step.title}
              </h3>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Capabilities Specs */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            ENGINEERING SPECIFICATIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
            Technical Capabilities
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.technicalCapabilities.map((spec, idx) => (
            <div
              key={idx}
              className="border border-[rgba(213,255,64,0.12)] bg-[#0A0A0A] px-4 py-3 rounded-[2px] flex items-center gap-2.5 text-xs font-mono text-[#B0B0B0]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] shrink-0" />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)] bg-[#070707]">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            CONNECTED SOLUTIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
            Services That Complement This
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.relatedServices.map((rel) => (
            <Link
              key={rel.href}
              href={rel.href}
              className="group border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] block hover:border-[#D5FF40] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-[#D5FF40] transition-colors">
                  {rel.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-[#D5FF40] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed">
                {rel.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Service Specific FAQs */}
      <section className="container-cyber py-16 md:py-20 border-b border-[rgba(213,255,64,0.12)]">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            SERVICE FAQS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1">
            Questions About {service.title}
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {service.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-2"
            >
              <h3 className="font-display text-base font-bold text-white uppercase flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[#D5FF40] shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="container-cyber py-20 bg-[#050505]">
        <div className="border border-[rgba(213,255,64,0.22)] bg-[#0A0A0A] p-8 sm:p-12 lg:p-16 rounded-[2px] max-w-4xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            START YOUR PROJECT
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
            Ready to Move Forward With <br />
            <span className="text-[#D5FF40]">{service.title}?</span>
          </h2>

          <p className="text-base text-[#B0B0B0] max-w-xl mx-auto leading-relaxed">
            Tell us about your requirements, existing bottlenecks, or growth goals. We will respond with honest recommendations and clear scopes within 24 hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?service=${slug}`}
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              <span>Discuss {service.title}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href={formatWhatsAppUrl(
                VERIFIED_WHATSAPP_PHONE,
                `Hi DizitalGrow, I would like to discuss ${service.title}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] text-white px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#D5FF40]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
