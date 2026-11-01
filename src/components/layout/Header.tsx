"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MAIN_NAV_ITEMS,
  SOLUTIONS_MENU,
  PRIMARY_CTA_LABEL,
} from "@/constants/navigation";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import {
  useModal,
  useScrolled,
  useScrollLock,
  useEventListener,
  useDisclosure,
  useOutsideClick,
} from "@/hooks";

export function Header() {
  const { data: siteSettings } = useSiteSettings();
  const isScrolled = useScrolled(16);
  const pathname = usePathname();

  // Mobile drawer state
  const {
    isOpen: isMobileOpen,
    close: closeMobile,
    toggle: toggleMobile,
  } = useModal(false);

  // Desktop Solutions dropdown state
  const solutionsDisclosure = useDisclosure(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    solutionsDisclosure.onOpen();
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      solutionsDisclosure.onClose();
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Mobile solutions accordion state
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  // Close desktop dropdown on outside click
  useOutsideClick(dropdownRef, () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (solutionsDisclosure.isOpen) {
      solutionsDisclosure.onClose();
    }
  });

  const ctaLabel =
    siteSettings?.primaryCtaLabel || PRIMARY_CTA_LABEL || "Let's Grow Together";
  const ctaUrl = siteSettings?.primaryCtaUrl || "/contact";

  // Lock body scroll when mobile navigation drawer is open
  useScrollLock(isMobileOpen);

  // Close menus on Escape key
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (solutionsDisclosure.isOpen) solutionsDisclosure.onClose();
      if (isMobileOpen) closeMobile();
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
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 focus-cyber rounded-[2px]"
          aria-label="Dizital Grow Home"
          onClick={() => {
            closeMobile();
            solutionsDisclosure.onClose();
          }}
        >
          <DizitalGrowLogo showTagline={false} />
        </Link>

        {/* Center: Desktop Navigation with Solutions Dropdown */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1" role="menubar">
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.label === "Solutions") {
                const isSolutionsActive =
                  pathname.startsWith("/services") ||
                  pathname.startsWith("/meta-capi");

                return (
                  <li
                    key={item.href}
                    className="relative"
                    ref={dropdownRef}
                    role="none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={solutionsDisclosure.isOpen}
                      onClick={solutionsDisclosure.onToggle}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-[2px] focus-cyber cursor-pointer ${
                        isSolutionsActive || solutionsDisclosure.isOpen
                          ? "text-[#D5FF40]"
                          : "text-[#B0B0B0] hover:text-white"
                      }`}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          solutionsDisclosure.isOpen ? "rotate-180 text-[#D5FF40]" : ""
                        }`}
                      />
                      {isSolutionsActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D5FF40]" />
                      )}
                    </button>

                    {/* Desktop Solutions Dropdown Mega-Menu */}
                    <AnimatePresence>
                      {solutionsDisclosure.isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px] z-50 before:absolute before:inset-x-0 before:-top-3 before:h-4 before:content-['']"
                        >
                          <div className="bg-[#0A0A0A] border border-[rgba(213,255,64,0.22)] rounded-[2px] p-6 shadow-dropdown">
                            <div className="grid grid-cols-3 gap-6">
                              {SOLUTIONS_MENU.map((col) => (
                                <div key={col.category} className="space-y-3">
                                  <div className="border-b border-[rgba(213,255,64,0.12)] pb-2">
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D5FF40]">
                                      {col.category}
                                    </span>
                                    <p className="text-[11px] text-[#B0B0B0] mt-0.5 leading-snug">
                                      {col.description}
                                    </p>
                                  </div>

                                  <ul className="space-y-2">
                                    {col.items.map((subItem) => (
                                      <li key={subItem.href}>
                                        <Link
                                          href={subItem.href}
                                          onClick={() => {
                                            if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                            solutionsDisclosure.onClose();
                                          }}
                                          className="group block p-2 rounded-[2px] border border-transparent hover:border-[rgba(213,255,64,0.2)] hover:bg-[#141414] transition-all cursor-pointer"
                                        >
                                          <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-white group-hover:text-[#D5FF40] uppercase tracking-wide transition-colors">
                                              {subItem.name}
                                            </span>
                                            {subItem.badge && (
                                              <span className="text-[9px] font-mono uppercase tracking-wider text-[#D5FF40] bg-[#D5FF40]/10 border border-[#D5FF40]/20 px-1.5 py-0.2 rounded-[2px]">
                                                {subItem.badge}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[11px] text-[#B0B0B0] mt-0.5 leading-tight line-clamp-1">
                                            {subItem.description}
                                          </p>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Dropdown Footer */}
                            <div className="mt-5 pt-3.5 border-t border-[rgba(213,255,64,0.12)] flex items-center justify-between text-xs font-mono">
                              <span className="text-[#B0B0B0] flex items-center gap-1.5">
                                <Sparkles className="h-3 w-3 text-[#D5FF40]" />
                                <span>Engineered for Measurable Outcomes</span>
                              </span>
                              <Link
                                href="/services"
                                onClick={() => {
                                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                  solutionsDisclosure.onClose();
                                }}
                                className="inline-flex items-center gap-1 text-[#D5FF40] hover:underline font-bold uppercase tracking-wider text-[11px] cursor-pointer"
                              >
                                <span>Explore All Solutions Overview</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-[2px] focus-cyber cursor-pointer ${
                      isActive
                        ? "text-[#D5FF40]"
                        : "text-[#B0B0B0] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D5FF40]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions: Theme Toggle + Primary CTA + Mobile Toggle */}
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
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-colors hover:bg-[#101010] focus-cyber"
            onClick={toggleMobile}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-[#050505]/98 backdrop-blur-2xl lg:hidden overflow-y-auto border-b border-[rgba(213,255,64,0.15)]"
            id="mobile-navigation"
          >
            <div className="container-cyber py-6 flex flex-col justify-between min-h-full">
              <ul className="flex flex-col divide-y divide-[rgba(213,255,64,0.1)]">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3.5 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname === "/" ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>Home</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* About */}
                <li>
                  <Link
                    href="/about"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3.5 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname === "/about" ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>About</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* Solutions Accordion */}
                <li className="py-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between py-2 text-base font-display font-bold uppercase tracking-wide text-white"
                  >
                    <span className="flex items-center gap-2">
                      <span>Solutions</span>
                      <span className="text-[10px] font-mono text-[#D5FF40] bg-[#D5FF40]/10 border border-[#D5FF40]/25 px-1.5 py-0.5 rounded-[2px]">
                        Catalog
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D5FF40] transition-transform duration-200 ${
                        isMobileSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-2 pt-2 space-y-4"
                      >
                        {SOLUTIONS_MENU.map((col) => (
                          <div key={col.category} className="space-y-2 border-l border-[rgba(213,255,64,0.15)] pl-3">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold block">
                              {col.category}
                            </span>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => closeMobile()}
                                    className="block text-xs font-semibold uppercase tracking-wider text-white hover:text-[#D5FF40]"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <div className="pt-2">
                          <Link
                            href="/services"
                            onClick={() => closeMobile()}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] underline"
                          >
                            <span>View All Solutions Overview</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Insights */}
                <li>
                  <Link
                    href="/blog"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3.5 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname.startsWith("/blog") ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>Insights</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3.5 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname === "/contact" ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>
              </ul>

              {/* Mobile Drawer Bottom Section */}
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
