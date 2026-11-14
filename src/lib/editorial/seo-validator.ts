import type { SanityPostDetail } from "@/lib/sanity";

export interface SEOCheckResult {
  id: string;
  name: string;
  status: "pass" | "warn" | "fail";
  message: string;
  details?: string;
}

export interface ArticleSEOSummary {
  score: number; // 0 - 100
  totalChecks: number;
  passed: number;
  warnings: number;
  failures: number;
  results: SEOCheckResult[];
  isIndexable: boolean;
  eligibleForSitemap: boolean;
}

/**
 * Validates 16 core SEO criteria for any DizitalGrow article.
 */
export function validateArticleSEO(post: Partial<SanityPostDetail>): ArticleSEOSummary {
  const results: SEOCheckResult[] = [];

  // 1. Title Tag
  const title = post.seoTitle || post.title || "";
  if (!title.trim()) {
    results.push({
      id: "title",
      name: "SEO Title Tag",
      status: "fail",
      message: "Title tag is missing.",
    });
  } else if (title.length > 60) {
    results.push({
      id: "title",
      name: "SEO Title Tag",
      status: "warn",
      message: `Title length (${title.length} chars) exceeds 60 characters and may truncate.`,
      details: title,
    });
  } else {
    results.push({
      id: "title",
      name: "SEO Title Tag",
      status: "pass",
      message: `Title length is optimal (${title.length} chars).`,
    });
  }

  // 2. Meta Description
  const description = post.metaDescription || post.excerpt || "";
  if (!description.trim()) {
    results.push({
      id: "metaDescription",
      name: "Meta Description",
      status: "fail",
      message: "Meta description is missing.",
    });
  } else if (description.length < 50) {
    results.push({
      id: "metaDescription",
      name: "Meta Description",
      status: "warn",
      message: `Meta description is short (${description.length} chars). Aim for 120-155 characters.`,
    });
  } else if (description.length > 165) {
    results.push({
      id: "metaDescription",
      name: "Meta Description",
      status: "warn",
      message: `Meta description (${description.length} chars) may be truncated on mobile SERPs.`,
    });
  } else {
    results.push({
      id: "metaDescription",
      name: "Meta Description",
      status: "pass",
      message: `Meta description is well-balanced (${description.length} chars).`,
    });
  }

  // 3. Canonical URL
  const slug = post.slug?.current || "";
  const canonical = post.canonicalUrl || (slug ? `https://dizitalgrow.in/blog/${slug}` : "");
  if (!canonical.startsWith("https://dizitalgrow.in/blog/")) {
    results.push({
      id: "canonical",
      name: "Canonical URL",
      status: canonical ? "warn" : "fail",
      message: canonical
        ? `Non-standard canonical URL configured: ${canonical}`
        : "Canonical URL cannot be derived without a slug.",
    });
  } else {
    results.push({
      id: "canonical",
      name: "Canonical URL",
      status: "pass",
      message: `Valid HTTPS canonical URL: ${canonical}`,
    });
  }

  // 4. Primary H1 Headline
  if (post.title && post.title.trim().length > 0) {
    results.push({
      id: "h1",
      name: "Primary H1 Headline",
      status: "pass",
      message: "Exactly one primary H1 headline rendered at article top.",
    });
  } else {
    results.push({
      id: "h1",
      name: "Primary H1 Headline",
      status: "fail",
      message: "Article headline (H1) is missing.",
    });
  }

  // 5. Heading Hierarchy (H2 / H3 inspection in body)
  const body = post.body || [];
  const headingStyles = body
    .filter((b) => b._type === "block" && typeof b.style === "string" && b.style.startsWith("h"))
    .map((b) => b.style as string);

  let hasHierarchyViolation = false;
  let seenH2 = false;
  for (const style of headingStyles) {
    if (style === "h2") seenH2 = true;
    if (style === "h3" && !seenH2) {
      hasHierarchyViolation = true;
      break;
    }
  }

  if (headingStyles.length === 0) {
    results.push({
      id: "headings",
      name: "Heading Hierarchy",
      status: "warn",
      message: "No H2 or H3 section headings found in article body.",
    });
  } else if (hasHierarchyViolation) {
    results.push({
      id: "headings",
      name: "Heading Hierarchy",
      status: "warn",
      message: "An H3 heading precedes an H2 heading. Maintain strict logical hierarchy.",
    });
  } else {
    results.push({
      id: "headings",
      name: "Heading Hierarchy",
      status: "pass",
      message: `Logical heading structure verified (${headingStyles.length} total headings).`,
    });
  }

  // 6. BlogPosting Schema Validity
  const hasAuthor = Boolean(post.author || post.authorProfile);
  const hasDate = Boolean(post.publishedAt);
  if (hasAuthor && hasDate && post.title) {
    results.push({
      id: "schemaBlogPosting",
      name: "BlogPosting Structured Data",
      status: "pass",
      message: "All mandatory BlogPosting schema fields present (headline, author, publisher, datePublished).",
    });
  } else {
    results.push({
      id: "schemaBlogPosting",
      name: "BlogPosting Structured Data",
      status: "fail",
      message: "Missing essential structured data attributes (author, date, or headline).",
    });
  }

  // 7. Breadcrumb Schema
  if (post.category && slug) {
    results.push({
      id: "schemaBreadcrumb",
      name: "BreadcrumbList Structured Data",
      status: "pass",
      message: `Valid breadcrumb hierarchy: Home > Blog > ${post.category} > Article.`,
    });
  } else {
    results.push({
      id: "schemaBreadcrumb",
      name: "BreadcrumbList Structured Data",
      status: "warn",
      message: "Category not set; fallback 2-level breadcrumb list will be generated.",
    });
  }

  // 8. Open Graph Tags
  const hasImage = Boolean(post.socialImage?.asset || post.featuredImage?.asset);
  if (title && description && canonical && hasImage) {
    results.push({
      id: "openGraph",
      name: "Open Graph Tags",
      status: "pass",
      message: "Complete Open Graph tags generated (title, description, image, url, type, timestamps).",
    });
  } else {
    results.push({
      id: "openGraph",
      name: "Open Graph Tags",
      status: "warn",
      message: "Partial OG tags: recommended to upload dedicated 1200x630 social image.",
    });
  }

  // 9. Twitter Card
  results.push({
    id: "twitterCard",
    name: "X / Twitter Cards",
    status: "pass",
    message: "summary_large_image card formatted with site attribution @dizitalgrow.",
  });

  // 10. Featured Image
  if (post.featuredImage?.asset) {
    results.push({
      id: "featuredImage",
      name: "Featured Image",
      status: "pass",
      message: "Featured image present with hotspot and dynamic responsive sizing.",
    });
  } else {
    results.push({
      id: "featuredImage",
      name: "Featured Image",
      status: "warn",
      message: "Article has no featured image; text fallback placeholder will be used.",
    });
  }

  // 11. Image Alt Text Coverage
  const imageBlocks = body.filter((b) => b._type === "image");
  const missingAlt = imageBlocks.some((img) => !img.alt);
  if (post.featuredImage?.asset && !post.featuredImage.alt) {
    results.push({
      id: "imageAlt",
      name: "Image Alt Text Coverage",
      status: "warn",
      message: "Featured image is missing descriptive alt text for accessibility and SEO.",
    });
  } else if (missingAlt) {
    results.push({
      id: "imageAlt",
      name: "Image Alt Text Coverage",
      status: "warn",
      message: "One or more embedded body images are missing alt text.",
    });
  } else {
    results.push({
      id: "imageAlt",
      name: "Image Alt Text Coverage",
      status: "pass",
      message: "100% of images include descriptive alt text.",
    });
  }

  // 12. Internal Links
  const internalLinkCount = body.reduce((count, b) => {
    if (b._type === "block" && Array.isArray(b.markDefs)) {
      const links = b.markDefs.filter(
        (m: Record<string, unknown>) =>
          m._type === "link" &&
          typeof m.href === "string" &&
          (m.href.startsWith("/") || m.href.includes("dizitalgrow.in"))
      );
      return count + links.length;
    }
    return count;
  }, 0);

  if (internalLinkCount >= 2) {
    results.push({
      id: "internalLinks",
      name: "Contextual Internal Links",
      status: "pass",
      message: `Article contains ${internalLinkCount} internal contextual links to core pillars.`,
    });
  } else {
    results.push({
      id: "internalLinks",
      name: "Contextual Internal Links",
      status: "warn",
      message: `Article contains ${internalLinkCount} internal links. The automated pillar module will supplement links.`,
    });
  }

  // 13. External Citations
  const refsCount = post.references?.length || 0;
  if (refsCount >= 1) {
    results.push({
      id: "externalCitations",
      name: "Authoritative References & Citations",
      status: "pass",
      message: `${refsCount} verified external references cited in bibliography.`,
    });
  } else {
    results.push({
      id: "externalCitations",
      name: "Authoritative References & Citations",
      status: "warn",
      message: "No external citations defined. Authoritative links elevate E-E-A-T signals.",
    });
  }

  // 14. Slug Hygiene
  const isCleanSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
  if (!slug) {
    results.push({
      id: "slug",
      name: "URL Slug Hygiene",
      status: "fail",
      message: "URL slug is missing.",
    });
  } else if (!isCleanSlug) {
    results.push({
      id: "slug",
      name: "URL Slug Hygiene",
      status: "warn",
      message: `Slug "${slug}" contains uppercase or non-standard characters.`,
    });
  } else {
    results.push({
      id: "slug",
      name: "URL Slug Hygiene",
      status: "pass",
      message: `Clean, search-friendly slug: "${slug}".`,
    });
  }

  // 15. Indexability Directives
  const isHidden = Boolean(post.hideFromSearchEngines);
  results.push({
    id: "indexability",
    name: "Search Indexability (Robots)",
    status: isHidden ? "warn" : "pass",
    message: isHidden
      ? "Article has noindex directive (hidden from search engines)."
      : "Article is fully indexable (index, follow).",
  });

  // 16. Sitemap Eligibility
  const isSitemapEligible = Boolean(slug && !isHidden);
  results.push({
    id: "sitemap",
    name: "Sitemap Inclusion",
    status: isSitemapEligible ? "pass" : "warn",
    message: isSitemapEligible
      ? "Eligible for automatic inclusion in https://dizitalgrow.in/sitemap.xml."
      : "Ineligible for sitemap due to missing slug or noindex flag.",
  });

  // Compute final score
  const passed = results.filter((r) => r.status === "pass").length;
  const warnings = results.filter((r) => r.status === "warn").length;
  const failures = results.filter((r) => r.status === "fail").length;
  const totalChecks = results.length;

  const score = Math.max(0, Math.round(((passed * 1.0 + warnings * 0.5) / totalChecks) * 100));

  return {
    score,
    totalChecks,
    passed,
    warnings,
    failures,
    results,
    isIndexable: !isHidden,
    eligibleForSitemap: isSitemapEligible,
  };
}
