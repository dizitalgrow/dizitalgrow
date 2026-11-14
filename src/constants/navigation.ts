export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  name: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavCategorySection {
  category: string;
  description: string;
  items: NavDropdownItem[];
}

export const MAIN_SERVICES_LINKS: NavDropdownItem[] = [
  {
    name: "Website Development",
    href: "/services/web-development",
    description: "High-performance business websites engineered to convert.",
    badge: "Next.js",
  },
  {
    name: "Web Application Development",
    href: "/services/web-applications",
    description: "Custom portals, SaaS tools, and business software.",
    badge: "Full-Stack",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-apps",
    description: "Cross-platform iOS and Android mobile solutions.",
    badge: "iOS & Android",
  },
  {
    name: "Meta Ads Management",
    href: "/services/meta-ads",
    description: "Targeted Facebook and Instagram acquisition campaigns.",
    badge: "FB & IG",
  },
  {
    name: "Google Ads Management",
    href: "/services/google-ads",
    description: "High-intent search and shopping ads for buyer queries.",
    badge: "Search",
  },
  {
    name: "SEO & Digital Visibility",
    href: "/services/seo-visibility",
    description: "Organic search, local discovery, and AI search indexing.",
    badge: "SEO",
  },
  {
    name: "Conversion Tracking",
    href: "/services/conversion-tracking",
    description: "Accurate lead, phone call, and e-commerce tracking.",
    badge: "Telemetry",
  },
  {
    name: "Meta Conversions API",
    href: "/meta-capi",
    description: "Server-side tracking with event deduplication.",
    badge: "CAPI",
  },
];

export const SOLUTIONS_LINKS: NavDropdownItem[] = [
  {
    name: "Personal Websites",
    href: "/solutions/personal-websites",
    description: "Authority platforms for consultants, creators & leaders.",
  },
  {
    name: "Portfolio Websites",
    href: "/solutions/portfolio-websites",
    description: "Visual showcases for designers, architects & studios.",
  },
  {
    name: "Professional Websites",
    href: "/solutions/professional-websites",
    description: "Credibility platforms for doctors, lawyers & advisors.",
  },
  {
    name: "Business Websites",
    href: "/solutions/business-websites",
    description: "Commercial websites designed to generate daily inquiries.",
  },
  {
    name: "Ecommerce Websites",
    href: "/solutions/ecommerce-websites",
    description: "Fast digital storefronts with streamlined checkout flows.",
  },
  {
    name: "SaaS Development",
    href: "/solutions/saas-development",
    description: "Scalable software MVPs, dashboards & subscriber tools.",
  },
  {
    name: "Landing Pages",
    href: "/solutions/landing-pages",
    description: "Single-focus campaign pages built for high conversion lift.",
  },
  {
    name: "Web Applications",
    href: "/solutions/web-applications",
    description: "Interactive client portals and internal workflow platforms.",
  },
  {
    name: "Mobile Applications",
    href: "/solutions/mobile-applications",
    description: "Cross-platform mobile apps for iOS and Android.",
  },
];

export const INDUSTRIES_LINKS: NavDropdownItem[] = [
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    description: "Clinics, diagnostic centers & healthcare providers.",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    description: "Property developers, brokers & architectural studios.",
  },
  {
    name: "Education",
    href: "/industries/education",
    description: "Colleges, coaching academies & online course platforms.",
  },
  {
    name: "Ecommerce & Retail",
    href: "/industries/ecommerce-retail",
    description: "D2C brands, boutique storefronts & multi-product stores.",
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Industrial equipment, B2B plants & export suppliers.",
  },
  {
    name: "Professional Services",
    href: "/industries/professional-services",
    description: "Consultancies, legal practices & chartered accountancies.",
  },
];

export const TOOLS_CATEGORY_LINKS: NavDropdownItem[] = [
  {
    name: "Career & Students",
    href: "/tools/career-students",
    description: "Headlines, bios, summaries and portfolio planning.",
  },
  {
    name: "Business & Freelancers",
    href: "/tools/business-freelancers",
    description: "Rate calculators, invoices, quotes and service pricing.",
  },
  {
    name: "Marketing & SEO",
    href: "/tools/marketing-seo",
    description: "SERP preview, UTM builder, slug & Open Graph preview.",
  },
  {
    name: "Creators & Social Media",
    href: "/tools/creators-social-media",
    description: "Bio generators, captions, YouTube descriptions & calendars.",
  },
  {
    name: "Developer Utilities",
    href: "/tools/developer-utilities",
    description: "JSON formatter, gradients, shadows & QR code generator.",
  },
  {
    name: "Everyday Calculators",
    href: "/tools/everyday-calculators",
    description: "GST calculator, discount finder & percentage calculators.",
  },
];

export const COMPANY_DROPDOWN_LINKS: NavDropdownItem[] = [
  {
    name: "About DizitalGrow",
    href: "/about",
    description: "Our mission, vision and honest digital philosophy.",
  },
  {
    name: "Our Process",
    href: "/process",
    description: "Our 5-stage framework from discovery to delivery.",
  },
  {
    name: "Selected Work",
    href: "/work",
    description: "Authentic project studies and digital demonstrations.",
  },
  {
    name: "Contact Us",
    href: "/contact",
    description: "Tell us what you want to build or grow.",
  },
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Web Application Development", href: "/services/web-applications" },
  { label: "Mobile App Development", href: "/services/mobile-apps" },
  { label: "Meta Ads Management", href: "/services/meta-ads" },
  { label: "Google Ads Management", href: "/services/google-ads" },
  { label: "SEO & Digital Visibility", href: "/services/seo-visibility" },
  { label: "Conversion Tracking", href: "/services/conversion-tracking" },
  { label: "Meta Conversions API", href: "/meta-capi" },
];

export const FOOTER_EXPLORE_LINKS: NavLink[] = [
  { label: "All Solutions", href: "/solutions" },
  { label: "Business Websites", href: "/solutions/business-websites" },
  { label: "Ecommerce Websites", href: "/solutions/ecommerce-websites" },
  { label: "SaaS Development", href: "/solutions/saas-development" },
  { label: "Industry Solutions", href: "/industries" },
  { label: "Free Tools Hub", href: "/tools" },
  { label: "Invoice Generator", href: "/tools/invoice-generator" },
  { label: "GST Calculator", href: "/tools/gst-calculator" },
];

export const FOOTER_RESOURCES_LINKS: NavLink[] = [
  { label: "Blog & Insights", href: "/blog" },
  { label: "About DizitalGrow", href: "/about" },
  { label: "Our 5-Stage Process", href: "/process" },
  { label: "Selected Work", href: "/work" },
  { label: "Contact Consultation", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export const BRAND_TAGLINE = "Grow Beyond Offline.";
export const BRAND_CORE_IDEA = "Build Your Digital Presence. Reach More People. Grow With Clarity.";
export const PRIMARY_CTA_LABEL = "Discuss Your Project";
export const SECONDARY_CTA_LABEL = "Explore Our Services";

export const VERIFIED_EMAIL = "contact@dizitalgrow.in";
export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N";
export const VERIFIED_WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+91 91871 26193";
