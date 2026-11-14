import React from "react";
import { ExternalLink, BookOpenCheck } from "lucide-react";
import type { ArticleReference } from "@/lib/sanity";

interface CitationsListProps {
  references?: ArticleReference[];
  className?: string;
}

export function CitationsList({
  references,
  className = "",
}: CitationsListProps) {
  if (!references || references.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="References and Sources"
      className={`border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-7 rounded-[2px] space-y-4 ${className}`}
    >
      <div className="flex items-center gap-2 pb-3 border-b border-[rgba(213,255,64,0.12)]">
        <BookOpenCheck className="h-4 w-4 text-[#D5FF40]" />
        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
          Verified Sources & References ({references.length})
        </h3>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
        Our editorial standards require authoritative citations, official developer documentation, and primary industry data sources.
      </p>

      <ol className="space-y-3 font-mono text-xs text-[var(--color-text-secondary)] list-decimal list-inside">
        {references.map((ref, idx) => (
          <li
            key={ref._key || idx}
            className="border-b border-[rgba(213,255,64,0.08)] pb-2.5 last:border-b-0 leading-relaxed"
          >
            <span className="font-semibold text-white">
              {ref.title}
            </span>
            {ref.publisher && (
              <span className="text-[#B0B0B0] ml-1.5">— {ref.publisher}</span>
            )}
            {ref.publicationDate && (
              <span className="text-[#888888] ml-1">
                ({ref.publicationDate})
              </span>
            )}
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#D5FF40] hover:underline ml-2"
              >
                <span>[View Source]</span>
                <ExternalLink className="h-3 w-3 inline" />
              </a>
            )}
            {ref.accessDate && (
              <span className="text-[#666666] text-[10px] ml-2 block sm:inline">
                Accessed: {ref.accessDate}
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
