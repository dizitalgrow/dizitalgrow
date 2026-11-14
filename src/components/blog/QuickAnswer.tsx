import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";
import type { ArticleQuickAnswer } from "@/lib/sanity";

interface QuickAnswerProps {
  data?: ArticleQuickAnswer;
  keyTakeaways?: string[];
  className?: string;
}

export function QuickAnswer({
  data,
  keyTakeaways,
  className = "",
}: QuickAnswerProps) {
  const hasDirectAnswer = Boolean(data?.directAnswer?.trim());
  const hasRecommendation = Boolean(data?.mainRecommendation?.trim());
  const takeaways =
    (data?.takeaways && data.takeaways.length > 0
      ? data.takeaways
      : keyTakeaways) || [];

  if (!hasDirectAnswer && !hasRecommendation && takeaways.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Executive Quick Answer and Key Takeaways"
      className={`border-l-4 border-[#D5FF40] border-t border-r border-b border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] space-y-4 ${className}`}
    >
      {/* Header Eyebrow */}
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.3)] text-[#D5FF40]">
          <Zap className="h-3.5 w-3.5" />
        </div>
        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#D5FF40]">
          QUICK ANSWER // KEY TAKEAWAYS
        </span>
      </div>

      {/* Direct Answer */}
      {hasDirectAnswer && (
        <div className="space-y-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0] font-bold block">
            Direct Answer:
          </span>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
            {data?.directAnswer}
          </p>
        </div>
      )}

      {/* Core Recommendation */}
      {hasRecommendation && (
        <div className="space-y-1 bg-[#101010] border border-[rgba(213,255,64,0.12)] p-4 rounded-[2px]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#D5FF40] font-bold block">
            Main Recommendation:
          </span>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal">
            {data?.mainRecommendation}
          </p>
        </div>
      )}

      {/* Key Takeaways */}
      {takeaways.length > 0 && (
        <div className="pt-2 space-y-2 border-t border-[rgba(213,255,64,0.1)]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#B0B0B0] font-bold block">
            Core Insights to Know:
          </span>
          <ul className="space-y-2">
            {takeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <CheckCircle2 className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
