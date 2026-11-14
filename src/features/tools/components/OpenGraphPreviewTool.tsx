"use client";

import React, { useState } from "react";
import { Share2 } from "lucide-react";

export function OpenGraphPreviewTool() {
  const [platform, setPlatform] = useState<"facebook" | "twitter" | "linkedin">("facebook");
  const [title, setTitle] = useState("DizitalGrow — Website Development & Digital Marketing");
  const [description, setDescription] = useState(
    "Build your digital presence and grow your business with website development, web apps, Meta Ads, Google Ads, SEO and conversion tracking."
  );
  const [domain, setDomain] = useState("dizitalgrow.in");
  const [imageUrl, setImageUrl] = useState("https://dizitalgrow.in/icon.png");

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Open Graph Title (og:title)
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Display Domain Name
          </label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Social Card Image URL (og:image)
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Open Graph Description (og:description)
          </label>
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>
      </div>

      {/* Simulator Platform Switcher */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold flex items-center gap-1.5">
            <Share2 className="h-3.5 w-3.5" />
            <span>SOCIAL CARD PREVIEW</span>
          </span>

          <div className="flex items-center gap-1 bg-[#101010] p-1 rounded-[2px] border border-[rgba(213,255,64,0.15)]">
            {(["facebook", "twitter", "linkedin"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatform(p)}
                className={`px-3 py-1 text-xs font-mono uppercase rounded-[2px] transition-colors cursor-pointer ${
                  platform === p
                    ? "bg-[#D5FF40] text-[#050505] font-bold"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Card Mockup */}
        <div className="max-w-xl mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm font-sans">
          {/* Image Banner */}
          <div className="relative aspect-[1.91/1] w-full bg-gray-100 border-b border-gray-200 flex items-center justify-center overflow-hidden">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <span className="text-xs font-mono text-gray-400">1200 × 630 OG Image</span>
            )}
          </div>

          {/* Card Text Content */}
          <div className="p-3.5 space-y-1 bg-[#F0F2F5] text-left">
            <span className="text-[11px] uppercase tracking-wide text-gray-500 font-mono block">
              {domain}
            </span>
            <h4 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
              {title}
            </h4>
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
