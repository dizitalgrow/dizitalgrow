"use client";

import React, { useState } from "react";

export function ServicePricingCalculator() {
  const [estimatedHours, setEstimatedHours] = useState(60);
  const [hourlyLaborRate, setHourlyLaborRate] = useState(1500); // INR per hour
  const [directCosts, setDirectCosts] = useState(15000); // Plugins, fonts, third party APIs
  const [overheadPercent, setOverheadPercent] = useState(15); // Operations & software
  const [profitMarginPercent, setProfitMarginPercent] = useState(25); // Target business profit
  const [scopeBufferPercent, setScopeBufferPercent] = useState(15); // Contingency buffer

  // Math calculation breakdown:
  const baseLaborCost = estimatedHours * hourlyLaborRate;
  const directAndLabor = baseLaborCost + directCosts;
  const overheadAmount = Math.round(directAndLabor * (overheadPercent / 100));
  const subtotalCost = directAndLabor + overheadAmount;
  const profitMarginAmount = Math.round(subtotalCost * (profitMarginPercent / 100));
  const bufferAmount = Math.round((subtotalCost + profitMarginAmount) * (scopeBufferPercent / 100));
  const recommendedQuotePrice = subtotalCost + profitMarginAmount + bufferAmount;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Estimated Project Hours
          </label>
          <input
            type="number"
            value={estimatedHours}
            onChange={(e) => setEstimatedHours(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Discovery + Design + Dev + QA
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Internal Hourly Labor Cost (₹)
          </label>
          <input
            type="number"
            value={hourlyLaborRate}
            onChange={(e) => setHourlyLaborRate(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Hourly compensation rate
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Direct Third-Party Costs (₹)
          </label>
          <input
            type="number"
            value={directCosts}
            onChange={(e) => setDirectCosts(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Asset licenses, specialized APIs
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Overhead Allocation (%)
          </label>
          <input
            type="number"
            value={overheadPercent}
            onChange={(e) => setOverheadPercent(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Office, utilities, dev subscriptions
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Target Profit Margin (%)
          </label>
          <input
            type="number"
            value={profitMarginPercent}
            onChange={(e) => setProfitMarginPercent(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Net company profit target
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Scope Creep Buffer (%)
          </label>
          <input
            type="number"
            value={scopeBufferPercent}
            onChange={(e) => setScopeBufferPercent(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Contingency for revision cycles
          </span>
        </div>
      </div>

      {/* Suggested Price Display */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-6 rounded-[2px] text-center space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0]">
            RECOMMENDED CLIENT QUOTE (FLAT FIXED FEE)
          </span>
          <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#D5FF40]">
            ₹{recommendedQuotePrice.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-[#A1A1AA] font-mono">
            Break-even cost: ₹{(subtotalCost).toLocaleString("en-IN")} · Expected Net Profit: ₹{(profitMarginAmount).toLocaleString("en-IN")}
          </p>
        </div>

        {/* Detailed Cost Breakdown Table */}
        <div className="border border-[rgba(213,255,64,0.15)] bg-[#101010] p-4 rounded-[2px] text-xs font-mono text-[#B0B0B0] space-y-2">
          <div className="flex justify-between border-b border-[rgba(213,255,64,0.1)] pb-1.5">
            <span>Direct Labor ({estimatedHours}h × ₹{hourlyLaborRate}):</span>
            <span className="text-white">₹{baseLaborCost.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between border-b border-[rgba(213,255,64,0.1)] pb-1.5">
            <span>Direct Third-Party Expenses:</span>
            <span className="text-white">₹{directCosts.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between border-b border-[rgba(213,255,64,0.1)] pb-1.5">
            <span>Overhead Allocation ({overheadPercent}%):</span>
            <span className="text-white">₹{overheadAmount.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between border-b border-[rgba(213,255,64,0.1)] pb-1.5">
            <span>Profit Margin ({profitMarginPercent}%):</span>
            <span className="text-white">₹{profitMarginAmount.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between border-b border-[rgba(213,255,64,0.1)] pb-1.5">
            <span>Contingency Buffer ({scopeBufferPercent}%):</span>
            <span className="text-white">₹{bufferAmount.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between pt-1 text-sm font-bold text-[#D5FF40]">
            <span>Total Suggested Quote:</span>
            <span>₹{recommendedQuotePrice.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
