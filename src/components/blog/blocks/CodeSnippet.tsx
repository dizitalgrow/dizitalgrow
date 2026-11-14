"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import type { CodeBlockItem } from "@/lib/sanity";

interface CodeSnippetProps {
  value: CodeBlockItem;
}

export function CodeSnippet({ value }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  if (!value || !value.code) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-7 rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#050505] overflow-hidden">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#101010] border-b border-[rgba(213,255,64,0.12)]">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-[#D5FF40]" />
          <span className="font-mono text-xs text-white font-bold">
            {value.filename || "Terminal / Snippet"}
          </span>
          {value.language && (
            <span className="text-[10px] font-mono text-[#D5FF40] uppercase px-1.5 py-0.2 bg-[rgba(213,255,64,0.1)] rounded-[2px]">
              {value.language}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#B0B0B0] hover:text-white rounded-[2px] transition-colors focus-cyber"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#D5FF40]" />
              <span className="text-[#D5FF40] font-bold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="p-4 overflow-x-auto font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed scrollbar-none">
        <code>{value.code}</code>
      </pre>
    </div>
  );
}
