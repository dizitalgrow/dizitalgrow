"use client";

import React, { useState } from "react";
import { Copy, Check, AlertCircle, RotateCcw } from "lucide-react";

export function JsonFormatterTool() {
  const [inputJson, setInputJson] = useState(`{
  "name": "DizitalGrow",
  "services": ["Website Development", "Web Applications", "Meta CAPI"],
  "metrics": {
    "speed": "<0.8s",
    "verified": true
  }
}`);
  const [outputJson, setOutputJson] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatBeautify = () => {
    setErrorMsg(null);
    try {
      if (!inputJson.trim()) {
        setOutputJson("");
        return;
      }
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed, null, 2));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      setErrorMsg(`JSON Parse Error: ${message}`);
    }
  };

  const formatMinify = () => {
    setErrorMsg(null);
    try {
      if (!inputJson.trim()) {
        setOutputJson("");
        return;
      }
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      setErrorMsg(`JSON Parse Error: ${message}`);
    }
  };

  const handleCopy = () => {
    const textToCopy = outputJson || inputJson;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setInputJson("");
    setOutputJson("");
    setErrorMsg(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={formatBeautify}
            className="px-4 py-2 bg-[#D5FF40] text-[#050505] text-xs font-mono font-bold uppercase rounded-[2px] hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            Format (Beautify 2-Space)
          </button>
          <button
            type="button"
            onClick={formatMinify}
            className="px-4 py-2 bg-[#141414] text-white border border-[rgba(213,255,64,0.2)] text-xs font-mono uppercase rounded-[2px] hover:border-[#D5FF40] hover:text-[#D5FF40] transition-colors cursor-pointer"
          >
            Minify (Single Line)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1 text-xs font-mono text-[#B0B0B0] hover:text-white px-2.5 py-1.5 rounded-[2px] border border-[rgba(213,255,64,0.15)]"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Clear</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono border border-[rgba(213,255,64,0.25)] text-[#D5FF40] px-3.5 py-1.5 rounded-[2px] hover:bg-[#D5FF40] hover:text-[#050505] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy JSON"}</span>
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-950/30 border border-red-500/40 rounded-[2px] text-xs text-red-300 font-mono flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block mb-1">
            INPUT JSON
          </span>
          <textarea
            rows={14}
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-white focus:border-[#D5FF40] outline-none font-mono leading-relaxed"
            placeholder="Paste your JSON here..."
          />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#D5FF40] font-bold block mb-1">
            FORMATTED OUTPUT
          </span>
          <textarea
            rows={14}
            readOnly
            value={outputJson || (errorMsg ? "" : inputJson)}
            className="w-full bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-3 text-xs text-[#D5FF40] outline-none font-mono leading-relaxed select-all"
            placeholder="Formatted JSON will appear here..."
          />
        </div>
      </div>
    </div>
  );
}
