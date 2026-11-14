import type { ArticleType } from "@/lib/sanity";

export interface ArticleTemplateDefinition {
  type: ArticleType;
  title: string;
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
  description: string;
  sections: Array<{
    heading: string;
    level: 2 | 3;
    recommendedBlocks: string[];
    description: string;
    optional?: boolean;
  }>;
  requiredComponents: string[];
}

export const EDITORIAL_TEMPLATES: Record<ArticleType, ArticleTemplateDefinition> = {
  "how-to": {
    type: "how-to",
    title: "Template A: How-To Implementation Guide",
    searchIntent: "informational",
    description: "Systematic tactical guide designed for step-by-step technical or operational execution.",
    sections: [
      {
        heading: "Overview & Prerequisites",
        level: 2,
        recommendedBlocks: ["quickAnswer", "callout"],
        description: "Direct outcome statement, time estimate, and required access/tools.",
      },
      {
        heading: "Step-by-Step Implementation",
        level: 2,
        recommendedBlocks: ["stepByStepGuide", "codeBlock", "image"],
        description: "Numbered progression with actionable instructions and verification criteria.",
      },
      {
        heading: "Common Pitfalls & How to Avoid Them",
        level: 2,
        recommendedBlocks: ["callout", "bulletList"],
        description: "Frequent points of failure encountered during execution.",
      },
      {
        heading: "Frequently Asked Questions",
        level: 2,
        recommendedBlocks: ["faqBlock"],
        description: "Targeted answers to edge cases and common troubleshooting questions.",
      },
    ],
    requiredComponents: ["QuickAnswer", "TableOfContents", "AuthorCard", "EditorialCTA"],
  },

  "top10-listicle": {
    type: "top10-listicle",
    title: "Template B: Top 10 / Evaluated Listicle",
    searchIntent: "commercial",
    description: "Rigorous ranking and side-by-side analysis of tools, platforms, or services.",
    sections: [
      {
        heading: "Executive Summary & Direct Verdict",
        level: 2,
        recommendedBlocks: ["quickAnswer"],
        description: "Immediate best-overall recommendation before diving into deep entries.",
      },
      {
        heading: "Evaluation Methodology & Selection Criteria",
        level: 2,
        recommendedBlocks: ["callout", "bulletList"],
        description: "Transparent scoring parameters: performance, pricing, architecture, support.",
      },
      {
        heading: "Side-by-Side Comparison Matrix",
        level: 2,
        recommendedBlocks: ["comparisonTable"],
        description: "Scannable tabular view contrasting key capabilities and pricing across all candidates.",
      },
      {
        heading: "In-Depth Candidate Reviews",
        level: 2,
        recommendedBlocks: ["featureComparisonCard", "prosAndCons"],
        description: "Individual candidate breakdowns with badge, pros, cons, and target use case.",
      },
      {
        heading: "Final Recommendation & Buying Advice",
        level: 2,
        recommendedBlocks: ["callout", "ctaBanner"],
        description: "Scenario-based guidance: best for startups, enterprises, and high-volume brands.",
      },
      {
        heading: "Frequently Asked Questions",
        level: 2,
        recommendedBlocks: ["faqBlock"],
        description: "Clarifications on vendor locking, migration difficulty, and costs.",
      },
    ],
    requiredComponents: ["QuickAnswer", "ComparisonTable", "TableOfContents", "AuthorCard", "EditorialCTA"],
  },

  comparison: {
    type: "comparison",
    title: "Template C: Head-to-Head Comparison Article",
    searchIntent: "commercial",
    description: "Detailed two-party or three-party teardown evaluating pros, cons, costs, and architecture.",
    sections: [
      {
        heading: "Direct Verdict: Which One Wins?",
        level: 2,
        recommendedBlocks: ["quickAnswer"],
        description: "Clear, unequivocal recommendation for typical business scenarios.",
      },
      {
        heading: "Head-to-Head Comparison Table",
        level: 2,
        recommendedBlocks: ["comparisonTable"],
        description: "Direct tabular feature and performance contrast.",
      },
      {
        heading: "Core Architectural & Feature Teardown",
        level: 2,
        recommendedBlocks: ["callout", "codeBlock"],
        description: "Deep dive into reliability, speed, integration overhead, and security.",
      },
      {
        heading: "Cost & Total Ownership Breakdown",
        level: 2,
        recommendedBlocks: ["statisticCallout", "bulletList"],
        description: "Hidden fees, implementation costs, and multi-year projections.",
      },
      {
        heading: "Strengths and Limitations (Pros & Cons)",
        level: 2,
        recommendedBlocks: ["prosAndCons"],
        description: "Objective trade-off matrix.",
      },
      {
        heading: "Final Verdict & Selection Decision Tree",
        level: 2,
        recommendedBlocks: ["ctaBanner"],
        description: "Clear decision framework based on budget and tech stack.",
      },
    ],
    requiredComponents: ["QuickAnswer", "ComparisonTable", "ProsAndCons", "TableOfContents", "AuthorCard"],
  },

  "technical-guide": {
    type: "technical-guide",
    title: "Template D: Technical Architectural Guide",
    searchIntent: "informational",
    description: "Engineering-grade deep dive covering system design, code architecture, and telemetry.",
    sections: [
      {
        heading: "Technical Architecture Overview",
        level: 2,
        recommendedBlocks: ["quickAnswer", "statisticCallout"],
        description: "High-level diagram and systemic flow of the architecture.",
      },
      {
        heading: "System Requirements & Dependencies",
        level: 2,
        recommendedBlocks: ["callout"],
        description: "Runtime versions, cloud environment, environment variables.",
      },
      {
        heading: "Production Code Implementation",
        level: 2,
        recommendedBlocks: ["codeBlock"],
        description: "Clean, typed snippets illustrating endpoints, workers, or components.",
      },
      {
        heading: "Security & Performance Considerations",
        level: 2,
        recommendedBlocks: ["callout", "bulletList"],
        description: "Mitigations for edge cases, payload sanitization, caching.",
      },
      {
        heading: "Verification & Telemetry Monitoring",
        level: 2,
        recommendedBlocks: ["stepByStepGuide"],
        description: "How to inspect logs, match quality, or telemetry in production.",
      },
    ],
    requiredComponents: ["TableOfContents", "AuthorCard", "CodeSnippet", "CitationsList", "EditorialCTA"],
  },

  "case-study": {
    type: "case-study",
    title: "Template E: Verified Case Study",
    searchIntent: "commercial",
    description: "Proof-driven analysis detailing real client challenge, approach, and audited results.",
    sections: [
      {
        heading: "Business Challenge & Background",
        level: 2,
        recommendedBlocks: ["callout"],
        description: "The baseline problem, stalled metrics, or legacy bottlenecks.",
      },
      {
        heading: "Strategic Objectives",
        level: 2,
        recommendedBlocks: ["bulletList"],
        description: "Measurable goals (e.g., lower CAC by 35%, raise EMQ from 4.2 to 8.9).",
      },
      {
        heading: "Tactical Execution & Architecture",
        level: 2,
        recommendedBlocks: ["stepByStepGuide", "image"],
        description: "The exact tech stack, campaign strategy, or telemetry installed.",
      },
      {
        heading: "Audited Results & ROI Impact",
        level: 2,
        recommendedBlocks: ["statisticCallout", "comparisonTable"],
        description: "Before vs After metrics with verified conversion benchmarks.",
      },
      {
        heading: "Key Takeaways & Lessons Learned",
        level: 2,
        recommendedBlocks: ["quickAnswer", "ctaBanner"],
        description: "What other growing companies can replicate today.",
      },
    ],
    requiredComponents: ["StatisticCallout", "AuthorCard", "EditorialCTA"],
  },

  "pricing-guide": {
    type: "pricing-guide",
    title: "Template F: Transparent Pricing Guide",
    searchIntent: "commercial",
    description: "Honest, comprehensive breakdown of industry costs, factors, and ROI models.",
    sections: [
      {
        heading: "Quick Pricing Overview & Benchmarks",
        level: 2,
        recommendedBlocks: ["quickAnswer"],
        description: "Average market costs and realistic investment ranges.",
      },
      {
        heading: "Key Cost Drivers & Variables",
        level: 2,
        recommendedBlocks: ["callout", "bulletList"],
        description: "What drives cost up or down (custom design vs template, CAPI telemetry).",
      },
      {
        heading: "Tier-by-Tier Investment Breakdown",
        level: 2,
        recommendedBlocks: ["comparisonTable"],
        description: "Startup vs Growing Brand vs Enterprise packages.",
      },
      {
        heading: "Hidden Expenses to Watch Out For",
        level: 2,
        recommendedBlocks: ["callout"],
        description: "Hosting, third-party APIs, maintenance retainer traps.",
      },
      {
        heading: "Frequently Asked Questions",
        level: 2,
        recommendedBlocks: ["faqBlock"],
        description: "Payment terms, milestones, and timeline expectations.",
      },
    ],
    requiredComponents: ["QuickAnswer", "ComparisonTable", "FAQSection", "EditorialCTA"],
  },

  "informational-guide": {
    type: "informational-guide",
    title: "Template G: Authoritative Informational Guide",
    searchIntent: "informational",
    description: "Deep evergreen educational guide defining principles, benefits, and strategic context.",
    sections: [
      {
        heading: "What Is It & Why Does It Matter Now?",
        level: 2,
        recommendedBlocks: ["quickAnswer"],
        description: "Clear, jargon-free definition followed by modern relevance.",
      },
      {
        heading: "How It Works Under the Hood",
        level: 2,
        recommendedBlocks: ["callout", "image"],
        description: "Conceptual and operational mechanics.",
      },
      {
        heading: "Key Business Benefits & Competitive Edge",
        level: 2,
        recommendedBlocks: ["statisticCallout", "bulletList"],
        description: "Tangible business upside of adopting the practice.",
      },
      {
        heading: "Frequently Asked Questions",
        level: 2,
        recommendedBlocks: ["faqBlock"],
        description: "Addressing misconceptions and standard queries.",
      },
    ],
    requiredComponents: ["TableOfContents", "AuthorCard", "CitationsList", "EditorialCTA"],
  },

  "service-focused": {
    type: "service-focused",
    title: "Template H: High-Intent Service Guide",
    searchIntent: "transactional",
    description: "Solution-oriented publication connecting real customer problems to service deliverables.",
    sections: [
      {
        heading: "The Core Business Problem",
        level: 2,
        recommendedBlocks: ["callout"],
        description: "Why current approaches fail and the true cost of inaction.",
      },
      {
        heading: "Engineered Solution & Methodology",
        level: 2,
        recommendedBlocks: ["stepByStepGuide"],
        description: "The specific framework DizitalGrow uses to deliver results.",
      },
      {
        heading: "Deliverables & What You Get",
        level: 2,
        recommendedBlocks: ["comparisonTable", "bulletList"],
        description: "Concrete scope: code, tracking, dashboard, training.",
      },
      {
        heading: "Verified Outcomes & Milestones",
        level: 2,
        recommendedBlocks: ["statisticCallout"],
        description: "Expected timeline and measurable milestones.",
      },
      {
        heading: "Discuss Your Project",
        level: 2,
        recommendedBlocks: ["ctaBanner"],
        description: "Direct action invitation with project discovery form link.",
      },
    ],
    requiredComponents: ["QuickAnswer", "EditorialCTA", "AuthorCard", "InternalLinksPillars"],
  },
};
