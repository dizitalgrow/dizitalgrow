import React from "react";
import type { Metadata } from "next";
import { Reveal } from "@/components/ui/motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | DizitalGrow",
  description:
    "Read the terms, project agreements, and conditions governing digital services and website usage with DizitalGrow.",
  alternates: {
    canonical: "https://dizitalgrow.in/terms",
  },
  openGraph: {
    title: "Terms of Service | DizitalGrow",
    description: "Terms and conditions governing DizitalGrow digital services.",
    url: "https://dizitalgrow.in/terms",
    siteName: "DizitalGrow",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <article className="container-cyber pt-16 pb-24 max-w-3xl">
        <Reveal>
          <Breadcrumb items={[{ name: "Terms of Service" }]} />

          <div className="border-b border-[rgba(213,255,64,0.15)] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
              LEGAL NOTICE
            </span>
            <h1 className="font-display mt-2 text-3xl sm:text-5xl font-extrabold uppercase text-[var(--color-text-primary)]">
              Terms of Service
            </h1>
            <p className="mt-2 font-mono text-xs text-[var(--color-text-secondary)]">
              Last updated: October 2026 · Indian Jurisdiction
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base font-normal">
            <p>
              Welcome to DizitalGrow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), accessible at https://dizitalgrow.in. By accessing our website, utilizing our free browser tools, or engaging us for digital development, advertising management, or tracking services, you agree to be bound by these Terms of Service.
            </p>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                1. Scope of Services
              </h2>
              <p>
                DizitalGrow provides website development, custom web applications, cross-platform mobile apps, Meta and Google advertising management, search engine optimization (SEO), conversion tracking implementation, and server-side Meta Conversions API (CAPI) telemetry.
              </p>
              <p>
                Our free browser-based tools are provided free of charge for informational, educational, and convenience purposes without requiring user accounts or registration.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                2. Project Agreements & Scope Management
              </h2>
              <p>
                All bespoke client engagements commence only upon mutual written approval of a detailed project proposal, outlining specific deliverables, milestone timelines, costs, and project exclusions. Any subsequent requests for additional features, design iterations exceeding the agreed revision limit, or out-of-scope work will be estimated and agreed upon in writing before execution.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                3. Fees, Ad Spend & Invoicing
              </h2>
              <p>
                Professional development and management fees are billed as specified in each project contract or invoice. Direct advertising spend (payable to Google, Meta, or other ad networks) is maintained completely separate from DizitalGrow agency management fees and is billed directly to the client&apos;s own payment methods within their respective ad accounts.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                4. Client Responsibilities & Content Approvals
              </h2>
              <p>
                Clients agree to provide accurate business information, text copy, brand assets, necessary account credentials, and timely feedback required to adhere to project timelines. The client warrants that all text, imagery, and intellectual property supplied to DizitalGrow are either owned by the client or used with lawful permission.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                5. Intellectual Property Rights
              </h2>
              <p>
                Upon receipt of full payment for completed milestones, the client owns all custom website code, visual design elements, and brand deliverables created specifically for their project. DizitalGrow retains ownership of pre-existing proprietary boilerplates, developer tools, reusable components, and the right to showcase the completed work in our portfolio.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                6. Third-Party Services & Warranties
              </h2>
              <p>
                While we adhere to industry best practices in software architecture and advertising configuration, we do not control third-party platforms (including Meta, Google, Vercel, Sanity, or domain registrars). We do not make false guarantees regarding specific search engine rankings, sales volumes, or advertising algorithm performance.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                7. Limitation of Liability & Termination
              </h2>
              <p>
                In no event shall DizitalGrow be liable for indirect, incidental, or consequential damages resulting from website downtime, algorithmic changes by third-party search engines or ad networks, or loss of revenue. Either party may terminate an active service agreement upon written notice subject to settlement for all work completed to date.
              </p>
            </section>

            <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] uppercase">
                8. Contact Information
              </h2>
              <p>
                For questions regarding these Terms of Service or project contracts, contact us at:{" "}
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
