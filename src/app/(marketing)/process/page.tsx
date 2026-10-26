import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, FileCheck2, Code2, TestTube2, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Our 5-Stage Process — Discovery to Launch | DizitalGrow",
  description:
    "Explore how DizitalGrow delivers digital projects through five clear, predictable stages: Discovery, Strategy, Build, Testing, and Launch.",
  alternates: {
    canonical: "https://dizitalgrow.in/process",
  },
  openGraph: {
    title: "Our 5-Stage Process — DizitalGrow",
    description:
      "Simple, transparent project delivery from discovery and architecture to launch and ongoing optimization.",
    url: "https://dizitalgrow.in/process",
    siteName: "DizitalGrow",
    type: "website",
  },
};

const DETAILED_STAGES = [
  {
    step: "01",
    name: "Discovery & Audit",
    icon: Compass,
    headline: "Understanding the goal before writing a single line of code.",
    description:
      "We begin by reviewing your business goals, target audience, existing website performance, and ad accounts. We identify what works, what creates friction, and what technical bottlenecks must be solved.",
    deliverables: [
      "Technical website and speed audit",
      "Ad account and conversion tracking review",
      "Audience and high-intent search query audit",
      "Summary of existing conversion drop-off points",
    ],
  },
  {
    step: "02",
    name: "Strategy & Scope",
    icon: FileCheck2,
    headline: "A clear, fixed written plan with zero hidden surprises.",
    description:
      "We define the technical architecture, page layouts, campaign channels, and measurable milestones in a straightforward written scope. Pricing and timelines are agreed upon upfront so both sides have 100% clarity.",
    deliverables: [
      "Itemized technical deliverables and feature specifications",
      "Fixed project timeline with agreed review milestones",
      "Separation between management fees and ad spend",
      "Clear content and asset requirements checklist",
    ],
  },
  {
    step: "03",
    name: "Design & Build",
    icon: Code2,
    headline: "Fast, accessible development with conversion-focused UX.",
    description:
      "We build your website using modern Next.js architecture, configure targeted Google & Meta ad campaigns, or engineer server-side Meta CAPI pipelines. Every element is tested for phone responsiveness.",
    deliverables: [
      "Clean, modular Next.js App Router code",
      "Ad creative hooks, copy, and audience targeting",
      "Responsive layout testing on phones, tablets, and desktops",
      "Direct developer access for questions during development",
    ],
  },
  {
    step: "04",
    name: "Testing & Validation",
    icon: TestTube2,
    headline: "Rigorous quality checks before anything goes live.",
    description:
      "We test all form submissions, checkout flows, mobile layouts, and server event pipelines in a live staging environment. We verify that Meta CAPI event IDs match browser pixel IDs with zero duplicate data.",
    deliverables: [
      "End-to-end form and email alert validation",
      "Cross-browser and cross-device display checks",
      "Meta Events Manager deduplication verification",
      "Google Analytics 4 event trigger confirmation",
    ],
  },
  {
    step: "05",
    name: "Launch & Support",
    icon: Rocket,
    headline: "Smooth deployment followed by active performance monitoring.",
    description:
      "We deploy your project to high-speed global infrastructure with zero downtime. Once live, we review incoming inquiries, optimize ad bidding, and provide ongoing technical care.",
    deliverables: [
      "Zero-downtime production deployment",
      "Live ad campaign activation and query monitoring",
      "Post-launch telemetry and conversion checkup",
      "Ongoing technical maintenance and updates",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="container-cyber pt-16 pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// OUR 5-STAGE PROCESS"}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Predictable Delivery. <br />
              <span className="text-[#D5FF40]">Five Clear Stages.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Every website, application, and advertising setup follows a disciplined sequence. You always know what is being built, what stage we are in, and when it will be delivered.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Visual Timeline */}
      <section className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.12)] pt-16">
        <div className="space-y-16">
          {DETAILED_STAGES.map((stage, idx) => {
            const Icon = stage.icon;

            return (
              <MotionReveal
                key={stage.step}
                delay={idx * 0.08}
                className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start border-b border-[rgba(213,255,64,0.12)] pb-16"
              >
                {/* Step Marker & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#050505] bg-[#D5FF40] px-3 py-1 rounded-[2px]">
                      STAGE {stage.step}
                    </span>
                    <span className="font-mono text-xs text-[#B0B0B0]">
                      0{idx + 1} of 05
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-2xl font-bold uppercase text-white">
                      {stage.name}
                    </h2>
                  </div>
                </div>

                {/* Explanation & Deliverables */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-display text-lg font-bold uppercase text-white leading-snug">
                    {stage.headline}
                  </h3>
                  <p className="text-sm text-[#B0B0B0] leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  <div className="pt-3 border-t border-[rgba(213,255,64,0.12)]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold block mb-2">
                      STAGE DELIVERABLES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B0B0B0]">
                      {stage.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                          <span className="leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      {/* Working Commitments */}
      <section className="container-cyber pb-20">
        <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-8 sm:p-10 rounded-[2px]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            {"// WORKING PRINCIPLES"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1 mb-6">
            What You Can Depend On
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                Honest Pricing
              </h3>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                Fixed written proposals, agreed milestone dates, and total separation between our management fees and your direct advertising spend.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                Clean Engineering
              </h3>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                Fast Next.js code, mobile responsiveness on all screens, semantic markup, and reliable server-side telemetry.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base font-bold uppercase text-white">
                Direct Communication
              </h3>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                You communicate directly with the developers and marketers working on your project, with quick turnarounds and no confusing jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-16 bg-[#080808]">
        <div className="container-cyber">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Ready to start at Stage 01?
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0]">
              Tell us what you are building or looking to improve. We review your goals and provide an honest assessment within one business day.
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
