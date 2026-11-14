"use client";

import React from "react";
import dynamic from "next/dynamic";

const ToolSkeleton = () => (
  <div className="p-8 text-center text-xs font-mono text-[#B0B0B0] border border-white/10 rounded-[2px] bg-[#101010]">
    Loading interactive tool...
  </div>
);

// Dynamically split all 24 tools to optimize page bundles and mobile Core Web Vitals
const LinkedInHeadlineGenerator = dynamic(
  () => import("./LinkedInHeadlineGenerator").then((m) => m.LinkedInHeadlineGenerator),
  { loading: ToolSkeleton }
);
const LinkedInAboutBuilder = dynamic(
  () => import("./LinkedInAboutBuilder").then((m) => m.LinkedInAboutBuilder),
  { loading: ToolSkeleton }
);
const ResumeSummaryBuilder = dynamic(
  () => import("./ResumeSummaryBuilder").then((m) => m.ResumeSummaryBuilder),
  { loading: ToolSkeleton }
);
const PortfolioContentPlanner = dynamic(
  () => import("./PortfolioContentPlanner").then((m) => m.PortfolioContentPlanner),
  { loading: ToolSkeleton }
);
const FreelanceRateCalculator = dynamic(
  () => import("./FreelanceRateCalculator").then((m) => m.FreelanceRateCalculator),
  { loading: ToolSkeleton }
);
const ServicePricingCalculator = dynamic(
  () => import("./ServicePricingCalculator").then((m) => m.ServicePricingCalculator),
  { loading: ToolSkeleton }
);
const InvoiceGenerator = dynamic(
  () => import("./InvoiceGenerator").then((m) => m.InvoiceGenerator),
  { loading: ToolSkeleton }
);
const QuotationGenerator = dynamic(
  () => import("./QuotationGenerator").then((m) => m.QuotationGenerator),
  { loading: ToolSkeleton }
);
const MetaTitleGenerator = dynamic(
  () => import("./MetaTitleGenerator").then((m) => m.MetaTitleGenerator),
  { loading: ToolSkeleton }
);
const SerpPreviewTool = dynamic(
  () => import("./SerpPreviewTool").then((m) => m.SerpPreviewTool),
  { loading: ToolSkeleton }
);
const UtmBuilderTool = dynamic(
  () => import("./UtmBuilderTool").then((m) => m.UtmBuilderTool),
  { loading: ToolSkeleton }
);
const SlugGeneratorTool = dynamic(
  () => import("./SlugGeneratorTool").then((m) => m.SlugGeneratorTool),
  { loading: ToolSkeleton }
);
const OpenGraphPreviewTool = dynamic(
  () => import("./OpenGraphPreviewTool").then((m) => m.OpenGraphPreviewTool),
  { loading: ToolSkeleton }
);
const InstagramBioGenerator = dynamic(
  () => import("./InstagramBioGenerator").then((m) => m.InstagramBioGenerator),
  { loading: ToolSkeleton }
);
const CaptionFormatterTool = dynamic(
  () => import("./CaptionFormatterTool").then((m) => m.CaptionFormatterTool),
  { loading: ToolSkeleton }
);
const YouTubeDescriptionBuilder = dynamic(
  () => import("./YouTubeDescriptionBuilder").then((m) => m.YouTubeDescriptionBuilder),
  { loading: ToolSkeleton }
);
const SocialMediaContentCalendar = dynamic(
  () => import("./SocialMediaContentCalendar").then((m) => m.SocialMediaContentCalendar),
  { loading: ToolSkeleton }
);
const JsonFormatterTool = dynamic(
  () => import("./JsonFormatterTool").then((m) => m.JsonFormatterTool),
  { loading: ToolSkeleton }
);
const CssGradientGenerator = dynamic(
  () => import("./CssGradientGenerator").then((m) => m.CssGradientGenerator),
  { loading: ToolSkeleton }
);
const BoxShadowGenerator = dynamic(
  () => import("./BoxShadowGenerator").then((m) => m.BoxShadowGenerator),
  { loading: ToolSkeleton }
);
const QrCodeGeneratorTool = dynamic(
  () => import("./QrCodeGeneratorTool").then((m) => m.QrCodeGeneratorTool),
  { loading: ToolSkeleton }
);
const PercentageCalculatorTool = dynamic(
  () => import("./PercentageCalculatorTool").then((m) => m.PercentageCalculatorTool),
  { loading: ToolSkeleton }
);
const GstCalculatorTool = dynamic(
  () => import("./GstCalculatorTool").then((m) => m.GstCalculatorTool),
  { loading: ToolSkeleton }
);
const DiscountCalculatorTool = dynamic(
  () => import("./DiscountCalculatorTool").then((m) => m.DiscountCalculatorTool),
  { loading: ToolSkeleton }
);

interface ToolRendererProps {
  slug: string;
}

export function ToolRenderer({ slug }: ToolRendererProps) {
  switch (slug) {
    case "linkedin-headline-generator":
      return <LinkedInHeadlineGenerator />;
    case "linkedin-about-builder":
      return <LinkedInAboutBuilder />;
    case "resume-summary-builder":
      return <ResumeSummaryBuilder />;
    case "portfolio-content-planner":
      return <PortfolioContentPlanner />;
    case "freelance-rate-calculator":
      return <FreelanceRateCalculator />;
    case "service-pricing-calculator":
      return <ServicePricingCalculator />;
    case "invoice-generator":
      return <InvoiceGenerator />;
    case "quotation-generator":
      return <QuotationGenerator />;
    case "meta-title-generator":
      return <MetaTitleGenerator />;
    case "serp-preview":
      return <SerpPreviewTool />;
    case "utm-builder":
      return <UtmBuilderTool />;
    case "slug-generator":
      return <SlugGeneratorTool />;
    case "open-graph-preview":
      return <OpenGraphPreviewTool />;
    case "instagram-bio-generator":
      return <InstagramBioGenerator />;
    case "caption-formatter":
      return <CaptionFormatterTool />;
    case "youtube-description-builder":
      return <YouTubeDescriptionBuilder />;
    case "social-media-content-calendar":
      return <SocialMediaContentCalendar />;
    case "json-formatter":
      return <JsonFormatterTool />;
    case "css-gradient-generator":
      return <CssGradientGenerator />;
    case "box-shadow-generator":
      return <BoxShadowGenerator />;
    case "qr-code-generator":
      return <QrCodeGeneratorTool />;
    case "percentage-calculator":
      return <PercentageCalculatorTool />;
    case "gst-calculator":
      return <GstCalculatorTool />;
    case "discount-calculator":
      return <DiscountCalculatorTool />;
    default:
      return (
        <div className="p-8 text-center text-xs font-mono text-[#B0B0B0]">
          Tool component loading...
        </div>
      );
  }
}
