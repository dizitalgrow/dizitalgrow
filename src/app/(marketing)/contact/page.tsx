import React from "react";
import type { Metadata } from "next";
import {
  ContactForm,
  ContactMethods,
  WhatHappensNext,
} from "@/features/contact/components";

export const metadata: Metadata = {
  title: "Contact Us — Tell Us What You Want to Grow | Dizital Grow",
  description:
    "Tell us about your business, current digital challenge, and what you want to achieve. We respond with practical advice and realistic next steps within one business day.",
  alternates: {
    canonical: "https://dizitalgrow.in/contact",
  },
  openGraph: {
    title: "Tell Us What You Want to Grow — Contact Dizital Grow",
    description:
      "Share your business challenges and growth goals. Honest advice, clear recommendations, and no high-pressure sales.",
    url: "https://dizitalgrow.in/contact",
    siteName: "Dizital Grow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dizital Grow",
    description:
      "Practical digital growth advice for small businesses, startups, and creators.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Dizital Grow",
    url: "https://dizitalgrow.in/contact",
    description:
      "Tell us what you want to grow. Share your business, current challenges, and goals for practical digital advice.",
    mainEntity: {
      "@type": "Organization",
      name: "Dizital Grow",
      email: "contact@dizitalgrow.in",
      url: "https://dizitalgrow.in",
    },
  };

  return (
    <div className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Header Section */}
      <section className="container-cyber pt-16 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
              {"// GET IN TOUCH"}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Tell us what you <br />
            <span className="text-[#D5FF40]">want to grow.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed font-normal">
            Share your business, your current challenges, and what you want to achieve online. We&apos;ll review your setup and discuss practical next steps with zero sales pressure.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Direct Info */}
      <section className="container-cyber pb-24 border-t border-[rgba(213,255,64,0.12)] pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <ContactMethods />
            <WhatHappensNext />
          </div>
        </div>
      </section>
    </div>
  );
}
