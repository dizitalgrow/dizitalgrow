"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CaptionFormatterTool() {
  const [rawText, setRawText] = useState(
    "Most websites fail because they load slowly and confuse mobile visitors.\n\nHere are 3 practical things you can fix today:\n\n1. Ensure your hero headline explains your core offer in under 5 seconds.\n2. Add a direct WhatsApp chat option to reduce contact form friction.\n3. Verify your conversion tracking so you know which ads produce revenue.\n\nWhat is the biggest challenge with your website right now?"
  );
  const [hashtags, setHashtags] = useState("#webdevelopment #digitalgrowth #nextjs #seo #conversionrate #marketing");
  const [copied, setCopied] = useState(false);

  // Convert double newlines into invisible whitespace characters (U+2800 Braille space or zero-width space)
  const formatCaption = () => {
    const formatted = rawText
      .split("\n")
      .map((line) => (line.trim() === "" ? "⠀" : line.trim()))
      .join("\n");

    if (hashtags.trim()) {
      return `${formatted}\n⠀\n${hashtags.trim()}`;
    }
    return formatted;
  };

  const formattedOutput = formatCaption();
  const charCount = formattedOutput.length;
  const hashtagCount = (formattedOutput.match(/#[a-zA-Z0-9_]+/g) || []).length;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Caption Text (With Paragraph Breaks)
            </label>
            <span className="text-[11px] font-mono text-[#D5FF40]">
              {charCount} / 2,200 chars
            </span>
          </div>
          <textarea
            rows={8}
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none leading-relaxed"
            placeholder="Write your caption with normal paragraph enters..."
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Hashtags Block
            </label>
            <span
              className={`text-[11px] font-mono ${
                hashtagCount > 30 ? "text-red-400" : "text-[#D5FF40]"
              }`}
            >
              {hashtagCount} / 30 hashtags
            </span>
          </div>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="#marketing #business #growth"
          />
        </div>
      </div>

      {/* Copy Output */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            CLEAN FORMATTED OUTPUT (READY TO PASTE)
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy Formatted Caption"}</span>
          </button>
        </div>

        <div className="p-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] rounded-[2px]">
          <pre className="text-xs text-[#B0B0B0] whitespace-pre-wrap font-sans leading-relaxed">
            {formattedOutput}
          </pre>
        </div>
      </div>
    </div>
  );
}
