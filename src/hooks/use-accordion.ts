"use client";

import { useState, useCallback } from "react";

export interface UseAccordionReturn {
  openIndex: number | null;
  isOpen: (index: number) => boolean;
  toggle: (index: number) => void;
  open: (index: number) => void;
  close: () => void;
  setOpenIndex: (index: number | null | ((prev: number | null) => number | null)) => void;
}

/**
 * Standardized accordion state management hook.
 * Manages single-expanded item state with index-based checks.
 *
 * @param initialIndex Index of the initially expanded item (default: null)
 * @returns Accordion control state and handlers
 */
export function useAccordion(initialIndex: number | null = null): UseAccordionReturn {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex);

  const isOpen = useCallback(
    (index: number) => openIndex === index,
    [openIndex]
  );

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const open = useCallback((index: number) => {
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
  }, []);

  return {
    openIndex,
    isOpen,
    toggle,
    open,
    close,
    setOpenIndex,
  };
}
