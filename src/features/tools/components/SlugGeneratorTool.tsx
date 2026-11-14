"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function SlugGeneratorTool() {
  const [text, setText] = useState("How to Build a High-Performance Next.js Application in 2026!");
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [removeStopWords, setRemoveStopWords] = useState(false);
  const [copied, setCopied] = useState(false);

  const STOP_WORDS = new Set([
    "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in",
    "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the",
    "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"
  ]);

  const generateSlug = () => {
    const clean = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Strip diacritics
      .replace(/[^a-z0-9\s-_]/g, ""); // Remove special characters

    let words = clean.split(/\s+/).filter(Boolean);

    if (removeStopWords) {
      words = words.filter((w) => !STOP_WORDS.has(w));
    }

    return words.join(separator);
  };

  const slug = generateSlug();

  const handleCopy = () => {
    if (slug) {
      navigator.clipboard.writeText(slug);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
          Input Title or Headline
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          placeholder="e.g. My Awesome Article Title"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold block mb-1">
            SEPARATOR
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSeparator("-")}
              className={`px-3 py-1 text-xs font-mono rounded-[2px] border cursor-pointer ${
                separator === "-"
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)]"
              }`}
            >
              Hyphen (-)
            </button>
            <button
              type="button"
              onClick={() => setSeparator("_")}
              className={`px-3 py-1 text-xs font-mono rounded-[2px] border cursor-pointer ${
                separator === "_"
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)]"
              }`}
            >
              Underscore (_)
            </button>
          </div>
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold block mb-1">
            FILTER OPTIONS
          </span>
          <label className="inline-flex items-center gap-2 text-xs font-mono text-[#B0B0B0] cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopWords}
              onChange={(e) => setRemoveStopWords(e.target.checked)}
              className="accent-[#D5FF40]"
            />
            <span>Strip Common Stop Words (the, a, and, in...)</span>
          </label>
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            GENERATED URL SLUG
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy Slug"}</span>
          </button>
        </div>

        <div className="p-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.25)] rounded-[2px]">
          <p className="text-xs sm:text-sm font-mono text-[#D5FF40] break-all select-all">
            {slug || "slug-output-will-appear-here"}
          </p>
        </div>
      </div>
    </div>
  );
}
