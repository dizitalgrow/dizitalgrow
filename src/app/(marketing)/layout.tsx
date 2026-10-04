import React from "react";

/**
 * Marketing route group layout.
 * Passes children cleanly without re-wrapping global providers.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
