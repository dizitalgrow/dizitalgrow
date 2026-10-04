import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

/**
 * Cyber-tech DizitalGrow Brand Wordmark
 */
export function DizitalGrowLogo({
  className,
  showTagline = true,
}: LogoProps) {
  return (
    <div className={cn("inline-flex flex-col select-none group", className)}>
      <div className="flex items-center gap-2">
        {/* Cyber Monogram Badge */}
        <div className="h-8 w-8 rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.3)] flex items-center justify-center font-display font-extrabold text-sm text-[#D5FF40] shadow-[0_0_12px_rgba(213,255,64,0.15)] group-hover:border-[#D5FF40] transition-colors">
          <span>DG</span>
        </div>

        {/* Brand Text in Space Grotesk */}
        <span className="font-display tracking-tight text-xl sm:text-2xl font-extrabold uppercase text-white leading-none">
          Dizital<span className="text-[#D5FF40]">Grow</span>
        </span>

        {/* Live System Indicator */}
        <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] shadow-[0_0_8px_#D5FF40] animate-pulse" />
      </div>

      {showTagline && (
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#B0B0B0] uppercase mt-1 pl-10 font-medium">
          BUILD • GROW • SCALE
        </span>
      )}
    </div>
  );
}

export function DGMonogram({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "rounded-[2px] bg-[#101010] border border-[rgba(213,255,64,0.3)] flex items-center justify-center font-display font-extrabold text-sm text-[#D5FF40] shadow-[0_0_12px_rgba(213,255,64,0.2)]",
        className
      )}
    >
      DG
    </div>
  );
}

export function GrowthChartIcon({
  className,
  color = "#D5FF40",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
    >
      <rect x="2" y="18" width="5" height="12" rx="1" fill={color} />
      <rect x="10" y="11" width="5" height="19" rx="1" fill={color} />
      <rect x="18" y="4" width="5" height="26" rx="1" fill={color} />
      <path
        d="M2 24L12 14L19 20L32 5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 5H32V14"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
