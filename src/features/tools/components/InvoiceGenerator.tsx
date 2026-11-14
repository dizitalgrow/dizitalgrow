"use client";

import React, { useState } from "react";
import { Printer, Plus, Trash2 } from "lucide-react";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export function InvoiceGenerator() {
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-001");
  const [invoiceDate, setInvoiceDate] = useState("2026-11-15");
  const [dueDate, setDueDate] = useState("2026-11-30");

  const [fromName, setFromName] = useState("DizitalGrow Studio");
  const [fromEmail, setFromEmail] = useState("contact@dizitalgrow.in");
  const [fromAddress, setFromAddress] = useState("India");

  const [clientName, setClientName] = useState("Acme Corporation");
  const [clientEmail, setClientEmail] = useState("billing@acmecorp.com");
  const [clientAddress, setClientAddress] = useState("Mumbai, Maharashtra");

  const [items, setItems] = useState<LineItem[]>([
    {
      id: "1",
      description: "Next.js High-Performance Corporate Website Development",
      quantity: 1,
      rate: 75000,
    },
    {
      id: "2",
      description: "Server-Side Meta Conversions API & GA4 Telemetry Setup",
      quantity: 1,
      rate: 25000,
    },
  ]);

  const [taxPercent, setTaxPercent] = useState(18); // e.g. 18% GST
  const [discountAmount, setDiscountAmount] = useState(0);
  const [notes, setNotes] = useState("Thank you for your business. Payment due within 15 days via bank transfer or UPI.");

  const addItem = () => {
    setItems([
      ...items,
      {
        id: String(Date.now()),
        description: "Additional digital service item",
        quantity: 1,
        rate: 5000,
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof LineItem, value: string | number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const subtotal = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.rate,
    0
  );
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const taxAmount = Math.round(discountedSubtotal * (taxPercent / 100));
  const grandTotal = discountedSubtotal + taxAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Input Form Controls */}
      <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 rounded-[2px] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(213,255,64,0.12)] pb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            INVOICE CONFIGURATION
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

        {/* Invoice Meta */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Invoice Number
            </label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Issue Date
            </label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Payment Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3.5 py-2 text-xs text-white focus:border-[#D5FF40] outline-none font-mono"
            />
          </div>
        </div>

        {/* From & Bill To */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Your Business */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D5FF40] font-bold block">
              FROM (YOUR BUSINESS)
            </span>
            <input
              type="text"
              placeholder="Business Name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
            <input
              type="text"
              placeholder="Address / GSTIN"
              value={fromAddress}
              onChange={(e) => setFromAddress(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>

          {/* Client Details */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D5FF40] font-bold block">
              BILL TO (CLIENT)
            </span>
            <input
              type="text"
              placeholder="Client Name or Company"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
            <input
              type="email"
              placeholder="Client Email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
            <input
              type="text"
              placeholder="Client Address / Location"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-3 py-1.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>
        </div>

        {/* Itemized Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              LINE ITEMS
            </span>
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#D5FF40] hover:underline"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Item</span>
            </button>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-2 items-center bg-[#101010] p-2 rounded-[2px] border border-[rgba(213,255,64,0.1)]"
              >
                <div className="col-span-6">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      updateItem(item.id, "description", e.target.value)
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1"
                    placeholder="Description"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.id, "quantity", Number(e.target.value))
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1 text-right font-mono"
                    placeholder="Qty"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) =>
                      updateItem(item.id, "rate", Number(e.target.value))
                    }
                    className="w-full bg-transparent text-xs text-white outline-none px-2 py-1 text-right font-mono"
                    placeholder="Rate"
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

        {/* Taxes, Discounts & Notes */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white font-bold mb-1">
              Payment Terms & Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] p-2.5 text-xs text-white focus:border-[#D5FF40] outline-none"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#B0B0B0]">Tax / GST Rate (%):</span>
              <input
                type="number"
                value={taxPercent}
                onChange={(e) => setTaxPercent(Number(e.target.value))}
                className="w-24 bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-2 py-1 text-xs text-white text-right outline-none font-mono"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#B0B0B0]">Flat Discount (₹):</span>
              <input
                type="number"
                value={discountAmount}
                onChange={(e) => setDiscountAmount(Number(e.target.value))}
                className="w-24 bg-[#101010] border border-[rgba(213,255,64,0.2)] rounded-[2px] px-2 py-1 text-xs text-white text-right outline-none font-mono"
              />
            </div>
            <div className="flex items-center justify-between text-sm font-mono pt-2 border-t border-[rgba(213,255,64,0.12)]">
              <span className="text-white font-bold">Total Due:</span>
              <span className="text-[#D5FF40] font-extrabold text-base">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Printable Invoice Preview Area */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D5FF40] font-bold">
            DOCUMENT PRINT PREVIEW
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D5FF40] hover:underline"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Open Browser Print Dialog</span>
          </button>
        </div>

        {/* Clean Invoice Paper Container */}
        <div
          id="invoice-document"
          className="border border-[rgba(0,0,0,0.15)] bg-white text-[#0A0F1D] p-8 sm:p-12 rounded-[2px] shadow-sm max-w-4xl mx-auto space-y-8 font-sans"
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black font-display">
                {fromName || "DizitalGrow"}
              </h2>
              <p className="text-xs text-gray-600 mt-1">{fromEmail}</p>
              <p className="text-xs text-gray-600">{fromAddress}</p>
            </div>
            <div className="sm:text-right">
              <span className="text-xl font-extrabold uppercase tracking-widest text-black block font-display">
                INVOICE
              </span>
              <p className="text-xs font-mono font-bold text-gray-800 mt-1">
                #{invoiceNumber}
              </p>
              <p className="text-xs text-gray-500 font-mono mt-0.5">
                Date: {invoiceDate}
              </p>
              <p className="text-xs text-gray-500 font-mono">
                Due: {dueDate}
              </p>
            </div>
          </div>

          {/* Billed To */}
          <div className="text-xs space-y-1">
            <span className="font-mono text-[10px] font-bold uppercase text-gray-500 tracking-wider block">
              BILLED TO:
            </span>
            <p className="text-sm font-bold text-black">{clientName}</p>
            <p className="text-gray-600">{clientEmail}</p>
            <p className="text-gray-600">{clientAddress}</p>
          </div>

          {/* Line Items Table */}
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black text-black uppercase font-mono font-bold text-[11px]">
                <th className="py-2.5">Description</th>
                <th className="py-2.5 text-right">Qty</th>
                <th className="py-2.5 text-right">Rate</th>
                <th className="py-2.5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="py-3 pr-4 font-medium">{item.description}</td>
                  <td className="py-3 text-right font-mono">{item.quantity}</td>
                  <td className="py-3 text-right font-mono">
                    ₹{item.rate.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 text-right font-mono font-bold text-black">
                    ₹{(item.quantity * item.rate).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Calculation */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <div className="w-64 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-red-600">
                  <span>Discount:</span>
                  <span>-₹{discountAmount.toLocaleString("en-IN")}</span>
                </div>
              )}
              {taxPercent > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Tax ({taxPercent}%):</span>
                  <span>₹{taxAmount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-black text-sm font-bold text-black">
                <span>Total Amount Due:</span>
                <span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {notes && (
            <div className="pt-6 border-t border-gray-200 text-xs text-gray-600">
              <span className="font-mono text-[10px] uppercase font-bold text-gray-500 block mb-1">
                TERMS &amp; PAYMENT DETAILS
              </span>
              <p className="leading-relaxed">{notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
