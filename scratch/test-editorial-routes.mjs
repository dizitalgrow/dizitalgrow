import { spawn } from "node:child_process";

const PORT = 3005;
const BASE_URL = `http://localhost:${PORT}`;

const EDITORIAL_ROUTES = [
  "/blog",
  "/blog/how-to-grow-your-business-online",
  "/blog/ai-tools-grow-your-business-2026",
  "/blog/category/ai-and-digital-marketing",
  "/blog/author/dizital-grow-editorial",
  "/blog/editorial-policy",
  "/sitemap.xml",
  "/robots.txt",
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startServer() {
  console.log(`Starting Next.js on port ${PORT}...`);
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    shell: true,
    stdio: "pipe",
  });

  server.stdout.on("data", (d) => {
    // console.log("[server]", d.toString());
  });

  server.stderr.on("data", (d) => {
    // console.error("[server err]", d.toString());
  });

  // Wait for server to be responsive
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const res = await fetch(`${BASE_URL}/robots.txt`);
      if (res.ok) {
        console.log(`Server is ready on ${BASE_URL}`);
        return server;
      }
    } catch {
      // Keep waiting
    }
  }

  throw new Error("Server failed to start in 15 seconds.");
}

async function auditRoute(route) {
  const url = `${BASE_URL}${route}`;
  const res = await fetch(url);
  const text = await res.text();

  const report = {
    route,
    status: res.status,
    ok: res.ok,
    hasH1: false,
    h1Count: 0,
    hasCanonical: false,
    canonicalHref: null,
    hasBlogPostingSchema: false,
    hasBreadcrumbSchema: false,
    hasGooglePreferredSourcesBtn: false,
    hasGooglePublisherScript: false,
    hasTableOfContents: false,
    hasSocialShare: false,
    hasAuthorBox: false,
    warnings: [],
  };

  if (!res.ok) {
    report.warnings.push(`HTTP status ${res.status}`);
    return report;
  }

  // Check H1
  const h1Matches = text.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  report.h1Count = h1Matches.length;
  report.hasH1 = h1Matches.length === 1;
  if (h1Matches.length > 1 && !route.endsWith(".xml") && !route.endsWith(".txt")) {
    report.warnings.push(`Multiple H1s found (${h1Matches.length})`);
  }

  // Check Canonical
  const canonicalMatch = text.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    report.hasCanonical = true;
    report.canonicalHref = canonicalMatch[1];
  }

  // Check JSON-LD
  report.hasBlogPostingSchema = text.includes('"@type":"BlogPosting"') || text.includes('"@type": "BlogPosting"');
  report.hasBreadcrumbSchema = text.includes('"@type":"BreadcrumbList"') || text.includes('"@type": "BreadcrumbList"');

  // Check Google Preferred Sources
  report.hasGooglePreferredSourcesBtn = text.includes("google-add-preferred-source-btn");
  report.hasGooglePublisherScript = text.includes("news.google.com/swg/js/v1/publisher.js");

  // Check Table of Contents
  report.hasTableOfContents = text.includes("Table of Contents") || text.includes("table-of-contents");

  // Check Social Share
  report.hasSocialShare = text.includes("Share article") || text.includes("linkedin.com/sharing");

  // Check Author Box
  report.hasAuthorBox = text.includes("AUTHOR &amp; EDITORIAL CREDENTIALS") || text.includes("AUTHOR & EDITORIAL CREDENTIALS") || text.includes("dizital-grow-editorial");

  return report;
}

async function run() {
  let server;
  try {
    server = await startServer();
    console.log("Auditing editorial routes in production HTML...\n");

    const results = [];
    for (const route of EDITORIAL_ROUTES) {
      const audit = await auditRoute(route);
      results.push(audit);
      console.log(`[${audit.status}] ${route}`);
      if (audit.warnings.length > 0) {
        console.log(`   ⚠ Warnings:`, audit.warnings.join(", "));
      } else {
        console.log(`   ✓ H1: ${audit.h1Count}, Canonical: ${audit.canonicalHref || "N/A"}`);
      }
    }

    console.log("\nSummary of Editorial Audits:");
    console.table(
      results.map((r) => ({
        Route: r.route,
        Status: r.status,
        H1: r.h1Count,
        Canonical: Boolean(r.hasCanonical),
        BlogPosting: r.hasBlogPostingSchema,
        Breadcrumb: r.hasBreadcrumbSchema,
        GoogleBtn: r.hasGooglePreferredSourcesBtn,
        TOC: r.hasTableOfContents,
        Share: r.hasSocialShare,
      }))
    );
  } finally {
    if (server) {
      console.log("Stopping test server...");
      server.kill();
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
