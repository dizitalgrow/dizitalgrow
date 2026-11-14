"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function InstagramBioGenerator() {
  const [role, setRole] = useState("Full-Stack Developer");
  const [valueProp, setValueProp] = useState("Building high-speed web apps & growth tools");
  const [credential, setCredential] = useState("10+ verified enterprise client launches");
  const [cta, setCta] = useState("Discuss your digital project 👇");
  const [link, setLink] = useState("dizitalgrow.in/contact");
  const [fontStyle, setFontStyle] = useState<"standard" | "uppercase" | "spaced">("standard");
  const [copied, setCopied] = useState(false);

  const formatText = (text: string) => {
    if (fontStyle === "uppercase") return text.toUpperCase();
    if (fontStyle === "spaced") return text.split("").join(" ");
    return text;
  };

  const bioLines = [
    `💻 ${formatText(role)}`,
    `🚀 ${valueProp}`,
    `⚡ ${credential}`,
    `${cta}`,
    `🔗 ${link}`,
  ];

  const fullBio = bioLines.filter(Boolean).join("\n");
  const charCount = fullBio.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullBio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            01. Professional Title / Focus
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            02. What You Build / Value Proposition
          </label>
          <input
            type="text"
            value={valueProp}
            onChange={(e) => setValueProp(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            03. Authority Credential / Proof Point
          </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            04. Call to Action
          </label>
          <input
            type="text"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            05. Destination Link
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>
      </div>

      {/* Font Styler */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold block mb-2">
          FONT STYLE VARIANT
        </span>
        <div className="flex items-center gap-2">
          {(["standard", "uppercase", "spaced"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFontStyle(s)}
              className={`px-3 py-1.5 text-xs font-mono uppercase rounded-[2px] border transition-colors cursor-pointer ${
                fontStyle === s
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Formatted Bio Preview */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            INSTAGRAM BIO PREVIEW ({charCount} / 150 chars)
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy Formatted Bio"}</span>
          </button>
        </div>

        <div className="p-5 bg-white text-black rounded-lg border border-gray-200 max-w-sm mx-auto shadow-sm">
          <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-bold text-xs text-gray-700">
                DG
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-900 block">dizitalgrow</span>
              <span className="text-[10px] text-gray-500">Digital Growth Studio</span>
            </div>
          </div>
          <pre className="text-xs text-gray-800 whitespace-pre-wrap font-sans mt-3 leading-relaxed">
            {fullBio}
          </pre>
        </div>
      </div>
    </div>
  );
}
