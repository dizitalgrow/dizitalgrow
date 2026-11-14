"use client";

import React, { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";

export function SerpPreviewTool() {
  const [title, setTitle] = useState("Website Development Services | DizitalGrow");
  const [url, setUrl] = useState("https://dizitalgrow.in/services/web-development");
  const [description, setDescription] = useState(
    "High-performance business website development on Next.js. Engineered to explain your value, build trust, and turn visitors into real customer enquiries."
  );
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  const titleChars = title.length;
  const descChars = description.length;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              SEO Title (50-60 characters recommended)
            </label>
            <span
              className={`text-[11px] font-mono ${
                titleChars > 60 ? "text-amber-400" : "text-[#D5FF40]"
              }`}
            >
              {titleChars} / 60 chars
            </span>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Target Page URL
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Meta Description (120-155 characters recommended)
            </label>
            <span
              className={`text-[11px] font-mono ${
                descChars > 160 ? "text-amber-400" : "text-[#D5FF40]"
              }`}
            >
              {descChars} / 160 chars
            </span>
          </div>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none leading-relaxed"
          />
        </div>
      </div>

      {/* Simulator View Controls */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            LIVE GOOGLE SERP SIMULATION
          </span>
          <div className="flex items-center gap-1 bg-[#101010] p-1 rounded-[2px] border border-[rgba(213,255,64,0.15)]">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-[2px] transition-colors cursor-pointer ${
                device === "desktop"
                  ? "bg-[#D5FF40] text-[#050505] font-bold"
                  : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              <Monitor className="h-3 w-3" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-[2px] transition-colors cursor-pointer ${
                device === "mobile"
                  ? "bg-[#D5FF40] text-[#050505] font-bold"
                  : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              <Smartphone className="h-3 w-3" />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Google SERP Simulated Box */}
        <div className="p-6 bg-white rounded-[2px] border border-gray-200 shadow-sm max-w-3xl">
          <div className="space-y-1.5 font-sans">
            {/* Top Favicon + Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#202124]">
              <div className="h-5 w-5 rounded-full bg-[#FAFAFA] border border-gray-300 flex items-center justify-center text-[10px] font-bold text-[#65A30D]">
                DG
              </div>
              <div className="flex flex-col leading-tight truncate">
                <span className="text-[12px] font-medium text-[#202124] truncate">
                  DizitalGrow
                </span>
                <span className="text-[11px] text-[#4d5156] truncate">
                  {url}
                </span>
              </div>
            </div>

            {/* Clickable Blue Title */}
            <h3
              className={`text-[#1a0dab] font-normal leading-normal cursor-pointer hover:underline ${
                device === "mobile" ? "text-base font-medium" : "text-xl font-normal"
              }`}
            >
              {title || "Untitle Page"}
            </h3>

            {/* Gray Description */}
            <p
              className={`text-[#4d5156] leading-snug line-clamp-2 ${
                device === "mobile" ? "text-xs" : "text-sm"
              }`}
            >
              {description || "No description provided."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
