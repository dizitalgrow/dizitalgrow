"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSiteSettings } from "@/hooks/use-sanity-queries";

export function Header() {
  const { data: siteSettings } = useSiteSettings();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const ctaLabel = siteSettings?.primaryCtaLabel || "Get Growth Advice";
  const ctaUrl = siteSettings?.primaryCtaUrl || "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(213,255,64,0.18)] bg-[#050505]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
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
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          aria-label="Dizital Grow Home"
          onClick={() => setMobileOpen(false)}
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
                  : link.href === "/contact"
                  ? pathname === "/contact"
                  : link.href === "/blog"
                  ? pathname.startsWith("/blog")
                  : false;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "text-[#D5FF40]"
                        : "text-[#B0B0B0] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-all hover:bg-[#c2ea36] active:translate-y-0.5"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-colors hover:bg-[#101010]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#050505]/98 backdrop-blur-2xl md:hidden overflow-y-auto border-b border-[rgba(213,255,64,0.15)] animate-in fade-in duration-200"
          id="mobile-navigation"
        >
          <div className="container-cyber py-6 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
            <ul className="flex flex-col divide-y divide-[rgba(213,255,64,0.1)]">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href === "/contact"
                    ? pathname === "/contact"
                    : link.href === "/blog"
                    ? pathname.startsWith("/blog")
                    : false;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-4 text-base font-display font-bold tracking-wide transition-colors ${
                        isActive ? "text-[#D5FF40]" : "text-white hover:text-[#D5FF40]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </Link>
                  </li>
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
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#D5FF40] text-[#050505] py-3.5 text-center text-xs font-display font-extrabold uppercase tracking-widest rounded-[2px] hover:bg-[#c2ea36]"
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
