import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Globe, Server, Database, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MotionReveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Server-Side Meta Conversions API (CAPI) Setup & Audit | DizitalGrow",
  description:
    "Learn how Meta Conversions API (CAPI) works alongside browser pixels with event deduplication to provide accurate conversion measurement and protected ad data.",
  alternates: {
    canonical: "https://dizitalgrow.in/meta-capi",
  },
  openGraph: {
    title: "Server-Side Meta Conversions API (CAPI) Setup — DizitalGrow",
    description:
      "Visual explanation of browser pixel and server event deduplication for accurate advertising measurement.",
    url: "https://dizitalgrow.in/meta-capi",
    siteName: "DizitalGrow",
    type: "website",
  },
};

export default function MetaCapiPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <section className="container-cyber pt-16 pb-12">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
                {"// SERVER-SIDE MEASUREMENT"}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Meta Conversions API. <br />
              <span className="text-[#D5FF40]">Accurate Ad Measurement.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
              Standard browser pixels can miss up to 30% of sales and lead events due to iOS privacy controls, network timeouts, and browser ad blockers. Meta CAPI sends verified events directly from your server.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Visual Telemetry Flow Diagram */}
      <section className="container-cyber pb-20">
        <MotionReveal>
          <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 rounded-[2px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[rgba(213,255,64,0.12)]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40]">
                  SYSTEM ARCHITECTURE
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                  Dual-Channel Telemetry &amp; Deduplication
                </h2>
              </div>
              <span className="font-mono text-xs text-[#B0B0B0] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-3 py-1 rounded-[2px] shrink-0">
                Event ID Matching
              </span>
            </div>

            {/* Accessible HTML/CSS Flowchart */}
            <div className="mt-10 grid gap-6 md:grid-cols-3 items-center">
              {/* Channel 1: Client & Server Sources */}
              <div className="space-y-4">
                {/* Browser Pixel Card */}
                <div className="border border-[rgba(213,255,64,0.15)] bg-[#121212] p-4 rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold">
                    <Globe className="h-4 w-4" />
                    <span>CHANNEL A: BROWSER PIXEL</span>
                  </div>
                  <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed">
                    Client-side JavaScript captures page views, button clicks, and cart actions in visitor browsers.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-amber-400">
                    <span className="h-1 w-1 rounded-full bg-amber-400" />
                    <span>May be blocked by ad blockers or ITP</span>
                  </div>
                </div>

                {/* Server CAPI Card */}
                <div className="border border-[rgba(213,255,64,0.25)] bg-[#121212] p-4 rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold">
                    <Server className="h-4 w-4" />
                    <span>CHANNEL B: SERVER CAPI</span>
                  </div>
                  <p className="mt-2 text-xs text-[#B0B0B0] leading-relaxed">
                    Backend sends validated leads, checkout completions, and webhook events directly to Meta via REST API.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-[#D5FF40]">
                    <span className="h-1 w-1 rounded-full bg-[#D5FF40]" />
                    <span>100% immune to browser ad blockers</span>
                  </div>
                </div>
              </div>

              {/* Deduplication Engine */}
              <div className="border-2 border-[#D5FF40]/40 bg-[#141414] p-6 rounded-[2px] text-center space-y-3 relative">
                <div className="flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#D5FF40] text-[#050505]">
                    <Cpu className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display text-base font-bold uppercase text-white">
                  Event Deduplication
                </h3>
                <p className="text-xs text-[#B0B0B0] leading-relaxed">
                  Both channels transmit an identical unique <code className="text-[#D5FF40] font-mono">event_id</code>. Meta matches incoming packets and counts each real conversion exactly once.
                </p>
                <div className="pt-2 font-mono text-[11px] text-[#D5FF40] font-bold">
                  Zero Double-Counting
                </div>
              </div>

              {/* Verified Result */}
              <div className="border border-[rgba(213,255,64,0.25)] bg-[#121212] p-6 rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold">
                  <Database className="h-4 w-4" />
                  <span>OUTPUT ATTRIBUTION</span>
                </div>
                <h3 className="font-display text-base font-bold uppercase text-white">
                  Reliable ROAS Data
                </h3>
                <ul className="space-y-2 text-xs text-[#B0B0B0]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                    <span>Verified purchase &amp; lead matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                    <span>Higher Event Match Quality scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                    <span>Optimized Meta algorithmic bidding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Core Explanations */}
      <section className="container-cyber pb-20 border-t border-[rgba(213,255,64,0.12)] pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Column 1 */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                01. WHAT IS META CAPI?
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                Direct Server-to-Server Connection
              </h3>
              <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">
                The Meta Conversions API (CAPI) allows web servers to send key business actions (inquiries, signups, purchases) directly to Meta&apos;s ad servers. Instead of relying purely on a browser script executing in third-party environments, data is sent directly over a secure server connection.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                02. WHY EVENT DEDUPLICATION MATTERS
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                Protecting Metric Integrity
              </h3>
              <p className="mt-2 text-sm text-[#B0B0B0] leading-relaxed">
                If you run both a browser pixel and a server API without deduplication, conversions may be reported twice, artificially inflating your reported sales and confusing Meta&apos;s bid optimization. Deduplication uses unique Event IDs to ensure each transaction is recorded once.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
                03. TECHNICAL PREREQUISITES
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                What We Need to Get Started
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#B0B0B0]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                  <span>Meta Business Manager admin or developer access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                  <span>Website repository or tag manager container access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                  <span>Verified system user access token generated in Meta Events Manager</span>
                </li>
              </ul>
            </div>

            {/* Honest Boundaries */}
            <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-5 rounded-[2px] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                <ShieldAlert className="h-4 w-4" />
                <span>Honest Expectations</span>
              </div>
              <p className="text-xs text-[#B0B0B0] leading-relaxed">
                Meta CAPI restores accurate event transmission, but it does not magically fix a weak product offer, guarantee profitable ad attribution, or substitute for compelling advertising creative. It provides honest data so you can make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="border-t border-[rgba(213,255,64,0.15)] py-16 bg-[#080808]">
        <div className="container-cyber">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// AUDIT & IMPLEMENTATION"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Request a Tracking &amp; CAPI Audit
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
              We inspect your current Meta pixel, server architecture, and Google Analytics 4 tags to verify event match scores and identify missing conversions.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?service=Meta%20CAPI%20Audit"
                className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors"
              >
                <span>Request CAPI Audit</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services#measure"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#D5FF40] transition-colors"
              >
                <span>Back to Services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
