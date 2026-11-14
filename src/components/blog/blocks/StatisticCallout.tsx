import React from "react";
import { TrendingUp } from "lucide-react";
import type { StatisticCalloutBlock } from "@/lib/sanity";

interface StatCalloutProps {
  value: StatisticCalloutBlock;
}

export function StatisticCallout({ value }: StatCalloutProps) {
  if (!value || !value.value) return null;

  return (
    <div className="my-8 border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5" />
          KEY METRIC BENCHMARK
        </span>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-normal leading-relaxed max-w-md">
          {value.label}
        </p>
        {value.source && (
          <span className="text-[10px] font-mono text-[#888888] block">
            Source: {value.source}
          </span>
        )}
      </div>

      <div className="shrink-0 text-left sm:text-right">
        <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#D5FF40] tracking-tight">
          {value.value}
        </span>
      </div>
    </div>
  );
}
