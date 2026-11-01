"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import {
  InstagramIcon,
  WhatsAppIcon,
  WhatsAppChannelIcon,
} from "@/components/ui/Icons";
import {
  FOOTER_NAV_LINKS,
  FOOTER_SOLUTIONS_LINKS,
  FOOTER_LEGAL_LINKS,
  VERIFIED_EMAIL,
  WHATSAPP_CHANNEL_URL,
  VERIFIED_WHATSAPP_PHONE,
  BRAND_TAGLINE,
} from "@/constants/navigation";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import { formatWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const { data: siteSettings } = useSiteSettings();

  const footerDescription =
    siteSettings?.footerDescription ||
    "DizitalGrow helps individuals, startups, and growing businesses establish their digital presence, reach the right audience, and generate measurable growth through technology, marketing, and data-driven strategies.";

  const contactEmail = siteSettings?.footerContactEmail || VERIFIED_EMAIL;
  const channelUrl = siteSettings?.whatsappChannelUrl || WHATSAPP_CHANNEL_URL;
  const whatsappPhone =
    siteSettings?.whatsappNumber || VERIFIED_WHATSAPP_PHONE;

  const ctaHeading =
    siteSettings?.footerCtaHeading || "The Digital World Has Opportunities.";
  const ctaLabel = siteSettings?.footerCtaButtonLabel || "Let's Grow Together";
  const ctaUrl = siteSettings?.footerCtaButtonUrl || "/contact";
  const copyright =
    siteSettings?.copyrightText ||
    `© ${new Date().getFullYear()} DizitalGrow. All rights reserved. Grow Beyond Offline.`;

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white pt-16 pb-12 border-t border-[rgba(213,255,64,0.15)]">
      <div className="container-cyber">
        {/* Main Grid: 4 Columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[rgba(213,255,64,0.1)]">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group"
              aria-label="Dizital Grow"
            >
              <DizitalGrowLogo showTagline={false} />
            </Link>

            <div className="inline-block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D5FF40] bg-[#D5FF40]/10 border border-[#D5FF40]/25 px-2 py-0.5 rounded-[2px] font-bold">
                {BRAND_TAGLINE}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-normal">
              {footerDescription}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-mono">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-[#D5FF40] hover:underline"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{contactEmail}</span>
              </a>

              {whatsappPhone && (
                <a
                  href={formatWhatsAppUrl(
                    whatsappPhone,
                    "Hi DizitalGrow, I would like to discuss our digital growth goals."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#D5FF40] shrink-0" />
                  <span>{whatsappPhone}</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 rounded-[2px]">
                    Chat Only
                  </span>
                </a>
              )}

              {channelUrl && (
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                >
                  <WhatsAppChannelIcon className="h-3.5 w-3.5 text-[#D5FF40] shrink-0" />
                  <span>Official WhatsApp Channel</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 rounded-[2px]">
                    Updates
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Solutions Navigation */}
          <div>
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Digital Solutions
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_SOLUTIONS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Insights */}
          <div>
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Company &amp; Insights
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Consultation CTA & Socials */}
          <div className="space-y-4">
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              {ctaHeading}
            </p>
            <p className="text-xs text-[#B0B0B0] leading-relaxed">
              Whether you are starting from scratch or looking to grow an existing business, let&apos;s explore how digital can create new opportunities for you.
            </p>

            <div>
              <Link
                href={ctaUrl}
                className="inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block mb-2 font-bold">
                CONNECT WITH US
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={formatWhatsAppUrl(
                    whatsappPhone,
                    "Hi DizitalGrow, I would like to discuss our digital growth goals."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Direct WhatsApp Chat"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
                >
                  <WhatsAppIcon className="h-3 w-3 text-[#D5FF40]" />
                  <span>WhatsApp</span>
                </a>

                {channelUrl && (
                  <a
                    href={channelUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow WhatsApp Channel"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
                  >
                    <WhatsAppChannelIcon className="h-3 w-3 text-[#D5FF40]" />
                    <span>Channel</span>
                  </a>
                )}

                <a
                  href="https://www.instagram.com/dizitalgrow/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Instagram @dizitalgrow"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
                >
                  <InstagramIcon className="h-3 w-3 text-[#D5FF40]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
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
