import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/services/website-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/web-application-development",
        destination: "/services/web-applications",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development",
        destination: "/services/mobile-apps",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/services/seo-visibility",
        permanent: true,
      },
      {
        source: "/services/meta-conversions-api",
        destination: "/meta-capi",
        permanent: true,
      },
      {
        source: "/solutions/personal-brand-authority",
        destination: "/solutions/personal-websites",
        permanent: true,
      },
      {
        source: "/solutions/professional-services",
        destination: "/solutions/professional-websites",
        permanent: true,
      },
      {
        source: "/solutions/corporate-website",
        destination: "/solutions/business-websites",
        permanent: true,
      },
      {
        source: "/solutions/landing-page-funnel",
        destination: "/solutions/landing-pages",
        permanent: true,
      },
      {
        source: "/solutions/ecommerce-store",
        destination: "/solutions/ecommerce-websites",
        permanent: true,
      },
      {
        source: "/solutions/saas-mvp",
        destination: "/solutions/saas-development",
        permanent: true,
      },
      {
        source: "/solutions/portal-dashboard",
        destination: "/solutions/web-applications",
        permanent: true,
      },
      {
        source: "/solutions/workflow-automation",
        destination: "/solutions/web-applications",
        permanent: true,
      },
      {
        source: "/solutions/local-lead-engine",
        destination: "/solutions/business-websites",
        permanent: true,
      },
      {
        source: "/tools/hourly-rate-calculator",
        destination: "/tools/freelance-rate-calculator",
        permanent: true,
      },
      {
        source: "/tools/project-cost-estimator",
        destination: "/tools/service-pricing-calculator",
        permanent: true,
      },
      {
        source: "/tools/simple-invoice-generator",
        destination: "/tools/invoice-generator",
        permanent: true,
      },
      {
        source: "/tools/meta-tag-serp-previewer",
        destination: "/tools/serp-preview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
