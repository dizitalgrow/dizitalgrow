"use client";

import React, { useState, useMemo } from "react";
import { Download, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";
import {
  generateQRCodeSVG,
  generateQRCodeDataURL,
  type EccLevel,
} from "@/lib/qr-code";

export function QrCodeGeneratorTool() {
  const [text, setText] = useState("https://dizitalgrow.in");
  const [size, setSize] = useState(512);
  const [ecc, setEcc] = useState<EccLevel>("M");
  const [isCopied, setIsCopied] = useState(false);

  // Generate SVG synchronously for immediate reactivity
  const svgContent = useMemo(() => {
    return generateQRCodeSVG(text || "https://dizitalgrow.in", {
      ecc,
      margin: 4,
    });
  }, [text, ecc]);

  const downloadSVG = () => {
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dizitalgrow-qrcode-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = async () => {
    try {
      const dataUrl = await generateQRCodeDataURL(text || "https://dizitalgrow.in", {
        size,
        ecc,
        margin: 4,
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `dizitalgrow-qrcode-${size}px.png`;
      a.click();
    } catch (err) {
      console.error("Failed to generate PNG:", err);
    }
  };

  const copySVG = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(svgContent);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-6">
      {/* Input controls */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1.5">
            Destination URL or Text to Encode
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            placeholder="https://yourwebsite.com or any text"
          />
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-[#B0B0B0] uppercase mr-1">
            Presets:
          </span>
          <button
            type="button"
            onClick={() => setText("https://dizitalgrow.in")}
            className="px-2.5 py-1 text-[11px] font-mono bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40] rounded-[2px] hover:border-[#D5FF40] cursor-pointer"
          >
            DizitalGrow URL
          </button>
          <button
            type="button"
            onClick={() =>
              setText("https://wa.me/919187126193?text=Hi%20DizitalGrow")
            }
            className="px-2.5 py-1 text-[11px] font-mono bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-white rounded-[2px] cursor-pointer"
          >
            WhatsApp Link
          </button>
          <button
            type="button"
            onClick={() => setText("mailto:contact@dizitalgrow.in")}
            className="px-2.5 py-1 text-[11px] font-mono bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-white rounded-[2px] cursor-pointer"
          >
            Email (mailto)
          </button>
          <button
            type="button"
            onClick={() => setText("tel:+919187126193")}
            className="px-2.5 py-1 text-[11px] font-mono bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#B0B0B0] hover:text-white rounded-[2px] cursor-pointer"
          >
            Phone Number
          </button>
        </div>

        {/* Resolution & Error Correction Level */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-[rgba(213,255,64,0.12)]">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-white font-bold">EXPORT RESOLUTION</span>
              <span className="text-[#D5FF40] font-bold">
                {size} × {size} px
              </span>
            </div>
            <input
              type="range"
              min={128}
              max={1024}
              step={64}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-[#D5FF40] cursor-pointer"
            />
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1.5">
              ERROR CORRECTION LEVEL
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {(["L", "M", "Q", "H"] as EccLevel[]).map((level) => {
                const labels: Record<EccLevel, string> = {
                  L: "L (7%)",
                  M: "M (15%)",
                  Q: "Q (25%)",
                  H: "H (30%)",
                };
                const isSelected = ecc === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setEcc(level)}
                    className={`py-1.5 text-[11px] font-mono font-bold rounded-[2px] transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#D5FF40] text-[#050505]"
                        : "bg-[#141414] text-[#B0B0B0] border border-[rgba(213,255,64,0.15)] hover:text-white"
                    }`}
                  >
                    {labels[level]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Canvas Preview & Download Buttons */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#D5FF40]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
              100% MOBILE SCANNABLE (ISO/IEC 18004 STANDARD)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={copySVG}
              className="inline-flex items-center gap-1.5 text-xs font-mono border border-[rgba(213,255,64,0.25)] text-[#B0B0B0] hover:text-white px-3 py-1.5 rounded-[2px] transition-colors cursor-pointer"
            >
              {isCopied ? <Check className="h-3.5 w-3.5 text-[#D5FF40]" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{isCopied ? "Copied SVG" : "Copy SVG"}</span>
            </button>
            <button
              type="button"
              onClick={downloadSVG}
              className="inline-flex items-center gap-1.5 text-xs font-mono border border-[rgba(213,255,64,0.25)] text-[#D5FF40] px-3 py-1.5 rounded-[2px] hover:bg-[#D5FF40] hover:text-[#050505] transition-colors cursor-pointer"
            >
              <Download className="h-3 w-3" />
              <span>Download SVG</span>
            </button>
            <button
              type="button"
              onClick={downloadPNG}
              className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
            >
              <Download className="h-3 w-3" />
              <span>Download PNG ({size}px)</span>
            </button>
          </div>
        </div>

        {/* High-contrast crisp preview container */}
        <div className="p-8 sm:p-12 bg-[#050505] border border-[rgba(213,255,64,0.2)] rounded-[2px] flex flex-col items-center justify-center space-y-4">
          <div className="p-6 bg-white rounded-[4px] shadow-sm max-w-[260px] w-full aspect-square flex items-center justify-center">
            <div
              className="w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#B0B0B0]">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span>Point any smartphone camera or Google Lens to scan instantly</span>
          </div>
        </div>
      </div>
    </div>
  );
}
