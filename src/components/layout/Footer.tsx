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
  FOOTER_LEGAL_LINKS,
  VERIFIED_EMAIL,
  WHATSAPP_CHANNEL_URL,
  VERIFIED_WHATSAPP_PHONE,
} from "@/constants/navigation";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import { formatWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const { data: siteSettings } = useSiteSettings();

  const footerDescription =
    siteSettings?.footerDescription ||
    "DizitalGrow builds fast business websites, custom web apps, and targeted Google & Meta ad campaigns with reliable server-side tracking.";

  const contactEmail = siteSettings?.footerContactEmail || VERIFIED_EMAIL;
  const channelUrl = siteSettings?.whatsappChannelUrl || WHATSAPP_CHANNEL_URL;
  const whatsappPhone =
    siteSettings?.whatsappNumber || VERIFIED_WHATSAPP_PHONE;

  const ctaHeading = siteSettings?.footerCtaHeading || "Ready to Build & Grow?";
  const ctaLabel = siteSettings?.footerCtaButtonLabel || "Discuss Your Project";
  const ctaUrl = siteSettings?.footerCtaButtonUrl || "/contact";
  const copyright =
    siteSettings?.copyrightText ||
    `© ${new Date().getFullYear()} DizitalGrow. Digital products, customer acquisition & measurement.`;

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

            <div className="pt-2 flex flex-col gap-2.5 text-xs font-mono">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-[#D5FF40] hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{contactEmail}</span>
              </a>

              {whatsappPhone && (
                <a
                  href={formatWhatsAppUrl(
                    whatsappPhone,
                    "Hi DizitalGrow, I would like to discuss a project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#D5FF40]" />
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
                  <WhatsAppChannelIcon className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>WhatsApp Channel</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 rounded-[2px]">
                    Broadcast
                  </span>
                </a>
              )}
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
              Share your business challenges, website requirements, or advertising goals. We respond with practical advice within one business day.
            </p>
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            {/* Social & Direct Contact Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {whatsappPhone && (
                <a
                  href={formatWhatsAppUrl(
                    whatsappPhone,
                    "Hi DizitalGrow, I would like to discuss a project."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Direct WhatsApp Chat: +91 91871 26193 (Chat Only)"
                  title="Direct WhatsApp Chat (1-on-1)"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>WhatsApp Chat</span>
                </a>
              )}

              {channelUrl && (
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Join Official WhatsApp Channel"
                  title="Official WhatsApp Channel (Broadcast Updates)"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40]"
                >
                  <WhatsAppChannelIcon className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>Channel</span>
                </a>
              )}

              <a
                href="https://www.instagram.com/dizitalgrow/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @dizitalgrow"
                title="Follow us on Instagram"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-[#D5FF40] hover:border-[#D5FF40] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40]"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>Instagram</span>
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
