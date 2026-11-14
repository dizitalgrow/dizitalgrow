"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MAIN_SERVICES_LINKS,
  SOLUTIONS_LINKS,
  INDUSTRIES_LINKS,
  COMPANY_DROPDOWN_LINKS,
  PRIMARY_CTA_LABEL,
} from "@/constants/navigation";
import { DizitalGrowLogo } from "@/components/ui/DizitalGrowLogo";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import {
  useModal,
  useScrolled,
  useScrollLock,
  useEventListener,
  useOutsideClick,
} from "@/hooks";

type DropdownKey = "services" | "solutions" | "industries" | "company" | null;

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

  // Active desktop dropdown
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Mobile section toggles
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const toggleMobileSection = (key: string) => {
    setOpenMobileSection((curr) => (curr === key ? null : key));
  };

  // Close desktop dropdown on outside click
  useOutsideClick(dropdownRef, () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  });

  const ctaLabel =
    siteSettings?.primaryCtaLabel || PRIMARY_CTA_LABEL || "Discuss Your Project";
  const ctaUrl = siteSettings?.primaryCtaUrl || "/contact";

  // Lock body scroll when mobile navigation drawer is open
  useScrollLock(isMobileOpen);

  // Close menus on Escape key
  useEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(null);
      if (isMobileOpen) closeMobile();
    }
  });

  const isServicesActive = pathname.startsWith("/services") || pathname === "/meta-capi";
  const isSolutionsActive = pathname.startsWith("/solutions");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isToolsActive = pathname.startsWith("/tools");
  const isBlogActive = pathname.startsWith("/blog");
  const isCompanyActive =
    pathname === "/about" ||
    pathname === "/process" ||
    pathname === "/work" ||
    pathname === "/contact";

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
          aria-label="DizitalGrow Home"
          onClick={() => {
            closeMobile();
            setActiveDropdown(null);
          }}
        >
          <DizitalGrowLogo showTagline={false} />
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
          <ul className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider" role="menubar">
            {/* Home */}
            <li role="none">
              <Link
                href="/"
                role="menuitem"
                onClick={() => setActiveDropdown(null)}
                className={`relative px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  pathname === "/" ? "text-[#D5FF40]" : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">HOME</span>
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              role="none"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "services"}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "services" ? null : "services")
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isServicesActive || activeDropdown === "services"
                    ? "text-[#D5FF40]"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">SERVICES</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-[#D5FF40]" : ""
                  }`}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50 before:absolute before:inset-x-0 before:-top-3 before:h-4 before:content-['']"
                  >
                    <div className="bg-[#0A0A0A] border border-[rgba(213,255,64,0.22)] rounded-[2px] p-5 shadow-dropdown">
                      <div className="flex items-center justify-between pb-3 border-b border-[rgba(213,255,64,0.12)] mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D5FF40]">
                          CORE DIGITAL SERVICES
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[11px] font-mono text-[#D5FF40] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider"
                        >
                          <span>All Services</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {MAIN_SERVICES_LINKS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-2.5 rounded-[2px] border border-transparent hover:border-[rgba(213,255,64,0.2)] hover:bg-[#141414] transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white group-hover:text-[#D5FF40] uppercase tracking-wide transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-mono text-[#D5FF40] bg-[#D5FF40]/10 border border-[#D5FF40]/25 px-1 py-0.2 rounded-[2px]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#B0B0B0] mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Solutions Dropdown */}
            <li
              className="relative"
              role="none"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "solutions"}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isSolutionsActive || activeDropdown === "solutions"
                    ? "text-[#D5FF40]"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">SOLUTIONS</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180 text-[#D5FF40]" : ""
                  }`}
                />
                {isSolutionsActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[620px] z-50 before:absolute before:inset-x-0 before:-top-3 before:h-4 before:content-['']"
                  >
                    <div className="bg-[#0A0A0A] border border-[rgba(213,255,64,0.22)] rounded-[2px] p-5 shadow-dropdown">
                      <div className="flex items-center justify-between pb-3 border-b border-[rgba(213,255,64,0.12)] mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D5FF40]">
                          SOLUTIONS FOR EVERY REQUIREMENT
                        </span>
                        <Link
                          href="/solutions"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[11px] font-mono text-[#D5FF40] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider"
                        >
                          <span>Explore All Solutions</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {SOLUTIONS_LINKS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-2.5 rounded-[2px] border border-transparent hover:border-[rgba(213,255,64,0.2)] hover:bg-[#141414] transition-all"
                          >
                            <span className="text-xs font-bold text-white group-hover:text-[#D5FF40] uppercase tracking-wide transition-colors block">
                              {item.name}
                            </span>
                            <p className="text-[11px] text-[#B0B0B0] mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Industries Dropdown */}
            <li
              className="relative"
              role="none"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "industries"}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "industries" ? null : "industries")
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isIndustriesActive || activeDropdown === "industries"
                    ? "text-[#D5FF40]"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">INDUSTRIES</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180 text-[#D5FF40]" : ""
                  }`}
                />
                {isIndustriesActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[520px] z-50 before:absolute before:inset-x-0 before:-top-3 before:h-4 before:content-['']"
                  >
                    <div className="bg-[#0A0A0A] border border-[rgba(213,255,64,0.22)] rounded-[2px] p-5 shadow-dropdown">
                      <div className="flex items-center justify-between pb-3 border-b border-[rgba(213,255,64,0.12)] mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D5FF40]">
                          INDUSTRY-SPECIFIC EXPERTISE
                        </span>
                        <Link
                          href="/industries"
                          onClick={() => setActiveDropdown(null)}
                          className="text-[11px] font-mono text-[#D5FF40] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider"
                        >
                          <span>All Industries</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {INDUSTRIES_LINKS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-2.5 rounded-[2px] border border-transparent hover:border-[rgba(213,255,64,0.2)] hover:bg-[#141414] transition-all"
                          >
                            <span className="text-xs font-bold text-white group-hover:text-[#D5FF40] uppercase tracking-wide transition-colors block">
                              {item.name}
                            </span>
                            <p className="text-[11px] text-[#B0B0B0] mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Free Tools Link */}
            <li role="none">
              <Link
                href="/tools"
                role="menuitem"
                onClick={() => setActiveDropdown(null)}
                className={`relative px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isToolsActive ? "text-[#D5FF40]" : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">FREE TOOLS</span>
                {isToolsActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </Link>
            </li>

            {/* Blog */}
            <li role="none">
              <Link
                href="/blog"
                role="menuitem"
                onClick={() => setActiveDropdown(null)}
                className={`relative px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isBlogActive ? "text-[#D5FF40]" : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">BLOG</span>
                {isBlogActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </Link>
            </li>

            {/* Company Dropdown */}
            <li
              className="relative"
              role="none"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "company"}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "company" ? null : "company")
                }
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-[2px] uppercase transition-colors focus-cyber cursor-pointer ${
                  isCompanyActive || activeDropdown === "company"
                    ? "text-[#D5FF40]"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                <span className="uppercase">COMPANY</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "company" ? "rotate-180 text-[#D5FF40]" : ""
                  }`}
                />
                {isCompanyActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D5FF40]" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full pt-2 w-[340px] z-50 before:absolute before:inset-x-0 before:-top-3 before:h-4 before:content-['']"
                  >
                    <div className="bg-[#0A0A0A] border border-[rgba(213,255,64,0.22)] rounded-[2px] p-4 shadow-dropdown">
                      <div className="pb-2.5 border-b border-[rgba(213,255,64,0.12)] mb-2.5">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D5FF40]">
                          ABOUT THE AGENCY
                        </span>
                      </div>

                      <div className="space-y-1">
                        {COMPANY_DROPDOWN_LINKS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group block p-2 rounded-[2px] border border-transparent hover:border-[rgba(213,255,64,0.2)] hover:bg-[#141414] transition-all"
                          >
                            <span className="text-xs font-bold text-white group-hover:text-[#D5FF40] uppercase tracking-wide transition-colors block">
                              {item.name}
                            </span>
                            <p className="text-[11px] text-[#B0B0B0] mt-0.5">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        {/* Right Actions: CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href={ctaUrl}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber shrink-0"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            className="xl:hidden flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] transition-colors hover:bg-[#101010] focus-cyber"
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
            className="fixed inset-x-0 top-16 z-40 bg-[#050505]/98 backdrop-blur-2xl xl:hidden overflow-y-auto border-b border-[rgba(213,255,64,0.15)]"
            id="mobile-navigation"
          >
            <div className="container-cyber py-6 flex flex-col justify-between min-h-full">
              <ul className="flex flex-col divide-y divide-[rgba(213,255,64,0.1)] text-white">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname === "/" ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>HOME</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* Services Accordion */}
                <li className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection("services")}
                    className="flex w-full items-center justify-between py-2 text-base font-display font-bold uppercase tracking-wide text-white"
                  >
                    <span>SERVICES</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D5FF40] transition-transform duration-200 ${
                        openMobileSection === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pt-2 pb-2 space-y-2 border-l border-[rgba(213,255,64,0.15)]"
                      >
                        {MAIN_SERVICES_LINKS.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => closeMobile()}
                            className="block text-xs font-semibold uppercase tracking-wider text-[#B0B0B0] hover:text-[#D5FF40] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => closeMobile()}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-[#D5FF40] pt-1"
                        >
                          <span>All Services Overview</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Solutions Accordion */}
                <li className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection("solutions")}
                    className="flex w-full items-center justify-between py-2 text-base font-display font-bold uppercase tracking-wide text-white"
                  >
                    <span>SOLUTIONS</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D5FF40] transition-transform duration-200 ${
                        openMobileSection === "solutions" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "solutions" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pt-2 pb-2 space-y-2 border-l border-[rgba(213,255,64,0.15)]"
                      >
                        {SOLUTIONS_LINKS.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => closeMobile()}
                            className="block text-xs font-semibold uppercase tracking-wider text-[#B0B0B0] hover:text-[#D5FF40] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                        <Link
                          href="/solutions"
                          onClick={() => closeMobile()}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-[#D5FF40] pt-1"
                        >
                          <span>All Solutions Overview</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Industries Accordion */}
                <li className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection("industries")}
                    className="flex w-full items-center justify-between py-2 text-base font-display font-bold uppercase tracking-wide text-white"
                  >
                    <span>INDUSTRIES</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D5FF40] transition-transform duration-200 ${
                        openMobileSection === "industries" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "industries" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pt-2 pb-2 space-y-2 border-l border-[rgba(213,255,64,0.15)]"
                      >
                        {INDUSTRIES_LINKS.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => closeMobile()}
                            className="block text-xs font-semibold uppercase tracking-wider text-[#B0B0B0] hover:text-[#D5FF40] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          onClick={() => closeMobile()}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-[#D5FF40] pt-1"
                        >
                          <span>All Industries Overview</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Free Tools */}
                <li>
                  <Link
                    href="/tools"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname.startsWith("/tools") ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>FREE TOOLS</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* Blog */}
                <li>
                  <Link
                    href="/blog"
                    onClick={() => closeMobile()}
                    className={`flex items-center justify-between py-3 text-base font-display font-bold uppercase tracking-wide transition-colors ${
                      pathname.startsWith("/blog") ? "text-[#D5FF40]" : "text-white"
                    }`}
                  >
                    <span>BLOG & INSIGHTS</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>

                {/* Company Accordion */}
                <li className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection("company")}
                    className="flex w-full items-center justify-between py-2 text-base font-display font-bold uppercase tracking-wide text-white"
                  >
                    <span>COMPANY</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D5FF40] transition-transform duration-200 ${
                        openMobileSection === "company" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "company" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pt-2 pb-2 space-y-2 border-l border-[rgba(213,255,64,0.15)]"
                      >
                        {COMPANY_DROPDOWN_LINKS.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => closeMobile()}
                            className="block text-xs font-semibold uppercase tracking-wider text-[#B0B0B0] hover:text-[#D5FF40] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>

              {/* Mobile Drawer Bottom Section */}
              <div className="mt-8 pt-6 border-t border-[rgba(213,255,64,0.15)]">
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
