import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  RefreshCw,
  Cpu,
  ArrowLeft,
  FileText,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Editorial Policy & Standards | DizitalGrow",
  description:
    "Our editorial standards: rigorous research, multi-stage peer review, verified data citations, correction protocol, and human-verified AI assistance.",
  alternates: {
    canonical: "https://dizitalgrow.in/blog/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy & Standards | DizitalGrow",
    description:
      "Our editorial standards: rigorous research, multi-stage peer review, verified data citations, correction protocol, and human-verified AI assistance.",
    url: "https://dizitalgrow.in/blog/editorial-policy",
    type: "website",
    siteName: "DizitalGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy & Standards | DizitalGrow",
    description:
      "Our editorial standards: rigorous research, multi-stage peer review, verified data citations, correction protocol, and human-verified AI assistance.",
  },
};

export default function EditorialPolicyPage() {
  const policies = [
    {
      icon: Search,
      title: "1. Primary Source Research & Citations",
      description:
        "Every publication at DizitalGrow begins with primary developer documentation (Meta for Developers, Google Search Central, Next.js docs, W3C standards) or audited client campaign data. We prohibit unverified third-party claims, fabricated metrics, or recycled superficial blog filler.",
    },
    {
      icon: ShieldCheck,
      title: "2. Technical Review & Editorial Fact-Checking",
      description:
        "Articles are authored and rigorously vetted by active digital practitioners — developers who write code daily and media buyers managing live advertising spend. Before publication, code blocks are tested in staging environments and telemetry architectures are verified against active API specifications.",
    },
    {
      icon: Cpu,
      title: "3. AI Assistance & Mandatory Human Oversight",
      description:
        "We utilize specialized LLM intelligence tools for preliminary content structuring, formatting code snippets, and automated SEO compliance checks. However, 100% of published material undergoes final review, fact-checking, and editorial approval by experienced human engineers. We do not mass-produce autonomous synthetic spam.",
    },
    {
      icon: RefreshCw,
      title: "4. Scheduled Revisions & Content Freshness",
      description:
        "Digital marketing APIs, advertising policies, and web frameworks evolve rapidly. Our editorial team reviews articles quarterly to verify ongoing accuracy. When an article is revised, the updated timestamp is prominently displayed alongside a summary of architectural changes.",
    },
    {
      icon: FileText,
      title: "5. Corrections & Transparency Protocol",
      description:
        "If a factual or technical error is identified in any published article, our team swiftly investigates and amends the content. Minor clarifications are updated inline, while substantial revisions are flagged with an explicit correction note.",
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container-cyber max-w-4xl space-y-10">
        <Breadcrumb
          items={[
            { name: "Blog", href: "/blog" },
            { name: "Editorial Policy" },
          ]}
        />

        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] px-3 py-1 rounded-[2px]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
              EDITORIAL INTEGRITY // STANDARDS
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            How We Research, Author, and{" "}
            <span className="text-[#D5FF40]">Verify Content.</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
            At DizitalGrow, our editorial mission is to provide developers, founders, and marketing leaders with verified, actionable playbooks. Here is the framework guiding our work.
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-6 pt-4">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <section
                key={policy.title}
                className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8 rounded-[2px] space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.25)] text-[#D5FF40]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white m-0">
                    {policy.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal pl-9">
                  {policy.description}
                </p>
              </section>
            );
          })}
        </div>

        {/* Reader Feedback & Inquiries Box */}
        <div className="border border-[rgba(213,255,64,0.25)] bg-[#101010] p-8 rounded-[2px] space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D5FF40]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40]">
              EDITORIAL FEEDBACK & CORRECTIONS
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase">
            Notice an inaccuracy or need technical clarification?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
            We welcome direct feedback from engineers and marketing professionals. If you identify a broken link, outdated code dependency, or factual error, please let us know.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-5 py-2.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
            >
              Contact Editorial Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
