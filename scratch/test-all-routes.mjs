import fs from "node:fs";

const BASE_URL = "http://localhost:3000";

const ROUTES = [
  // Main Pages
  "/",
  "/about",
  "/process",
  "/work",
  "/contact",
  "/blog",
  "/privacy-policy",
  "/terms",
  "/meta-capi",

  // Services
  "/services",
  "/services/web-development",
  "/services/web-applications",
  "/services/mobile-apps",
  "/services/meta-ads",
  "/services/google-ads",
  "/services/seo-visibility",
  "/services/conversion-tracking",

  // Solutions
  "/solutions",
  "/solutions/personal-websites",
  "/solutions/portfolio-websites",
  "/solutions/professional-websites",
  "/solutions/business-websites",
  "/solutions/ecommerce-websites",
  "/solutions/saas-development",
  "/solutions/landing-pages",
  "/solutions/web-applications",
  "/solutions/mobile-applications",

  // Industries
  "/industries",
  "/industries/healthcare",
  "/industries/real-estate",
  "/industries/education",
  "/industries/ecommerce-retail",
  "/industries/manufacturing",
  "/industries/professional-services",

  // Tool Hub & Categories
  "/tools",
  "/tools/career-students",
  "/tools/business-freelancers",
  "/tools/marketing-seo",
  "/tools/creators-social-media",
  "/tools/developer-utilities",
  "/tools/everyday-calculators",

  // 24 Free Tools
  "/tools/linkedin-headline-generator",
  "/tools/linkedin-about-builder",
  "/tools/resume-summary-builder",
  "/tools/portfolio-content-planner",
  "/tools/freelance-rate-calculator",
  "/tools/service-pricing-calculator",
  "/tools/invoice-generator",
  "/tools/quotation-generator",
  "/tools/meta-title-generator",
  "/tools/serp-preview",
  "/tools/utm-builder",
  "/tools/slug-generator",
  "/tools/open-graph-preview",
  "/tools/instagram-bio-generator",
  "/tools/caption-formatter",
  "/tools/youtube-description-builder",
  "/tools/social-media-content-calendar",
  "/tools/json-formatter",
  "/tools/css-gradient-generator",
  "/tools/box-shadow-generator",
  "/tools/qr-code-generator",
  "/tools/percentage-calculator",
  "/tools/gst-calculator",
  "/tools/discount-calculator",

  // Dynamic Blog Posts (Sanity CMS)
  "/blog/ai-tools-grow-your-business-2026",
  "/blog/how-to-grow-your-business-online",
];

const REDIRECTS = [
  { from: "/privacy", to: "/privacy-policy" },
  { from: "/terms-of-service", to: "/terms" },
  { from: "/services/website-development", to: "/services/web-development" },
  { from: "/services/web-application-development", to: "/services/web-applications" },
  { from: "/services/mobile-app-development", to: "/services/mobile-apps" },
  { from: "/services/seo", to: "/services/seo-visibility" },
  { from: "/services/meta-conversions-api", to: "/meta-capi" },
  { from: "/tools/hourly-rate-calculator", to: "/tools/freelance-rate-calculator" },
];

const SPECIAL_ENDPOINTS = [
  { url: "/robots.txt", expectedSnippet: "User-agent:" },
  { url: "/sitemap.xml", expectedSnippet: "urlset" },
];

async function runAudit() {
  console.log(`Starting Comprehensive QA Audit against ${BASE_URL}...\n`);
  const results = [];
  let passedCount = 0;
  let failedCount = 0;

  for (const route of ROUTES) {
    const url = `${BASE_URL}${route}`;
    const startTime = performance.now();
    try {
      const res = await fetch(url, { headers: { "User-Agent": "DizitalGrow-QA-Bot/1.0" } });
      const duration = Math.round(performance.now() - startTime);
      const html = await res.text();

      const checks = {
        route,
        status: res.status,
        durationMs: duration,
        is200: res.status === 200,
        hasTitle: /<title>([^<]+)<\/title>/i.test(html),
        titleMatch: html.match(/<title>([^<]+)<\/title>/i)?.[1] || "",
        hasMetaDesc: /<meta\s+name=["']description["']/i.test(html),
        hasCanonical: /<link\s+rel=["']canonical["']/i.test(html),
        hasHeader: /<header/i.test(html),
        hasFooter: /<footer/i.test(html),
        hasDarkClass: /<html[^>]*class=["'][^"']*dark/i.test(html),
        hasLightLeak: /<html[^>]*class=["'][^"']*light/i.test(html),
        hasRuntimeError: /Application error|Unhandled Runtime Error|500 Internal Server Error/i.test(html),
      };

      const passed =
        checks.is200 &&
        checks.hasTitle &&
        checks.hasMetaDesc &&
        checks.hasHeader &&
        checks.hasFooter &&
        checks.hasDarkClass &&
        !checks.hasLightLeak &&
        !checks.hasRuntimeError;

      if (passed) {
        passedCount++;
        console.log(`✔ [200 OK] ${route.padEnd(42)} ${duration}ms | Title: "${checks.titleMatch.slice(0, 30)}..."`);
      } else {
        failedCount++;
        console.error(`✖ [FAIL] ${route} (status: ${res.status}, title: ${checks.hasTitle}, desc: ${checks.hasMetaDesc}, dark: ${checks.hasDarkClass}, error: ${checks.hasRuntimeError})`);
      }

      results.push({ ...checks, passed });
    } catch (err) {
      failedCount++;
      console.error(`✖ [NETWORK ERROR] ${route}: ${err.message}`);
      results.push({ route, error: err.message, passed: false });
    }
  }

  // Audit Redirects
  console.log(`\nAuditing Canonical Redirects (${REDIRECTS.length} configured)...`);
  for (const r of REDIRECTS) {
    try {
      const res = await fetch(`${BASE_URL}${r.from}`, { redirect: "manual" });
      const location = res.headers.get("location") || "";
      const isRedirect = res.status === 307 || res.status === 308;
      const destinationMatches = location.endsWith(r.to);
      if (isRedirect && destinationMatches) {
        console.log(`✔ [${res.status} REDIRECT] ${r.from} -> ${location}`);
      } else {
        console.error(`✖ [REDIRECT FAILED] ${r.from} returned status ${res.status}, location: ${location}`);
        failedCount++;
      }
    } catch (err) {
      console.error(`✖ [REDIRECT ERROR] ${r.from}: ${err.message}`);
    }
  }

  // Audit Special Endpoints (robots.txt, sitemap.xml)
  console.log(`\nAuditing Special Endpoints...`);
  for (const ep of SPECIAL_ENDPOINTS) {
    try {
      const res = await fetch(`${BASE_URL}${ep.url}`);
      const text = await res.text();
      const hasSnippet = text.toLowerCase().includes(ep.expectedSnippet.toLowerCase());
      if (res.status === 200 && hasSnippet) {
        console.log(`✔ [200 OK] ${ep.url} (Contains expected token: "${ep.expectedSnippet}")`);
      } else {
        console.error(`✖ [FAIL] ${ep.url} status: ${res.status}`);
        failedCount++;
      }
    } catch (err) {
      console.error(`✖ [ERROR] ${ep.url}: ${err.message}`);
    }
  }

  console.log(`\n==========================================`);
  console.log(`Total Routes Audited: ${ROUTES.length}`);
  console.log(`Passed: ${passedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Success Rate: ${((passedCount / ROUTES.length) * 100).toFixed(1)}%`);
  console.log(`==========================================\n`);

  fs.writeFileSync("scratch/audit-results.json", JSON.stringify(results, null, 2));
}

runAudit();

