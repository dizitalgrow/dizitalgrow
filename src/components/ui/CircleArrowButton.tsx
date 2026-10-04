"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CircleArrowButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "accent" | "primary" | "white" | "dark" | "outline" | "burgundy";
  className?: string;
  ariaLabel?: string;
}

const sizeClasses = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-18 w-18 text-lg",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

const variantClasses = {
  accent: "bg-[#D5FF40] text-[#050505] hover:bg-[#c7f333] shadow-[0_0_15px_rgba(213,255,64,0.3)]",
  primary: "bg-[#D5FF40] text-[#050505] hover:bg-[#c7f333] shadow-[0_0_15px_rgba(213,255,64,0.3)]",
  burgundy: "bg-[#D5FF40] text-[#050505] hover:bg-[#c7f333] shadow-[0_0_15px_rgba(213,255,64,0.3)]",
  white: "bg-[#FFFFFF] text-[#050505] hover:bg-[#EEEEEE]",
  dark: "bg-[#101010] text-[#FFFFFF] border border-[rgba(213,255,64,0.2)] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors",
  outline: "border border-[rgba(213,255,64,0.3)] bg-transparent text-[#FFFFFF] hover:border-[#D5FF40] hover:text-[#D5FF40]",
};

export function CircleArrowButton({
  to,
  href,
  onClick,
  size = "md",
  variant = "dark",
  className,
  ariaLabel = "View details",
}: CircleArrowButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full transition-colors cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <ArrowUpRight
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          iconSizes[size]
        )}
      />
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className="inline-flex"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link href={to} aria-label={ariaLabel} className="inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex"
    >
      {content}
    </button>
  );
}
