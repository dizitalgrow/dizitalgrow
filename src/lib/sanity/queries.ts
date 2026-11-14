/**
 * Reusable GROQ queries for Dizital Grow Editorial System
 * Only returns published documents (excluding drafts) with valid slugs.
 */

// Author projection fields
export const AUTHOR_FIELDS = `
  _id,
  _type,
  name,
  slug,
  designation,
  bio,
  expertise,
  experience,
  linkedinUrl,
  websiteUrl,
  photo {
    asset,
    alt,
    caption,
    hotspot,
    crop
  }
`;

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
  "authorProfile": authorRef-> {
    ${AUTHOR_FIELDS}
  },
  publishedAt,
  updatedAt,
  featured,
  readingTime,
  articleType,
  searchIntent,
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
  canonicalUrl,
  primaryKeyword,
  secondaryKeywords,
  socialImage {
    asset,
    alt,
    caption,
    hotspot,
    crop
  },
  hideFromSearchEngines,
  tableOfContentsEnabled,
  quickAnswer,
  keyTakeaways,
  faqItems,
  references,
  ctaConfiguration,
  sourceInformation,
  "coAuthors": coAuthors[]-> {
    ${AUTHOR_FIELDS}
  },
  "relatedArticles": relatedArticles[]-> {
    ${POST_CARD_FIELDS}
  }
`;

// Published blog listing query with pagination
export const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] 
  | order(publishedAt desc) [$offset...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Total count of published posts (for crawlable pagination calculation)
export const POSTS_COUNT_QUERY = `
  count(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))])
`;

// Total count of posts in category
export const POSTS_BY_CATEGORY_COUNT_QUERY = `
  count(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && lower(category) == lower($category)])
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

// Posts filtered by author slug or author string
export const POSTS_BY_AUTHOR_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && (authorRef->slug.current == $authorSlug || lower(author) == lower($authorName))] 
  | order(publishedAt desc) [$offset...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Related posts by category & tags (excluding current post)
export const RELATED_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && slug.current != $currentSlug && !(_id in path("drafts.**")) && (lower(category) == lower($category) || count((tags[])[@ in $tags]) > 0)]
  | order(publishedAt desc) [0...$limit] {
    ${POST_CARD_FIELDS}
  }
`;

// Get all unique categories dynamically from published posts
export const ALL_CATEGORIES_QUERY = `
  array::unique(*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && defined(category)].category)
`;

// Get author profile by slug
export const AUTHOR_BY_SLUG_QUERY = `
  *[_type == "author" && slug.current == $slug][0] {
    ${AUTHOR_FIELDS}
  }
`;

// Get all authors
export const ALL_AUTHORS_QUERY = `
  *[_type == "author" && defined(slug.current)] {
    ${AUTHOR_FIELDS}
  }
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
