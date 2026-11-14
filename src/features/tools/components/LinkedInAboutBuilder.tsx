"use client";

import React, { useState } from "react";
import { Copy, Check, RotateCcw } from "lucide-react";

export function LinkedInAboutBuilder() {
  const [hook, setHook] = useState("I help growing startups build fast, reliable web applications that scale effortlessly.");
  const [background, setBackground] = useState("With over 5 years of engineering experience across Next.js, TypeScript, and modern cloud architecture, I focus on bridging user interface design with rock-solid server performance.");
  const [achievements, setAchievements] = useState("• Architected scalable web apps handling 50k+ monthly active users\n• Reduced average page load time from 3.2s to 0.8s for e-commerce platforms\n• Deployed server-side telemetry recovering lost attribution data");
  const [skills, setSkills] = useState("Next.js, TypeScript, React 19, Tailwind CSS, PostgreSQL, Meta CAPI, Google Analytics 4, Docker, System Architecture");
  const [cta, setCta] = useState("Interested in working together or discussing software architecture? Reach out via direct message or email me at contact@dizitalgrow.in.");
  const [copied, setCopied] = useState(false);

  const fullAbout = `${hook}

${background}

Key Highlights & Impact:
${achievements}

Core Technical Stack & Expertise:
${skills}

Let's Connect:
${cta}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAbout);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHook("");
    setBackground("");
    setAchievements("");
    setSkills("");
    setCta("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            01. Opening Hook (1-2 Sentences)
          </label>
          <textarea
            rows={2}
            value={hook}
            onChange={(e) => setHook(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="What you do and who you help..."
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            02. Professional Story & Domain Philosophy
          </label>
          <textarea
            rows={3}
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="Your background, years of experience, and primary focus..."
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            03. Key Achievements & Metrics (Bullet points)
          </label>
          <textarea
            rows={3}
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            placeholder="• Specific achievement with numbers&#10;• Second key result"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              04. Skills & Competencies
            </label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
              placeholder="e.g. Next.js, TypeScript, SEO, APIs"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              05. Call to Action / How to Reach You
            </label>
            <input
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
              placeholder="e.g. Send a DM or email me at..."
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            FORMATTED PREVIEW ({fullAbout.length} characters)
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#B0B0B0] hover:text-white px-2 py-1 rounded-[2px] border border-[rgba(213,255,64,0.15)]"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied to Clipboard" : "Copy Formatted About"}</span>
            </button>
          </div>
        </div>

        <div className="border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] p-4 rounded-[2px]">
          <pre className="text-xs text-[#B0B0B0] whitespace-pre-wrap font-sans leading-relaxed">
            {fullAbout}
          </pre>
        </div>
      </div>
    </div>
  );
}

