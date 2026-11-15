import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Articles",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Article Content",
      default: true,
    },
    {
      name: "editorial",
      title: "Editorial & Intent",
    },
    {
      name: "organization",
      title: "Organization & Publishing",
    },
    {
      name: "seo",
      title: "SEO & Social",
    },
    {
      name: "conversion",
      title: "Conversion & CTAs",
    },
  ],
  fields: [
    // ----------------------------------------------------
    // Group: Article Content
    // ----------------------------------------------------
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      group: "content",
      description: "The main headline for this blog article (maximum 120 characters).",
      validation: (rule) =>
        rule
          .required()
          .max(120)
          .error("Article title is required and cannot exceed 120 characters."),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "content",
      description: "URL-friendly identifier generated from the title.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("URL slug is required."),
    }),
    defineField({
      name: "excerpt",
      title: "Short Description / Excerpt",
      type: "text",
      rows: 4,
      group: "content",
      description:
        "A concise summary used for article cards, search snippets, and social previews (maximum 300 characters).",
      validation: (rule) =>
        rule
          .required()
          .max(300)
          .error("Short description/excerpt is required and cannot exceed 300 characters."),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "content",
      description: "Primary banner image for the blog article header and list cards.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for accessibility and SEO. Describe what is in the image.",
          validation: (rule) =>
            rule.custom((alt, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;
              if (parent?.asset && !alt) {
                return "Alternative text is required for accessibility and SEO.";
              }
              return true;
            }),
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
          description: "Optional caption displayed beneath the image.",
        }),
      ],
      validation: (rule) =>
        rule.warning("Adding a featured image is recommended for optimal card and social display."),
    }),

    // Editorial Intent & Quick Answer
    defineField({
      name: "articleType",
      title: "Editorial Template / Article Type",
      type: "string",
      group: "editorial",
      description: "Select the architectural layout best suited to user search intent.",
      options: {
        list: [
          { title: "Template A: How-To Guide", value: "how-to" },
          { title: "Template B: Top 10 / Listicle", value: "top10-listicle" },
          { title: "Template C: Comparison Article", value: "comparison" },
          { title: "Template D: Technical Guide", value: "technical-guide" },
          { title: "Template E: Case Study", value: "case-study" },
          { title: "Template F: Pricing Guide", value: "pricing-guide" },
          { title: "Template G: Informational Guide", value: "informational-guide" },
          { title: "Template H: Service-Focused Article", value: "service-focused" },
        ],
      },
      initialValue: "informational-guide",
    }),
    defineField({
      name: "searchIntent",
      title: "Primary Search Intent",
      type: "string",
      group: "editorial",
      options: {
        list: [
          { title: "Informational (Learn / Understand)", value: "informational" },
          { title: "Commercial Investigation (Compare / Evaluate)", value: "commercial" },
          { title: "Transactional (Hire / Implement)", value: "transactional" },
          { title: "Navigational", value: "navigational" },
        ],
      },
      initialValue: "informational",
    }),
    defineField({
      name: "quickAnswer",
      title: "Quick Answer / Executive Verdict",
      type: "object",
      group: "editorial",
      description:
        "Visually prominent summary box for fast answer intent and AI overview optimization.",
      fields: [
        defineField({
          name: "enabled",
          title: "Enable Quick Answer Box",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "directAnswer",
          title: "Direct Answer (1-2 Sentences)",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "mainRecommendation",
          title: "Core Recommendation",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "takeaways",
          title: "Key Takeaways (Bullet points)",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways (Standalone)",
      type: "array",
      group: "editorial",
      of: [{ type: "string" }],
      description: "Quick bullet points summarizing the article for quick scanning.",
    }),
    defineField({
      name: "tableOfContentsEnabled",
      title: "Enable Table of Contents",
      type: "boolean",
      group: "content",
      description: "Automatically index H2 and H3 headings for sticky and mobile jump links.",
      initialValue: true,
    }),

    // Rich Portable Text Body with Custom Blocks
    defineField({
      name: "body",
      title: "Article Body",
      type: "array",
      group: "content",
      description: "Rich portable text content with structured editorial blocks.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Numbered", value: "number" },
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Inline Link",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule
                        .uri({
                          scheme: ["http", "https", "mailto", "tel"],
                          allowRelative: true,
                        })
                        .required(),
                  }),
                  defineField({
                    name: "openInNewTab",
                    title: "Open in new tab",
                    type: "boolean",
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        },
        // Embedded Image
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "Alternative text for screen readers and SEO.",
              validation: (rule) =>
                rule.required().error("Alternative text is required for embedded images."),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption displayed beneath the embedded image.",
            }),
          ],
        },
        // Custom Block 1: Comparison Table
        {
          name: "comparisonTable",
          title: "Comparison Table",
          type: "object",
          fields: [
            defineField({
              name: "caption",
              title: "Table Caption / Headline",
              type: "string",
            }),
            defineField({
              name: "headers",
              title: "Column Headers",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.min(2).required(),
            }),
            defineField({
              name: "highlightColumnIndex",
              title: "Highlight Column Index (0-based)",
              type: "number",
              description: "Highlight a recommended column (e.g., 1 for second column).",
            }),
            defineField({
              name: "rows",
              title: "Table Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "cells",
                      title: "Row Cells",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "caption" },
            prepare({ title }) {
              return { title: title || "Comparison Table", subtitle: "Table Block" };
            },
          },
        },
        // Custom Block 2: Callout Alert
        {
          name: "callout",
          title: "Callout / Notice Box",
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Callout Type",
              type: "string",
              options: {
                list: [
                  { title: "Note (Informational)", value: "note" },
                  { title: "Tip (Best Practice)", value: "tip" },
                  { title: "Important (Critical requirement)", value: "important" },
                  { title: "Warning (Potential issue)", value: "warning" },
                  { title: "Caution (High risk)", value: "caution" },
                ],
              },
              initialValue: "tip",
            }),
            defineField({
              name: "title",
              title: "Callout Title",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Callout Text",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "type" },
            prepare({ title, subtitle }) {
              return { title: title || "Editorial Callout", subtitle: `Type: ${subtitle || "tip"}` };
            },
          },
        },
        // Custom Block 3: Feature Comparison Card
        {
          name: "featureComparisonCard",
          title: "Feature Comparison Card",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Tool / Feature Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "badge", title: "Highlight Badge (e.g. Best For Enterprise)", type: "string" }),
            defineField({ name: "rating", title: "Rating / Score (e.g. 9.4/10)", type: "string" }),
            defineField({ name: "bestFor", title: "Best For Target Audience", type: "string" }),
            defineField({ name: "pros", title: "Key Advantages / Pros", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "cons", title: "Limitations / Cons", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "verdict", title: "Editorial Verdict", type: "text", rows: 2 }),
            defineField({ name: "ctaLabel", title: "CTA Button Label", type: "string" }),
            defineField({ name: "ctaUrl", title: "CTA Button URL", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "rating" },
            prepare({ title, subtitle }) {
              return {
                title: title ? `⚡ ${title}` : "Feature Card",
                subtitle: subtitle ? `Score: ${subtitle}` : "Feature Comparison",
              };
            },
          },
        },
        // Custom Block 4: Pros & Cons
        {
          name: "prosAndCons",
          title: "Pros & Cons Dual Card",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title (Optional)",
              type: "string",
            }),
            defineField({
              name: "pros",
              title: "Pros / Advantages",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "cons",
              title: "Cons / Disadvantages",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return {
                title: title ? `⚖️ ${title}` : "⚖️ Pros & Cons",
                subtitle: "Comparison Block",
              };
            },
          },
        },
        // Custom Block 5: Step-by-Step Guide
        {
          name: "stepByStepGuide",
          title: "Step-by-Step Process",
          type: "object",
          fields: [
            defineField({ name: "sectionTitle", title: "Guide Title", type: "string" }),
            defineField({
              name: "steps",
              title: "Steps",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "stepNumber", title: "Step Number", type: "number" }),
                    defineField({ name: "title", title: "Step Title", type: "string" }),
                    defineField({ name: "description", title: "Instructions", type: "text", rows: 3 }),
                    defineField({ name: "proTip", title: "Pro Tip (Optional)", type: "string" }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "sectionTitle" },
            prepare({ title }) {
              return {
                title: title ? `📋 ${title}` : "📋 Step-by-Step Guide",
                subtitle: "Process Flow",
              };
            },
          },
        },
        // Custom Block 6: Statistic Callout
        {
          name: "statisticCallout",
          title: "Key Metric / Statistic",
          type: "object",
          fields: [
            defineField({ name: "value", title: "Metric / Number (e.g. 340%, +2.4x)", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Description / Metric Label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "source", title: "Source Attribution (e.g. Google Analytics / Meta Study)", type: "string" }),
          ],
          preview: {
            select: {
              value: "value",
              label: "label",
              source: "source",
            },
            prepare({ value, label, source }) {
              return {
                title: value ? `📊 ${value}` : "Statistic Callout",
                subtitle: [source, label].filter(Boolean).join(" — "),
              };
            },
          },
        },
        // Custom Block 7: Code Block
        {
          name: "codeBlock",
          title: "Code Snippet",
          type: "object",
          fields: [
            defineField({
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "TypeScript / JavaScript", value: "typescript" },
                  { title: "HTML / JSX", value: "html" },
                  { title: "CSS / Tailwind", value: "css" },
                  { title: "JSON", value: "json" },
                  { title: "Bash / Shell", value: "bash" },
                  { title: "Python", value: "python" },
                  { title: "SQL", value: "sql" },
                ],
              },
              initialValue: "typescript",
            }),
            defineField({ name: "filename", title: "File Name (e.g. capi-worker.ts)", type: "string" }),
            defineField({ name: "code", title: "Code", type: "text", rows: 8, validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "filename", subtitle: "language" },
            prepare({ title, subtitle }) {
              return {
                title: title ? `💻 ${title}` : "💻 Code Snippet",
                subtitle: subtitle ? `Language: ${subtitle}` : "Code",
              };
            },
          },
        },
        // Custom Block 8: CTA Banner
        {
          name: "ctaBanner",
          title: "Inline CTA Banner",
          type: "object",
          fields: [
            defineField({ name: "headline", title: "CTA Headline", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Supporting Text", type: "text", rows: 2 }),
            defineField({ name: "buttonLabel", title: "Button Text", type: "string", initialValue: "Discuss Your Project" }),
            defineField({ name: "buttonUrl", title: "Button Destination URL", type: "string", initialValue: "/contact" }),
            defineField({
              name: "targetService",
              title: "Target Service Tag",
              type: "string",
              options: {
                list: [
                  { title: "Website Development", value: "web-development" },
                  { title: "Web Applications", value: "web-applications" },
                  { title: "Mobile Apps", value: "mobile-apps" },
                  { title: "Google Ads", value: "google-ads" },
                  { title: "Meta Ads", value: "meta-ads" },
                  { title: "Meta CAPI & Tracking", value: "meta-capi" },
                ],
              },
            }),
          ],
          preview: {
            select: { title: "headline", subtitle: "buttonLabel" },
            prepare({ title, subtitle }) {
              return {
                title: title ? `📢 ${title}` : "📢 CTA Banner",
                subtitle: subtitle ? `Action: ${subtitle}` : "Conversion CTA",
              };
            },
          },
        },
        // Custom Block 9: FAQ Accordion
        {
          name: "faqBlock",
          title: "FAQ Section",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "FAQ Section Heading", type: "string", initialValue: "Frequently Asked Questions" }),
            defineField({
              name: "items",
              title: "Question & Answer Pairs",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
                    defineField({ name: "answer", title: "Answer", type: "text", rows: 3, validation: (rule) => rule.required() }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return {
                title: title ? `❓ ${title}` : "❓ FAQ Accordion",
                subtitle: "FAQ Accordion Block",
              };
            },
          },
        },
        // Custom Block 10: Video Embed
        {
          name: "videoEmbed",
          title: "Video Embed",
          type: "object",
          fields: [
            defineField({ name: "url", title: "Video URL (YouTube or direct)", type: "url", validation: (rule) => rule.required() }),
            defineField({ name: "caption", title: "Video Caption", type: "string" }),
          ],
          preview: {
            select: { title: "caption", subtitle: "url" },
            prepare({ title, subtitle }) {
              return {
                title: title ? `🎥 ${title}` : "🎥 Video Embed",
                subtitle: subtitle || "Video URL",
              };
            },
          },
        },
      ],
    }),

    // ----------------------------------------------------
    // Group: Organization & Publishing
    // ----------------------------------------------------
    defineField({
      name: "category",
      title: "Blog Category",
      type: "string",
      group: "organization",
      description:
        "Single category for the post (e.g. SEO & Digital Marketing, Web Development, Meta CAPI & Analytics, AI & Automation).",
      validation: (rule) => rule.required().error("Blog category is required."),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "organization",
      description: "Keywords and search tags for this article.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "author",
      title: "Author Name / String",
      type: "string",
      group: "organization",
      description: "Author name string (e.g. Dizital Grow Editorial, or specific author name).",
      initialValue: "Dizital Grow Editorial",
    }),
    defineField({
      name: "authorRef",
      title: "Author Reference Profile",
      type: "reference",
      to: [{ type: "author" }],
      group: "organization",
      description: "Link to structured author document with full credentials and bio.",
    }),
    defineField({
      name: "coAuthors",
      title: "Co-Authors / Reviewers",
      type: "array",
      group: "organization",
      of: [{ type: "reference", to: [{ type: "author" }] }],
      description: "Optional co-authors or technical reviewers.",
    }),
    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      group: "organization",
      description: "Date and time when the article is published.",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated Date",
      type: "datetime",
      group: "organization",
      description: "Date and time when the article was last revised or updated.",
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      group: "organization",
      description: "Highlight this article in hero or featured showcases on the website.",
      initialValue: false,
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time (minutes)",
      type: "number",
      group: "organization",
      description: "Estimated reading time in minutes (e.g., 5).",
      validation: (rule) =>
        rule.integer().positive().min(1).error("Reading time must be a positive integer in minutes."),
    }),
    defineField({
      name: "editorialStatus",
      title: "Editorial Workflow Status",
      type: "string",
      group: "organization",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Under Editorial Review", value: "review" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "published",
    }),

    // ----------------------------------------------------
    // Group: SEO & Social
    // ----------------------------------------------------
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      description: "Search engine title tag override (maximum 60 characters).",
      validation: (rule) =>
        rule.max(60).warning("SEO titles longer than 60 characters may be truncated by search engines."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Search engine snippet summary (maximum 160 characters).",
      validation: (rule) =>
        rule.max(160).warning("Meta descriptions longer than 160 characters may be truncated."),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL Override",
      type: "url",
      group: "seo",
      description: "Explicit canonical URL. If empty, defaults to https://dizitalgrow.in/blog/{slug}.",
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary Search Keyword",
      type: "string",
      group: "seo",
      description: "Main focus keyword targeted by this article.",
    }),
    defineField({
      name: "secondaryKeywords",
      title: "Secondary Keywords",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "socialImage",
      title: "Social Sharing Image",
      type: "image",
      group: "seo",
      description: "Custom Open Graph / Twitter image (1200x630). If omitted, the featured image is used.",
      options: { hotspot: true },
    }),
    defineField({
      name: "hideFromSearchEngines",
      title: "Hide from Search Engines (noindex)",
      type: "boolean",
      group: "seo",
      description: "Instruct search crawlers not to index this article.",
      initialValue: false,
    }),

    // Article FAQs (Structured Field)
    defineField({
      name: "faqItems",
      title: "Structured Article FAQs",
      type: "array",
      group: "seo",
      description: "Questions and verified answers for reader clarity and eligible search schema.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3, validation: (rule) => rule.required() }),
          ],
        },
      ],
    }),

    // References and Citations
    defineField({
      name: "references",
      title: "Authoritative References & Citations",
      type: "array",
      group: "editorial",
      description: "Verified external sources, documentation, and official research cited in this piece.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Source Title / Citation Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "publisher", title: "Publisher / Organization", type: "string" }),
            defineField({ name: "url", title: "Verified Public URL", type: "url", validation: (rule) => rule.required() }),
            defineField({ name: "publicationDate", title: "Publication Date (Optional)", type: "string" }),
            defineField({ name: "accessDate", title: "Date Accessed (Optional)", type: "string" }),
          ],
        },
      ],
    }),

    // Related Articles & Conversion
    defineField({
      name: "relatedArticles",
      title: "Manual Related Articles",
      type: "array",
      group: "conversion",
      description: "Curated related articles. If empty, the system automatically pulls by category & tags.",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    }),
    defineField({
      name: "ctaConfiguration",
      title: "Article Conversion CTA",
      type: "object",
      group: "conversion",
      fields: [
        defineField({
          name: "targetService",
          title: "Target Service Offering",
          type: "string",
          options: {
            list: [
              { title: "Website Development", value: "web-development" },
              { title: "Web Applications", value: "web-applications" },
              { title: "Mobile Apps", value: "mobile-apps" },
              { title: "Google Ads Management", value: "google-ads" },
              { title: "Meta Ads Management", value: "meta-ads" },
              { title: "Meta CAPI & Tracking", value: "meta-capi" },
            ],
          },
        }),
        defineField({ name: "customTitle", title: "Custom CTA Headline", type: "string" }),
        defineField({ name: "customDescription", title: "Custom CTA Description", type: "text", rows: 2 }),
        defineField({ name: "customButtonText", title: "Button Label", type: "string" }),
        defineField({ name: "customButtonUrl", title: "Destination URL", type: "string" }),
      ],
    }),
    defineField({
      name: "sourceInformation",
      title: "Internal Editorial Verification Notes",
      type: "text",
      group: "editorial",
      rows: 2,
      description: "Editorial notes, fact-check validation timestamps, or data sources for internal review.",
    }),
  ],

  // Document Preview Configuration
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "featuredImage",
      publishedAt: "publishedAt",
      template: "articleType",
    },
    prepare({ title, category, media, publishedAt, template }) {
      const formattedDate = publishedAt
        ? new Date(publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "Unpublished";

      return {
        title: title || "Untitled Article",
        subtitle: `${category ? `[${category}]` : "[No Category]"} • ${template || "Standard"} • ${formattedDate}`,
        media,
      };
    },
  },
});
