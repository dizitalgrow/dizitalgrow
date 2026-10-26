"use client";

import { useState, useEffect } from "react";

/**
 * Passive, SSR-safe scroll threshold detector.
 *
 * @param threshold Scroll threshold in pixels (default: 16)
 * @returns Boolean indicating whether window has scrolled past the threshold
 */
export function useScrolled(threshold = 16): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Run once on mount in case scroll position changed before hydration
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
