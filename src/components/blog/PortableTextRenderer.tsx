import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor, type PortableTextBlock } from "@/lib/sanity";

interface PortableTextRendererProps {
  value?: PortableTextBlock[];
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    h2: ({ children }) => {
      const id = typeof children === "string" 
        ? children.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") 
        : undefined;
      return (
        <h2
          id={id}
          className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] uppercase tracking-tight mt-12 mb-5 scroll-mt-24 flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#D5FF40] inline-block shrink-0" />
          <span>{children}</span>
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-text-primary)] uppercase tracking-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-base sm:text-lg font-bold text-[var(--color-text-primary)] uppercase tracking-tight mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-[#D5FF40] bg-[rgba(213,255,64,0.04)] dark:bg-[rgba(213,255,64,0.03)] py-4 px-6 italic text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 space-y-2 list-none pl-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 space-y-2 list-decimal list-inside pl-2 text-sm sm:text-base text-[var(--color-text-secondary)]">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D5FF40] mt-2 shrink-0" />
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed pl-1">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[var(--color-text-primary)]">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    "strike-through": ({ children }) => (
      <span className="line-through opacity-70">{children}</span>
    ),
    code: ({ children }) => (
      <code className="rounded-[2px] bg-[rgba(213,255,64,0.08)] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 font-mono text-xs text-[#D5FF40] dark:text-[#D5FF40]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");
      const openInNewTab = value?.openInNewTab ?? isExternal;

      if (isExternal) {
        return (
          <a
            href={href}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            className="text-[#4D7C0F] dark:text-[#D5FF40] underline font-medium hover:opacity-80 transition-opacity"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-[#4D7C0F] dark:text-[#D5FF40] underline font-medium hover:opacity-80 transition-opacity"
        >
          {children}
        </Link>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref && !value?.asset?._id && !value?.asset?.url) return null;
      const imageUrl = urlFor(value).width(1200).auto("format").url();

      return (
        <figure className="my-8 space-y-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.15)] bg-[#101010]">
            <Image
              src={imageUrl}
              alt={value.alt || "Article illustration"}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center font-mono text-xs text-[var(--color-text-secondary)] italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null;
  }

  return (
    <div className="portable-text prose-cyber max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
