"use client";

import React, { useState } from "react";
import { Copy, Check, Link2 } from "lucide-react";

export function UtmBuilderTool() {
  const [baseUrl, setBaseUrl] = useState("https://dizitalgrow.in/services/web-development?ref=client#pricing");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("search_lead_gen_q4");
  const [term, setTerm] = useState("website development services");
  const [content, setContent] = useState("header_cta_button");
  const [copied, setCopied] = useState(false);

  const buildUrl = () => {
    if (!baseUrl.trim()) return "";
    try {
      // Parse valid URL or prepend https://
      const fullInput = baseUrl.startsWith("http://") || baseUrl.startsWith("https://")
        ? baseUrl
        : `https://${baseUrl}`;

      const parsed = new URL(fullInput);

      if (source.trim()) parsed.searchParams.set("utm_source", source.trim());
      else parsed.searchParams.delete("utm_source");

      if (medium.trim()) parsed.searchParams.set("utm_medium", medium.trim());
      else parsed.searchParams.delete("utm_medium");

      if (campaign.trim()) parsed.searchParams.set("utm_campaign", campaign.trim());
      else parsed.searchParams.delete("utm_campaign");

      if (term.trim()) parsed.searchParams.set("utm_term", term.trim());
      else parsed.searchParams.delete("utm_term");

      if (content.trim()) parsed.searchParams.set("utm_content", content.trim());
      else parsed.searchParams.delete("utm_content");

      return parsed.toString();
    } catch {
      return "Invalid Base URL format. Please enter a valid URL.";
    }
  };

  const finalUrl = buildUrl();

  const handleCopy = () => {
    if (finalUrl && !finalUrl.startsWith("Invalid")) {
      navigator.clipboard.writeText(finalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Website Destination URL (Supports existing query params and hash fragments)
          </label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            placeholder="https://example.com/page?existing=1#section"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Campaign Source (utm_source) <span className="text-[#D5FF40]">*</span>
            </label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              placeholder="e.g. google, meta, newsletter"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Campaign Medium (utm_medium) <span className="text-[#D5FF40]">*</span>
            </label>
            <input
              type="text"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              placeholder="e.g. cpc, email, banner, social"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Campaign Name (utm_campaign) <span className="text-[#D5FF40]">*</span>
            </label>
            <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              placeholder="e.g. summer_launch_2026"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Campaign Term (utm_term) <span className="text-[#A1A1AA] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              placeholder="e.g. keywords for search ads"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Campaign Content (utm_content) <span className="text-[#A1A1AA] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              placeholder="e.g. header_button_variant_a"
            />
          </div>
        </div>
      </div>

      {/* Generated Output */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold flex items-center gap-1.5">
            <Link2 className="h-3.5 w-3.5" />
            <span>GENERATED CAMPAIGN URL</span>
          </span>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!finalUrl || finalUrl.startsWith("Invalid")}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy URL"}</span>
          </button>
        </div>

        <div className="p-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.25)] rounded-[2px]">
          <p className="text-xs font-mono text-white break-all leading-relaxed select-all">
            {finalUrl}
          </p>
        </div>
      </div>
    </div>
  );
}
