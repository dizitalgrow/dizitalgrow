import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DizitalGrow",
  description: "DizitalGrow Privacy Policy. How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <article className="container-cyber pt-16 pb-24 max-w-3xl">
        <div className="border-b border-[rgba(213,255,64,0.15)] pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#D5FF40]">
            // LEGAL
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-5xl font-extrabold uppercase text-white">
            PRIVACY POLICY
          </h1>
          <p className="mt-2 font-mono text-xs text-[#B0B0B0]">
            Last updated: October 2026
          </p>
        </div>

        <div className="mt-10 space-y-8 text-[#B0B0B0] leading-relaxed text-sm sm:text-base font-normal">
          <p>
            DizitalGrow (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) values your privacy. This Privacy Policy explains in simple terms how we collect, use, and safeguard your data when you visit our website or work with us.
          </p>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              1. Information We Collect
            </h2>
            <p>We only collect information necessary to understand your project and communicate with you:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#D5FF40]">
              <li>Name and company name</li>
              <li>Contact details (email address and phone number)</li>
              <li>Project details, requirements, and budget preferences you share via our forms</li>
              <li>Basic website usage information (such as browser type and pages viewed)</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              2. How We Use Information
            </h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-[#D5FF40]">
              <li>Respond to your inquiries and consultation requests</li>
              <li>Provide website development, app development, and advertising services</li>
              <li>Send project proposals, roadmaps, and progress updates</li>
              <li>Improve website performance and user experience</li>
            </ul>
            <p className="font-bold text-white bg-[#101010] p-3.5 border border-[rgba(213,255,64,0.15)] rounded-[2px]">
              We will never sell, rent, or share your personal contact details with third-party marketers.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              3. Cookies &amp; Analytics
            </h2>
            <p>
              We use standard cookies and analytics tools (like Google Analytics) to understand which pages visitors find helpful and ensure the site runs fast. You can disable cookies at any time through your browser settings.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              4. Data Security
            </h2>
            <p>
              We take data protection seriously. All communications on our website use secure HTTPS encryption (SSL), and client project information is stored in password-protected, restricted systems.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted service providers (such as Google, Meta, and email delivery platforms) to help run our business operations. These providers have their own strict privacy policies and only process data necessary for their specific service.
            </p>
          </section>

          <section className="space-y-3 border-t border-[rgba(213,255,64,0.15)] pt-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              6. Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled, please email us directly at:{" "}
              <a
                href="mailto:contact@dizitalgrow.in"
                className="text-[#D5FF40] hover:underline underline-offset-4 font-mono font-bold"
              >
                contact@dizitalgrow.in
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
