"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";

export function FreelanceRateCalculator() {
  const [targetAnnualIncome, setTargetAnnualIncome] = useState(1200000); // 12 Lakhs INR
  const [annualExpenses, setAnnualExpenses] = useState(180000); // Software, equipment, office
  const [taxPercent, setTaxPercent] = useState(15); // Estimated tax %
  const [weeksOff, setWeeksOff] = useState(4); // Vacation + sick leave
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25); // Realistic billable hours

  // Calculations
  const workingWeeks = Math.max(1, 52 - weeksOff);
  const totalBillableHoursPerYear = workingWeeks * billableHoursPerWeek;

  // Total gross revenue needed before tax:
  // Net income = Gross * (1 - tax) - Expenses  =>  Gross = (Net + Expenses) / (1 - tax)
  const requiredGrossRevenue =
    (targetAnnualIncome + annualExpenses) / (1 - taxPercent / 100);

  const hourlyRate =
    totalBillableHoursPerYear > 0
      ? Math.round(requiredGrossRevenue / totalBillableHoursPerYear)
      : 0;

  const dayRate = hourlyRate * 8;
  const monthlyRetainer = Math.round(requiredGrossRevenue / 12);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Target Take-Home Annual Income (₹)
          </label>
          <input
            type="number"
            value={targetAnnualIncome}
            onChange={(e) => setTargetAnnualIncome(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Net income after taxes and costs
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Annual Business Expenses (₹)
          </label>
          <input
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Software, hardware, internet & coworking
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Estimated Tax Rate (%)
          </label>
          <input
            type="number"
            value={taxPercent}
            onChange={(e) => setTaxPercent(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            e.g. 10% to 25% effective rate
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Weeks Off / Holidays (Weeks)
          </label>
          <input
            type="number"
            value={weeksOff}
            onChange={(e) => setWeeksOff(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Vacation, festivals & sick days
          </span>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Billable Hours / Week (Hours)
          </label>
          <input
            type="number"
            value={billableHoursPerWeek}
            onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
          />
          <span className="text-[10px] text-[#A1A1AA] font-mono mt-0.5 block">
            Realistic billable work (typically 20–30h)
          </span>
        </div>
      </div>

      {/* Results Matrix */}
      <div className="pt-4 border-t border-[rgba(213,255,64,0.12)] space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#D5FF40]" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            REQUIRED PRICING TIERS (SUGGESTED MINIMUMS)
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-5 rounded-[2px] text-center space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0]">
              HOURLY RATE
            </span>
            <p className="font-display text-3xl font-extrabold text-[#D5FF40]">
              ₹{hourlyRate.toLocaleString("en-IN")}
            </p>
            <span className="text-[11px] text-[#A1A1AA] font-mono block">
              per billable hour
            </span>
          </div>

          <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-5 rounded-[2px] text-center space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0]">
              DAY RATE (8 HOURS)
            </span>
            <p className="font-display text-3xl font-extrabold text-white">
              ₹{dayRate.toLocaleString("en-IN")}
            </p>
            <span className="text-[11px] text-[#A1A1AA] font-mono block">
              per dedicated work day
            </span>
          </div>

          <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-5 rounded-[2px] text-center space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0]">
              MONTHLY RETAINER
            </span>
            <p className="font-display text-3xl font-extrabold text-white">
              ₹{monthlyRetainer.toLocaleString("en-IN")}
            </p>
            <span className="text-[11px] text-[#A1A1AA] font-mono block">
              target gross monthly billing
            </span>
          </div>
        </div>

        {/* Calculation breakdown */}
        <div className="border border-[rgba(213,255,64,0.15)] bg-[#101010] p-4 rounded-[2px] text-xs font-mono text-[#B0B0B0] space-y-1.5">
          <div className="flex justify-between">
            <span>Working Weeks / Year:</span>
            <span className="text-white font-bold">{workingWeeks} weeks</span>
          </div>
          <div className="flex justify-between">
            <span>Total Billable Hours / Year:</span>
            <span className="text-white font-bold">{totalBillableHoursPerYear} hours</span>
          </div>
          <div className="flex justify-between">
            <span>Required Total Gross Revenue:</span>
            <span className="text-[#D5FF40] font-bold">
              ₹{Math.round(requiredGrossRevenue).toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

