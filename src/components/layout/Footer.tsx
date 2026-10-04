"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  FOOTER_CONNECT,
  FOOTER_LEGAL_LINKS,
} from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white pt-16 pb-12 border-t border-[rgba(213,255,64,0.15)]">
      <div className="container-cyber">
        {/* Top Status Strip */}
        <div className="pb-8 border-b border-[rgba(213,255,64,0.1)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-[#D5FF40] shadow-[0_0_8px_#D5FF40] animate-pulse" />
            <span className="text-white font-bold">READY TO GROW YOUR BUSINESS?</span>
            <span className="text-[rgba(213,255,64,0.4)]">//</span>
            <span>DISCUSS YOUR PROJECT WITH US</span>
          </div>
          <div className="flex items-center gap-3">
            <span>DIRECT INQUIRIES:</span>
            <a href="mailto:hello@dizitalgrow.in" className="text-[#D5FF40] hover:underline">
              HELLO@DIZITALGROW.IN
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1.7fr] py-14 border-b border-[rgba(213,255,64,0.1)]">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <DizitalGrowLogo showTagline={true} />
            </Link>

            <p className="mt-5 max-w-md text-sm sm:text-base text-[#B0B0B0] leading-relaxed font-normal">
              We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="btn-cyber-primary py-2.5 px-5 text-xs"
              >
                <span>START PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="btn-cyber-secondary py-2.5 px-5 text-xs"
              >
                <span>VIEW WORK</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
                NAVIGATION
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-[#B0B0B0] hover:text-[#D5FF40] transition-colors uppercase tracking-wider font-mono font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
                SERVICES
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_SERVICES.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-xs sm:text-sm text-[#B0B0B0] hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-display text-xs tracking-widest text-[#D5FF40] uppercase font-bold">
                CONTACT
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_CONNECT.map((item) => {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#B0B0B0] hover:text-[#D5FF40] transition-colors"
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-[#B0B0B0]">
          <p>© 2026 DizitalGrow. All rights reserved. Websites, Apps & Ads That Grow Your Business.</p>

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
