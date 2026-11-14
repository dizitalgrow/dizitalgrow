import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Filter, BookOpen } from "lucide-react";
import { getBlogPosts, getAllCategories } from "@/lib/sanity";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLinksPillars } from "@/components/blog/InternalLinksPillars";
import { categoryToSlug, slugToCategoryDisplayName } from "@/lib/editorial/category-utils";

export const revalidate = 60; // Next.js ISR: Revalidate every 60 seconds

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat) => ({
    category: categoryToSlug(cat),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const allCategories = await getAllCategories();
  const categoryName = slugToCategoryDisplayName(categorySlug, allCategories);
  const canonical = `https://dizitalgrow.in/blog/category/${categorySlug}`;

  return {
    title: `${categoryName} Articles & Guides | DizitalGrow`,
    description: `Browse comprehensive articles, tactical playbooks, and technical architectures in ${categoryName} from DizitalGrow.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${categoryName} Articles & Guides | DizitalGrow`,
      description: `Browse comprehensive articles, tactical playbooks, and technical architectures in ${categoryName}.`,
      url: canonical,
      type: "website",
      siteName: "DizitalGrow",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Articles & Guides | DizitalGrow`,
      description: `Browse comprehensive articles, tactical playbooks, and technical architectures in ${categoryName}.`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const allCategories = await getAllCategories();
  const categoryName = slugToCategoryDisplayName(categorySlug, allCategories);

  // Fetch posts matching this category
  const posts = await getBlogPosts({ category: categoryName, limit: 30 });

  if (!posts || posts.length === 0) {
    // If no posts in this specific slug, check if valid category exists
    const match = allCategories.find((c) => categoryToSlug(c) === categorySlug);
    if (!match && posts.length === 0) {
      notFound();
    }
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container-cyber space-y-10">
        <Breadcrumb
          items={[
            { name: "Blog", href: "/blog" },
            { name: categoryName },
          ]}
        />

        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D5FF40] hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Topic Categories</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-[rgba(213,255,64,0.25)] bg-[#101010] px-3 py-1 rounded-[2px]">
            <Filter className="h-3.5 w-3.5 text-[#D5FF40]" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#D5FF40]">
              TOPIC CLUSTER // {categoryName}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--color-text-primary)] leading-tight">
            {categoryName} <span className="text-[#D5FF40]">Playbooks & Insights.</span>
          </h1>

          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
            Authoritative articles, benchmarks, and tactical guides exploring {categoryName}.
          </p>
        </div>

        {/* Articles Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-12 text-center rounded-[2px] space-y-4">
            <BookOpen className="h-8 w-8 text-[#D5FF40] mx-auto" />
            <h3 className="font-display text-lg font-bold text-white uppercase">
              No Articles in {categoryName} Yet
            </h3>
            <p className="text-xs text-[#B0B0B0]">
              New deep dives in this topic cluster are being authored. Check back soon.
            </p>
          </div>
        )}

        {/* Contextual Internal Linking to Services */}
        <InternalLinksPillars category={categoryName} />
      </div>
    </div>
  );
}
