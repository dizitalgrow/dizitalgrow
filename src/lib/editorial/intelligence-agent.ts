import { EDITORIAL_TEMPLATES } from "./templates";
import { validateArticleSEO, type ArticleSEOSummary } from "./seo-validator";
import { DEFAULT_AUTHOR } from "@/lib/sanity/api";
import type { ArticleType, SanityPostDetail, PortableTextBlock } from "@/lib/sanity";

export interface ScaffoldGenerationParams {
  title: string;
  slug: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  searchIntent?: "informational" | "commercial" | "transactional" | "navigational";
  targetService?: "web-development" | "web-applications" | "mobile-apps" | "google-ads" | "meta-ads" | "meta-capi";
  authorSlug?: string;
  readingTimeMinutes?: number;
}

/**
 * Intelligent selector to choose optimal editorial template based on search intent and target topic
 */
export function determineOptimalTemplate(
  topicOrKeyword: string,
  searchIntent: "informational" | "commercial" | "transactional" | "navigational" = "informational"
): ArticleType {
  const lower = topicOrKeyword.toLowerCase();

  // 1. Transactional & Service-focused
  if (
    searchIntent === "transactional" ||
    lower.includes("agency") ||
    lower.includes("service") ||
    lower.includes("hire") ||
    lower.includes("company")
  ) {
    return "service-focused";
  }

  // 2. Comparison
  if (lower.includes(" vs ") || lower.includes("versus") || lower.includes("comparison") || lower.includes("alternative")) {
    return "comparison";
  }

  // 3. Top 10 / Listicle
  if (
    lower.includes("top 10") ||
    lower.includes("best ") ||
    lower.includes("top ") ||
    lower.includes("tools for") ||
    lower.includes("crm for")
  ) {
    return "top10-listicle";
  }

  // 4. Pricing Guide
  if (lower.includes("cost") || lower.includes("pricing") || lower.includes("price") || lower.includes("budget")) {
    return "pricing-guide";
  }

  // 5. How-to Guide
  if (
    lower.startsWith("how to") ||
    lower.includes("guide to") ||
    lower.includes("step by step") ||
    lower.includes("tutorial")
  ) {
    return "how-to";
  }

  // 6. Case Study
  if (lower.includes("case study") || lower.includes("roi results") || lower.includes("how we helped")) {
    return "case-study";
  }

  // 7. Technical Guide
  if (
    lower.includes("architecture") ||
    lower.includes("implementation") ||
    lower.includes("capi setup") ||
    lower.includes("code") ||
    lower.includes("api")
  ) {
    return "technical-guide";
  }

  // 8. Informational default
  return "informational-guide";
}

/**
 * Generates an architectural scaffold matching DizitalGrow standards
 */
export function generateArticleScaffold(params: ScaffoldGenerationParams): Partial<SanityPostDetail> {
  const intent = params.searchIntent || "informational";
  const articleType = determineOptimalTemplate(params.title, intent);
  const template = EDITORIAL_TEMPLATES[articleType];

  const scaffoldBlocks: PortableTextBlock[] = [];

  // Build section skeletons with H2 headings
  template.sections.forEach((section, idx) => {
    // Add H2 block
    scaffoldBlocks.push({
      _type: "block",
      _key: `sec-${idx}`,
      style: "h2",
      children: [{ _type: "span", _key: `sp-${idx}`, text: section.heading, marks: [] }],
      markDefs: [],
    });

    // Add illustrative placeholder normal paragraph
    scaffoldBlocks.push({
      _type: "block",
      _key: `p-${idx}`,
      style: "normal",
      children: [
        {
          _type: "span",
          _key: `sp-p-${idx}`,
          text: `${section.description} Detailed, authoritative analysis authored to answer the search query with verified industry benchmarks.`,
          marks: [],
        },
      ],
      markDefs: [],
    });
  });

  return {
    _type: "post",
    title: params.title,
    slug: { current: params.slug },
    excerpt: `A comprehensive editorial guide to ${params.primaryKeyword}. Learn key strategies, architectural benchmarks, and actionable steps.`,
    category: params.category,
    primaryKeyword: params.primaryKeyword,
    secondaryKeywords: params.secondaryKeywords || [],
    searchIntent: intent,
    articleType,
    publishedAt: new Date().toISOString(),
    readingTime: params.readingTimeMinutes || 6,
    author: DEFAULT_AUTHOR.name,
    authorProfile: DEFAULT_AUTHOR,
    tableOfContentsEnabled: true,
    hideFromSearchEngines: false,
    quickAnswer: {
      enabled: true,
      directAnswer: `Effective execution of ${params.primaryKeyword} requires combining rigorous technical architecture with targeted measurement.`,
      mainRecommendation: "Focus on first-party telemetry, verified conversion metrics, and robust design systems.",
      takeaways: [
        `Understand the core requirements of ${params.primaryKeyword}`,
        "Prioritize clean architectures over brittle workarounds",
        "Implement first-party tracking to ensure measurable ROI",
      ],
    },
    body: scaffoldBlocks,
    ctaConfiguration: {
      targetService: params.targetService || "web-development",
      customTitle: `Ready to implement ${params.primaryKeyword} for your business?`,
      customDescription: "Our technical architects and digital growth engineers help businesses build, measure, and scale.",
      customButtonText: "Discuss Your Project",
      customButtonUrl: "/contact",
    },
  };
}

export { EDITORIAL_TEMPLATES, validateArticleSEO, type ArticleSEOSummary };
