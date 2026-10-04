import React from "react";
import { Lightbulb, Rocket, PenTool, BarChart3, Sparkles } from "lucide-react";

export type BadgeType = "lightbulb" | "rocket" | "pen" | "chart" | "sparkles";

interface GeometricBadgeProps {
  type: BadgeType;
  color?: "burgundy" | "dark" | "white";
  className?: string;
}

export function GeometricBadge({
  type,
  color = "burgundy",
  className = "",
}: GeometricBadgeProps) {
  const colorMap = {
    burgundy: "text-[#D5FF40] fill-[#D5FF40]",
    dark: "text-[#101010] fill-[#101010]",
    white: "text-white fill-white",
  };

  const iconColor = color === "white" ? "text-[#050505]" : color === "burgundy" ? "text-[#050505]" : "text-[#D5FF40]";

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {type === "lightbulb" && (
        <svg viewBox="0 0 100 100" className={`h-24 w-24 sm:h-28 sm:w-28 ${colorMap[color]}`}>
          <path d="M50 0 L61 14 L78 9 L81 27 L98 31 L91 48 L100 64 L84 72 L83 90 L66 88 L55 100 L43 90 L26 95 L22 77 L5 74 L11 57 L0 43 L16 34 L15 16 L32 18 Z" />
        </svg>
      )}

      {type === "rocket" && (
        <svg viewBox="0 0 100 100" className={`h-24 w-24 sm:h-28 sm:w-28 ${colorMap[color]}`}>
          <polygon points="50,5 93,25 93,75 50,95 7,75 7,25" />
        </svg>
      )}

      {type === "pen" && (
        <svg viewBox="0 0 100 100" className={`h-24 w-24 sm:h-28 sm:w-28 ${colorMap[color]}`}>
          <polygon points="50,8 90,28 98,72 65,95 25,92 5,60 18,22" />
        </svg>
      )}

      {(type === "chart" || type === "sparkles") && (
        <svg viewBox="0 0 100 100" className={`h-24 w-24 sm:h-28 sm:w-28 ${colorMap[color]}`}>
          <polygon points="50,5 85,15 95,50 85,85 50,95 15,85 5,50 15,15" />
        </svg>
      )}

      <div className={`absolute inset-0 flex items-center justify-center ${iconColor}`}>
        {type === "lightbulb" && <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />}
        {type === "rocket" && <Rocket className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />}
        {type === "pen" && <PenTool className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />}
        {type === "chart" && <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />}
        {type === "sparkles" && <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 stroke-[2.2]" />}
      </div>
    </div>
  );
}
