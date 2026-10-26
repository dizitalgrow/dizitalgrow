"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Unified Provider Tree wrapper.
 * Encapsulates client-side providers and mounts once in root layout.
 * Integrates TanStack QueryClientProvider and NextThemesProvider.
 */
export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
