"use client";

import React, { useState } from "react";
import { Copy, Check, Calendar } from "lucide-react";

interface DayPlan {
  day: string;
  pillar: string;
  hook: string;
  format: string;
  goal: string;
}

export function SocialMediaContentCalendar() {
  const [industry, setIndustry] = useState("Digital Agency / Tech");
  const [platform, setPlatform] = useState("LinkedIn");
  const [copied, setCopied] = useState(false);

  const schedule: DayPlan[] = [
    {
      day: "Monday",
      pillar: "Authority & Industry Mythbusting",
      hook: "Most companies think they have a traffic problem. They actually have a conversion problem.",
      format: "Long-form text post + Key statistics breakdown",
      goal: "Establish subject-matter authority and spark debate",
    },
    {
      day: "Tuesday",
      pillar: "Step-by-Step Educational Tutorial",
      hook: "How we configure server-side Meta CAPI with deduplication in 4 simple steps.",
      format: "Carousel / Step-by-Step Slides",
      goal: "Generate post saves and technical bookmarks",
    },
    {
      day: "Wednesday",
      pillar: "Case Study / Client Teardown",
      hook: "How this local clinic generated 42% more inquiries without increasing their ad spend.",
      format: "Storytelling post with Before vs. After results",
      goal: "Build commercial credibility with verified proof",
    },
    {
      day: "Thursday",
      pillar: "Curated Tools & Productivity",
      hook: "3 free developer and marketing utilities that save our team 5 hours every week.",
      format: "Resource list with direct website links",
      goal: "Drive high social engagement and profile visits",
    },
    {
      day: "Friday",
      pillar: "Personal Philosophy & Working Principles",
      hook: "Why we never promise guaranteed #1 rankings or instant millions.",
      format: "Transparent founder/team reflection",
      goal: "Build authentic trust and long-term brand affinity",
    },
    {
      day: "Saturday",
      pillar: "Direct Commercial Offer & Consultation",
      hook: "Planning to rebuild your website or fix broken ad tracking next month? Here is how to work with us.",
      format: "Direct value callout + WhatsApp/Contact Link",
      goal: "Capture qualified inbound consultation inquiries",
    },
    {
      day: "Sunday",
      pillar: "Weekly Wrap-up & Question Prompt",
      hook: "What was the biggest technical bottleneck your team solved this week?",
      format: "Short question + poll/open discussion",
      goal: "Community discussion and relationship building",
    },
  ];

  const exportText = schedule
    .map(
      (s) =>
        `[${s.day}] Pillar: ${s.pillar}\nHook: "${s.hook}"\nFormat: ${s.format}\nGoal: ${s.goal}\n`
    )
    .join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(exportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Industry / Niche
          </label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Primary Target Platform
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          >
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter/X">Twitter / X</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>7-DAY BALANCED CONTENT BLUEPRINT ({platform.toUpperCase()})</span>
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied Calendar" : "Copy Schedule"}</span>
          </button>
        </div>

        <div className="grid gap-3">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] p-4 rounded-[2px] space-y-2 hover:border-[#D5FF40] transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 rounded-[2px]">
                  {day.day.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono text-[#B0B0B0]">
                  Format: {day.format}
                </span>
              </div>
              <p className="text-xs font-bold text-white leading-snug">
                Pillar: {day.pillar}
              </p>
              <p className="text-xs text-[#D5FF40] font-mono italic">
                Hook: &ldquo;{day.hook}&rdquo;
              </p>
              <p className="text-[11px] text-[#A1A1AA] pt-1 border-t border-[rgba(213,255,64,0.1)]">
                Objective: {day.goal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
