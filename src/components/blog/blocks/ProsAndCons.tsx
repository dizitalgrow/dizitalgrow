import React from "react";
import { Check, X } from "lucide-react";
import type { ProsAndConsBlock } from "@/lib/sanity";

interface ProsAndConsProps {
  value: ProsAndConsBlock;
}

export function ProsAndCons({ value }: ProsAndConsProps) {
  if (!value || (!value.pros?.length && !value.cons?.length)) return null;

  return (
    <div className="my-8 border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] space-y-4">
      {value.title && (
        <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white pb-3 border-b border-[rgba(213,255,64,0.1)]">
          {value.title}
        </h4>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Pros */}
        <div className="space-y-3 bg-[#101010] p-5 rounded-[2px] border border-[#D5FF40]/20">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D5FF40]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40]">
              ADVANTAGES & PROS
            </span>
          </div>
          <ul className="space-y-2">
            {value.pros?.map((pro, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <Check className="h-4 w-4 text-[#D5FF40] shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="space-y-3 bg-[#101010] p-5 rounded-[2px] border border-amber-500/20">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
              LIMITATIONS & CONS
            </span>
          </div>
          <ul className="space-y-2">
            {value.cons?.map((con, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <X className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
