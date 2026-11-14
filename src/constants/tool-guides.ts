export interface ToolTechnicalGuide {
  formulaOrLogic: string;
  assumptions?: string[];
  commonMistakesAndTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const TOOL_TECHNICAL_GUIDES: Record<string, ToolTechnicalGuide> = {
  "gst-calculator": {
    formulaOrLogic:
      "For GST Exclusive (adding tax): GST Amount = (Base Amount × GST Rate) ÷ 100, and Gross Total = Base Amount + GST Amount.\nFor GST Inclusive (extracting tax): GST Amount = Gross Total − [Gross Total × (100 ÷ (100 + GST Rate))], and Base Net Price = Gross Total − GST Amount.\nFor intra-state sales in India, GST is split equally into CGST (50%) and SGST (50%). For inter-state transactions, the entire tax applies as IGST (100%).",
    assumptions: [
      "Tax slabs are based on official Indian GST rates: 0%, 5%, 12%, 18%, and 28%.",
      "Most digital services, software consulting, and IT development fall under SAC 9983 at the standard 18% slab.",
      "Calculations assume standard commercial transactions without specialized compositional tax exemptions.",
    ],
    commonMistakesAndTips: [
      "Do not apply exclusive formulas to a customer's final price. If a client paid ₹10,000 all-inclusive, extracting 18% requires dividing by 1.18 (Base ₹8,474.58), not multiplying by 18% (which would mistakenly give ₹8,200).",
      "Always verify whether the buyer is registered in the same state (CGST + SGST) or another state (IGST) before creating the invoice.",
      "Ensure HSN codes for goods and SAC codes for services are clearly stated alongside the tax rates.",
    ],
    faqs: [
      {
        question: "What is the difference between GST inclusive and exclusive amounts?",
        answer:
          "GST Exclusive means the initial price does not include tax; tax is added on top of the subtotal. GST Inclusive means the displayed price already includes the tax amount, and the base cost must be reverse-calculated.",
      },
      {
        question: "Which GST slab applies to website development and digital agency services in India?",
        answer:
          "Website development, digital advertising services, and software engineering are classified under SAC code 9983 and are subject to the standard 18% GST slab.",
      },
      {
        question: "How do CGST and SGST differ from IGST?",
        answer:
          "When you supply services to a client located in the same state as your registered GST business, the tax is split equally between Central GST (CGST) and State GST (SGST). When supplying to a client in a different state, Integrated GST (IGST) applies at the full rate.",
      },
    ],
  },

  "percentage-calculator": {
    formulaOrLogic:
      "1. Find Percentage of Value: Result = (Percentage ÷ 100) × Base Value.\n2. Percentage What is X of Y: Result = (Part ÷ Whole) × 100%.\n3. Percentage Increase / Decrease: Change % = ((New Value − Old Value) ÷ |Old Value|) × 100%. If positive, it represents an increase; if negative, a reduction.",
    assumptions: [
      "Base values cannot be zero when calculating percentage changes or ratios.",
      "Results are rounded to two decimal places for financial and analytical precision.",
    ],
    commonMistakesAndTips: [
      "Reversing the base denominator: When measuring growth from 50 to 75, divide by 50 (+50% increase), not 75.",
      "Confusing percentage change with percentage points: Moving from a 5% conversion rate to 7% is a 2 percentage point increase, but a 40% relative increase.",
      "Always double-check negative signs when evaluating metrics like churn reduction or ad cost discounts.",
    ],
    faqs: [
      {
        question: "How do I calculate percentage discount on an invoice?",
        answer:
          "Multiply the original total by the discount percentage divided by 100 to get the cash discount, then subtract this discount from the original price.",
      },
      {
        question: "What is the difference between markup and profit margin?",
        answer:
          "Markup is the percentage added to cost to reach the selling price ((Price − Cost) ÷ Cost). Margin is the percentage of the selling price that is profit ((Price − Cost) ÷ Price). A 50% markup equals a 33.3% margin.",
      },
    ],
  },

  "discount-calculator": {
    formulaOrLogic:
      "Primary Savings = List Price × (Discount Rate ÷ 100).\nDiscounted Price = List Price − Primary Savings.\nWhen a secondary stacked coupon is applied: Final Price = Discounted Price × (1 − (Coupon Rate ÷ 100)).\nTotal Combined Savings = List Price − Final Price.",
    assumptions: [
      "Stacked discounts apply sequentially (multiplicative), not additively.",
      "Final prices are rounded to standard two-decimal currency units.",
    ],
    commonMistakesAndTips: [
      "Never sum stacked discounts directly: A 20% sale plus an extra 10% coupon equals an effective 28% discount, not 30%.",
      "Ensure minimum cart thresholds or category restrictions are clearly communicated to customers before running promo codes.",
    ],
    faqs: [
      {
        question: "Why does a 20% off plus 10% coupon not equal 30% off?",
        answer:
          "Because the secondary 10% coupon applies to the already discounted price, not the original full price. If an item costs ₹1,000, 20% off makes it ₹800; taking 10% off ₹800 saves ₹80 more, resulting in ₹720 (28% total savings).",
      },
      {
        question: "How do discounts impact digital advertising ROAS?",
        answer:
          "Discounts reduce your Average Order Value (AOV) and gross margin. If you discount prices by 20%, your return on ad spend (ROAS) must increase to maintain identical net profitability.",
      },
    ],
  },

  "freelance-rate-calculator": {
    formulaOrLogic:
      "Required Annual Gross = Desired Take-Home Pay + Taxes (estimated 25-30%) + Business Overheads (software, hardware, insurance, accounting).\nBillable Weeks per Year = 52 Weeks − (Vacation Weeks + Sick Days + Public Holidays).\nAnnual Billable Hours = Billable Weeks × (Target Weekly Working Hours × Billable Utilization Ratio, typically 55-65%).\nMinimum Hourly Rate = Required Annual Gross ÷ Annual Billable Hours.",
    assumptions: [
      "Freelancers cannot bill 100% of their 40-hour work week. 35-45% of time is consumed by proposals, lead calls, invoicing, learning, and admin.",
      "An average of 4-6 weeks per year are unbillable due to vacation, illness, and holidays.",
    ],
    commonMistakesAndTips: [
      "Do not base your hourly rate on an employee salary divided by 2,080 hours. As a contractor, you pay self-employment taxes, equipment, and unbillable sales time.",
      "Include a 15-20% profit margin above survival expenses to fund emergency business reserves and slow quarters.",
      "Use your calculated hourly rate to price fixed-scope project proposals rather than billing raw hours to clients.",
    ],
    faqs: [
      {
        question: "Why is a freelancer's hourly rate so much higher than a full-time employee salary?",
        answer:
          "Freelancers bear the full cost of healthcare, equipment, commercial software licenses, accounting, and retirement, while spending unpaid hours marketing and pitching. The higher hourly rate compensates for unbilled administrative time and business risk.",
      },
      {
        question: "How many hours per week should a freelancer assume are billable?",
        answer:
          "Most successful solo consultants bill between 20 and 25 hours per week. Assuming 35 or 40 billable hours per week almost always results in underpricing and burnout.",
      },
    ],
  },

  "service-pricing-calculator": {
    formulaOrLogic:
      "Base Project Cost = Estimated Labor Hours × Blended Hourly Cost.\nSubtotal = Base Cost + Direct Third-Party Expenses (API licenses, assets, specialized subcontracts).\nScope Contingency Buffer = Subtotal × (Contingency % ÷ 100, recommended 15-25%).\nFinal Recommended Quotation = Subtotal + Scope Contingency + Target Agency Margin.",
    assumptions: [
      "Client revision cycles and turnaround delays will occur on every project.",
      "Unanticipated scope adjustments average 15% on custom digital deliverables.",
    ],
    commonMistakesAndTips: [
      "Failing to charge for client communication: Weekly status calls, emails, and demonstrations are project work that must be accounted for.",
      "Always define what is out-of-scope in writing before accepting a project deposit.",
      "Avoid discounting project fees without reducing corresponding deliverable scope.",
    ],
    faqs: [
      {
        question: "Should I quote a fixed fee or an hourly rate for software and web design?",
        answer:
          "Fixed fees are preferred by business clients because they provide predictable budget ceilings. However, fixed pricing requires clearly bounded deliverables and a strict change-order process for out-of-scope requests.",
      },
      {
        question: "What contingency percentage should I include in agency proposals?",
        answer:
          "A 15% contingency is standard for well-defined website builds. For custom web applications, API integrations, or novel tech stacks, a 20% to 25% buffer is recommended.",
      },
    ],
  },

  "invoice-generator": {
    formulaOrLogic:
      "Line Item Total = Quantity × Unit Price.\nSubtotal = Sum of all Line Item Totals.\nDiscount Amount = Subtotal × (Discount Rate ÷ 100).\nTaxable Base = Subtotal − Discount Amount.\nTotal Tax = Taxable Base × (GST / Tax Rate ÷ 100).\nInvoice Total Due = Taxable Base + Total Tax + Shipping/Handling − Advance Paid.",
    assumptions: [
      "Invoices are compliant with standard Indian GST invoicing regulations and commercial credit requirements.",
      "Tax calculations maintain two-decimal precision with exact rounding.",
    ],
    commonMistakesAndTips: [
      "Always include unique, sequential invoice numbers (e.g. DG-2026-0042) for tax auditability.",
      "State clear payment due dates (e.g. Net 15 or Due on Receipt) and bank transfer details directly on the PDF.",
      "Ensure both your GSTIN and the client's GSTIN (if applicable) are prominently displayed for input tax credit claiming.",
    ],
    faqs: [
      {
        question: "What are the legally required fields on a B2B GST tax invoice in India?",
        answer:
          "A valid GST invoice must include: consecutive serial number, date of issue, name, address, and GSTIN of supplier and recipient, HSN/SAC code of goods or services, description, taxable value, tax rates, total amount, and signature/authorization.",
      },
      {
        question: "Is my client data saved on any external servers when using this tool?",
        answer:
          "No. All invoice generation and PDF rendering executes 100% locally in your web browser. DizitalGrow never stores your client names, rates, or bank details.",
      },
    ],
  },

  "quotation-generator": {
    formulaOrLogic:
      "Milestone Total = Sum of deliverables per phase.\nEstimated Project Cost = Milestone Subtotal + Contingency & Licensing − Promotional Credits.\nValidity Period = Quotation Date + Validity Window (typically 14 or 30 calendar days).",
    assumptions: [
      "A quotation is an official commercial offer that becomes binding upon client signature or purchase order issuance.",
      "Pricing is guaranteed only within the stated validity window.",
    ],
    commonMistakesAndTips: [
      "Never issue an open-ended quote without an expiration date. Material costs, API pricing, and team capacity change over time.",
      "Divide complex projects into 3-4 milestone payments (e.g. 40% deposit, 30% milestone, 30% launch) rather than invoicing 100% at the end.",
    ],
    faqs: [
      {
        question: "How does a quotation differ from an estimate or invoice?",
        answer:
          "An estimate is a non-binding ballpark projection. A quotation is a formal fixed-price offer with specific terms and deliverables. An invoice is a request for payment issued after work has been authorized or completed.",
      },
      {
        question: "How long should a digital agency quotation remain valid?",
        answer:
          "Most digital agencies set quotation validity between 14 and 30 days to protect against resource scheduling conflicts and scope drift.",
      },
    ],
  },

  "utm-builder": {
    formulaOrLogic:
      "Tracking URL Syntax: [Destination URL]?[Parameters]\nRequired Parameter: utm_source (where traffic originates, e.g. google, meta, linkedin, newsletter).\nRequired Parameter: utm_medium (the marketing channel type, e.g. cpc, email, paid_social, referral).\nRecommended Parameter: utm_campaign (the specific campaign or initiative, e.g. summer_promo_2026).\nOptional Parameters: utm_content (for A/B creative variants) and utm_term (for paid keyword targets).",
    assumptions: [
      "All parameters are URL-encoded to handle special characters cleanly.",
      "Analytics platforms like Google Analytics 4 (GA4) are case-sensitive by default.",
    ],
    commonMistakesAndTips: [
      "Never use uppercase letters or mixed casing. Google Analytics treats 'Facebook', 'facebook', and 'fb' as three distinct traffic sources. Always use lowercase.",
      "Use hyphens or underscores instead of spaces. Spaces turn into messy '%20' characters in URLs.",
      "CRITICAL: Never use UTM tags on internal links on your own website. Clicking an internal UTM link overwrites the original visitor acquisition source in GA4, destroying conversion attribution.",
    ],
    faqs: [
      {
        question: "Can I use UTM parameters on links within my own website?",
        answer:
          "No! Using UTM tags on internal links destroys your analytics data by resetting the visitor's session and attributing conversions to the internal link rather than the original Google search or ad click.",
      },
      {
        question: "What is the recommended naming convention for UTM tags?",
        answer:
          "Use all lowercase letters, separate words with hyphens (e.g. utm_campaign=q3-saas-launch), and maintain consistent values across all marketing team members.",
      },
    ],
  },

  "json-formatter": {
    formulaOrLogic:
      "JSON Parsing & RFC 8259 Validation: The tool parses the input string using the ECMAScript JSON grammar. It verifies balanced braces, strict double-quoted keys, valid numeric representations, and formats the output with configurable 2-space or 4-space indentation.",
    assumptions: [
      "Strict JSON rules apply: single quotes, trailing commas, comments, and unquoted keys are invalid.",
      "Execution is instantaneous and entirely client-side without data transmission.",
    ],
    commonMistakesAndTips: [
      "Trailing commas: JSON does not permit a comma after the final key in an object or array.",
      "Single quotes: Standard JSON requires double quotes (`\"key\": \"value\"`). Single quotes will fail validation.",
      "Unescaped control characters or unclosed brackets are the most common syntax errors in API payloads.",
    ],
    faqs: [
      {
        question: "Is it safe to paste confidential API keys or client JSON data into this formatter?",
        answer:
          "Yes. This tool runs 100% in your local browser sandbox using JavaScript. No JSON payload is ever uploaded, cached, or transmitted to any server.",
      },
      {
        question: "Why does valid JavaScript code fail JSON validation?",
        answer:
          "JavaScript objects allow single quotes, unquoted keys, functions, and trailing commas. JSON is a strict data interchange standard that disallows functions and enforces double quotes on all string keys and values.",
      },
    ],
  },

  "serp-preview": {
    formulaOrLogic:
      "Search Engine Result Page (SERP) Pixel Simulation:\nDesktop Title Limit: ~600px width (approx. 55 to 60 characters). Longer titles are truncated by Google with an ellipsis (...).\nMobile Title Limit: ~570px width (approx. 50 to 55 characters).\nDesktop Description Limit: ~960px width (approx. 155 to 160 characters).\nMobile Description Limit: ~680px width (approx. 115 to 130 characters).",
    assumptions: [
      "Character width varies based on font geometry (e.g. 'W' takes more horizontal pixels than 'I').",
      "Google may dynamically rewrite titles based on query intent and page H1 tags.",
    ],
    commonMistakesAndTips: [
      "Front-load your primary target keyword in the title tag so it remains visible even if truncation occurs.",
      "Include a compelling value proposition and call to action in the meta description to maximize organic click-through rate (CTR).",
      "Ensure every page on your website has a unique, non-duplicated title and description.",
    ],
    faqs: [
      {
        question: "Does having keywords in the meta description directly improve Google rankings?",
        answer:
          "Meta descriptions do not directly influence search ranking algorithms. However, when user search terms match words in your description, Google bolds them, which noticeably increases click-through rates (CTR).",
      },
      {
        question: "Why does Google sometimes display a different title than what I configured?",
        answer:
          "Google's algorithms may rewrite title tags if they are too long, stuffed with keywords, irrelevant to the specific user query, or if the page's H1 tag provides a clearer answer to the search intent.",
      },
    ],
  },

  "slug-generator": {
    formulaOrLogic:
      "URL Sanitization Pipeline: Convert string to lowercase → Normalize unicode diacritics (e.g. café → cafe) → Replace spaces and underscores with hyphens → Remove all non-alphanumeric characters (except hyphens) → Collapse multiple consecutive hyphens into a single hyphen → Trim leading and trailing hyphens.",
    assumptions: [
      "Resulting slugs adhere to RFC 3986 URI generic syntax standards.",
      "Slugs are optimized for search engine crawlability and clean human readability.",
    ],
    commonMistakesAndTips: [
      "Keep URL slugs concise and keyword-dense: Prefer `/services/web-development` over `/services/the-best-and-most-affordable-website-development-in-2026`.",
      "Never change a live URL slug without configuring a permanent 301 redirect from the old URL to preserve SEO rankings.",
    ],
    faqs: [
      {
        question: "Why are hyphens preferred over underscores in URL slugs?",
        answer:
          "Google treats hyphens as word separators (e.g. 'web-design' is indexed as 'web design'), while underscores are treated as word joiners ('web_design' may be seen as a single token).",
      },
      {
        question: "Should I include stop words (like 'in', 'and', 'the') in URL slugs?",
        answer:
          "Removing unnecessary stop words creates shorter, cleaner URLs that are easier for users to remember and cleaner for search engines to parse.",
      },
    ],
  },
};

export function getToolGuide(slug: string, categorySlug?: string): ToolTechnicalGuide {
  if (TOOL_TECHNICAL_GUIDES[slug]) {
    return TOOL_TECHNICAL_GUIDES[slug];
  }

  // Smart contextual fallback based on category
  if (categorySlug === "everyday-calculators" || slug.includes("calculator") || slug.includes("estimator")) {
    return {
      formulaOrLogic:
        "Mathematical Calculation Mechanics: Inputs are sanitized, converted to floating-point numbers, and computed using verified numerical algorithms with two-decimal precision. Results update dynamically on keystroke without page reloads.",
      assumptions: [
        "Numerical calculations assume standard mathematical operator precedence.",
        "Inputs must be valid positive numbers unless negative balances or rate adjustments apply.",
      ],
      commonMistakesAndTips: [
        "Ensure all required input fields are entered correctly before interpreting output totals.",
        "Always test multiple edge-case scenarios to understand realistic upper and lower financial boundaries.",
      ],
      faqs: [
        {
          question: "How accurate are the calculation results?",
          answer:
            "Calculations are computed using exact floating-point math with precision rounding. They provide accurate estimations for operational planning, invoicing, and budgeting.",
        },
        {
          question: "Are my calculation numbers stored or shared?",
          answer:
            "No. All computations occur exclusively in your browser memory. Nothing is transmitted over the internet or saved on remote servers.",
        },
      ],
    };
  }

  if (categorySlug === "marketing-seo" || slug.includes("preview") || slug.includes("meta")) {
    return {
      formulaOrLogic:
        "Search & Social Preview Architecture: The utility renders an in-memory simulation of how search engine algorithms and social platforms (Google, Meta, Twitter/X, LinkedIn) parse title tags, Open Graph cards, and URL parameters.",
      assumptions: [
        "Display limits reflect the latest desktop and mobile viewport rendering standards.",
        "Character and pixel width estimations conform to standard platform typography scales.",
      ],
      commonMistakesAndTips: [
        "Keep key marketing messages within safe visible thresholds to avoid truncation across mobile viewports.",
        "Ensure consistent branding and metadata structure across all landing pages.",
      ],
      faqs: [
        {
          question: "Why is metadata optimization critical for search rankings?",
          answer:
            "Accurate, engaging metadata improves click-through rates (CTR) from search engine result pages, signaling to search algorithms that your content satisfies user intent.",
        },
        {
          question: "How often should I audit my metadata previews?",
          answer:
            "Audit your key commercial landing pages and high-traffic articles quarterly to ensure descriptions stay current with product updates and seasonal offers.",
        },
      ],
    };
  }

  // Default fallback for content, career, and developer utilities
  return {
    formulaOrLogic:
      "Client-Side Processing Pipeline: The tool executes locally in your browser environment. Text inputs are processed through character analysis, keyword extraction, and structural formatting algorithms designed for professional publishing.",
    assumptions: [
      "Formatting standards adhere to the latest platform specifications and character guidelines.",
      "100% private and secure: your input never leaves your local browser session.",
    ],
    commonMistakesAndTips: [
      "Review generated content to ensure it matches your specific brand tone of voice and professional standards.",
      "Copy outputs directly to your clipboard using the one-click copy buttons for clean formatting without stray characters.",
    ],
    faqs: [
      {
        question: "Is this tool completely free to use?",
        answer:
          "Yes. All DizitalGrow tools are 100% free with no registration, no subscription paywalls, and no usage limits.",
      },
      {
        question: "Does DizitalGrow save or train AI models on my input text?",
        answer:
          "No. All processing happens entirely within your web browser. DizitalGrow does not collect, log, or train on any text entered into our free tools.",
      },
    ],
  };
}

