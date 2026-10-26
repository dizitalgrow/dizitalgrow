import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import { getBlogPostBySlug, urlFor } from "@/lib/sanity";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate SEO metadata dynamically from Sanity post fields
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
  const canonical = `https://dizitalgrow.in/blog/${post.slug.current}`;

  // Image resolution priority: socialImage -> featuredImage
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
        },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: post.author ? [post.author] : ["DizitalGrow"],
      section: post.category,
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

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "Dizital Grow",
      url: "https://dizitalgrow.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Dizital Grow",
      logo: {
        "@type": "ImageObject",
        url: "https://dizitalgrow.in/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dizitalgrow.in/blog/${post.slug.current}`,
    },
    image: featuredImageUrl ? [featuredImageUrl] : undefined,
  };

  return (
    <article className="py-12 md:py-20">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-cyber max-w-4xl space-y-10">
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between text-xs font-mono text-[#B0B0B0]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#D5FF40] hover:underline font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[11px]">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">
              {post.category || "Article"}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {post.category && (
              <span className="text-[#D5FF40] font-bold uppercase tracking-wider bg-[rgba(213,255,64,0.1)] border border-[rgba(213,255,64,0.25)] px-2.5 py-1 rounded-[2px]">
                {post.category}
              </span>
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
                <span>{formattedPublishedDate}</span>
              </span>
            )}

            {formattedUpdatedDate && (
              <span className="text-[11px] text-[#B0B0B0]/70 italic">
                (Updated {formattedUpdatedDate})
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] leading-tight">
            {post.title}
          </h1>

          {/* Excerpt Lead */}
          {post.excerpt && (
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal border-l-2 border-[#D5FF40] pl-4 italic">
              {post.excerpt}
            </p>
          )}

          {/* Author Attribution */}
          <div className="pt-2 flex items-center justify-between border-t border-[rgba(213,255,64,0.12)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B0B0B0]">
              <div className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-[#D5FF40]">
                <User className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-white font-bold block">
                  {post.author || "Dizital Grow Editorial"}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#B0B0B0]">
                  Digital Growth Practitioner
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#B0B0B0] hidden sm:inline">
                Verified Guide
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {featuredImageUrl && (
          <figure className="space-y-2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#101010]">
              <Image
                src={featuredImageUrl}
                alt={post.featuredImage?.alt || post.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 896px) 100vw, 896px"
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

        {/* Article Body (Portable Text) */}
        <div className="pt-4 border-t border-[rgba(213,255,64,0.12)]">
          <PortableTextRenderer value={post.body} />
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 border-t border-[rgba(213,255,64,0.12)] space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B0B0B0] font-bold flex items-center gap-1.5">
              <Tag className="h-3 w-3 text-[#D5FF40]" />
              Tags & Topics
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

        {/* End-of-Article Growth Action Callout */}
        <div className="border border-[rgba(213,255,64,0.25)] bg-[#0A0A0A] p-8 sm:p-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D5FF40] font-bold uppercase tracking-wider">
            <span>{"// PRACTICAL NEXT STEP"}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
            Ready to plan your development, advertising, or tracking?
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl font-normal">
            Whether you need a new website, custom web app, ad management, or server-side Meta CAPI tracking, we will help you plan the next steps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D5FF40] text-[#050505] px-6 py-3.5 text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors duration-150 hover:bg-[#c2ea36] active:translate-y-[1px] focus-cyber"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
