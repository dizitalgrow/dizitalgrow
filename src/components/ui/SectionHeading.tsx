import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  dotIndicator?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  light = false,
  className,
  dotIndicator = false,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  // Format eyebrow if needed
  const formattedEyebrow = eyebrow
    ? eyebrow.startsWith("//") || dotIndicator
      ? eyebrow
      : `// ${eyebrow}`
    : null;

  return (
    <div
      className={cn(
        "max-w-2xl",
        isCentered && "mx-auto text-center",
        className
      )}
    >
      {formattedEyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3",
            isCentered && "justify-center"
          )}
        >
          {dotIndicator && (
            <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
          )}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D5FF40]">
            {formattedEyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight tracking-tight",
          light && "text-primary-foreground"
        )}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={cn(
            "mt-4 text-base text-[#B0B0B0] leading-relaxed font-normal",
            light && "text-primary-foreground/80"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
