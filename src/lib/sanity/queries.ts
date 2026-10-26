/**
 * Reusable GROQ queries for Dizital Grow
 * Only returns published documents (excluding drafts) with valid slugs.
 */

// Common fields projected for blog listing and cards
export const POST_CARD_FIELDS = `
  _id,
  _type,
  title,
  slug,
  excerpt,
  category,
  tags,
  author,
  publishedAt,
  updatedAt,
  featured,
  readingTime,
  featuredImage {
    asset,
    alt,
    caption,
    hotspot,
    crop
  }
`;

// Detailed fields projected for single article page
export const POST_DETAIL_FIELDS = `
  ${POST_CARD_FIELDS},
  body,
  seoTitle,
  metaDescription,
  primaryKeyword,
  socialImage {
    asset,
    alt,
    caption,
    hotspot,
    crop
  },
  hideFromSearchEngines
`;

// Published blog listing query with pagination
export const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] 
  | order(publishedAt desc) [$offset...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Single post query by slug
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    ${POST_DETAIL_FIELDS}
  }
`;

// Posts filtered by category (case-insensitive)
export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && lower(category) == lower($category)] 
  | order(publishedAt desc) [$offset...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Featured articles query
export const FEATURED_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && featured == true] 
  | order(publishedAt desc) [0...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Get all unique categories dynamically from published posts
export const ALL_CATEGORIES_QUERY = `
  array::unique(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && defined(category)].category)
`;

// Global site settings singleton query
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    showTopStrip,
    topStripAnnouncement,
    topStripEmail,
    topStripButtonLabel,
    topStripButtonUrl,
    navbarLogo { asset, alt },
    navbarLogoAlt,
    textLogo,
    navLinks[] {
      label,
      url,
      openInNewTab,
      children[] {
        label,
        url,
        description,
        openInNewTab
      }
    },
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    footerLogo { asset, alt },
    footerDescription,
    footerContactEmail,
    whatsappChannelUrl,
    whatsappNumber,
    footerColumns[] {

      heading,
      links[] {
        label,
        url,
        openInNewTab
      }
    },
    footerCtaHeading,
    footerCtaButtonLabel,
    footerCtaButtonUrl,
    socialLinks[] {
      platform,
      url,
      label
    },
    copyrightText,
    legalLinks[] {
      label,
      url,
      openInNewTab
    },
    defaultSeoTitle,
    defaultMetaDescription,
    defaultSocialImage { asset, alt }
  }
`;
