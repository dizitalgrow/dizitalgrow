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

export interface PortableTextBlock {
  _type: string;
  _key?: string;
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
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

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
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  readingTime?: number;
  featuredImage?: SanityImage;
}

export interface SanityPostDetail extends SanityPost {
  body?: PortableTextBlock[]; // Portable Text blocks
  seoTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  socialImage?: SanityImage;
  hideFromSearchEngines?: boolean;
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
  // Section A: Top Strip
  showTopStrip?: boolean;
  topStripAnnouncement?: string;
  topStripEmail?: string;
  topStripButtonLabel?: string;
  topStripButtonUrl?: string;
  // Section B: Navbar
  navbarLogo?: SanityImage;
  navbarLogoAlt?: string;
  textLogo?: string;
  navLinks?: NavItemConfig[];
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  // Section C: Footer
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
  // Section D: Global SEO
  defaultSeoTitle?: string;
  defaultMetaDescription?: string;
  defaultSocialImage?: SanityImage;
}

export interface PostsQueryParams {
  limit?: number;
  offset?: number;
  category?: string;
  featuredOnly?: boolean;
}
