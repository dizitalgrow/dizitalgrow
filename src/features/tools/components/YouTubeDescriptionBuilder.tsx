"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function YouTubeDescriptionBuilder() {
  const [summary, setSummary] = useState(
    "In this comprehensive walkthrough, we break down how to configure server-side Meta Conversions API (CAPI) with event deduplication to recover lost purchase and lead tracking data."
  );
  const [timestamps, setTimestamps] = useState(
    "00:00 - Introduction & The Attribution Problem\n01:30 - How Browser Ad Blockers Break Pixels\n04:15 - What is Meta CAPI & Server Routing\n07:45 - Event Deduplication with Event ID Matching\n11:20 - Testing in Events Manager Test Events\n14:00 - Summary & Key Takeaways"
  );
  const [links, setLinks] = useState(
    "🌐 Explore DizitalGrow: https://dizitalgrow.in\n🛠️ Free Developer & Marketing Tools: https://dizitalgrow.in/tools\n💬 Discuss Your Project: https://dizitalgrow.in/contact"
  );
  const [socials, setSocials] = useState(
    "Instagram: @dizitalgrow\nWhatsApp Channel: https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N"
  );
  const [disclaimer, setDisclaimer] = useState(
    "DISCLAIMER: This video is for educational and informational purposes. Results may vary depending on advertising spend, website architecture, and market conditions."
  );
  const [copied, setCopied] = useState(false);

  const fullDescription = `${summary}

━━━━━━━━━━━━━━━━━━━━━━━━━━
TIMESTAMPS:
${timestamps}

━━━━━━━━━━━━━━━━━━━━━━━━━━
USEFUL LINKS & RESOURCES:
${links}

━━━━━━━━━━━━━━━━━━━━━━━━━━
CONNECT WITH US:
${socials}

━━━━━━━━━━━━━━━━━━━━━━━━━━
${disclaimer}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullDescription);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            01. Video Summary & Primary Hook
          </label>
          <textarea
            rows={3}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            02. Timestamps / Video Chapters
          </label>
          <textarea
            rows={4}
            value={timestamps}
            onChange={(e) => setTimestamps(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              03. Resources & Web Links
            </label>
            <textarea
              rows={3}
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              04. Social Media Links
            </label>
            <textarea
              rows={3}
              value={socials}
              onChange={(e) => setSocials(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            05. Legal / Affiliate Disclaimer
          </label>
          <input
            type="text"
            value={disclaimer}
            onChange={(e) => setDisclaimer(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
        </div>
      </div>

      {/* Copy Output */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            STRUCTURED YOUTUBE DESCRIPTION
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy Description"}</span>
          </button>
        </div>

        <pre className="p-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] rounded-[2px] text-xs font-mono text-[#B0B0B0] whitespace-pre-wrap leading-relaxed">
          {fullDescription}
        </pre>
      </div>
    </div>
  );
}

