"use client";

import React, { useState } from "react";
import { Download, QrCode } from "lucide-react";
import { generateQRCodeSVG } from "@/lib/qr-code";

export function QrCodeGeneratorTool() {
  const [text, setText] = useState("https://dizitalgrow.in");
  const [size, setSize] = useState(256);

  const svgContent = generateQRCodeSVG(text || "https://dizitalgrow.in");

  const downloadSVG = () => {
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dizitalgrow-qrcode.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = () => {
    const svgBlob = new Blob([svgContent], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        const pngUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = pngUrl;
        a.download = "dizitalgrow-qrcode.png";
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Destination URL or Text to Encode
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            placeholder="https://yourwebsite.com or text"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-white font-bold">EXPORT RESOLUTION</span>
            <span className="text-[#D5FF40]">{size} × {size} px</span>
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
      </div>

      {/* QR Code Canvas Preview & Download Buttons */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold flex items-center gap-1.5">
            <QrCode className="h-4 w-4" />
            <span>CLIENT-GENERATED QR MATRIX</span>
          </span>

          <div className="flex items-center gap-2">
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
              <span>Download PNG</span>
            </button>
          </div>
        </div>

        <div className="p-8 bg-[#0A0A0A] border border-[rgba(213,255,64,0.2)] rounded-[2px] flex items-center justify-center">
          <div
            className="p-4 bg-white rounded-[2px] shadow-sm max-w-[240px] w-full aspect-square"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
      </div>
    </div>
  );
}

