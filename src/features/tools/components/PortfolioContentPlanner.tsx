"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function PortfolioContentPlanner() {
  const [projectName, setProjectName] = useState("Diagnostic Center Patient Portal");
  const [clientType, setClientType] = useState("Healthcare Provider");
  const [timeline, setTimeline] = useState("4 Weeks");
  const [role, setRole] = useState("Full-Stack Web Architect");
  const [challenge, setChallenge] = useState("Patients faced friction booking diagnostic tests on mobile devices. An outdated website had a 68% bounce rate and low enquiry conversions.");
  const [solution, setSolution] = useState("Engineered a responsive Next.js application with a searchable test catalog, sub-second load times, and direct 1-click WhatsApp appointment booking.");
  const [techStack, setTechStack] = useState("Next.js App Router, TypeScript, Tailwind CSS, Google Analytics 4, WhatsApp API");
  const [results, setResults] = useState("• 42% increase in mobile test enquiries in the first 30 days\n• Page load time decreased from 3.4s to 0.7s (LCP)\n• 100% elimination of manual phone booking errors");
  const [copied, setCopied] = useState(false);

  const markdownOutput = `# Case Study: ${projectName}

## Overview
- **Client / Industry:** ${clientType}
- **Role:** ${role}
- **Timeline:** ${timeline}
- **Technologies:** ${techStack}

---

## 01. The Challenge & Context
${challenge}

---

## 02. The Implemented Solution
${solution}

---

## 03. Key Features & Architecture
- Sub-second server-rendered page architecture
- Mobile-first ergonomic touch targets and accessible navigation
- Direct lead notifications routed to clinic reception

---

## 04. Verified Outcomes & Impact
${results}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Client / Industry
          </label>
          <input
            type="text"
            value={clientType}
            onChange={(e) => setClientType(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Timeline / Duration
          </label>
          <input
            type="text"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Your Role / Contributions
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Tech Stack
          </label>
          <input
            type="text"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            The Challenge & Problem Solved
          </label>
          <textarea
            rows={2}
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Your Solution & Technical Approach
          </label>
          <textarea
            rows={2}
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Verified Outcomes & Metrics (Bullets)
          </label>
          <textarea
            rows={3}
            value={results}
            onChange={(e) => setResults(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            STRUCTURED MARKDOWN CASE STUDY
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied Markdown" : "Copy Markdown"}</span>
          </button>
        </div>

        <pre className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-4 rounded-[2px] text-xs font-mono text-[#B0B0B0] whitespace-pre-wrap overflow-x-auto leading-relaxed">
          {markdownOutput}
        </pre>
      </div>
    </div>
  );
}
