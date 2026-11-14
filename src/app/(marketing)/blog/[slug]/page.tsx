import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, urlFor } from "@/lib/sanity";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { SocialShareButtons } from "@/components/blog/SocialShareButtons";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { GooglePreferredSources } from "@/components/blog/GooglePreferredSources";
import { CitationsList } from "@/components/blog/CitationsList";
import { InternalLinksPillars } from "@/components/blog/InternalLinksPillars";
import { EditorialCTA } from "@/components/blog/EditorialCTA";
import { FAQSection } from "@/components/blog/FAQSection";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { extractTocFromBlocks } from "@/lib/editorial/heading-utils";
import { categoryToSlug } from "@/lib/editorial/category-utils";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate comprehensive SEO metadata dynamically from Sanity post fields
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | DizitalGrow",
      description: "The requested article could not be found.",
    };
  }

  const title = post.seoTitle || `${post.title} | DizitalGrow`;
  const description =
    post.metaDescription ||
    post.excerpt ||
    "Practical digital growth, development, advertising, and tracking insights from DizitalGrow.";
  const canonical = post.canonicalUrl || `https://dizitalgrow.in/blog/${post.slug.current}`;

  // Image resolution priority: socialImage -> featuredImage -> fallback icon
  const ogImageSource = post.socialImage || post.featuredImage;
  const ogImageUrl =
    ogImageSource &&
    (ogImageSource.asset?._ref ||
      ogImageSource.asset?._id ||
      ogImageSource.asset?.url)
      ? urlFor(ogImageSource).width(1200).height(630).auto("format").url()
      : "https://dizitalgrow.in/icon.png";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: post.hideFromSearchEngines
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "DizitalGrow",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ["Dizital Grow"],
      section: post.category || "Digital Marketing & Technology",
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@dizitalgrow",
      site: "@dizitalgrow",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  // Return proper 404 for missing or unpublished articles
  if (!post) {
    notFound();
  }

  const articleUrl = post.canonicalUrl || `https://dizitalgrow.in/blog/${post.slug.current}`;
  const categorySlug = post.category ? categoryToSlug(post.category) : "";

  // Fetch related articles (use manual overrides if available, otherwise fetch dynamically)
  const relatedPosts =
    post.relatedArticles && post.relatedArticles.length > 0
      ? post.relatedArticles
      : await getRelatedPosts(post.slug.current, post.category, post.tags, 3);

  // Extract Table of Contents items from H2/H3 blocks
  const tocItems = post.tableOfContentsEnabled !== false ? extractTocFromBlocks(post.body) : [];

  const formattedPublishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const formattedUpdatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const featuredImageUrl =
    post.featuredImage &&
    (post.featuredImage.asset?._ref ||
      post.featuredImage.asset?._id ||
      post.featuredImage.asset?.url)
      ? urlFor(post.featuredImage).width(1200).height(675).auto("format").url()
      : null;

  // Structured Data: BlogPosting (Attributed to Organization Dizital Grow)
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    articleSection: post.category || "General",
    keywords: post.tags?.join(", ") || post.primaryKeyword,
    author: {
      "@type": "Organization",
      name: "Dizital Grow",
      url: "https://dizitalgrow.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Dizital Grow",
      url: "https://dizitalgrow.in",
      logo: {
        "@type": "ImageObject",
        url: "https://dizitalgrow.in/icon.png",
      },
    },
    image: featuredImageUrl ? [featuredImageUrl] : undefined,
  };

  // Structured Data: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dizitalgrow.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://dizitalgrow.in/blog",
      },
      ...(post.category
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: post.category,
              item: `https://dizitalgrow.in/blog/category/${categorySlug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: post.title,
              item: articleUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: articleUrl,
            },
          ]),
    ],
  };

  // Structured Data: FAQPage (if faqs exist)
  const faqJsonLd =
    post.faqItems && post.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Top Hairline Reading Progress Indicator */}
      <ReadingProgress />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="py-10 md:py-16">
        <div className="container-cyber space-y-8">
          {/* Section 1: Breadcrumb Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <Breadcrumb
              items={[
                { name: "Blog", href: "/blog" },
                ...(post.category
                  ? [{ name: post.category, href: `/blog/category/${categorySlug}` }]
                  : []),
                { name: post.title },
              ]}
            />

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#D5FF40] hover:underline font-bold uppercase tracking-wider shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Articles</span>
            </Link>
          </div>

          {/* Section 2: Header / Hero Area */}
          <header className="max-w-4xl space-y-6">
            {/* Category badge & Reading time */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              {post.category && (
                <Link
                  href={`/blog/category/${categorySlug}`}
                  className="text-[#D5FF40] font-bold uppercase tracking-wider bg-[rgba(213,255,64,0.1)] border border-[rgba(213,255,64,0.25)] px-3 py-1 rounded-[2px] hover:bg-[rgba(213,255,64,0.18)] transition-colors"
                >
                  {post.category}
                </Link>
              )}

              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5 text-[#B0B0B0]">
                  <Clock className="h-3.5 w-3.5 text-[#D5FF40]" />
                  <span>{post.readingTime} min read</span>
                </span>
              )}

              {formattedPublishedDate && (
                <span className="inline-flex items-center gap-1.5 text-[#B0B0B0]">
                  <Calendar className="h-3.5 w-3.5 opacity-60" />
                  <span>Published {formattedPublishedDate}</span>
                </span>
              )}

              {formattedUpdatedDate && (
                <span className="text-[11px] text-[#D5FF40]/80 italic">
                  (Updated {formattedUpdatedDate})
                </span>
              )}

              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#B0B0B0] bg-[#101010] border border-[rgba(213,255,64,0.15)] px-2 py-0.5 rounded-[2px]">
                <ShieldCheck className="h-3 w-3 text-[#D5FF40]" />
                <span>Verified Publication</span>
              </span>
            </div>

            {/* Exactly ONE Primary H1 */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] leading-[1.12]">
              {post.title}
            </h1>

            {/* Introduction / Lead Excerpt */}
            {post.excerpt && (
              <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal border-l-2 border-[#D5FF40] pl-4">
                {post.excerpt}
              </p>
            )}

            {/* Editorial Attribution & Mobile Share Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(213,255,64,0.12)]">
              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.25)] text-[#D5FF40]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-white font-bold block">
                    Dizital Grow Editorial
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#B0B0B0]">
                    Verified Publication &bull; Engineering &amp; Growth Team
                  </span>
                </div>
              </div>

              {/* Mobile Share Quick Bar */}
              <div className="lg:hidden">
                <SocialShareButtons
                  url={articleUrl}
                  title={post.title}
                  description={post.excerpt}
                  variant="inline"
                />
              </div>
            </div>
          </header>

          {/* Section 3: Featured Hero Image */}
          {featuredImageUrl && (
            <figure className="space-y-2 max-w-5xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010]">
                <Image
                  src={featuredImageUrl}
                  alt={post.featuredImage?.alt || post.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              {post.featuredImage?.caption && (
                <figcaption className="text-center font-mono text-xs text-[#B0B0B0] italic">
                  {post.featuredImage.caption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Top Google Preferred Sources Engagement Banner (Featured Prominently at Top) */}
          <div className="max-w-5xl">
            <GooglePreferredSources variant="top" />
          </div>

          {/* Section 4: Main Layout Grid (Sticky Share Bar + Content Column + Sticky Aside) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Desktop Left Rail: Sticky Social Sharing */}
            <div className="hidden lg:block lg:col-span-1">
              <SocialShareButtons
                url={articleUrl}
                title={post.title}
                description={post.excerpt}
                variant="desktop-vertical"
              />
            </div>

            {/* Center Main Column: Content, Takeaways, Body, Citations, FAQs, Internal Links, CTA */}
            <main className="lg:col-span-8 space-y-8 min-w-0">
              {/* Mobile Collapsible Table of Contents */}
              {tocItems.length > 0 && (
                <div className="lg:hidden">
                  <TableOfContents items={tocItems} />
                </div>
              )}

              {/* Section 5: Quick Answer / Key Takeaways Box (if enabled or provided) */}
              <QuickAnswer
                data={post.quickAnswer}
                keyTakeaways={post.keyTakeaways}
              />

              {/* Section 6: Dynamic Portable Text Body */}
              <div className="pt-2 border-t border-[rgba(213,255,64,0.12)]">
                <PortableTextRenderer value={post.body} />
              </div>

              {/* Section 7: Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="pt-6 border-t border-[rgba(213,255,64,0.12)] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold flex items-center gap-1.5">
                    <Tag className="h-3 w-3 text-[#D5FF40]" />
                    Tags & Topic Index
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-[#B0B0B0] bg-[#101010] border border-[rgba(213,255,64,0.15)] rounded-[2px]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 8: Authoritative References & Citations */}
              <CitationsList references={post.references} />

              {/* Section 9: FAQ Accordion */}
              {post.faqItems && post.faqItems.length > 0 && (
                <FAQSection items={post.faqItems} />
              )}

              {/* Section 10: Contextual Internal Linking Hub */}
              <InternalLinksPillars
                category={post.category}
                tags={post.tags}
                currentSlug={post.slug.current}
              />

              {/* Section 11: Conversion Optimization CTA Banner */}
              <EditorialCTA
                variant="bottom"
                config={post.ctaConfiguration}
              />

              {/* Mobile Bottom Social Sharing & Preferred Source Controls */}
              <div className="lg:hidden pt-4 space-y-4">
                <SocialShareButtons
                  url={articleUrl}
                  title={post.title}
                  description={post.excerpt}
                  variant="mobile-horizontal"
                />
                <GooglePreferredSources variant="side" />
              </div>
            </main>

            {/* Desktop Right Rail: Sticky Table of Contents, Side Share & Follow Card, CTA */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6">
              {/* Side Share & Google Preferred Sources Card (Placed on Side Along with Share) */}
              <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-4 rounded-[2px] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold flex items-center gap-1.5">
                    <Share2 className="h-3 w-3 text-[#D5FF40]" />
                    Share &amp; Follow
                  </span>
                  <span className="text-[10px] font-mono text-[#B0B0B0]">Google Preferred</span>
                </div>

                {/* Social Share Buttons */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-[#B0B0B0] block">
                    Share Playbook:
                  </span>
                  <SocialShareButtons
                    url={articleUrl}
                    title={post.title}
                    description={post.excerpt}
                    variant="inline"
                  />
                </div>

                {/* Official Google Preferred Source Container */}
                <div className="pt-3 border-t border-[rgba(213,255,64,0.12)] space-y-2">
                  <span className="text-[11px] font-mono text-white block font-bold">
                    Google Search Preference:
                  </span>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                    Add DizitalGrow to your Google Search preferences for verified playbooks.
                  </p>
                  <div className="pt-1 flex items-center justify-start min-h-[44px]">
                    <div google-add-preferred-source-btn="" data-theme="dark" />
                  </div>
                </div>
              </div>

              {/* Sticky Table of Contents */}
              {tocItems.length > 0 && (
                <TableOfContents items={tocItems} />
              )}

              {/* Side Technical Inquiry CTA Card */}
              <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-5 rounded-[2px] space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5FF40] font-bold block">
                  TECHNICAL INQUIRY
                </span>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  Need Help Scaling Your Web Stack or Ads?
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Discuss development architectures, server-side CAPI telemetry, or advertising campaigns with our team.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#D5FF40] text-[#050505] py-2 px-3 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber"
                >
                  Discuss Your Project
                </Link>
              </div>
            </aside>
          </div>

          {/* Section 12: Related Articles */}
          <RelatedArticles
            articles={relatedPosts}
            currentCategory={post.category}
          />
        </div>
      </article>
    </>
  );
}
