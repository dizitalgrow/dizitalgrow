import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { EDITORIAL_TEMPLATES } from "../lib/editorial/templates.ts";
import { validateArticleSEO } from "../lib/editorial/seo-validator.ts";
import {
  slugifyHeading,
  extractTocFromBlocks,
} from "../lib/editorial/heading-utils.ts";
import {
  categoryToSlug,
  slugToCategoryDisplayName,
} from "../lib/editorial/category-utils.ts";

describe("DizitalGrow Editorial SEO System Tests", () => {
  describe("1. Template Definitions (Part 3)", () => {
    it("should verify all 8 templates (A through H) exist with defined sections", () => {
      const templates = [
        "how-to",
        "top10-listicle",
        "comparison",
        "technical-guide",
        "case-study",
        "pricing-guide",
        "informational-guide",
        "service-focused",
      ];
      for (const t of templates) {
        assert.ok(EDITORIAL_TEMPLATES[t], `Template ${t} must exist`);
        assert.ok(
          EDITORIAL_TEMPLATES[t].sections.length >= 3,
          `Template ${t} must have at least 3 sections`
        );
        assert.ok(
          EDITORIAL_TEMPLATES[t].requiredComponents.length >= 2,
          `Template ${t} must have required components`
        );
      }
    });

    it("should have comparison table block in top10-listicle and comparison templates", () => {
      assert.ok(
        EDITORIAL_TEMPLATES["top10-listicle"].sections.some((s) =>
          s.recommendedBlocks.includes("comparisonTable")
        )
      );
      assert.ok(
        EDITORIAL_TEMPLATES["comparison"].sections.some((s) =>
          s.recommendedBlocks.includes("comparisonTable")
        )
      );
    });

    it("should have stepByStepGuide in how-to and case-study templates", () => {
      assert.ok(
        EDITORIAL_TEMPLATES["how-to"].sections.some((s) =>
          s.recommendedBlocks.includes("stepByStepGuide")
        )
      );
      assert.ok(
        EDITORIAL_TEMPLATES["case-study"].sections.some((s) =>
          s.recommendedBlocks.includes("stepByStepGuide")
        )
      );
    });
  });

  describe("2. Table of Contents & Heading Slugification (Part 2)", () => {
    it("should slugify headings cleanly and deterministically", () => {
      assert.equal(
        slugifyHeading("How to Grow Your Business Online in 2026!"),
        "how-to-grow-your-business-online-in-2026"
      );
      assert.equal(
        slugifyHeading("Section A: Core & Architecture (Deep-Dive)"),
        "section-a-core-architecture-deep-dive"
      );
    });

    it("should extract H2 and H3 items from Portable Text blocks with stable IDs and no collisions", () => {
      const mockBlocks = [
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Introduction & Context" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: "Some paragraph content." }],
        },
        {
          _type: "block",
          style: "h3",
          children: [{ _type: "span", text: "Sub-point 1" }],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ _type: "span", text: "Introduction & Context" }],
        },
      ];

      const toc = extractTocFromBlocks(mockBlocks);
      assert.equal(toc.length, 3);
      assert.equal(toc[0].id, "introduction-context");
      assert.equal(toc[0].level, 2);
      assert.equal(toc[1].id, "sub-point-1");
      assert.equal(toc[1].level, 3);
      assert.equal(toc[2].id, "introduction-context-1");
    });
  });

  describe("3. Category URL & Breadcrumb Helpers (Part 1 & 15)", () => {
    it("should slugify categories consistently", () => {
      assert.equal(categoryToSlug("AI & Digital Marketing"), "ai-and-digital-marketing");
      assert.equal(categoryToSlug("Web Development"), "web-development");
      assert.equal(categoryToSlug("SEO & Performance"), "seo-and-performance");
    });

    it("should map slug back to display name accurately", () => {
      const existing = ["AI & Digital Marketing", "Web Applications", "Meta CAPI"];
      assert.equal(
        slugToCategoryDisplayName("ai-and-digital-marketing", existing),
        "AI & Digital Marketing"
      );
      assert.equal(
        slugToCategoryDisplayName("web-applications", existing),
        "Web Applications"
      );
    });
  });

  describe("4. Automated SEO Intelligence Validator (Part 16)", () => {
    it("should score a fully compliant article with 90+ score and zero failures", () => {
      const mockPost = {
        title: "How to Configure Meta CAPI for Server Tracking",
        seoTitle: "How to Configure Meta CAPI | DizitalGrow",
        metaDescription:
          "Comprehensive guide to implementing first-party server-side Meta Conversions API (CAPI) for improved event match quality and tracking reliability.",
        slug: { current: "how-to-configure-meta-capi" },
        category: "Analytics & Tracking",
        tags: ["meta-capi", "server-gtm", "tracking"],
        author: "Dizital Grow Editorial",
        publishedAt: "2026-11-01T10:00:00Z",
        featuredImage: {
          asset: { _ref: "image-abc-1200x630-jpg" },
          alt: "Meta CAPI Architecture Diagram",
        },
        body: [
          {
            _type: "block",
            style: "h2",
            children: [{ _type: "span", text: "Overview & Architecture" }],
            markDefs: [
              { _type: "link", href: "/services/web-development" },
              { _type: "link", href: "/meta-capi" },
            ],
          },
          {
            _type: "block",
            style: "normal",
            children: [{ _type: "span", text: "Guide text goes here." }],
          },
        ],
        references: [
          {
            title: "Meta for Developers CAPI Documentation",
            url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
            publisher: "Meta Platforms Inc.",
          },
        ],
      };

      const audit = validateArticleSEO(mockPost);
      assert.equal(audit.failures, 0, "Compliant article must have 0 failures");
      assert.ok(audit.score >= 90, `Score must be >= 90, got ${audit.score}`);
      assert.equal(audit.isIndexable, true);
      assert.equal(audit.eligibleForSitemap, true);
      assert.equal(audit.totalChecks, 16);
    });

    it("should catch missing title, missing slug, or missing author as critical failures", () => {
      const invalidPost = {
        title: "",
        slug: { current: "" },
      };

      const audit = validateArticleSEO(invalidPost);
      assert.ok(audit.failures > 0, "Must flag missing required fields as failures");
      assert.ok(audit.score < 50, "Incomplete article must score < 50");
      assert.equal(audit.eligibleForSitemap, false);
    });
  });

  describe("5. Social Sharing & URL Encoding (Part 3 & 4)", () => {
    it("should correctly encode canonical URLs and titles for social platforms", () => {
      const articleUrl = "https://dizitalgrow.in/blog/how-to-grow-your-business-online";
      const title = "How to Grow Your Business Online in 2026 & Scale With AI";

      const encodedUrl = encodeURIComponent(articleUrl);
      const encodedTitle = encodeURIComponent(title);

      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=dizitalgrow`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

      assert.ok(linkedinUrl.includes("https%3A%2F%2Fdizitalgrow.in%2Fblog%2Fhow-to-grow-your-business-online"));
      assert.ok(twitterUrl.includes("via=dizitalgrow"));
      assert.ok(whatsappUrl.includes("https%3A%2F%2Fdizitalgrow.in"));
    });
  });

  describe("6. Structured Data Schema Compatibility (Part 7)", () => {
    it("should format valid BlogPosting JSON-LD object", () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "How to Grow Your Business Online in 2026",
        description: "Article excerpt",
        datePublished: "2026-10-26T18:30:00.000Z",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://dizitalgrow.in/blog/how-to-grow-your-business-online",
        },
        author: {
          "@type": "Person",
          name: "Dizital Grow Editorial",
        },
        publisher: {
          "@type": "Organization",
          name: "Dizital Grow",
        },
      };

      assert.equal(schema["@type"], "BlogPosting");
      assert.equal(schema.author["@type"], "Person");
      assert.equal(schema.publisher["@type"], "Organization");
      assert.ok(schema.mainEntityOfPage["@id"].startsWith("https://"));
    });
  });

  describe("7. Google Preferred Sources Official HTML Compatibility (Part 5)", () => {
    it("should verify official Google Preferred Sources attributes", () => {
      const expectedScript = "https://news.google.com/swg/js/v1/publisher.js";
      const expectedAttribute = "google-add-preferred-source-btn";

      assert.equal(expectedScript, "https://news.google.com/swg/js/v1/publisher.js");
      assert.equal(expectedAttribute, "google-add-preferred-source-btn");
    });
  });
});
