export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionItem {
  name: string;
  href: string;
  description: string;
  badge?: string;
}

export interface SolutionCategory {
  category: "Build" | "Reach" | "Convert & Measure";
  description: string;
  items: SolutionItem[];
}

export const SOLUTIONS_MENU: SolutionCategory[] = [
  {
    category: "Build",
    description: "Digital presence, platforms, and robust infrastructure.",
    items: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "High-performance business websites engineered to convert.",
        badge: "Next.js",
      },
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        description: "Custom portals, SaaS tools, and client platforms.",
        badge: "Full-Stack",
      },
      {
        name: "Mobile Application Development",
        href: "/services/mobile-apps",
        description: "Cross-platform iOS and Android mobile solutions.",
        badge: "iOS & Android",
      },
    ],
  },
  {
    category: "Reach",
    description: "Targeted advertising and organic discovery channels.",
    items: [
      {
        name: "Meta Advertising",
        href: "/services/meta-ads",
        description: "High-ROI Facebook and Instagram acquisition campaigns.",
        badge: "FB & IG",
      },
      {
        name: "Google Advertising",
        href: "/services/google-ads",
        description: "High-intent search and display ads for buyer queries.",
        badge: "Search & Maps",
      },
      {
        name: "SEO and Digital Visibility",
        href: "/services/seo-visibility",
        description: "Organic search, local discovery, and AI search indexing.",
        badge: "Organic",
      },
    ],
  },
  {
    category: "Convert & Measure",
    description: "Telemetry, server-side tracking, and conversion lift.",
    items: [
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Accurate lead, phone call, and e-commerce tracking.",
        badge: "Telemetry",
      },
      {
        name: "Google Analytics & GTM",
        href: "/services/ga4-gtm",
        description: "Clean GA4 setups with server tag manager containers.",
        badge: "GA4",
      },
      {
        name: "Meta Pixel & Conversions API",
        href: "/meta-capi",
        description: "Direct server-to-server tracking bypassing ad blockers.",
        badge: "CAPI",
      },
      {
        name: "Conversion Optimization",
        href: "/services/conversion-optimization",
        description: "Friction reduction and UX audits to lift conversion rates.",
        badge: "CRO",
      },
    ],
  },
];

export const MAIN_NAV_ITEMS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/services" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SOLUTIONS_LINKS: NavLink[] = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Meta Advertising", href: "/services/meta-ads" },
  { label: "Google Advertising", href: "/services/google-ads" },
  { label: "SEO & Digital Visibility", href: "/services/seo-visibility" },
  { label: "Meta Conversions API", href: "/meta-capi" },
  { label: "Analytics & Measurement", href: "/services/conversion-tracking" },
];

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About DizitalGrow", href: "/about" },
  { label: "All Solutions", href: "/services" },
  { label: "Our Growth Framework", href: "/process" },
  { label: "Knowledge & Insights", href: "/blog" },
  { label: "Contact Consultation", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const BRAND_TAGLINE = "Grow Beyond Offline.";
export const BRAND_CORE_IDEA = "The Digital World Has Opportunities. Let's Help You Grow With Them.";
export const PRIMARY_CTA_LABEL = "Let's Grow Together";

export const VERIFIED_EMAIL = "contact@dizitalgrow.in";
export const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N";
export const VERIFIED_WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+91 91871 26193";
