"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import { InstagramIcon } from "@/components/ui/Icons";
import {
  FOOTER_NAV_LINKS,
  FOOTER_LEGAL_LINKS,
  VERIFIED_EMAIL,
} from "@/constants/navigation";
import { useSiteSettings } from "@/hooks/use-sanity-queries";

export function Footer() {
  const { data: siteSettings } = useSiteSettings();

  const footerDescription =
    siteSettings?.footerDescription ||
    "A digital growth platform helping small businesses, startups, creators, and teams build an effective online presence and make better marketing decisions.";

  const contactEmail = siteSettings?.footerContactEmail || VERIFIED_EMAIL;
  const ctaHeading = siteSettings?.footerCtaHeading || "Get Started";
  const ctaLabel = siteSettings?.footerCtaButtonLabel || "Get Growth Advice";
  const ctaUrl = siteSettings?.footerCtaButtonUrl || "/contact";
  const copyright =
    siteSettings?.copyrightText ||
    `© ${new Date().getFullYear()} Dizital Grow. Digital growth made practical.`;

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white pt-14 pb-12 border-t border-[rgba(213,255,64,0.15)]">
      <div className="container-cyber">
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] pb-12 border-b border-[rgba(213,255,64,0.1)]">
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group"
              aria-label="Dizital Grow"
            >
              <DizitalGrowLogo showTagline={false} />
            </Link>

            <p className="max-w-md text-sm text-[#B0B0B0] leading-relaxed font-normal">
              {footerDescription}
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#D5FF40] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth & Contact CTA */}
          <div className="space-y-4">
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              {ctaHeading}
            </p>
            <p className="text-xs text-[#B0B0B0] leading-relaxed">
              Have questions about your website, SEO, or digital strategy? Tell us where you are today.
            </p>
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-all hover:bg-[#c2ea36]"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Social links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/dizitalgrow/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.15)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
          <p>{copyright}</p>

          <div className="flex items-center gap-6">
            {FOOTER_LEGAL_LINKS.map((legal) => (
              <Link
                key={legal.href}
                href={legal.href}
                className="hover:text-[#D5FF40] transition-colors"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
