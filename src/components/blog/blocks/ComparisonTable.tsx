import React from "react";
import type { ComparisonTableBlock } from "@/lib/sanity";

interface ComparisonTableProps {
  value: ComparisonTableBlock;
}

export function ComparisonTable({ value }: ComparisonTableProps) {
  if (!value || !value.headers || value.headers.length === 0) {
    return null;
  }

  const { caption, headers, highlightColumnIndex, rows = [] } = value;

  return (
    <figure className="my-8 space-y-2">
      {caption && (
        <figcaption className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40]">
          {"// " + caption}
        </figcaption>
      )}

      <div className="overflow-x-auto border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] rounded-[2px] scrollbar-none">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-[rgba(213,255,64,0.18)] bg-[#101010]">
              {headers.map((header, idx) => {
                const isHighlighted = idx === highlightColumnIndex;
                return (
                  <th
                    key={idx}
                    scope="col"
                    className={`py-3.5 px-4 font-bold uppercase tracking-wider ${
                      isHighlighted
                        ? "text-[#D5FF40] bg-[rgba(213,255,64,0.08)] border-x border-[rgba(213,255,64,0.2)]"
                        : "text-white"
                    }`}
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(213,255,64,0.08)]">
            {rows.map((row, rowIdx) => (
              <tr
                key={row._key || rowIdx}
                className="hover:bg-[rgba(213,255,64,0.02)] transition-colors"
              >
                {row.cells?.map((cell, cellIdx) => {
                  const isHighlighted = cellIdx === highlightColumnIndex;
                  return (
                    <td
                      key={cellIdx}
                      className={`py-3.5 px-4 text-xs leading-relaxed ${
                        isHighlighted
                          ? "font-semibold text-white bg-[rgba(213,255,64,0.05)] border-x border-[rgba(213,255,64,0.15)]"
                          : "text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
