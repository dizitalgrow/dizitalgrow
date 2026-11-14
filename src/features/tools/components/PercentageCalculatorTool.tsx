"use client";

import React, { useState } from "react";
import {
  calculatePercentageOf,
  calculateWhatPercentIs,
  calculatePercentageChange,
} from "../logic/percentage";

type CalcMode = "percentOf" | "isWhatPercent" | "increaseDecrease";

export function PercentageCalculatorTool() {
  const [mode, setMode] = useState<CalcMode>("percentOf");

  // Mode 1: What is X% of Y?
  const [p1, setP1] = useState(18);
  const [y1, setY1] = useState(5000);

  // Mode 2: X is what percent of Y?
  const [x2, setX2] = useState(450);
  const [y2, setY2] = useState(3000);

  // Mode 3: Percentage increase / decrease from X to Y
  const [fromX, setFromX] = useState(2500);
  const [toY, setToY] = useState(3500);

  const calculateResult = () => {
    switch (mode) {
      case "percentOf":
        return calculatePercentageOf(p1, y1);
      case "isWhatPercent":
        return calculateWhatPercentIs(x2, y2);
      case "increaseDecrease":
        return calculatePercentageChange(fromX, toY);
    }
  };

  const res = calculateResult();

  return (
    <div className="space-y-6">
      {/* Mode Tabs */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold mb-2">
          SELECT CALCULATION MODE
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setMode("percentOf")}
            className={`px-3 py-2 text-xs font-mono rounded-[2px] border text-center transition-colors cursor-pointer ${
              mode === "percentOf"
                ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
            }`}
          >
            What is X% of Y?
          </button>
          <button
            type="button"
            onClick={() => setMode("isWhatPercent")}
            className={`px-3 py-2 text-xs font-mono rounded-[2px] border text-center transition-colors cursor-pointer ${
              mode === "isWhatPercent"
                ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
            }`}
          >
            X is what % of Y?
          </button>
          <button
            type="button"
            onClick={() => setMode("increaseDecrease")}
            className={`px-3 py-2 text-xs font-mono rounded-[2px] border text-center transition-colors cursor-pointer ${
              mode === "increaseDecrease"
                ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
            }`}
          >
            % Increase or Decrease
          </button>
        </div>
      </div>

      {/* Inputs according to mode */}
      <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-4">
        {mode === "percentOf" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                What is (Percentage %):
              </label>
              <input
                type="number"
                value={p1}
                onChange={(e) => setP1(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                Of Total (Number):
              </label>
              <input
                type="number"
                value={y1}
                onChange={(e) => setY1(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
          </div>
        )}

        {mode === "isWhatPercent" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                Part (Number X):
              </label>
              <input
                type="number"
                value={x2}
                onChange={(e) => setX2(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                Total (Number Y):
              </label>
              <input
                type="number"
                value={y2}
                onChange={(e) => setY2(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
          </div>
        )}

        {mode === "increaseDecrease" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                Initial Value (From):
              </label>
              <input
                type="number"
                value={fromX}
                onChange={(e) => setFromX(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
                Final Value (To):
              </label>
              <input
                type="number"
                value={toY}
                onChange={(e) => setToY(Number(e.target.value))}
                className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
              />
            </div>
          </div>
        )}
      </div>

      {/* Result Display with Formula Breakdown */}
      <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-6 rounded-[2px] text-center space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0]">
          CALCULATED RESULT
        </span>
        <p className="font-display text-4xl sm:text-5xl font-black text-[#D5FF40]">
          {res.answer}
        </p>
        <p className="text-xs text-white font-mono">{res.summary}</p>
        <div className="pt-2 border-t border-[rgba(213,255,64,0.12)] max-w-md mx-auto">
          <span className="text-[10px] uppercase font-mono text-[#A1A1AA] block mb-0.5">
            MATHEMATICAL FORMULA BREAKDOWN:
          </span>
          <code className="text-xs text-[#D5FF40] font-mono">{res.explanation}</code>
        </div>
      </div>
    </div>
  );
}
