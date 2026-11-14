import React from "react";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | DizitalGrow",
  description:
    "Learn how DizitalGrow collects, utilizes, safeguards, and handles your data and privacy across our website, services, and free tools.",
  alternates: {
    canonical: "https://dizitalgrow.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | DizitalGrow",
    description: "DizitalGrow Privacy Policy. Information handling, cookies, and data protection.",
    url: "https://dizitalgrow.in/privacy-policy",
    siteName: "DizitalGrow",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | DizitalGrow",
    description:
      "Learn how DizitalGrow collects, utilizes, safeguards, and handles your data and privacy across our website, services, and free tools.",
    url: "https://dizitalgrow.in/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "DizitalGrow",
      url: "https://dizitalgrow.in",
    },
  };

  return (
    <div className="w-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <article className="container-cyber pt-16 pb-24 max-w-3xl">
        <Reveal>
          <Breadcrumb items={[{ name: "Privacy Policy" }]} />

          <div className="border-b border-[rgba(213,255,64,0.15)] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
              PRIVACY & DATA PROTECTION
            </span>
            <h1 className="font-display mt-2 text-3xl sm:text-5xl font-extrabold uppercase text-[var(--color-text-primary)]">
              Privacy Policy
            </h1>
            <p className="mt-2 font-mono text-xs text-[var(--color-text-secondary)]">
              Last updated: October 2026 · Transparent Practices
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base font-normal">
            <p>
              DizitalGrow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating via https://dizitalgrow.in, respects your personal privacy. This Privacy Policy details the types of information we collect, how it is handled, our cookie practices, and how your data is protected.
            </p>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                1. Information Collected
              </h2>
              <p>We collect information only when explicitly provided by you or automatically through standard web technologies:</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#D5FF40]">
                <li><strong>Contact Inquiries:</strong> Full name, email address, phone or WhatsApp number, business/project name, service requirements, budget preferences, and project descriptions submitted via our consultation forms.</li>
                <li><strong>Browser-Based Free Tools:</strong> Our free calculators, builders, and generators execute 100% locally in your client web browser. We do not store, capture, transmit, or retain your tool inputs, invoices, calculations, or generated text on external database servers.</li>
                <li><strong>Technical Usage Data:</strong> Anonymized telemetry such as browser version, operating system, pages visited, time spent, and referral sources to maintain uptime and speed.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                2. How We Use Collected Data
              </h2>
              <p>The information we collect is strictly used to:</p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#D5FF40]">
                <li>Evaluate project requirements and deliver personalized technical proposals and estimates.</li>
                <li>Execute contracted website development, software engineering, advertising campaigns, and server-side telemetry setup.</li>
                <li>Coordinate directly with you via email or WhatsApp regarding milestone deliverables.</li>
                <li>Audit website performance, prevent malicious bot attacks, and protect infrastructure security.</li>
              </ul>
              <p className="font-bold text-[var(--color-text-primary)] bg-[var(--color-surface)] p-3.5 border border-[rgba(213,255,64,0.15)] rounded-[2px]">
                We do not sell, rent, monetize, or trade your contact details with external data brokers or advertisers.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                3. Cookies & Analytics Integration
              </h2>
              <p>
                We utilize minimal, privacy-conscious performance cookies and tracking tags (such as Google Analytics 4) to monitor website health and understand content engagement. You may set your browser preferences to reject cookies or delete them at any time with zero impact on our free tools.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                4. Third-Party Services
              </h2>
              <p>
                To provide high-reliability services, we collaborate with reputable cloud service providers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 marker:text-[#D5FF40]">
                <li><strong>Hosting & Edge Delivery:</strong> Vercel for fast, encrypted SSL content delivery.</li>
                <li><strong>Content Management:</strong> Sanity.io for serving published blog articles and insights.</li>
                <li><strong>Email Routing:</strong> EmailJS and encrypted email servers for delivering customer inquiries.</li>
              </ul>
              <p>
                Each provider maintains independent security standards and complies with data processing regulations.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                5. Data Retention & User Rights
              </h2>
              <p>
                Project consultation submissions are retained only as long as necessary to facilitate communications and maintain business records. You retain the right to request access to your contact data, request corrections, or request deletion of your records by emailing us.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                6. Contact Information
              </h2>
              <p>
                For questions concerning our privacy practices, data protection, or to request record removal, please contact:{" "}
                <a
                  href="mailto:contact@dizitalgrow.in"
                  className="text-[#D5FF40] hover:underline underline-offset-4 font-mono font-bold"
                >
                  contact@dizitalgrow.in
                </a>
              </p>
            </section>
          </div>
        </Reveal>
      </article>
    </div>
  );
}
