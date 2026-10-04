"use client";

import React, { useEffect } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Unified Provider Tree wrapper.
 * Encapsulates client-side providers and mounts once in root layout.
 * Enforces the brand palette strictly and clears any legacy theme overrides.
 */
export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("dizitalgrow-theme");
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  return <>{children}</>;
}
