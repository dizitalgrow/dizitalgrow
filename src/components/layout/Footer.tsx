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
  FOOTER_SERVICES_LINKS,
  FOOTER_EXPLORE_LINKS,
  FOOTER_RESOURCES_LINKS,
  FOOTER_LEGAL_LINKS,
  VERIFIED_EMAIL,
  WHATSAPP_CHANNEL_URL,
  VERIFIED_WHATSAPP_PHONE,
  BRAND_TAGLINE,
  PRIMARY_CTA_LABEL,
} from "@/constants/navigation";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import { formatWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const { data: siteSettings } = useSiteSettings();

  const footerDescription =
    siteSettings?.footerDescription ||
    "DizitalGrow helps individuals, professionals, startups and businesses build their digital presence and grow through website development, web applications, mobile applications, digital advertising, SEO and conversion tracking.";

  const contactEmail = siteSettings?.footerContactEmail || VERIFIED_EMAIL;
  const channelUrl = siteSettings?.whatsappChannelUrl || WHATSAPP_CHANNEL_URL;
  const whatsappPhone =
    siteSettings?.whatsappNumber || VERIFIED_WHATSAPP_PHONE;

  const ctaHeading = "Your Next Digital Step Starts Here.";
  const ctaLabel = siteSettings?.footerCtaButtonLabel || PRIMARY_CTA_LABEL;
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
              className="inline-flex items-center gap-2 group focus-cyber rounded-[2px]"
              aria-label="DizitalGrow Home"
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
                    "Hi DizitalGrow, I would like to discuss our digital project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#D5FF40] shrink-0" />
                  <span>{whatsappPhone}</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 rounded-[2px]">
                    WhatsApp
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
                  <span>WhatsApp Channel</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 rounded-[2px]">
                    Updates
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services Navigation */}
          <div>
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Core Services
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_SERVICES_LINKS.map((link) => (
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

          {/* Col 3: Explore Navigation */}
          <div>
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Explore Platform
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_EXPLORE_LINKS.map((link) => (
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

          {/* Col 4: Resources & CTA */}
          <div className="space-y-4">
            <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
              Resources &amp; Company
            </p>
            <ul className="mt-2 space-y-2">
              {FOOTER_RESOURCES_LINKS.map((link) => (
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

            <div className="pt-3 border-t border-[rgba(213,255,64,0.1)]">
              <p className="font-display text-xs tracking-wider text-white uppercase font-bold mb-1">
                {ctaHeading}
              </p>
              <p className="text-[11px] text-[#B0B0B0] mb-3 leading-relaxed">
                Tell us what you are trying to build or improve. We will help you understand the practical next steps.
              </p>
              <Link
                href={ctaUrl}
                className="inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block mb-2 font-bold">
                CONNECT
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={formatWhatsAppUrl(
                    whatsappPhone,
                    "Hi DizitalGrow, I would like to discuss our digital project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Direct WhatsApp Chat"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors"
                >
                  <WhatsAppIcon className="h-3 w-3 text-[#D5FF40]" />
                  <span>WhatsApp</span>
                </a>

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
