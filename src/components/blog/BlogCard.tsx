import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { urlFor, type SanityPost } from "@/lib/sanity";

interface BlogCardProps {
  post: SanityPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const slug = post.slug?.current;
  if (!slug) return null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const imageUrl =
    post.featuredImage &&
    (post.featuredImage.asset?._ref ||
      post.featuredImage.asset?._id ||
      post.featuredImage.asset?.url)
      ? urlFor(post.featuredImage).width(720).height(450).auto("format").url()
      : null;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-[2px] border border-[rgba(213,255,64,0.15)] bg-[#0A0A0A] transition-colors duration-200 hover:border-[#D5FF40] ${
        featured ? "p-6 sm:p-8" : "p-5"
      }`}
    >
      <div>
        {/* Featured Image */}
        {imageUrl ? (
          <div className="relative aspect-[16/10] mb-5 overflow-hidden rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.1)]">
            <Image
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/10] mb-5 overflow-hidden rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.1)] flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B0B0B0]">
              {post.category || "Growth Article"}
            </span>
          </div>
        )}

        {/* Metadata row: Category, Reading Time, Date */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#B0B0B0] mb-3">
          {post.category && (
            <span className="text-[#D5FF40] font-bold uppercase tracking-wider bg-[rgba(213,255,64,0.1)] border border-[rgba(213,255,64,0.2)] px-2 py-0.5 rounded-[2px]">
              {post.category}
            </span>
          )}

          {post.readingTime && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#D5FF40]" />
              <span>{post.readingTime} min</span>
            </span>
          )}

          {formattedDate && (
            <span className="inline-flex items-center gap-1 text-[11px] text-[#B0B0B0]/80">
              <Calendar className="h-3 w-3 opacity-60" />
              <span>{formattedDate}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold text-white transition-colors group-hover:text-[#D5FF40] ${
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          <Link href={`/blog/${slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mt-2.5 text-xs sm:text-sm text-[#B0B0B0] line-clamp-3 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        )}
      </div>

      {/* Footer link */}
      <div className="mt-6 pt-4 border-t border-[rgba(213,255,64,0.1)] flex items-center justify-between text-xs font-mono">
        <span className="text-[#D5FF40] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
          Read Guide
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        {post.author && (
          <span className="text-[11px] text-[#B0B0B0]">By {post.author}</span>
        )}
      </div>
    </article>
  );
}
