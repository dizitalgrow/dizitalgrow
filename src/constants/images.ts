/**
 * Curated Pexels photography assets for DizitalGrow.
 * Every image is selected for authentic relevance (digital workspaces, web development,
 * advertising, analytics, e-commerce) and served via Pexels optimized CDN parameters.
 * Attribution: Photography provided via Pexels (free commercial license).
 */

export interface PhotographyAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const PEXELS_IMAGES = {
  // Hero: Modern digital agency workspace with clean design/code interfaces
  hero: {
    src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Modern digital workspace with clean responsive web design mockup on display",
    width: 1280,
    height: 853,
    caption: "Connected digital products, targeted acquisition & verified tracking",
  },

  // Capability: Build (Websites, Web Apps & E-Commerce)
  capabilityBuild: {
    src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=960",
    alt: "Software engineer developing high-performance modern web application interfaces",
    width: 960,
    height: 640,
    caption: "Fast, accessible web applications and conversion-focused websites",
  },

  // Capability: Reach (Google & Meta Advertising)
  capabilityReach: {
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=960",
    alt: "Marketing strategist reviewing targeted ad campaigns and digital audience metrics",
    width: 960,
    height: 640,
    caption: "Search and social campaigns focused on real buyer intent",
  },

  // Capability: Measure (Analytics & Meta Conversions API)
  capabilityMeasure: {
    src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=960",
    alt: "Data visualization dashboard showing conversion tracking and real-time business performance",
    width: 960,
    height: 640,
    caption: "Server-side Meta CAPI and GA4 tracking with zero data loss",
  },

  // Concept Projects: Clearly disclosed explorations
  concepts: {
    corporateWebsite: {
      src: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=960",
      alt: "Clean editorial layout for a high-performance corporate business website concept",
      width: 960,
      height: 640,
      title: "Corporate Business Platform",
      tag: "Design Exploration",
      sector: "B2B Professional Services",
      summary: "Modular Next.js marketing website engineered for sub-second page loads and fast lead inquiries.",
    },
    ecommercePlatform: {
      src: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=960",
      alt: "Modern e-commerce retail store interface concept with streamlined checkout",
      width: 960,
      height: 640,
      title: "D2C Retail Store Experience",
      tag: "Concept Project",
      sector: "E-Commerce & Retail",
      summary: "Mobile-first online catalog with frictionless checkout and server-side purchase tracking.",
    },
    acquisitionFunnel: {
      src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=960",
      alt: "High-intent social advertising creative and focused landing page concept",
      width: 960,
      height: 640,
      title: "Customer Acquisition Funnel",
      tag: "Illustrative Example",
      sector: "Healthcare & Appointments",
      summary: "Targeted Meta & Google ad creative paired with dedicated appointment booking landing pages.",
    },
    analyticsDashboard: {
      src: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=960",
      alt: "Server-side event telemetry and deduplication analytics interface concept",
      width: 960,
      height: 640,
      title: "Server CAPI Telemetry Suite",
      tag: "Concept Project",
      sector: "Analytics & Tracking",
      summary: "Unified GA4 and Meta Conversions API dashboard tracking verified calls, forms, and sales.",
    },
  },

  // About & Philosophy
  about: {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Technology team collaborating on clean digital system architecture",
    width: 1280,
    height: 853,
    caption: "Practical engineering, transparent pricing, and verifiable business outcomes",
  },

  // Meta Conversions API visual context
  capiFeature: {
    src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=960",
    alt: "Backend server terminal handling event telemetry and server-side API requests",
    width: 960,
    height: 640,
    caption: "Direct server-to-server event dispatch bypassing browser ad blockers",
  },
} as const;
