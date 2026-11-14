"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function BoxShadowGenerator() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(8);
  const [blurRadius, setBlurRadius] = useState(24);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [opacity, setOpacity] = useState(25); // percentage
  const [isInset, setIsInset] = useState(false);
  const [copied, setCopied] = useState(false);

  // Convert hex color + opacity to rgba
  const hexToRgba = (hex: string, alphaPercent: number) => {
    let clean = hex.replace("#", "");
    if (clean.length === 3) {
      clean = clean.split("").map((c) => c + c).join("");
    }
    const r = parseInt(clean.substring(0, 2), 16) || 0;
    const g = parseInt(clean.substring(2, 4), 16) || 0;
    const b = parseInt(clean.substring(4, 6), 16) || 0;
    const a = (alphaPercent / 100).toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const rgbaColor = hexToRgba(shadowColor, opacity);
  const boxShadowValue = `${isInset ? "inset " : ""}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${rgbaColor}`;
  const cssRule = `box-shadow: ${boxShadowValue};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssRule);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Controls */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white font-bold">X OFFSET</span>
              <span className="text-[#D5FF40]">{offsetX}px</span>
            </div>
            <input
              type="range"
              min={-50}
              max={50}
              value={offsetX}
              onChange={(e) => setOffsetX(Number(e.target.value))}
              className="w-full accent-[#D5FF40]"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white font-bold">Y OFFSET</span>
              <span className="text-[#D5FF40]">{offsetY}px</span>
            </div>
            <input
              type="range"
              min={-50}
              max={50}
              value={offsetY}
              onChange={(e) => setOffsetY(Number(e.target.value))}
              className="w-full accent-[#D5FF40]"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white font-bold">BLUR RADIUS</span>
              <span className="text-[#D5FF40]">{blurRadius}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={blurRadius}
              onChange={(e) => setBlurRadius(Number(e.target.value))}
              className="w-full accent-[#D5FF40]"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white font-bold">SPREAD RADIUS</span>
              <span className="text-[#D5FF40]">{spreadRadius}px</span>
            </div>
            <input
              type="range"
              min={-30}
              max={50}
              value={spreadRadius}
              onChange={(e) => setSpreadRadius(Number(e.target.value))}
              className="w-full accent-[#D5FF40]"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-white font-bold">OPACITY</span>
              <span className="text-[#D5FF40]">{opacity}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full accent-[#D5FF40]"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[rgba(213,255,64,0.12)]">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
                className="h-7 w-9 rounded-[2px] bg-transparent cursor-pointer border border-[rgba(213,255,64,0.2)]"
              />
              <span className="text-xs font-mono text-[#D5FF40]">{shadowColor}</span>
            </div>

            <label className="text-xs font-mono text-[#B0B0B0] flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isInset}
                onChange={(e) => setIsInset(e.target.checked)}
                className="accent-[#D5FF40]"
              />
              <span>Inset Shadow</span>
            </label>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
            LIVE SHADOW PREVIEW
          </span>
          <div className="h-56 bg-[#FAFAFA] rounded-[2px] border border-gray-300 flex items-center justify-center p-6">
            <div
              className="w-36 h-36 bg-white rounded-[4px] border border-gray-200 flex items-center justify-center text-xs font-mono text-gray-800 transition-all text-center p-2"
              style={{ boxShadow: boxShadowValue }}
            >
              Elevation Card
            </div>
          </div>
        </div>
      </div>

      {/* Copy CSS Code */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            CSS OUTPUT CODE
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#D5FF40] text-[#050505] px-3.5 py-1.5 rounded-[2px] font-bold hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied CSS" : "Copy CSS"}</span>
          </button>
        </div>

        <div className="p-4 bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] rounded-[2px]">
          <code className="text-xs font-mono text-[#D5FF40] select-all">
            {cssRule}
          </code>
        </div>
      </div>
    </div>
  );
}

