"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function ResumeSummaryBuilder() {
  const [title, setTitle] = useState("Frontend Engineer");
  const [years, setYears] = useState("4");
  const [keySkills, setKeySkills] = useState("Next.js, TypeScript, React 19, Tailwind CSS, REST APIs");
  const [impactMetric, setImpactMetric] = useState("improved application Core Web Vitals to 99+ and reduced load times by 40%");
  const [industryFocus, setIndustryFocus] = useState("high-growth SaaS and e-commerce platforms");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getSummaries = () => {
    return [
      `Results-oriented ${title} with ${years}+ years of experience engineering high-performance user interfaces for ${industryFocus}. Proficient in ${keySkills}, with a proven track record having ${impactMetric}. Dedicated to clean software architecture, accessibility, and sub-second load times.`,
      `Performance-focused ${title} specializing in ${keySkills}. Over ${years} years delivering robust web applications across ${industryFocus}, consistently ${impactMetric}. Passionate about technical precision, code reusability, and collaborative cross-functional execution.`,
      `Detail-driven ${title} offering ${years}+ years of end-to-end frontend experience. Deep expertise across ${keySkills}. Recognized for having ${impactMetric} while collaborating directly with design and backend teams to deliver scalable software solutions.`,
    ];
  };

  const summaries = getSummaries();

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Professional Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Frontend Engineer"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Years of Experience
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. 4"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Industry / Domain Focus
          </label>
          <input
            type="text"
            value={industryFocus}
            onChange={(e) => setIndustryFocus(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. high-growth SaaS platforms"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Key Technical Skills (Keywords for ATS)
          </label>
          <input
            type="text"
            value={keySkills}
            onChange={(e) => setKeySkills(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Next.js, TypeScript, React 19, Tailwind CSS"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Quantifiable Impact Metric
          </label>
          <input
            type="text"
            value={impactMetric}
            onChange={(e) => setImpactMetric(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. reduced load times by 40%"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold block">
          ATS-OPTIMIZED RESUME SUMMARIES (CLICK TO COPY)
        </span>

        {summaries.map((sum, idx) => (
          <div
            key={idx}
            className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-4 rounded-[2px] flex items-start justify-between gap-4 hover:border-[#D5FF40] transition-colors"
          >
            <p className="text-xs text-[#B0B0B0] leading-relaxed font-sans">{sum}</p>
            <button
              type="button"
              onClick={() => handleCopy(sum, idx)}
              className="p-2 rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#141414] text-[#D5FF40] hover:bg-[#D5FF40] hover:text-[#050505] transition-colors shrink-0 cursor-pointer"
              aria-label="Copy summary"
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
