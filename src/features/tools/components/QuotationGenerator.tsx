"use client";

import React, { useState } from "react";
import { Printer, Plus, Trash2 } from "lucide-react";

interface QuoteItem {
  id: string;
  scopeItem: string;
  timeline: string;
  cost: number;
}

export function QuotationGenerator() {
  const [quoteNumber, setQuoteNumber] = useState("QUO-2026-089");
  const [quoteDate, setQuoteDate] = useState("2026-11-15");
  const [validUntil, setValidUntil] = useState("2026-12-15");

  const [providerName, setProviderName] = useState("DizitalGrow");
  const [providerContact, setProviderContact] = useState("contact@dizitalgrow.in | +91 91871 26193");

  const [clientCompany, setClientCompany] = useState("Starlight Health Tech");
  const [clientContact, setClientContact] = useState("Dr. R. Sharma | Mumbai");

  const [projectTitle, setProjectTitle] = useState("Healthcare Telemetry & Digital Platform Engineering");

  const [items, setItems] = useState<QuoteItem[]>([
    {
      id: "1",
      scopeItem: "Phase 1: Discovery, UX Wireframes & Information Architecture",
      timeline: "1 Week",
      cost: 25000,
    },
    {
      id: "2",
      scopeItem: "Phase 2: Next.js Frontend Engineering & Patient Booking Flow",
      timeline: "2 Weeks",
      cost: 65000,
    },
    {
      id: "3",
      scopeItem: "Phase 3: Server-Side Meta CAPI & GA4 Telemetry Verification",
      timeline: "1 Week",
      cost: 20000,
    },
  ]);

  const [terms, setTerms] = useState(
    "1. Quote valid for 30 days from issue.\n2. Milestone payment schedule: 40% advance, 30% on staging delivery, 30% upon live launch.\n3. Complete code and intellectual property ownership transfers upon final milestone payment."
  );

  const addItem = () => {
    setItems([
      ...items,
      {
        id: String(Date.now()),
        scopeItem: "Additional Scope Deliverable",
        timeline: "1 Week",
        cost: 15000,
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof QuoteItem, value: string | number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const totalEstimate = items.reduce((acc, curr) => acc + curr.cost, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Configuration Controls */}
      <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(213,255,64,0.12)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            QUOTATION CONFIGURATION
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Quote Number
            </label>
            <input
              type="text"
              value={quoteNumber}
              onChange={(e) => setQuoteNumber(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Issue Date
            </label>
            <input
              type="date"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Valid Until
            </label>
            <input
              type="date"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Your Business Name
            </label>
            <input
              type="text"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Your Contact Details
            </label>
            <input
              type="text"
              value={providerContact}
              onChange={(e) => setProviderContact(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Prepared For (Client Name / Org)
            </label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Client Contact / Location
            </label>
            <input
              type="text"
              value={clientContact}
              onChange={(e) => setClientContact(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Project Title
            </label>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
        </div>

        {/* Scope Items */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              PROPOSED DELIVERABLES &amp; ESTIMATES
            </span>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#D5FF40] hover:underline"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Phase / Deliverable</span>
            </button>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-2 items-center bg-[#101010] p-2 rounded-[2px] border border-[rgba(213,255,64,0.1)]"
              >
                <div className="col-span-7">
                  <input
                    type="text"
                    value={item.scopeItem}
                    onChange={(e) =>
                      updateItem(item.id, "scopeItem", e.target.value)
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1"
                    placeholder="Deliverable Description"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    value={item.timeline}
                    onChange={(e) =>
                      updateItem(item.id, "timeline", e.target.value)
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1 text-center font-mono"
                    placeholder="Timeline"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.cost}
                    onChange={(e) =>
                      updateItem(item.id, "cost", Number(e.target.value))
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1 text-right font-mono"
                    placeholder="Cost"
                  />
                </div>
                <div className="col-span-1 text-center">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
            Engagement Terms & Conditions
          </label>
          <textarea
            rows={3}
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-2.5 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
          />
        </div>
      </div>

      {/* Printable Quotation Document */}
      <div className="space-y-3">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold block">
          PRINTABLE QUOTE DOCUMENT
        </span>

        <div className="border border-[rgba(0,0,0,0.15)] bg-white text-[#0A0F1D] p-8 sm:p-12 rounded-[2px] shadow-sm max-w-4xl mx-auto space-y-8 font-sans">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black font-display">
                {providerName}
              </h2>
              <p className="text-xs text-gray-600 mt-1">{providerContact}</p>
            </div>
            <div className="sm:text-right">
              <span className="text-xl font-extrabold uppercase tracking-widest text-black block font-display">
                PROJECT QUOTATION
              </span>
              <p className="text-xs font-mono font-bold text-gray-800 mt-1">
                Ref: #{quoteNumber}
              </p>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Date: {quoteDate} · Valid Until: {validUntil}
              </p>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <span className="font-mono text-[10px] font-bold uppercase text-gray-500 tracking-wider block">
              PREPARED FOR:
            </span>
            <p className="text-sm font-bold text-black">{clientCompany}</p>
            <p className="text-gray-600">{clientContact}</p>
            <p className="text-xs font-bold text-black pt-2 font-mono uppercase">
              Project: {projectTitle}
            </p>
          </div>

          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black text-black uppercase font-mono font-bold text-[11px]">
                <th className="py-2.5">Scope Deliverable</th>
                <th className="py-2.5 text-center">Estimated Timeline</th>
                <th className="py-2.5 text-right">Fee (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="py-3 pr-4 font-medium">{item.scopeItem}</td>
                  <td className="py-3 text-center font-mono text-gray-600">
                    {item.timeline}
                  </td>
                  <td className="py-3 text-right font-mono font-bold text-black">
                    ₹{item.cost.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <div className="w-64 space-y-1 text-right">
              <span className="text-xs font-mono text-gray-500 block uppercase">
                TOTAL PROJECT ESTIMATE:
              </span>
              <p className="text-2xl font-black font-display text-black">
                ₹{totalEstimate.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {terms && (
            <div className="pt-6 border-t border-gray-200 text-xs text-gray-600">
              <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-1">
                TERMS &amp; ACCEPTANCE
              </span>
              <pre className="whitespace-pre-wrap font-sans text-xs text-gray-600 leading-relaxed">
                {terms}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
