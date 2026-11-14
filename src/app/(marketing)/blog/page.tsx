import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getBlogPostsCount, getAllCategories } from "@/lib/sanity";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogListingClient } from "./BlogListingClient";
import { BlogCard } from "@/components/blog/BlogCard";
import { categoryToSlug } from "@/lib/editorial/category-utils";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

const POSTS_PER_PAGE = 12;

interface BlogPageProps {
  searchParams?: Promise<{
    page?: string;
    category?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const resolvedParams = searchParams ? await searchParams : {};
  const currentPage = Number(resolvedParams.page) || 1;
  const canonical =
    currentPage > 1
      ? `https://dizitalgrow.in/blog?page=${currentPage}`
      : "https://dizitalgrow.in/blog";

  return {
    title:
      currentPage > 1
        ? `Blog & Digital Growth Articles — Page ${currentPage} | DizitalGrow`
        : "Blog & Digital Growth Articles | DizitalGrow",
    description:
      "Practical articles, frameworks, and tracking tutorials on website development, web apps, Google Ads, Meta Ads, GA4, and Meta Conversions API (CAPI).",
    alternates: {
      canonical,
    },
    openGraph: {
      title: "Blog & Digital Growth Articles | DizitalGrow",
      description:
        "Practical articles and insights on website development, web applications, Google Ads, Meta Ads, GA4 analytics, and Meta Conversions API (CAPI).",
      url: canonical,
      type: "website",
      siteName: "DizitalGrow",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog & Digital Growth Articles | DizitalGrow",
      description:
        "Practical articles and insights on website development, web applications, Google Ads, Meta Ads, GA4 analytics, and Meta Conversions API (CAPI).",
    },
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const currentPage = Math.max(1, Number(resolvedParams.page) || 1);
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  // Server-side fetching for SEO and fast hydration
  const [posts, totalPosts, initialCategories] = await Promise.all([
    getBlogPosts({ limit: POSTS_PER_PAGE, offset }),
    getBlogPostsCount(),
    getAllCategories(),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  // Find primary featured article
  const featuredArticle = posts.find((p) => p.featured) || (currentPage === 1 ? posts[0] : null);
  const listingArticles = posts.filter((p) => p._id !== featuredArticle?._id);

  // JSON-LD CollectionPage schema
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DizitalGrow Knowledge Base & Digital Growth Articles",
    description:
      "Articles, tutorials, and frameworks on website development, advertising, and server telemetry.",
    url: "https://dizitalgrow.in/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, idx) => ({
        "@type": "ListItem",
        position: offset + idx + 1,
        url: `https://dizitalgrow.in/blog/${post.slug.current}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="py-12 md:py-20">
        <div className="container-cyber space-y-12">
          <Breadcrumb items={[{ name: "Blog" }]} />

          {/* Header Hero */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] px-3 py-1 rounded-[2px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40]" />
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
                EDITORIAL PUBLICATION // KNOWLEDGE BASE
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] leading-tight">
              Learn How Digital Growth{" "}
              <span className="text-[#D5FF40]">Actually Works.</span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal">
              Practical articles, architectural blueprints, and telemetry tutorials to help you engineer websites, acquire customers, and measure conversions.
            </p>
          </div>

          {/* Crawlable Topic Categories Strip */}
          {initialCategories.length > 0 && (
            <div className="space-y-3 pb-4 border-b border-[rgba(213,255,64,0.12)]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B0B0B0] font-bold block">
                EXPLORE BY TOPIC CLUSTER:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/blog"
                  className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-[2px] bg-[#D5FF40] text-[#050505]"
                >
                  All Topics
                </Link>
                {initialCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog/category/${categoryToSlug(cat)}`}
                    className="px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#101010] text-[#B0B0B0] hover:text-white hover:border-[#D5FF40] transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Featured Article Spotlight (Page 1 only) */}
          {currentPage === 1 && featuredArticle && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#D5FF40]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D5FF40]">
                  FEATURED EDITORIAL SHOWCASE
                </span>
              </div>
              <BlogCard post={featuredArticle} featured />
            </div>
          )}

          {/* Interactive Live Search & Client Filtering with TanStack Query */}
          <BlogListingClient
            initialPosts={listingArticles}
            initialCategories={initialCategories}
          />

          {/* Server Crawlable Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Blog pages"
              className="pt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(213,255,64,0.12)]"
            >
              <div>
                {currentPage > 1 ? (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="inline-flex items-center gap-1 px-4 py-2 text-xs font-mono font-bold uppercase rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010] text-white hover:border-[#D5FF40] transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Page</span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-4 py-2 text-xs font-mono uppercase rounded-[2px] border border-transparent text-[#666666] cursor-not-allowed">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous Page</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}`}
                    className={`h-9 w-9 flex items-center justify-center rounded-[2px] transition-colors ${
                      pageNum === currentPage
                        ? "bg-[#D5FF40] text-[#050505] font-extrabold"
                        : "bg-[#101010] border border-[rgba(213,255,64,0.18)] text-[#B0B0B0] hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </Link>
                ))}
              </div>

              <div>
                {currentPage < totalPages ? (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="inline-flex items-center gap-1 px-4 py-2 text-xs font-mono font-bold uppercase rounded-[2px] border border-[rgba(213,255,64,0.2)] bg-[#101010] text-white hover:border-[#D5FF40] transition-colors"
                  >
                    <span>Next Page</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-4 py-2 text-xs font-mono uppercase rounded-[2px] border border-transparent text-[#666666] cursor-not-allowed">
                    <span>Next Page</span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
