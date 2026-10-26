"use client";

import { useEffect } from "react";

/**
 * Safely locks body scroll when a modal, drawer, or full-screen menu is open.
 * Restores original document overflow on close and upon unmount.
 *
 * @param isLocked Whether scrolling should be locked
 */
export function useScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    if (typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
