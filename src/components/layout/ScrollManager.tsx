"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 80; // 64px fixed header + 16px breathing room

/**
 * Global Scroll and Route Transition Manager.
 * 
 * Guarantees:
 * 1. Every route navigation starts at the very top (0, 0).
 * 2. Initial page load displays the complete header and hero without partial scroll offsets.
 * 3. Hash links (#work, #capabilities, #faq) smoothly scroll to the section with proper header offset.
 * 4. Browser history and back/forward navigation remain fully functional.
 * 5. Smooth scrolling is only invoked when intentionally requested, preventing layout shift lag.
 */
export function ScrollManager() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string>(pathname);

  // Set browser scroll restoration on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      // Allow DOM to settle before calculating scroll position
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementPosition - HEADER_OFFSET),
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Ensure initial load is at top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  // Handle route / pathname transitions
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      const hash = window.location.hash;
      if (!hash) {
        // Immediate reset on route navigation
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      } else {
        const targetId = hash.replace("#", "");
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: Math.max(0, elementPosition - HEADER_OFFSET),
              behavior: "smooth",
            });
          }
        }, 50);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Global listener for internal anchor clicks to ensure proper header offset
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Check if it's an on-page hash link (#section or /#section while on homepage)
      const isPureHash = href.startsWith("#");
      const isHomeHash = href.startsWith("/#") && window.location.pathname === "/";

      if (isPureHash || isHomeHash) {
        const targetId = href.split("#")[1];
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          window.history.pushState(null, "", href);
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementPosition - HEADER_OFFSET),
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
