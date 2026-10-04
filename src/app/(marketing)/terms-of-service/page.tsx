import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DizitalGrow",
  description: "DizitalGrow Terms of Service and client agreement.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <article className="container-cyber pt-16 pb-24 max-w-3xl">
        <div className="border-b border-[rgba(213,255,64,0.15)] pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
            // LEGAL
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-5xl font-extrabold uppercase text-white">
            TERMS OF SERVICE
          </h1>
          <p className="mt-2 font-mono text-xs text-[#B0B0B0]">
            Last updated: October 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-[#B0B0B0] leading-relaxed text-sm sm:text-base font-normal">
          <p>
            Welcome to DizitalGrow. By using our website or hiring us for services, you agree to the following simple terms.
          </p>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              1. Services Provided
            </h2>
            <p>
              DizitalGrow provides website development, web applications, mobile applications, advertising campaign management (Meta and Google Ads), and conversion tracking setups.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              2. Project Agreements
            </h2>
            <p>
              Before starting any client work, we agree on a written scope of work, timeline, and deliverables so both sides have 100% clarity. Any scope changes requested later will be estimated and agreed upon in writing.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              3. Payments
            </h2>
            <p>
              Project fees, payment schedules, and milestones are outlined in your individual project proposal or invoice. Work begins once the agreed initial deposit is received.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              4. Intellectual Property
            </h2>
            <p>
              Upon full payment for completed work, you own all custom designs, website code, and assets created specifically for your project. DizitalGrow retains the right to display the completed work in our portfolio.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              5. Limitation of Liability
            </h2>
            <p>
              We strive to deliver the highest quality software and advertising campaigns. While we work diligently to optimize performance, advertising platform algorithms, market demand, and third-party hosting providers are outside our direct control.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              6. Termination
            </h2>
            <p>
              Either party may end a project agreement with written notice if the other party breaches the agreed terms. Payment is due for all work completed up to the date of termination.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              7. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please reach out to us at:{" "}
              <a
                href="mailto:hello@dizitalgrow.in"
                className="text-[#D5FF40] hover:underline underline-offset-4 font-mono font-bold"
              >
                hello@dizitalgrow.in
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
