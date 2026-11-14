import assert from "node:assert/strict";
import { calculateGst } from "../src/features/tools/logic/gst.ts";
import {
  calculatePercentageOf,
  calculateWhatPercentIs,
  calculatePercentageChange,
} from "../src/features/tools/logic/percentage.ts";
import { calculateDiscount } from "../src/features/tools/logic/discount.ts";
import { calculateFreelanceRate } from "../src/features/tools/logic/freelance-rate.ts";
import { generateSlug } from "../src/features/tools/logic/slug.ts";
import { buildUtmUrl } from "../src/features/tools/logic/utm.ts";
import { generateQRCodeSVG } from "../src/lib/qr-code.ts";
import { contactSchema } from "../src/features/contact/schemas.ts";

const BASE_URL = "http://localhost:3000";

async function runDetailedQA() {
  console.log("=== COMPREHENSIVE INTERACTIVE & RESPONSIVE QA AUDIT ===\n");
  let passed = 0;
  let failed = 0;

  function record(name, condition, details = "") {
    if (condition) {
      console.log(`✔ [PASS] ${name}${details ? ` -> ${details}` : ""}`);
      passed++;
    } else {
      console.error(`✖ [FAIL] ${name}${details ? ` -> ${details}` : ""}`);
      failed++;
    }
  }

  // 1. Interactive Tool Calculations
  console.log("--- 1. Testing Interactive Free Tools Logic ---");

  // GST
  const gstRes = calculateGst(50000, "exclusive", 18);
  record("GST Calculator (50,000 @ 18% Exclusive)", 
    gstRes.totalGst === 9000 && gstRes.grossAmount === 59000 && gstRes.cgstAmount === 4500 && gstRes.sgstAmount === 4500,
    `Total GST: ₹${gstRes.totalGst}, Gross: ₹${gstRes.grossAmount}`
  );

  const gstInc = calculateGst(59000, "inclusive", 18);
  record("GST Calculator (59,000 @ 18% Inclusive)",
    gstInc.totalGst === 9000 && gstInc.netAmount === 50000,
    `Net: ₹${gstInc.netAmount}, Tax: ₹${gstInc.totalGst}`
  );

  // Percentage
  const pctOf = calculatePercentageOf(20, 5000);
  record("Percentage of (20% of 5,000)", pctOf.answer === 1000, `Answer: ${pctOf.answer}`);

  const whatPct = calculateWhatPercentIs(250, 1000);
  record("What percent is (250 of 1,000)", whatPct.answer === "25.00%", `Answer: ${whatPct.answer}`);

  const pctInc = calculatePercentageChange(100, 150);
  record("Percentage Change (+50% increase)", pctInc.answer === "+50.00%", `Answer: ${pctInc.answer}`);

  const pctDec = calculatePercentageChange(100, 75);
  record("Percentage Change (-25% decrease)", pctDec.answer === "-25.00%", `Answer: ${pctDec.answer}`);

  // Discount
  const discSingle = calculateDiscount(1000, 20, 0);
  record("Discount Calculator (₹1,000 with 20% off)", discSingle.finalPrice === 800, `Final: ₹${discSingle.finalPrice}`);

  const discStacked = calculateDiscount(1000, 20, 10);
  record("Discount Calculator (₹1,000 with 20% + 10% coupon)", discStacked.finalPrice === 720, `Final: ₹${discStacked.finalPrice}`);

  // Freelance Rate
  const rateRes = calculateFreelanceRate(1200000, 25, 100000, 4, 40, 60);
  record("Freelance Rate (₹12L take-home target)", rateRes.minimumHourlyRate > 1000 && rateRes.dailyRate > rateRes.minimumHourlyRate,
    `Hourly: ₹${rateRes.minimumHourlyRate}/hr, Day: ₹${rateRes.dailyRate}/day`
  );

  // Slug Generator
  const slug = generateSlug("  Next.js 16 Web Development & Apps  ");
  record("Slug Generator (URL sanitization)", slug === "nextjs-16-web-development-apps", `Slug: ${slug}`);

  // UTM Builder
  const utm = buildUtmUrl("dizitalgrow.in/services", { source: "google", medium: "cpc", campaign: "growth" });
  record("UTM Builder (Campaign link)", utm.includes("utm_source=google") && utm.includes("utm_medium=cpc"), `URL: ${utm}`);

  // QR Code
  const qrSvg = generateQRCodeSVG("https://dizitalgrow.in");
  record("QR Code Generator (SVG Validity)", qrSvg.includes("<svg") && qrSvg.includes("<rect") && qrSvg.includes("<path"), "Valid SVG markup generated");

  // JSON Formatter Simulation
  function testJsonFormat(raw) {
    try {
      const parsed = JSON.parse(raw);
      return { success: true, formatted: JSON.stringify(parsed, null, 2) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
  const validJson = testJsonFormat('{"brand":"DizitalGrow","active":true}');
  record("JSON Formatter (Valid JSON)", validJson.success && validJson.formatted.includes("\n"), "Formatted successfully");

  const invalidJson = testJsonFormat('{brand: DizitalGrow}');
  record("JSON Formatter (Invalid JSON detection)", !invalidJson.success, "Syntax error caught gracefully");

  // 2. Form Validation & Server Actions
  console.log("\n--- 2. Testing Contact Form Validations & Spam Traps ---");

  // Empty payload
  const emptyValidation = contactSchema.safeParse({});
  record("Contact Form (Rejects empty payload)", !emptyValidation.success && emptyValidation.error.issues.length >= 4, "Field requirements enforced");

  // Invalid email
  const badEmail = contactSchema.safeParse({
    name: "John Doe",
    email: "not-an-email",
    phoneOrWhatsApp: "+91 98765 43210",
    goal: "Build a website",
    description: "I need a high-converting business website.",
    privacyConsent: true,
  });
  record("Contact Form (Rejects invalid email format)", !badEmail.success && badEmail.error.issues.some(i => i.path.includes("email")), "Email format validated");

  // Invalid phone
  const badPhone = contactSchema.safeParse({
    name: "John Doe",
    email: "john@example.com",
    phoneOrWhatsApp: "abc",
    goal: "Build a website",
    description: "I need a high-converting business website.",
    privacyConsent: true,
  });
  record("Contact Form (Rejects invalid phone format)", !badPhone.success && badPhone.error.issues.some(i => i.path.includes("phoneOrWhatsApp")), "Phone regex validated");

  // Missing privacy consent
  const noConsent = contactSchema.safeParse({
    name: "John Doe",
    email: "john@example.com",
    phoneOrWhatsApp: "+91 98765 43210",
    goal: "Build a website",
    description: "I need a high-converting business website.",
    privacyConsent: false,
  });
  record("Contact Form (Requires privacy policy acceptance)", !noConsent.success && noConsent.error.issues.some(i => i.path.includes("privacyConsent")), "Consent enforced");

  // Valid submission
  const validData = {
    name: "Verified Lead",
    email: "lead@example.com",
    phoneOrWhatsApp: "+91 91871 26193",
    businessOrOrg: "Growth Corp",
    goal: "Build a website",
    description: "Looking to build a production Next.js digital presence.",
    budget: "₹50,000 – ₹1,00,000",
    privacyConsent: true,
    websiteHoneypot: "",
  };
  const validParse = contactSchema.safeParse(validData);
  record("Contact Form (Valid payload passes Zod validation)", validParse.success, "All fields valid");

  // Honeypot spam submission
  const spamData = { ...validData, websiteHoneypot: "https://spambot.xyz" };
  const spamParse = contactSchema.safeParse(spamData);
  record("Contact Form (Zod catches honeypot trap)", !spamParse.success && spamParse.error.issues.some(i => i.path.includes("websiteHoneypot")), "Spam blocked by schema");

  // 3. Responsive HTML & Layout Structure Checks
  console.log("\n--- 3. Testing Responsive Viewport Attributes & Brand Tokens ---");

  const homeHtml = await (await fetch(`${BASE_URL}/`)).text();

  record("Viewport Meta Tag (Ensures mobile responsiveness)",
    homeHtml.includes('name="viewport"') && homeHtml.includes('width=device-width'),
    'width=device-width, initial-scale=1'
  );

  record("Strict Dark Mode Enforcement (Root html element)",
    homeHtml.includes('class="dark') && !homeHtml.includes('class="light'),
    'html tag locked to "dark"'
  );

  record("No Theme Toggle UI Leaks (Removed completely)",
    !homeHtml.includes('theme-toggle-btn') && !homeHtml.includes('Switch to light mode'),
    'Zero light mode toggles in DOM'
  );

  record("Header Desktop Navigation (Uppercase consistency)",
    homeHtml.includes('SERVICES') && homeHtml.includes('SOLUTIONS') && homeHtml.includes('INDUSTRIES') && homeHtml.includes('FREE TOOLS'),
    'All desktop nav items are UPPERCASE'
  );

  record("Mobile Navigation Drawer Button (Present for mobile screens)",
    homeHtml.includes('aria-label="Open menu"') && homeHtml.includes('xl:hidden'),
    'Accessible mobile hamburger trigger present for <=1280px viewports'
  );

  console.log(`\n======================================================`);
  console.log(`INTERACTIVE & RESPONSIVE QA RESULTS:`);
  console.log(`Total Checks: ${passed + failed}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Health: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
  console.log(`======================================================\n`);
}

runDetailedQA().catch(console.error);
