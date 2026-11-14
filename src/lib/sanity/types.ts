export interface SanityImageAsset {
  _ref?: string;
  _id?: string;
  _type?: string;
  url?: string;
}

export interface SanityImage {
  asset?: SanityImageAsset;
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanityAuthor {
  _id: string;
  _type: "author";
  name: string;
  slug: {
    current: string;
  };
  designation: string;
  bio: string;
  photo?: SanityImage;
  expertise?: string[];
  experience?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export interface ComparisonTableRow {
  _key?: string;
  cells: string[];
}

export interface ComparisonTableBlock {
  _type: "comparisonTable";
  _key?: string;
  caption?: string;
  headers: string[];
  highlightColumnIndex?: number;
  rows: ComparisonTableRow[];
}

export interface CalloutBlock {
  _type: "callout";
  _key?: string;
  type: "note" | "tip" | "important" | "warning" | "caution";
  title?: string;
  content: string;
}

export interface FeatureComparisonCardBlock {
  _type: "featureComparisonCard";
  _key?: string;
  name: string;
  badge?: string;
  rating?: string;
  bestFor?: string;
  pros?: string[];
  cons?: string[];
  verdict?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface ProsAndConsBlock {
  _type: "prosAndCons";
  _key?: string;
  title?: string;
  pros: string[];
  cons: string[];
}

export interface StepItem {
  _key?: string;
  stepNumber?: number;
  title: string;
  description: string;
  proTip?: string;
}

export interface StepByStepGuideBlock {
  _type: "stepByStepGuide";
  _key?: string;
  sectionTitle?: string;
  steps: StepItem[];
}

export interface StatisticCalloutBlock {
  _type: "statisticCallout";
  _key?: string;
  value: string;
  label: string;
  source?: string;
}

export interface CodeBlockItem {
  _type: "codeBlock";
  _key?: string;
  language: string;
  filename?: string;
  code: string;
}

export interface CtaBannerBlock {
  _type: "ctaBanner";
  _key?: string;
  headline: string;
  description?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  targetService?: string;
}

export interface FaqBlockItem {
  _type: "faqBlock";
  _key?: string;
  heading?: string;
  items: Array<{
    _key?: string;
    question: string;
    answer: string;
  }>;
}

export interface VideoEmbedBlock {
  _type: "videoEmbed";
  _key?: string;
  url: string;
  caption?: string;
}

export interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key?: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
    openInNewTab?: boolean;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

export interface ArticleFaqItem {
  _key?: string;
  question: string;
  answer: string;
}

export interface ArticleReference {
  _key?: string;
  title: string;
  publisher?: string;
  url: string;
  publicationDate?: string;
  accessDate?: string;
}

export interface ArticleQuickAnswer {
  enabled?: boolean;
  directAnswer?: string;
  mainRecommendation?: string;
  takeaways?: string[];
}

export interface ArticleCtaConfig {
  targetService?: string;
  customTitle?: string;
  customDescription?: string;
  customButtonText?: string;
  customButtonUrl?: string;
}

export type ArticleType =
  | "how-to"
  | "top10-listicle"
  | "comparison"
  | "technical-guide"
  | "case-study"
  | "pricing-guide"
  | "informational-guide"
  | "service-focused";

export interface SanityPost {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category?: string;
  tags?: string[];
  author?: string;
  authorProfile?: SanityAuthor;
  coAuthors?: SanityAuthor[];
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  readingTime?: number;
  featuredImage?: SanityImage;
  articleType?: ArticleType;
  searchIntent?: string;
  editorialStatus?: string;
}

export interface SanityPostDetail extends SanityPost {
  body?: PortableTextBlock[];
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  socialImage?: SanityImage;
  hideFromSearchEngines?: boolean;
  tableOfContentsEnabled?: boolean;
  quickAnswer?: ArticleQuickAnswer;
  keyTakeaways?: string[];
  faqItems?: ArticleFaqItem[];
  references?: ArticleReference[];
  relatedArticles?: SanityPost[];
  ctaConfiguration?: ArticleCtaConfig;
  sourceInformation?: string;
}

export interface NavDropdownItem {
  label: string;
  url: string;
  description?: string;
  openInNewTab?: boolean;
}

export interface NavItemConfig {
  label: string;
  url: string;
  openInNewTab?: boolean;
  children?: NavDropdownItem[];
}

export interface FooterLinkItem {
  label: string;
  url: string;
  openInNewTab?: boolean;
}

export interface FooterColumnConfig {
  heading: string;
  links: FooterLinkItem[];
}

export interface SocialLinkConfig {
  platform: string;
  url: string;
  label?: string;
}

export interface LegalLinkConfig {
  label: string;
  url: string;
  openInNewTab?: boolean;
}

export interface SanitySiteSettings {
  _id?: string;
  _type?: "siteSettings";
  showTopStrip?: boolean;
  topStripAnnouncement?: string;
  topStripEmail?: string;
  topStripButtonLabel?: string;
  topStripButtonUrl?: string;
  navbarLogo?: SanityImage;
  navbarLogoAlt?: string;
  textLogo?: string;
  navLinks?: NavItemConfig[];
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  footerLogo?: SanityImage;
  footerDescription?: string;
  footerContactEmail?: string;
  whatsappChannelUrl?: string;
  whatsappNumber?: string;
  footerColumns?: FooterColumnConfig[];
  footerCtaHeading?: string;
  footerCtaButtonLabel?: string;
  footerCtaButtonUrl?: string;
  socialLinks?: SocialLinkConfig[];
  copyrightText?: string;
  legalLinks?: LegalLinkConfig[];
  defaultSeoTitle?: string;
  defaultMetaDescription?: string;
  defaultSocialImage?: SanityImage;
}

export interface PostsQueryParams {
  limit?: number;
  offset?: number;
  category?: string;
  tag?: string;
  authorSlug?: string;
  featuredOnly?: boolean;
  excludeSlug?: string;
}
