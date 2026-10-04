"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

interface RotatingContactStampProps {
  variant?: "dark" | "burgundy" | "light";
  className?: string;
}

export function RotatingContactStamp({
  variant = "burgundy",
  className = "",
}: RotatingContactStampProps) {
  const bgStyles = {
    burgundy: "bg-[#D5FF40] text-[#050505] border-[#D5FF40]",
    dark: "bg-[#101010] text-[#D5FF40] border-[rgba(213,255,64,0.3)]",
    light: "bg-[#050505] text-[#FFFFFF] border-[rgba(213,255,64,0.3)]",
  }[variant];

  return (
    <div
      className={`absolute -bottom-8 right-6 sm:right-12 md:right-20 z-30 ${className}`}
    >
      <Link
        href="/contact"
        aria-label="Contact DizitalGrow"
        className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
      >
        {/* Rotating Circular Text SVG */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]"
        >
          <path
            id="contactCirclePath"
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
          <text className="text-[10px] font-mono tracking-[0.25em] uppercase fill-current opacity-85 font-bold">
            <textPath href="#contactCirclePath">
              • GET STARTED • BUILD GROW SCALE
            </textPath>
          </text>
        </svg>

        {/* Center Pill Button / Mail Icon */}
        <div
          className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border transition-transform duration-300 group-hover:rotate-12 ${bgStyles}`}
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </Link>
    </div>
  );
}
