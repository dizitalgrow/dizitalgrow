"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(213,255,64,0.18)] bg-[#050505]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "border-b border-[rgba(213,255,64,0.12)] bg-[#050505]"
      }`}
    >
      <nav className="container-cyber flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <DizitalGrowLogo showTagline={false} />
        </Link>

        {/* Center: Cyber Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-[11px] font-bold font-display uppercase tracking-widest transition-all ${
                      isActive
                        ? "text-[#D5FF40] border-b-2 border-[#D5FF40]"
                        : "text-[#B0B0B0] hover:text-white hover:bg-[#101010]"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right CTA: BOOK CALL */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-all hover:bg-[#c2ea36] hover:shadow-[0_0_20px_rgba(213,255,64,0.4)] active:translate-y-0.5"
          >
            <span>START PROJECT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-colors hover:bg-[#101010]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-[rgba(213,255,64,0.15)] bg-[#050505]/98 backdrop-blur-2xl lg:hidden animate-in fade-in duration-200">
          <div className="container-cyber py-6">
            <ul className="flex flex-col divide-y divide-[rgba(213,255,64,0.1)]">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-3.5 text-sm font-display font-bold uppercase tracking-widest transition-colors ${
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

            <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.15)]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#D5FF40] text-[#050505] py-3.5 text-center text-xs font-display font-extrabold uppercase tracking-widest rounded-[2px] hover:bg-[#c2ea36]"
              >
                <span>START PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
