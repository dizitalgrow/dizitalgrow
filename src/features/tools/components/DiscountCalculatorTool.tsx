"use client";

import React, { useState } from "react";
import { calculateDiscount } from "../logic/discount";

export function DiscountCalculatorTool() {
  const [originalPrice, setOriginalPrice] = useState(4999);
  const [discountPercent, setDiscountPercent] = useState(25);
  const [additionalCouponPercent, setAdditionalCouponPercent] = useState(10);
  const [enableCoupon, setEnableCoupon] = useState(false);

  // Pure logic calculation:
  const {
    primarySavings: primaryDiscountAmount,
    couponSavings: couponDiscountAmount,
    finalPrice: finalPayablePrice,
    totalSavings: totalMoneySaved,
    effectiveDiscountPercent,
  } = calculateDiscount(
    originalPrice,
    discountPercent,
    enableCoupon ? additionalCouponPercent : 0
  );
  const effectiveDiscountRate = effectiveDiscountPercent.toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Original List Price (₹)
          </label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono text-base font-bold"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Primary Discount (%)
          </label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono text-base font-bold"
          />
        </div>
      </div>

      {/* Preset Discount Chips */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold block mb-2">
          COMMON DISCOUNT PRESETS
        </span>
        <div className="flex flex-wrap gap-2">
          {[10, 15, 20, 25, 30, 40, 50, 70].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => setDiscountPercent(rate)}
              className={`px-3 py-1.5 text-xs font-mono rounded-[2px] border cursor-pointer transition-colors ${
                discountPercent === rate
                  ? "bg-[#D5FF40] text-[#050505] font-bold border-[#D5FF40]"
                  : "bg-[#101010] text-[#B0B0B0] border-[rgba(213,255,64,0.15)] hover:text-white"
              }`}
            >
              {rate}% Off
            </button>
          ))}
        </div>
      </div>

      {/* Additional Coupon Option */}
      <div className="pt-2 border-t border-[rgba(213,255,64,0.12)]">
        <label className="inline-flex items-center gap-2 text-xs font-mono text-[#B0B0B0] cursor-pointer mb-2">
          <input
            type="checkbox"
            checked={enableCoupon}
            onChange={(e) => setEnableCoupon(e.target.checked)}
            className="accent-[#D5FF40]"
          />
          <span>Add Extra Promotional Coupon Code (%)</span>
        </label>

        {enableCoupon && (
          <div className="max-w-xs pt-1">
            <input
              type="number"
              value={additionalCouponPercent}
              onChange={(e) => setAdditionalCouponPercent(Number(e.target.value))}
              placeholder="Coupon %"
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
        )}
      </div>

      {/* Final Price Result Display */}
      <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[rgba(213,255,64,0.12)] pb-4 text-center sm:text-left">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block">
              FINAL DISCOUNTED PRICE
            </span>
            <p className="font-display text-4xl sm:text-5xl font-black text-[#D5FF40]">
              ₹{finalPayablePrice.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] block">
              TOTAL MONEY SAVED
            </span>
            <p className="font-display text-2xl font-bold text-green-400">
              ₹{totalMoneySaved.toLocaleString("en-IN")}
            </p>
            <span className="text-[11px] font-mono text-[#A1A1AA]">
              ({effectiveDiscountRate}% Total Savings)
            </span>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-1.5 text-xs font-mono text-[#B0B0B0]">
          <div className="flex justify-between py-1">
            <span>Original Price:</span>
            <span className="text-white line-through">₹{originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between py-1 text-green-400">
            <span>Primary Discount ({discountPercent}%):</span>
            <span>-₹{primaryDiscountAmount.toLocaleString("en-IN")}</span>
          </div>
          {enableCoupon && (
            <div className="flex justify-between py-1 text-green-400">
              <span>Extra Coupon Discount ({additionalCouponPercent}%):</span>
              <span>-₹{couponDiscountAmount.toLocaleString("en-IN")}</span>
            </div>
          )}
          <div className="flex justify-between py-1 text-sm font-bold text-white pt-2 border-t border-[rgba(213,255,64,0.1)]">
            <span>Final You Pay:</span>
            <span className="text-[#D5FF40]">₹{finalPayablePrice.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
