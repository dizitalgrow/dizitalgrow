import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

/**
 * Dizital Grow Brand Logo & Wordmark
 * Displays brand icon and crisp typographic name adapting across light/dark modes
 */
export function DizitalGrowLogo({
  className,
  showTagline = false,
}: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
        <Image
          src="/logo-square.png"
          alt="Dizital Grow Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-white uppercase leading-none">
          Dizital <span className="text-[#D5FF40]">Grow</span>
        </span>
        {showTagline && (
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#B0B0B0] uppercase mt-1 font-medium">
            DIGITAL GROWTH PLATFORM
          </span>
        )}
      </div>
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
