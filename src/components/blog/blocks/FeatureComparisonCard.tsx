import React from "react";
import Link from "next/link";
import { Check, X, ArrowUpRight, Award } from "lucide-react";
import type { FeatureComparisonCardBlock } from "@/lib/sanity";

interface FeatureCardProps {
  value: FeatureComparisonCardBlock;
}

export function FeatureComparisonCard({ value }: FeatureCardProps) {
  if (!value || !value.name) return null;

  return (
    <div className="my-8 border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] space-y-5">
      {/* Header with Title and Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(213,255,64,0.12)]">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
            {value.name}
          </h3>
          {value.bestFor && (
            <p className="font-mono text-xs text-[#B0B0B0]">
              <span className="text-[#D5FF40]">Best For:</span> {value.bestFor}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {value.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(213,255,64,0.12)] border border-[rgba(213,255,64,0.3)] text-[#D5FF40] font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
              <Award className="h-3.5 w-3.5" />
              {value.badge}
            </span>
          )}
          {value.rating && (
            <span className="font-mono text-xs font-bold text-white bg-[#141414] px-2.5 py-1 rounded-[2px] border border-[rgba(213,255,64,0.15)]">
              {value.rating}
            </span>
          )}
        </div>
      </div>

      {/* Pros & Cons Columns */}
      <div className="grid gap-4 sm:grid-cols-2">
        {value.pros && value.pros.length > 0 && (
          <div className="space-y-2 bg-[#101010] p-4 rounded-[2px] border border-[rgba(213,255,64,0.08)]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold block">
              Key Strengths:
            </span>
            <ul className="space-y-1.5">
              {value.pros.map((pro, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]"
                >
                  <Check className="h-3.5 w-3.5 text-[#D5FF40] shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {value.cons && value.cons.length > 0 && (
          <div className="space-y-2 bg-[#101010] p-4 rounded-[2px] border border-[rgba(213,255,64,0.08)]">
            <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold block">
              Limitations:
            </span>
            <ul className="space-y-1.5">
              {value.cons.map((con, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]"
                >
                  <X className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Verdict & CTA */}
      {value.verdict && (
        <div className="pt-2 text-xs sm:text-sm text-[var(--color-text-secondary)] italic border-t border-[rgba(213,255,64,0.1)]">
          <strong className="text-white not-italic font-bold">Verdict: </strong>
          {value.verdict}
        </div>
      )}

      {value.ctaUrl && (
        <div className="pt-2">
          <Link
            href={value.ctaUrl}
            className="inline-flex items-center gap-1.5 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
          >
            <span>{value.ctaLabel || "Learn More"}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
