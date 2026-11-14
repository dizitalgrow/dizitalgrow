import test from "node:test";
import assert from "node:assert/strict";

import { calculateGst } from "../gst.ts";
import {
  calculatePercentageOf,
  calculateWhatPercentIs,
  calculatePercentageChange,
} from "../percentage.ts";
import { calculateDiscount } from "../discount.ts";
import { calculateFreelanceRate } from "../freelance-rate.ts";
import { generateSlug } from "../slug.ts";
import { buildUtmUrl } from "../utm.ts";
import { generateQRCodeSVG } from "../../../../lib/qr-code.ts";

test("calculateGst - Exclusive calculation (Add GST)", () => {
  const result = calculateGst(10000, "exclusive", 18);
  assert.equal(result.netAmount, 10000);
  assert.equal(result.totalGst, 1800);
  assert.equal(result.grossAmount, 11800);
  assert.equal(result.cgstAmount, 900);
  assert.equal(result.sgstAmount, 900);
  assert.equal(result.igstAmount, 1800);
});

test("calculateGst - Inclusive calculation (Extract GST)", () => {
  const result = calculateGst(11800, "inclusive", 18);
  assert.equal(result.grossAmount, 11800);
  assert.equal(result.netAmount, 10000);
  assert.equal(result.totalGst, 1800);
  assert.equal(result.cgstAmount, 900);
  assert.equal(result.sgstAmount, 900);
});

test("calculateGst - Boundary rates (0%, 5%, 12%, 28%) and zero amount", () => {
  const zeroAmount = calculateGst(0, "exclusive", 18);
  assert.equal(zeroAmount.netAmount, 0);
  assert.equal(zeroAmount.totalGst, 0);
  assert.equal(zeroAmount.grossAmount, 0);

  const zeroRate = calculateGst(5000, "exclusive", 0);
  assert.equal(zeroRate.totalGst, 0);
  assert.equal(zeroRate.grossAmount, 5000);

  const rate5 = calculateGst(1000, "exclusive", 5);
  assert.equal(rate5.totalGst, 50);
  assert.equal(rate5.grossAmount, 1050);

  const rate28 = calculateGst(1000, "exclusive", 28);
  assert.equal(rate28.totalGst, 280);
  assert.equal(rate28.grossAmount, 1280);
});

test("calculatePercentageOf - Percentage of value", () => {
  const result = calculatePercentageOf(20, 5000);
  assert.equal(result.answer, 1000);
});

test("calculatePercentageOf - Boundary cases (0%, 100%, 0 base)", () => {
  const zeroPercent = calculatePercentageOf(0, 5000);
  assert.equal(zeroPercent.answer, 0);

  const hundredPercent = calculatePercentageOf(100, 7500);
  assert.equal(hundredPercent.answer, 7500);

  const zeroBase = calculatePercentageOf(50, 0);
  assert.equal(zeroBase.answer, 0);
});

test("calculateWhatPercentIs - What percent is X of Y", () => {
  const result = calculateWhatPercentIs(250, 1000);
  assert.equal(result.answer, "25.00%");
});

test("calculateWhatPercentIs - Boundary cases (division by zero safe guard)", () => {
  const divZero = calculateWhatPercentIs(100, 0);
  assert.equal(divZero.answer, "0.00%");

  const zeroOfZero = calculateWhatPercentIs(0, 0);
  assert.equal(zeroOfZero.answer, "0.00%");

  const full = calculateWhatPercentIs(500, 500);
  assert.equal(full.answer, "100.00%");
});

test("calculatePercentageChange - Increase & Decrease", () => {
  const inc = calculatePercentageChange(100, 150);
  assert.equal(inc.answer, "+50.00%");

  const dec = calculatePercentageChange(100, 75);
  assert.equal(dec.answer, "-25.00%");

  const zeroChange = calculatePercentageChange(100, 100);
  assert.equal(zeroChange.answer, "+0.00%");
});

test("calculateDiscount - Single and Stacked coupons", () => {
  // 1000 with 20% discount = 800
  const single = calculateDiscount(1000, 20, 0);
  assert.equal(single.discountedPrice, 800);
  assert.equal(single.finalPrice, 800);
  assert.equal(single.totalSavings, 200);

  // 1000 with 20% discount + 10% coupon = 800 - 80 = 720 (28% effective)
  const stacked = calculateDiscount(1000, 20, 10);
  assert.equal(stacked.finalPrice, 720);
  assert.equal(stacked.totalSavings, 280);
  assert.equal(stacked.effectiveDiscountPercent, 28);
});

test("calculateDiscount - Boundary cases (0% and 100% discount)", () => {
  const noDiscount = calculateDiscount(1500, 0, 0);
  assert.equal(noDiscount.finalPrice, 1500);
  assert.equal(noDiscount.totalSavings, 0);

  const fullDiscount = calculateDiscount(2000, 100, 0);
  assert.equal(fullDiscount.finalPrice, 0);
  assert.equal(fullDiscount.totalSavings, 2000);
});

test("calculateFreelanceRate - Hourly rate computation", () => {
  const result = calculateFreelanceRate(
    1200000, // 12 Lakhs take-home
    25, // 25% tax
    100000, // 1 Lakh expenses
    4, // 4 weeks vacation
    40, // 40 hrs/week
    60 // 60% billable ratio
  );

  assert.ok(result.requiredGross > 1200000);
  assert.equal(result.billableWeeks, 48);
  assert.ok(result.minimumHourlyRate > 0);
  assert.ok(result.dailyRate > result.minimumHourlyRate);
});

test("generateSlug - URL sanitization", () => {
  assert.equal(generateSlug("Hello World!"), "hello-world");
  assert.equal(generateSlug("  Next.js 16 Web Development & Apps  "), "nextjs-16-web-development-apps");
  assert.equal(generateSlug("Café & Résumé 2026"), "cafe-resume-2026");
  assert.equal(generateSlug("---Multiple---Dashes---"), "multiple-dashes");
  assert.equal(generateSlug(""), "");
});

test("buildUtmUrl - Tracking URL construction", () => {
  const url = buildUtmUrl("dizitalgrow.in/services", {
    source: "Google",
    medium: "CPC",
    campaign: "Summer Sale 2026",
  });

  assert.equal(
    url,
    "https://dizitalgrow.in/services?utm_source=google&utm_medium=cpc&utm_campaign=summer-sale-2026"
  );

  const withExistingQuery = buildUtmUrl("https://dizitalgrow.in/contact?plan=pro", {
    source: "newsletter",
    medium: "email",
  });
  assert.ok(withExistingQuery.includes("plan=pro"));
  assert.ok(withExistingQuery.includes("utm_source=newsletter"));
});

test("generateQRCodeSVG - Valid SVG markup generation", () => {
  const svg = generateQRCodeSVG("https://dizitalgrow.in");
  assert.ok(svg.includes("<svg"));
  assert.ok(svg.includes("viewBox="));
  assert.ok(svg.includes("<rect"));
  assert.ok(svg.includes("<path d="));
  assert.ok(svg.endsWith("</svg>"));
});
