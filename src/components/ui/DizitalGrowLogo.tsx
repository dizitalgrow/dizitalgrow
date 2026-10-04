import React from "react";
import Image from "next/image";
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
      <div className="flex items-center gap-2 relative w-[56px] h-[56px]">
        <Image 
          src="/logo-square.png" 
          alt="DizitalGrow Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* showTagline kept for backwards compatibility but hidden visually or just keep as is */}
      {showTagline && (
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#B0B0B0] uppercase mt-0 pl-12 font-medium">
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
        "relative flex items-center justify-center overflow-hidden rounded-[2px]",
        className
      )}
    >
      <Image
        src="/logo-square.png"
        alt="DG Icon"
        fill
        className="object-contain"
      />
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
