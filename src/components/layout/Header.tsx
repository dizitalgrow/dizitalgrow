"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import {
  useModal,
  useScrolled,
  useScrollLock,
  useEventListener,
} from "@/hooks";

export function Header() {
  const { data: siteSettings } = useSiteSettings();
  const isScrolled = useScrolled(16);
  const {
    isOpen: isMobileOpen,
    close: closeMobile,
    toggle: toggleMobile,
  } = useModal(false);
  const pathname = usePathname();

  const ctaLabel = siteSettings?.primaryCtaLabel || "Discuss Your Project";
  const ctaUrl = siteSettings?.primaryCtaUrl || "/contact";

  // Lock body scroll when mobile navigation drawer is open
  useScrollLock(isMobileOpen);

  // Close mobile drawer on Escape key
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && isMobileOpen) {
      closeMobile();
    }
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "border-b border-[rgba(213,255,64,0.18)] bg-[#050505]/95 backdrop-blur-md"
          : "border-b border-[rgba(213,255,64,0.12)] bg-[#050505]"
      }`}
    >
      <nav
        className="container-cyber flex h-16 items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40] rounded-[2px]"
          aria-label="Dizital Grow Home"
          onClick={() => closeMobile()}
        >
          <DizitalGrowLogo showTagline={false} />
        </Link>

        {/* Center: Minimal Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40] ${
                      isActive
                        ? "text-[#D5FF40]"
                        : "text-[#B0B0B0] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D5FF40]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions: Theme Toggle + Get Growth Advice CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <Link
            href={ctaUrl}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-colors hover:bg-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5FF40]"
            onClick={toggleMobile}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Fluid Motion */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050505]/98 backdrop-blur-2xl md:hidden overflow-y-auto border-b border-[rgba(213,255,64,0.15)]"
            id="mobile-navigation"
          >
            <div className="container-cyber py-6 flex flex-col justify-between min-h-full">
              <ul className="flex flex-col divide-y divide-[rgba(213,255,64,0.1)]">
                {NAV_LINKS.map((link, idx) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);


                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => closeMobile()}
                        className={`flex items-center justify-between py-4 text-base font-display font-bold tracking-wide transition-colors ${
                          isActive ? "text-[#D5FF40]" : "text-white hover:text-[#D5FF40]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-8 space-y-4 pt-6 border-t border-[rgba(213,255,64,0.15)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold">
                    APPEARANCE
                  </span>
                  <ThemeToggle variant="segmented" />
                </div>

                <Link
                  href={ctaUrl}
                  onClick={() => closeMobile()}
                  className="flex w-full items-center justify-center gap-2 bg-[#D5FF40] text-[#050505] py-3.5 text-center text-xs font-display font-extrabold uppercase tracking-widest rounded-[2px] hover:bg-[#c2ea36] transition-colors"
                >
                  <span>{ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
