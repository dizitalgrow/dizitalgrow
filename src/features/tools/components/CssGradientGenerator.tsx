"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CssGradientGenerator() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState("#050505");
  const [color2, setColor2] = useState("#101010");
  const [color3, setColor3] = useState("#D5FF40");
  const [includeThird, setIncludeThird] = useState(false);
  const [copied, setCopied] = useState(false);

  const getGradientCss = () => {
    if (type === "linear") {
      return includeThird
        ? `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`
        : `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
    } else {
      return includeThird
        ? `radial-gradient(circle at center, ${color1} 0%, ${color2} 50%, ${color3} 100%)`
        : `radial-gradient(circle at center, ${color1} 0%, ${color2} 100%)`;
    }
  };

  const gradientRule = `background: ${getGradientCss()};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(gradientRule);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-2">
              GRADIENT TYPE
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setType("linear")}
                className={`px-3 py-1.5 text-xs font-mono rounded-[2px] border cursor-pointer ${
                  type === "linear"
                    ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                    : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)]"
                }`}
              >
                Linear Gradient
              </button>
              <button
                type="button"
                onClick={() => setType("radial")}
                className={`px-3 py-1.5 text-xs font-mono rounded-[2px] border cursor-pointer ${
                  type === "radial"
                    ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                    : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)]"
                }`}
              >
                Radial Gradient
              </button>
            </div>
          </div>

          {type === "linear" && (
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white font-bold">ANGLE</span>
                <span className="text-[#D5FF40] font-bold">{angle}°</span>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-[#D5FF40] cursor-pointer"
              />
            </div>
          )}

          {/* Color Pickers */}
          <div className="space-y-3 pt-2 border-t border-[rgba(213,255,64,0.12)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white font-bold">Color 1 (Start)</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="h-7 w-9 rounded-[2px] bg-transparent cursor-pointer border border-[rgba(213,255,64,0.2)]"
                />
                <span className="text-xs font-mono text-[#D5FF40]">{color1}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white font-bold">Color 2 (End)</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="h-7 w-9 rounded-[2px] bg-transparent cursor-pointer border border-[rgba(213,255,64,0.2)]"
                />
                <span className="text-xs font-mono text-[#D5FF40]">{color2}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="text-xs font-mono text-[#B0B0B0] flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeThird}
                  onChange={(e) => setIncludeThird(e.target.checked)}
                  className="accent-[#D5FF40]"
                />
                <span>Include 3rd Color Accent Stop</span>
              </label>
              {includeThird && (
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color3}
                    onChange={(e) => setColor3(e.target.value)}
                    className="h-7 w-9 rounded-[2px] bg-transparent cursor-pointer border border-[rgba(213,255,64,0.2)]"
                  />
                  <span className="text-xs font-mono text-[#D5FF40]">{color3}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Visual Preview */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block">
            VISUAL CANVAS PREVIEW
          </span>
          <div
            className="w-full h-48 rounded-[2px] border border-[rgba(213,255,64,0.3)] shadow-inner transition-all flex items-center justify-center p-4 text-center"
            style={{ background: getGradientCss() }}
          >
            <span className="px-3 py-1.5 rounded-[2px] bg-[#050505]/70 backdrop-blur-sm text-xs font-mono text-[#D5FF40] border border-[rgba(213,255,64,0.2)]">
              CSS Gradient Layer
            </span>
          </div>
        </div>
      </div>

      {/* Copy CSS */}
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
            {gradientRule}
          </code>
        </div>
      </div>
    </div>
  );
}

