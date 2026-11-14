"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function LinkedInHeadlineGenerator() {
  const [role, setRole] = useState("Full-Stack Developer");
  const [niche, setNiche] = useState("Next.js & TypeScript Applications");
  const [targetAudience, setTargetAudience] = useState("Helping startups scale high-performance web products");
  const [tone, setTone] = useState<"professional" | "results" | "creative" | "founder">("results");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getHeadlines = () => {
    switch (tone) {
      case "results":
        return [
          `${role} | Building ${niche} | ${targetAudience}`,
          `${role} specializing in ${niche} • Measurable Engineering Impact`,
          `${role} | Transforming complex requirements into ${niche} | Open to Opportunities`,
          `High-Impact ${role} • ${niche} • ${targetAudience}`,
        ];
      case "professional":
        return [
          `${role} | ${niche} Specialist`,
          `${role} • Expertise in ${niche} • Enterprise Delivery`,
          `Senior ${role} | Disciplined Software Architecture & ${niche}`,
          `${role} focused on Scalability, Precision, and ${niche}`,
        ];
      case "creative":
        return [
          `Engineering the Future of ${niche} as a ${role}`,
          `${role} Crafting Next-Gen ${niche} • ${targetAudience}`,
          `Obsessed with Clean Architecture & Fast Products • ${role}`,
          `${role} • Bridging Product Design & High-Performance ${niche}`,
        ];
      case "founder":
        return [
          `Founder & ${role} | Building ${niche} | ${targetAudience}`,
          `${role} & Tech Entrepreneur | Pioneering ${niche}`,
          `Bootstrapping Modern Digital Platforms • ${role} • ${niche}`,
          `Building Scalable Web Software • Founder at the intersection of ${niche}`,
        ];
    }
  };

  const headlines = getHeadlines();

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Job Title or Primary Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Full-Stack Developer"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Specialization or Tech Stack
          </label>
          <input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Next.js & TypeScript"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Value Proposition or Target Audience
          </label>
          <input
            type="text"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Helping startups scale high-performance web products"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold mb-2">
          SELECT HEADLINE TONE
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["results", "professional", "creative", "founder"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTone(t)}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] border transition-colors cursor-pointer ${
                tone === t
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold block">
          GENERATED HEADLINES (CLICK TO COPY)
        </span>

        {headlines.map((hl, idx) => (
          <div
            key={idx}
            className="group border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-4 rounded-[2px] flex items-center justify-between gap-4 hover:border-[#D5FF40] transition-colors"
          >
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-white font-medium">{hl}</p>
              <span className="font-mono text-[10px] text-[#A1A1AA]">
                {hl.length} / 220 chars {hl.length <= 220 ? "✓ Optimal length" : "⚠ Exceeds limit"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(hl, idx)}
              className="p-2 rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#141414] text-[#D5FF40] hover:bg-[#D5FF40] hover:text-[#050505] transition-colors shrink-0 cursor-pointer"
              aria-label="Copy headline"
            >
              {copiedIndex === idx ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
