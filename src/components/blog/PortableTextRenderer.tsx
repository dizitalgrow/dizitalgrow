import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor, type PortableTextBlock } from "@/lib/sanity";
import { slugifyHeading, extractBlockText } from "@/lib/editorial/heading-utils";

// Custom block components
import { ComparisonTable } from "./blocks/ComparisonTable";
import { CalloutBox } from "./blocks/CalloutBox";
import { FeatureComparisonCard } from "./blocks/FeatureComparisonCard";
import { ProsAndCons } from "./blocks/ProsAndCons";
import { StepByStepGuide } from "./blocks/StepByStepGuide";
import { StatisticCallout } from "./blocks/StatisticCallout";
import { CodeSnippet } from "./blocks/CodeSnippet";
import { VideoEmbed } from "./blocks/VideoEmbed";
import { EditorialCTA } from "./EditorialCTA";
import { FAQSection } from "./FAQSection";

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
    h2: ({ value, children }) => {
      const text = extractBlockText(value as unknown as PortableTextBlock);
      const id = slugifyHeading(text);

      return (
        <h2
          id={id || undefined}
          className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] uppercase tracking-tight mt-12 mb-5 scroll-mt-28"
        >
          {children}
        </h2>
      );
    },
    h3: ({ value, children }) => {
      const text = extractBlockText(value as unknown as PortableTextBlock);
      const id = slugifyHeading(text);

      return (
        <h3
          id={id || undefined}
          className="font-display text-lg sm:text-xl font-bold text-[var(--color-text-primary)] uppercase tracking-tight mt-8 mb-4 scroll-mt-28"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="font-display text-base sm:text-lg font-bold text-[var(--color-text-primary)] uppercase tracking-tight mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-[#D5FF40] bg-[rgba(213,255,64,0.04)] py-4 px-6 italic text-sm sm:text-base text-[var(--color-text-primary)] leading-relaxed rounded-r-[2px]">
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
      <code className="rounded-[2px] bg-[rgba(213,255,64,0.08)] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.5 font-mono text-xs text-[#D5FF40]">
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
            className="text-[#D5FF40] underline font-medium hover:opacity-80 transition-opacity"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-[#D5FF40] underline font-medium hover:opacity-80 transition-opacity"
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
    comparisonTable: ({ value }) => <ComparisonTable value={value} />,
    callout: ({ value }) => <CalloutBox value={value} />,
    featureComparisonCard: ({ value }) => <FeatureComparisonCard value={value} />,
    prosAndCons: ({ value }) => <ProsAndCons value={value} />,
    stepByStepGuide: ({ value }) => <StepByStepGuide value={value} />,
    statisticCallout: ({ value }) => <StatisticCallout value={value} />,
    codeBlock: ({ value }) => <CodeSnippet value={value} />,
    videoEmbed: ({ value }) => <VideoEmbed value={value} />,
    ctaBanner: ({ value }) => (
      <EditorialCTA
        variant="inline"
        config={{
          customTitle: value.headline,
          customDescription: value.description,
          customButtonText: value.buttonLabel,
          customButtonUrl: value.buttonUrl,
          targetService: value.targetService,
        }}
      />
    ),
    faqBlock: ({ value }) => (
      <FAQSection heading={value.heading} items={value.items} />
    ),
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
