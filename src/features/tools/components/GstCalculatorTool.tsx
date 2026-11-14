"use client";

import React, { useState } from "react";
import { calculateGst } from "../logic/gst";

export function GstCalculatorTool() {
  const [amount, setAmount] = useState(10000);
  const [calculationType, setCalculationType] = useState<"exclusive" | "inclusive">("exclusive");
  const [gstRate, setGstRate] = useState(18);
  const [isInterState, setIsInterState] = useState(false); // IGST vs CGST+SGST

  const {
    netAmount,
    totalGst,
    grossAmount,
    cgstAmount,
    sgstAmount,
    igstAmount,
  } = calculateGst(amount, calculationType, gstRate);

  return (
    <div className="space-y-6">
      {/* Configuration Controls */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Amount (INR ₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono text-base font-bold"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Calculation Method
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setCalculationType("exclusive")}
              className={`px-3 py-2 text-xs font-mono rounded-[2px] border text-center transition-colors cursor-pointer ${
                calculationType === "exclusive"
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              Add GST (Exclusive)
            </button>
            <button
              type="button"
              onClick={() => setCalculationType("inclusive")}
              className={`px-3 py-2 text-xs font-mono rounded-[2px] border text-center transition-colors cursor-pointer ${
                calculationType === "inclusive"
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              Remove GST (Inclusive)
            </button>
          </div>
        </div>
      </div>

      {/* Slabs */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold mb-2">
          SELECT GST TAX SLAB (%)
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {[5, 12, 18, 28].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => setGstRate(rate)}
              className={`px-3 py-2 text-xs font-mono rounded-[2px] border transition-colors cursor-pointer ${
                gstRate === rate
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              {rate}% Slab
            </button>
          ))}
          <div className="relative">
            <input
              type="number"
              placeholder="Custom %"
              value={gstRate}
              onChange={(e) => setGstRate(Number(e.target.value))}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-2 py-2 text-xs text-white text-center font-mono outline-none focus:border-[#D5FF40]"
            />
          </div>
        </div>
      </div>

      {/* Intra-State vs Inter-State Toggle */}
      <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-[rgba(213,255,64,0.12)]">
        <span className="text-[#B0B0B0]">Transaction Type:</span>
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="stateType"
              checked={!isInterState}
              onChange={() => setIsInterState(false)}
              className="accent-[#D5FF40]"
            />
            <span className={!isInterState ? "text-[#D5FF40] font-bold" : "text-[#B0B0B0]"}>
              Intra-State (CGST + SGST)
            </span>
          </label>
          <label className="inline-flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="stateType"
              checked={isInterState}
              onChange={() => setIsInterState(true)}
              className="accent-[#D5FF40]"
            />
            <span className={isInterState ? "text-[#D5FF40] font-bold" : "text-[#B0B0B0]"}>
              Inter-State (IGST)
            </span>
          </label>
        </div>
      </div>

      {/* Output Summary Card */}
      <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[rgba(213,255,64,0.12)] pb-4 text-center sm:text-left">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block">
              FINAL TOTAL GROSS AMOUNT (INCLUDING TAX)
            </span>
            <p className="font-display text-4xl sm:text-5xl font-black text-[#D5FF40]">
              ₹{grossAmount.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block">
              TOTAL GST TAX AMOUNT
            </span>
            <p className="font-display text-2xl font-bold text-white">
              ₹{totalGst.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Itemized Tax Breakdown */}
        <div className="space-y-2 text-xs font-mono text-[#B0B0B0]">
          <div className="flex justify-between py-1 border-b border-[rgba(213,255,64,0.08)]">
            <span>Net Pre-Tax Base Amount:</span>
            <span className="text-white font-bold">₹{netAmount.toLocaleString("en-IN")}</span>
          </div>

          {!isInterState ? (
            <>
              <div className="flex justify-between py-1 border-b border-[rgba(213,255,64,0.08)]">
                <span>Central GST (CGST @ {(gstRate / 2).toFixed(1)}%):</span>
                <span className="text-white">₹{cgstAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[rgba(213,255,64,0.08)]">
                <span>State GST (SGST @ {(gstRate / 2).toFixed(1)}%):</span>
                <span className="text-white">₹{sgstAmount.toLocaleString("en-IN")}</span>
              </div>
            </>
          ) : (
            <div className="flex justify-between py-1 border-b border-[rgba(213,255,64,0.08)]">
              <span>Integrated GST (IGST @ {gstRate}%):</span>
              <span className="text-white">₹{igstAmount.toLocaleString("en-IN")}</span>
            </div>
          )}

          <div className="flex justify-between py-1 text-sm font-bold text-[#D5FF40] pt-2">
            <span>Gross Total Price:</span>
            <span>₹{grossAmount.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
