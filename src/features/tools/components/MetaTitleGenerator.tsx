"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function MetaTitleGenerator() {
  const [keyword, setKeyword] = useState("Website Development");
  const [brand, setBrand] = useState("DizitalGrow");
  const [location, setLocation] = useState("India");
  const [pageType, setPageType] = useState<"service" | "ecommerce" | "guide" | "local">("service");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Approximate pixel width estimation in Arial 20px (Google SERP font)
  const estimatePixelWidth = (text: string) => {
    let width = 0;
    for (const char of text) {
      if (/[il1.,':;!|]/.test(char)) width += 5;
      else if (/[fjrtI]/.test(char)) width += 7;
      else if (/[abcdeghknopquvxyzs0-9-]/.test(char)) width += 10;
      else if (/[wmdABCDEFGHJKLNPQRSTUVXYZ_]/.test(char)) width += 13;
      else if (/[WM]/.test(char)) width += 16;
      else if (/ /.test(char)) width += 5;
      else width += 10;
    }
    return Math.round(width * 0.95);
  };

  const getTitles = () => {
    switch (pageType) {
      case "service":
        return [
          `${keyword} Services | ${brand}`,
          `High-Performance ${keyword} — ${brand}`,
          `${keyword} That Drives Conversions | ${brand}`,
          `${keyword} & Digital Growth Partner — ${brand}`,
        ];
      case "local":
        return [
          `${keyword} in ${location} | ${brand}`,
          `Best ${keyword} Services in ${location} — ${brand}`,
          `Top-Rated ${keyword} Company ${location} | ${brand}`,
          `${keyword} Agency in ${location} — Discuss Your Project`,
        ];
      case "ecommerce":
        return [
          `Buy ${keyword} Online | Best Prices & Free Shipping — ${brand}`,
          `${keyword} Shop — Premium Quality & Fast Delivery | ${brand}`,
          `Top ${keyword} Collection | Shop Online at ${brand}`,
        ];
      case "guide":
        return [
          `The Complete Guide to ${keyword} (2026) | ${brand}`,
          `How to Master ${keyword}: Step-by-Step Guide — ${brand}`,
          `${keyword} Explained: Architecture & Strategy | ${brand}`,
        ];
    }
  };

  const titles = getTitles();

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
            Target Keyword
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. Website Development"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Brand Name
          </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. DizitalGrow"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Location / Qualifier
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            placeholder="e.g. India or Mumbai"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold mb-2">
          PAGE INTENT TYPE
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["service", "local", "ecommerce", "guide"] as const).map((pt) => (
            <button
              key={pt}
              type="button"
              onClick={() => setPageType(pt)}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] border transition-colors cursor-pointer ${
                pageType === pt
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              {pt}
            </button>
          ))}
        </div>
      </div>

      {/* Generated Results with Pixel Counter */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold block">
          GENERATED SEO TITLES &amp; SERP PIXEL WIDTH
        </span>

        {titles.map((title, idx) => {
          const charLen = title.length;
          const pixelWidth = estimatePixelWidth(title);
          const isSafe = pixelWidth <= 580 && charLen <= 60;

          return (
            <div
              key={idx}
              className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-4 rounded-[2px] flex items-center justify-between gap-4 hover:border-[#D5FF40] transition-colors"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-white font-medium truncate">
                  {title}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
                  <span className={charLen > 60 ? "text-amber-400" : "text-[#B0B0B0]"}>
                    {charLen} chars {charLen <= 60 ? "(Optimal)" : "(May truncate)"}
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className={pixelWidth > 580 ? "text-amber-400" : "text-[#D5FF40]"}>
                    ~{pixelWidth}px / 580px max
                  </span>
                  <span className="text-gray-500">·</span>
                  <span className={isSafe ? "text-green-400" : "text-amber-400"}>
                    {isSafe ? "✓ Safe on Google SERP" : "⚠ Truncation risk"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(title, idx)}
                className="p-2 rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#141414] text-[#D5FF40] hover:bg-[#D5FF40] hover:text-[#050505] transition-colors shrink-0 cursor-pointer"
                aria-label="Copy title"
              >
                {copiedIndex === idx ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

