import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", light && "text-primary-foreground/60")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.05] sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground",
          light && "text-primary-foreground"
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground",
            light && "text-primary-foreground/70"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
