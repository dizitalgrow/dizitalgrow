export interface OutcomeItem {
  number: string;
  title: string;
  summary: string;
  details: string;
  impactMetrics: string;
}

export interface GrowthFrameworkStage {
  step: string;
  phase: "UNDERSTAND" | "BUILD" | "REACH" | "CONVERT" | "MEASURE";
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface ServiceDetailData {
  slug: string;
  category: "BUILD" | "REACH" | "CONVERT & MEASURE";
  title: string;
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  includes: string[];
  problemsSolved: string[];
  whoNeedsThis: {
    audience: string;
    description: string;
  }[];
  expectedOutcomes: string[];
  ourApproach: {
    step: string;
    title: string;
    description: string;
  }[];
  technicalCapabilities: string[];
  relatedSolutions: {
    name: string;
    href: string;
    description: string;
  }[];
  relatedIndustries: {
    name: string;
    href: string;
    description: string;
  }[];
  relatedServices: {
    name: string;
    href: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  industry: string;
  clientIndustry?: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  approach: string;
  features: string[];
  technologies: string[];
  isConcept?: boolean;
  servicesDelivered: string[];
  caseStudySlug: string;
  liveHref?: string;
  linkText?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* ========================================================================= */
/* BRAND & HERO MESSAGING                                                    */
/* ========================================================================= */

export const HERO_CONTENT = {
  eyebrow: "GROW BEYOND OFFLINE",
  headline: "Build Your Digital Presence. Reach More People. Grow With Clarity.",
  supportingText:
    "DizitalGrow helps individuals, startups and businesses build a stronger presence online. From professional websites and custom applications to digital advertising, SEO and conversion tracking, we bring the important parts of your digital growth together.",
  primaryCTA: { label: "Discuss Your Project", href: "/contact" },
  secondaryCTA: { label: "Explore Our Services", href: "/services" },
  trustHighlights: [
    "Websites & Applications",
    "Meta & Google Ads",
    "SEO & Server Telemetry",
  ],
};

/* ========================================================================= */
/* SECTION 2: BUSINESS PROBLEMS                                              */
/* ========================================================================= */

export const BUSINESS_PROBLEMS = {
  eyebrow: "BUSINESS CHALLENGES",
  heading: "Your Business Deserves More Than Just Being Online",
  leadParagraph:
    "Merely having a domain name or social handle is not enough. Most businesses encounter four persistent bottlenecks that prevent digital growth.",
  challenges: [
    {
      number: "01",
      title: "People cannot find your business.",
      description:
        "Potential buyers search for solutions on Google and social media every day, but your brand is invisible because search foundations and indexation are lacking.",
      impact: "Zero inbound discovery from active commercial searches.",
    },
    {
      number: "02",
      title: "Your website is not generating enquiries.",
      description:
        "Visitors arrive at your website but leave without taking action because pages load slowly, messaging is confusing, or contact pathways are broken.",
      impact: "High bounce rates and lost customer opportunities.",
    },
    {
      number: "03",
      title: "Your advertising is not producing clear results.",
      description:
        "You run ad campaigns on Meta or Google, but money is spent on clicks that never convert into verified customer calls or booked projects.",
      impact: "Uncontrolled ad budget wastage with declining returns.",
    },
    {
      number: "04",
      title: "You cannot clearly measure what is working.",
      description:
        "Ad blockers and fragmented analytics prevent you from knowing which channel, ad creative, or keyword generated your actual customers.",
      impact: "Blind marketing decisions without dependable attribution.",
    },
  ],
};

/* ========================================================================= */
/* SECTION 3: CORE SERVICES (8 CARDS)                                        */
/* ========================================================================= */

export const HOMEPAGE_SERVICES = [
  {
    title: "Website Development",
    slug: "web-development",
    href: "/services/web-development",
    description:
      "Modern, fast business websites built on Next.js engineered to explain your value, build trust, and turn visitors into enquiries.",
    iconName: "Globe",
    tag: "Next.js",
  },
  {
    title: "Web Application Development",
    slug: "web-applications",
    href: "/services/web-applications",
    description:
      "Custom browser-based applications, client portals, and SaaS tools built around your exact operational workflows.",
    iconName: "LayoutDashboard",
    tag: "Full-Stack",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-apps",
    href: "/services/mobile-apps",
    description:
      "Cross-platform iOS and Android mobile experiences designed around real user needs, with push alerts and offline capabilities.",
    iconName: "Smartphone",
    tag: "iOS & Android",
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    href: "/services/meta-ads",
    description:
      "Facebook and Instagram advertising campaigns built around business goals, targeted audiences, and measurable website actions.",
    iconName: "Megaphone",
    tag: "FB & IG",
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    href: "/services/google-ads",
    description:
      "High-intent Search, Display, and Shopping campaigns connecting your business with customers actively searching for what you offer.",
    iconName: "Search",
    tag: "Search Ads",
  },
  {
    title: "SEO & Digital Visibility",
    slug: "seo-visibility",
    href: "/services/seo-visibility",
    description:
      "Technical search engine optimization, semantic site architecture, and on-page content planning to earn lasting discoverability.",
    iconName: "LineChart",
    tag: "Organic",
  },
  {
    title: "Conversion Tracking",
    slug: "conversion-tracking",
    href: "/services/conversion-tracking",
    description:
      "Comprehensive telemetry setups with GA4 and Google Tag Manager to measure form submissions, calls, chats, and purchases.",
    iconName: "Activity",
    tag: "GA4 + GTM",
  },
  {
    title: "Meta Conversions API",
    slug: "meta-capi",
    href: "/meta-capi",
    description:
      "Server-side event integration with deduplication to complement browser pixels and support reliable Meta ad measurement.",
    iconName: "Server",
    tag: "Server CAPI",
  },
];

/* ========================================================================= */
/* SECTION 4: SOLUTIONS (9 CARDS)                                            */
/* ========================================================================= */

export const HOMEPAGE_SOLUTIONS = [
  {
    title: "Personal Websites",
    slug: "personal-websites",
    href: "/solutions/personal-websites",
    description: "Authority platforms for consultants, creators, executives, and specialists.",
    tag: "Personal Brand",
  },
  {
    title: "Portfolio Websites",
    slug: "portfolio-websites",
    href: "/solutions/portfolio-websites",
    description: "Visual, responsive showcase websites for designers, architects, and agencies.",
    tag: "Creative Showcase",
  },
  {
    title: "Professional Websites",
    slug: "professional-websites",
    href: "/solutions/professional-websites",
    description: "Credibility platforms for doctors, lawyers, accountants, and advisory practices.",
    tag: "Practices",
  },
  {
    title: "Business Websites",
    slug: "business-websites",
    href: "/solutions/business-websites",
    description: "Commercial websites designed to explain offerings and generate inbound enquiries.",
    tag: "Commercial",
  },
  {
    title: "Ecommerce Websites",
    slug: "ecommerce-websites",
    href: "/solutions/ecommerce-websites",
    description: "High-speed online storefronts with clear catalog layouts and checkout flows.",
    tag: "Storefronts",
  },
  {
    title: "SaaS Products",
    slug: "saas-development",
    href: "/solutions/saas-development",
    description: "Scalable software platforms, subscriber portals, and recurring tool apps.",
    tag: "Cloud Apps",
  },
  {
    title: "Landing Pages",
    slug: "landing-pages",
    href: "/solutions/landing-pages",
    description: "Single-focus campaign pages engineered for high advertising conversion lift.",
    tag: "High-Conversion",
  },
  {
    title: "Web Applications",
    slug: "web-applications",
    href: "/solutions/web-applications",
    description: "Custom dashboards, scheduling systems, and internal operational workflows.",
    tag: "Interactive Tools",
  },
  {
    title: "Mobile Applications",
    slug: "mobile-applications",
    href: "/solutions/mobile-applications",
    description: "Engaging iOS and Android apps connected seamlessly to your backend API.",
    tag: "Cross-Platform",
  },
];

/* ========================================================================= */
/* SECTION 5: INDUSTRIES (6 CARDS)                                           */
/* ========================================================================= */

export const HOMEPAGE_INDUSTRIES = [
  {
    title: "Healthcare",
    slug: "healthcare",
    href: "/industries/healthcare",
    description:
      "Clinics, diagnostic centers, and hospitals requiring doctor profiles, treatment information, and appointment booking journeys.",
    focus: "Patient journeys & local search",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    href: "/industries/real-estate",
    description:
      "Property developers, brokers, and architectural studios needing project showcases, floor plans, and site visit enquiries.",
    focus: "Property listings & lead capture",
  },
  {
    title: "Education",
    slug: "education",
    href: "/industries/education",
    description:
      "Colleges, coaching academies, and training providers needing course catalogs, syllabus breakdowns, and admission funnels.",
    focus: "Course pages & admission funnels",
  },
  {
    title: "Ecommerce & Retail",
    slug: "ecommerce-retail",
    href: "/industries/ecommerce-retail",
    description:
      "D2C brands and multi-product retailers requiring fast storefronts, catalog navigation, shopping ad feeds, and purchase CAPI.",
    focus: "Storefronts & purchase attribution",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    href: "/industries/manufacturing",
    description:
      "Industrial manufacturers and export suppliers needing corporate credibility, technical specs, and B2B inquiry forms.",
    focus: "B2B RFP engines & specifications",
  },
  {
    title: "Professional Services",
    slug: "professional-services",
    href: "/industries/professional-services",
    description:
      "Consultants, chartered accountants, and legal practices requiring practice-area explanations, credentials, and consultation booking.",
    focus: "Practice areas & consultation routing",
  },
];

/* ========================================================================= */
/* SECTION 6: OUR APPROACH (5 STEPS)                                         */
/* ========================================================================= */

export const HOMEPAGE_APPROACH: GrowthFrameworkStage[] = [
  {
    step: "01",
    phase: "UNDERSTAND",
    title: "Understand",
    tagline: "Discovery & Requirements",
    description:
      "We begin by understanding your business model, customer buying journey, existing digital assets, and primary growth objectives.",
    activities: [
      "Auditing current website and traffic channels",
      "Identifying conversion friction and drop-off points",
      "Clarifying target audience intent and market demand",
      "Drafting a straightforward written project scope",
    ],
    deliverable: "Strategic Discovery & Scoping Document",
  },
  {
    step: "02",
    phase: "BUILD",
    title: "Build",
    tagline: "High-Performance Engineering",
    description:
      "We design and develop fast, mobile-friendly websites, custom web applications, or tools using clean Next.js architecture.",
    activities: [
      "Responsive UI engineering for mobile and desktop",
      "Clear, persuasive copywriting without filler",
      "Semantic SEO architecture and accessible markup",
      "Form validation with instant notification routing",
    ],
    deliverable: "Production-Ready Digital Platform",
  },
  {
    step: "03",
    phase: "REACH",
    title: "Reach",
    tagline: "Targeted Customer Acquisition",
    description:
      "We connect your business with high-intent buyers through targeted Google Search Ads, Meta campaigns, and organic SEO foundations.",
    activities: [
      "Commercial-intent keyword research and negative lists",
      "Meta Ads creative direction, ad angles, and hook testing",
      "Targeting by geography, audience demographics, and buyer intent",
      "Dedicated campaign landing page alignment",
    ],
    deliverable: "Active Acquisition Funnels Across Search & Social",
  },
  {
    step: "04",
    phase: "CONVERT",
    title: "Convert",
    tagline: "Frictionless Enquiries & Sales",
    description:
      "We eliminate friction across user pathways, optimizing contact forms, WhatsApp gateways, and value messaging to produce real enquiries.",
    activities: [
      "Streamlining input fields on mobile forms",
      "Direct 1-on-1 WhatsApp chat integration",
      "Testing value propositions and prominent call-to-action buttons",
      "Ensuring sub-second mobile page responsiveness",
    ],
    deliverable: "High-Conversion Lead Generation Workflow",
  },
  {
    step: "05",
    phase: "MEASURE",
    title: "Measure",
    tagline: "Server-Side Telemetry & Continuous Refinement",
    description:
      "We install server-side Meta CAPI and GA4 to verify every enquiry, phone call, and purchase, providing reliable data for decision-making.",
    activities: [
      "Server-side Meta Conversions API (CAPI) installation",
      "Google Tag Manager container and GA4 key event setup",
      "Event deduplication to avoid double-counting",
      "Data-driven budget allocation toward profitable channels",
    ],
    deliverable: "Accurate Revenue Reporting & Continuous Optimization",
  },
];

/* ========================================================================= */
/* SECTION 7: WHY DIZITALGROW (5 DIFFERENTIATORS)                            */
/* ========================================================================= */

export const HOMEPAGE_WHY_DIZITALGROW = [
  {
    number: "01",
    title: "Business-First Recommendations",
    description:
      "We recommend solutions that match your commercial capacity and revenue goals, not whatever technology trend costs the most.",
  },
  {
    number: "02",
    title: "Technology and Marketing Together",
    description:
      "No finger-pointing between developers and ad managers. Your website engineering, ad campaigns, and conversion tracking work as one harmonized system.",
  },
  {
    number: "03",
    title: "Clear Project Scope",
    description:
      "Fixed written deliverables, itemized milestone timelines, and complete transparency between agency fees and your direct advertising spend.",
  },
  {
    number: "04",
    title: "Solutions Built Around Actual Needs",
    description:
      "Every layout, heading, and database schema is crafted for your specific customers, rather than adapted from generic agency templates.",
  },
  {
    number: "05",
    title: "Measurement That Supports Decisions",
    description:
      "We verify conversions with reliable server-side telemetry so you know exactly which marketing efforts produce enquiries and revenue.",
  },
];

/* ========================================================================= */
/* SECTION 8: SELECTED WORK (AUTHENTIC & CLEARLY LABELED CONCEPT PROJECTS)  */
/* ========================================================================= */

export const HOMEPAGE_SELECTED_WORK: ProjectShowcaseItem[] = [
  {
    id: "healthcare-diagnostic",
    caseStudySlug: "healthcare-portal",
    title: "Diagnostic Center Patient Portal & Local Growth",
    industry: "Healthcare & Diagnostics",
    category: "Web Application & Local Search",
    overview:
      "A fast, patient-friendly web application enabling local patients to easily explore test packages, understand preparation protocols, and book home sample collections.",
    challenge:
      "The diagnostic center relied heavily on walk-ins and faced low website engagement due to an outdated platform that was slow and difficult to navigate on mobile devices.",
    solution:
      "Engineered a responsive Next.js web application with structured test catalog schemas, instant WhatsApp appointment routing, and targeted Google Search Ads for local diagnostic queries.",
    approach:
      "Conducted patient discovery interviews, simplified test package navigation into clear categories, and integrated direct click-to-WhatsApp routing with Google Analytics event logging.",
    features: [
      "Structured medical test catalog with search filter",
      "One-click WhatsApp home collection booking",
      "Mobile-first responsive interface loading in < 0.9s",
      "Local Google Search Ad campaign targeting intent keywords",
    ],
    technologies: ["Next.js App Router", "Tailwind CSS", "Google Search Ads", "WhatsApp Lead Routing", "GA4"],
    servicesDelivered: ["Website Development", "Google Ads", "Conversion Tracking"],
    isConcept: true,
  },
  {
    id: "d2c-ecommerce-capi",
    caseStudySlug: "ecommerce-telemetry",
    title: "D2C Storefront & Server-Side Telemetry",
    industry: "Ecommerce & Retail",
    category: "Storefront & Server CAPI",
    overview:
      "E-commerce storefront upgrade focused on lightning-fast product page rendering and server-side conversion tracking to recover lost purchase attribution.",
    challenge:
      "Standard browser pixel tracking was losing up to 28% of purchase signals due to iOS Safari privacy controls and browser ad blockers, causing ad optimization algorithms to underperform.",
    solution:
      "Implemented server-side Meta Conversions API (CAPI) with automatic browser deduplication, combined with a streamlined, mobile-first checkout experience.",
    approach:
      "Audited client pixel fires, set up server container routing with matched Event IDs, and tested purchase dispatch via Meta Events Manager Test Events tool.",
    features: [
      "Dual-channel browser and server event dispatch",
      "Event ID matching with zero double-counting",
      "Event Match Quality score optimization",
      "Lightweight mobile product layout with fast cart updates",
    ],
    technologies: ["Next.js", "Meta Conversions API", "Event Deduplication", "Google Tag Manager", "Tailwind CSS"],
    servicesDelivered: ["Meta Conversions API", "Conversion Tracking", "Website Development"],
    isConcept: true,
  },
  {
    id: "b2b-manufacturing-platform",
    caseStudySlug: "industrial-platform",
    title: "Industrial Manufacturing Corporate Platform & Lead Engine",
    industry: "Manufacturing & Industrial",
    category: "Corporate Platform & B2B Inquiries",
    overview:
      "An authoritative corporate platform built to establish industrial credibility and capture qualified RFPs from corporate procurement managers.",
    challenge:
      "The company had extensive manufacturing capabilities but no modern digital presence reflecting their scale, leading corporate prospects to favor competitors with polished websites.",
    solution:
      "Built an engineered corporate platform with detailed capability specifications, downloadable technical data sheets, and a multi-step inquiry form with bot defense.",
    approach:
      "Structured product catalogs by industrial sector, created downloadable specification sheets, and configured multi-step inquiry forms with instant email notifications.",
    features: [
      "Detailed industrial machine specifications catalog",
      "Multi-step RFP submission form with honeypot bot defense",
      "Downloadable technical specification sheets",
      "Optimized Google Search Console indexing architecture",
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Semantic SEO", "EmailJS"],
    servicesDelivered: ["Website Development", "Web Applications", "SEO & Digital Visibility"],
    isConcept: true,
  },
];

/* ========================================================================= */
/* SECTION 9: TOOLS PREVIEW (FEATURED FREE TOOLS)                            */
/* ========================================================================= */

export const HOMEPAGE_FEATURED_TOOLS = [
  {
    title: "Invoice Generator",
    slug: "invoice-generator",
    href: "/tools/invoice-generator",
    category: "Business & Freelancers",
    description: "Generate clean, professional PDF-printable invoices with custom tax, discounts, and itemized calculations.",
    tag: "Print & PDF",
  },
  {
    title: "GST Calculator",
    slug: "gst-calculator",
    href: "/tools/gst-calculator",
    category: "Everyday Calculators",
    description: "Calculate GST inclusive and exclusive amounts with itemized CGST, SGST, and IGST breakdowns.",
    tag: "Tax Breakdown",
  },
  {
    title: "UTM Builder",
    slug: "utm-builder",
    href: "/tools/utm-builder",
    category: "Marketing & SEO",
    description: "Build clean, correctly encoded campaign tracking URLs while preserving existing query parameters and hash fragments.",
    tag: "Analytics",
  },
  {
    title: "SERP Preview",
    slug: "serp-preview",
    href: "/tools/serp-preview",
    category: "Marketing & SEO",
    description: "Preview how your webpage title and meta description will appear in Google desktop and mobile search snippets.",
    tag: "SEO Simulator",
  },
  {
    title: "LinkedIn Headline Generator",
    slug: "linkedin-headline-generator",
    href: "/tools/linkedin-headline-generator",
    category: "Career & Students",
    description: "Generate professional, high-impact LinkedIn headlines tailored for founders, engineers, consultants, and job seekers.",
    tag: "Career",
  },
  {
    title: "JSON Formatter",
    slug: "json-formatter",
    href: "/tools/json-formatter",
    category: "Developer Utilities",
    description: "Format, beautify, validate, and minify JSON data with clear syntax error detection and copy-to-clipboard.",
    tag: "Developer",
  },
];

/* ========================================================================= */
/* SECTION 11: HOMEPAGE FAQS                                                 */
/* ========================================================================= */

export const MASTER_FAQS: FAQItem[] = [
  {
    question: "What does DizitalGrow do?",
    answer:
      "DizitalGrow is a digital growth partner that unites website development, web applications, mobile apps, digital advertising (Meta and Google Ads), SEO, and conversion tracking (including Meta Conversions API). We help individuals, startups, and businesses establish their online presence, reach the right audience, and generate measurable growth.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer eight core digital capabilities: Website Development, Web Application Development, Mobile App Development, Meta Ads Management, Google Ads Management, SEO & Digital Visibility, Conversion Tracking, and Meta Conversions API (CAPI) implementation.",
  },
  {
    question: "Do I need a custom website or a template for my business?",
    answer:
      "While templates can work for basic temporary needs, custom Next.js websites provide significant long-term advantages: sub-second load times, mobile-optimized ergonomics, clean semantic code that search engines prefer, and conversion pathways tailored to your specific audience.",
  },
  {
    question: "Can you build ecommerce websites?",
    answer:
      "Yes. We develop fast e-commerce storefronts with streamlined product catalogs, mobile-optimized cart workflows, secure payment gateways, and server-side purchase tracking to ensure accurate attribution.",
  },
  {
    question: "Do you develop SaaS products and custom web applications?",
    answer:
      "Yes. We build scalable SaaS MVPs, customer portals, internal business dashboards, and workflow tools with secure authentication, API integrations, and scalable database architecture.",
  },
  {
    question: "How do your advertising services work?",
    answer:
      "We manage targeted advertising across Meta (Facebook and Instagram) and Google (Search, Display, Shopping). Our process includes commercial keyword research, creative direction, audience segmentation, conversion tracking, and ongoing bid optimization. Agency management fees are always kept completely separate from your direct ad spend.",
  },
  {
    question: "Can you help my business rank on Google with SEO?",
    answer:
      "Yes. We focus on search foundations: technical SEO, Core Web Vitals optimization, semantic HTML structure, schema markup, and high-intent content planning. Note that ethical SEO never promises guaranteed #1 rankings, but builds lasting organic visibility over time.",
  },
  {
    question: "What is conversion tracking and why is it important?",
    answer:
      "Conversion tracking measures the website actions that matter to your business: form submissions, phone calls, WhatsApp chats, and online purchases. Without accurate tracking, you cannot know which marketing channels or keywords generate your best customers.",
  },
  {
    question: "What is the typical project process at DizitalGrow?",
    answer:
      "Every project follows five clear stages: 01 Discovery (understanding goals and requirements), 02 Planning & Scope (itemized deliverables and fixed timeline), 03 Design & Implementation (clean coding and campaign setup), 04 Testing & Review (cross-device and telemetry validation), and 05 Launch & Support (zero-downtime deployment and ongoing care).",
  },
  {
    question: "How do I contact DizitalGrow to discuss a project?",
    answer:
      "You can submit your project goals through our consultation form on the Contact page, email us directly at contact@dizitalgrow.in, or send a message on our official WhatsApp at +91 91871 26193. We review all enquiries and respond with honest recommendations within one business day.",
  },
];

/* ========================================================================= */
/* DEDICATED SERVICE PAGES DATASETS (7 CORE SERVICES + META CAPI)            */
/* ========================================================================= */

export const SERVICE_DETAIL_PAGES: Record<string, ServiceDetailData> = {
  "web-development": {
    slug: "web-development",
    category: "BUILD",
    title: "Website Development",
    tagline: "High-Performance Business Websites Engineered to Convert",
    heroHeadline: "Website Development That Gives Your Business a Stronger Online Presence",
    heroDescription:
      "Your website should explain what you offer, build trust, work smoothly across devices and guide visitors toward an enquiry or purchase.",
    includes: [
      "Business websites",
      "Personal websites",
      "Professional websites",
      "Portfolio websites",
      "Ecommerce websites",
      "Landing pages",
      "Website redesigns",
    ],
    problemsSolved: [
      "Outdated websites that fail to reflect modern business credibility.",
      "Slow loading times that cause mobile visitors to bounce before reading content.",
      "Complicated navigation and confusing layouts that fail to produce phone calls or leads.",
      "Websites that lack foundational search engine architecture and structured metadata.",
    ],
    whoNeedsThis: [
      {
        audience: "Growing Businesses",
        description: "Companies needing a modern, authoritative digital presence to win enterprise and commercial clients.",
      },
      {
        audience: "Local Service Providers",
        description: "Clinics, consultants, and firms needing a steady flow of verified local customer enquiries.",
      },
      {
        audience: "Personal Brands & Experts",
        description: "Founders, executives, and specialists establishing an undisputed digital authority footprint.",
      },
    ],
    expectedOutcomes: [
      "Sub-second page load times across all mobile and desktop devices.",
      "Clear, persuasive value propositions that answer customer questions immediately.",
      "Built-in Google search SEO architecture with valid schema markup.",
      "Direct form alerts and WhatsApp click pathways to capture incoming leads immediately.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Information Architecture & Wireframing",
        description: "We map out user pathways, content hierarchy, and conversion goals before coding.",
      },
      {
        step: "02",
        title: "Next.js Engineering & Mobile Optimization",
        description: "We develop the site using clean React and Next.js App Router for maximum speed and accessibility.",
      },
      {
        step: "03",
        title: "SEO Foundations & Telemetry",
        description: "We configure semantic HTML, structured schemas, and GA4 event triggers.",
      },
      {
        step: "04",
        title: "Quality Testing & Global Launch",
        description: "We test cross-browser rendering, forms, and performance before zero-downtime deployment.",
      },
    ],
    technicalCapabilities: [
      "Next.js App Router & Server Components",
      "Tailwind CSS with Dark/Light Mode Tokens",
      "Semantic HTML5 & WCAG 2.2 AA Accessibility",
      "Structured Schema.org JSON-LD",
      "Mobile-First Responsive Layouts (320px – 1440px+)",
      "Automated Form Validation & Bot Protection",
    ],
    relatedSolutions: [
      {
        name: "Business Websites",
        href: "/solutions/business-websites",
        description: "Commercial websites designed to generate daily enquiries.",
      },
      {
        name: "Landing Pages",
        href: "/solutions/landing-pages",
        description: "Single-focus campaign pages engineered for high conversion lift.",
      },
      {
        name: "Ecommerce Websites",
        href: "/solutions/ecommerce-websites",
        description: "Fast digital storefronts with streamlined checkout flows.",
      },
    ],
    relatedIndustries: [
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        description: "Authority platforms for consultants, legal, and financial practices.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Clinics and diagnostic centers needing patient appointment journeys.",
      },
    ],
    relatedServices: [
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        description: "Custom portals and interactive web software.",
      },
      {
        name: "SEO and Digital Visibility",
        href: "/services/seo-visibility",
        description: "Drive organic search traffic to your new website.",
      },
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Verify every enquiry and phone call in real-time.",
      },
    ],
    faqs: [
      {
        question: "How long does a business website project take?",
        answer: "A standard business website typically takes 2 to 4 weeks from discovery to launch, depending on page volume and asset readiness.",
      },
      {
        question: "Will my website work well on mobile phones?",
        answer: "Yes. Every website we build is designed mobile-first and tested rigorously on iOS and Android devices across all screen sizes.",
      },
      {
        question: "Can I update content myself later?",
        answer: "Yes. We integrate user-friendly headless CMS solutions like Sanity, allowing you to easily update text, publish articles, and add images.",
      },
    ],
  },

  "web-applications": {
    slug: "web-applications",
    category: "BUILD",
    title: "Web Application Development",
    tagline: "Custom Web Applications Built Around the Way You Work",
    heroHeadline: "Custom Web Applications Built Around the Way You Work",
    heroDescription:
      "Build browser-based applications that help users interact with information, manage tasks and complete specific business operations.",
    includes: [
      "Customer portals",
      "Dashboards",
      "Internal business tools",
      "Booking platforms",
      "Membership platforms",
      "SaaS products",
      "Workflow applications",
    ],
    problemsSolved: [
      "Manual spreadsheets and chaotic email chains slowing down business operations.",
      "Off-the-shelf software that fails to fit your unique operational workflows.",
      "Lack of secure, self-service client portals for document sharing and updates.",
      "Early-stage startups needing a rapid, rock-solid MVP to validate their market.",
    ],
    whoNeedsThis: [
      {
        audience: "Tech Startups",
        description: "Founders needing an MVP web application built with clean, scalable code.",
      },
      {
        audience: "B2B Service Firms",
        description: "Agencies and consultancies wanting dedicated client login portals.",
      },
      {
        audience: "Operating Businesses",
        description: "Companies seeking to automate repetitive back-office and customer workflows.",
      },
    ],
    expectedOutcomes: [
      "Streamlined client onboarding with secure logins and role-based permissions.",
      "Automated notifications and status alerts reducing manual customer support hours.",
      "Real-time operational dashboards visualizing critical company metrics.",
      "Scalable infrastructure capable of growing seamlessly as user volume increases.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Workflow Mapping & Architecture",
        description: "We define database schemas, user roles, API endpoints, and security parameters.",
      },
      {
        step: "02",
        title: "Frontend & Backend Development",
        description: "We build intuitive React interfaces paired with fast serverless and database systems.",
      },
      {
        step: "03",
        title: "Security & Permission Auditing",
        description: "We implement robust authentication, data encryption, and authorization checks.",
      },
      {
        step: "04",
        title: "Staging, Feedback & Deployment",
        description: "We validate workflows with key users and deploy to resilient cloud infrastructure.",
      },
    ],
    technicalCapabilities: [
      "Full-Stack Next.js & React 19 Architecture",
      "Secure Authentication & Role-Based Access Control",
      "RESTful & GraphQL API Integrations",
      "PostgreSQL, MySQL & NoSQL Database Integrations",
      "Webhook Automation & Background Jobs",
      "Audit Logging & Data Security Standards",
    ],
    relatedSolutions: [
      {
        name: "SaaS Development",
        href: "/solutions/saas-development",
        description: "Scalable software platforms, subscriber portals, and recurring tool apps.",
      },
      {
        name: "Web Applications",
        href: "/solutions/web-applications",
        description: "Interactive client portals and internal workflow platforms.",
      },
    ],
    relatedIndustries: [
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Patient booking platforms and medical test tracking systems.",
      },
      {
        name: "Education",
        href: "/industries/education",
        description: "Student portals, course delivery, and assignment trackers.",
      },
    ],
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "High-converting marketing frontends for your web app.",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-apps",
        description: "Companion native-feel mobile apps for iOS and Android.",
      },
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Track user activation, signups, and trial subscriptions.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a website and a web app?",
        answer: "A website is primarily informational and designed to explain services and generate enquiries. A web application is interactive software where users log in, manage data, and perform specialized business tasks.",
      },
      {
        question: "Can you connect our web app to existing tools like CRM or ERP?",
        answer: "Yes. We integrate with REST APIs, webhooks, and third-party platforms including payment gateways, CRMs, and email providers.",
      },
    ],
  },

  "mobile-apps": {
    slug: "mobile-apps",
    category: "BUILD",
    title: "Mobile App Development",
    tagline: "Mobile Applications Designed Around Real User Needs",
    heroHeadline: "Mobile Applications Designed Around Real User Needs",
    heroDescription:
      "Build mobile experiences around your users, product requirements and business workflows.",
    includes: [
      "Customer apps",
      "Booking apps",
      "Ecommerce apps",
      "Business apps",
      "Membership apps",
      "Startup app MVPs",
    ],
    problemsSolved: [
      "Inability to engage mobile customers with timely push alerts and direct home-screen access.",
      "High costs of building and maintaining separate native iOS and Android codebases.",
      "Slow, unresponsive mobile web experiences that frustrate daily users.",
      "Complex app store submission processes causing launch delays.",
    ],
    whoNeedsThis: [
      {
        audience: "D2C Brands & Retailers",
        description: "Stores wanting high-repeat customer loyalty via direct mobile apps.",
      },
      {
        audience: "On-Demand & Service Businesses",
        description: "Companies needing customer booking, scheduling, and live tracking.",
      },
      {
        audience: "SaaS Platforms",
        description: "Software companies providing on-the-go mobile access for subscribers.",
      },
    ],
    expectedOutcomes: [
      "A single high-performance codebase running flawlessly on both iOS and Android.",
      "Direct communication channel via push notifications for offers and updates.",
      "Offline caching so users can access key information even with unstable internet.",
      "Complete app store review assistance and launch readiness.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Mobile UX & Screen Wireframing",
        description: "We design touch-friendly interfaces adhering to Apple Human Interface and Material Design standards.",
      },
      {
        step: "02",
        title: "Cross-Platform Development",
        description: "We build the mobile client with fast state management and robust API hooks.",
      },
      {
        step: "03",
        title: "Backend Sync & Push Setup",
        description: "We configure real-time notification servers and background data synchronization.",
      },
      {
        step: "04",
        title: "Store Submission & QA",
        description: "We guide the app through Apple App Store and Google Play compliance checks.",
      },
    ],
    technicalCapabilities: [
      "Cross-Platform iOS and Android Development",
      "Push Notification Gateways (APNs & FCM)",
      "Offline Data Caching & Local Storage",
      "Biometric Authentication (Face ID & Fingerprint)",
      "Secure Token Storage & API Telemetry",
      "App Store & Google Play Launch Compliance",
    ],
    relatedSolutions: [
      {
        name: "Mobile Applications",
        href: "/solutions/mobile-applications",
        description: "Cross-platform mobile apps for iOS and Android.",
      },
      {
        name: "SaaS Development",
        href: "/solutions/saas-development",
        description: "Scalable software platforms and mobile companion apps.",
      },
    ],
    relatedIndustries: [
      {
        name: "Ecommerce & Retail",
        href: "/industries/ecommerce-retail",
        description: "Mobile shopping apps with push alerts and quick checkout.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Patient companion apps for records and appointment reminders.",
      },
    ],
    relatedServices: [
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        description: "Unified backend architecture powering both web and mobile.",
      },
      {
        name: "Meta Ads",
        href: "/services/meta-ads",
        description: "Acquire mobile app installs and active users through targeted ads.",
      },
    ],
    faqs: [
      {
        question: "Do you build for both Apple iOS and Android?",
        answer: "Yes. We engineer cross-platform mobile apps that deliver native speed and feel on both Apple iPhones and Android phones from a unified codebase.",
      },
    ],
  },

  "meta-ads": {
    slug: "meta-ads",
    category: "REACH",
    title: "Meta Ads",
    tagline: "Reach the Right Audience With Facebook and Instagram Ads",
    heroHeadline: "Reach the Right Audience With Facebook and Instagram Ads",
    heroDescription:
      "Plan and manage campaigns designed around business objectives, relevant audiences, useful creatives and measurable website actions.",
    includes: [
      "Campaign planning",
      "Audience research",
      "Campaign setup",
      "Creative direction",
      "Lead generation",
      "Retargeting",
      "Pixel setup",
      "Conversions API coordination",
      "Optimization",
    ],
    problemsSolved: [
      "Boosting posts without a strategy, resulting in likes but zero customer enquiries.",
      "Ad fatigue causing rising cost-per-lead and declining return on ad spend.",
      "Poor tracking where Meta reports conversions that never actually appear in your CRM.",
      "Generic ad copy and creative that fails to stand out in crowded social feeds.",
    ],
    whoNeedsThis: [
      {
        audience: "E-Commerce Stores",
        description: "Brands needing profitable customer acquisition and dynamic catalog retargeting.",
      },
      {
        audience: "Local & Professional Services",
        description: "Businesses wanting consistent daily consultation and lead inquiries.",
      },
      {
        audience: "High-Growth Startups",
        description: "Ventures testing product-market demand with targeted customer cohorts.",
      },
    ],
    expectedOutcomes: [
      "Consistent pipeline of qualified leads routed directly to WhatsApp or your CRM.",
      "Clear visual hook and copy testing framework to discover winning ad angles.",
      "Server-side Meta CAPI integration ensuring no ad conversions are lost to ad blockers.",
      "Weekly bid management that protects your budget and scales winning ad sets.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Audience Research & Customer Profiling",
        description: "We identify your ideal customer segments, pain points, and buying triggers.",
      },
      {
        step: "02",
        title: "Creative Direction & Hook Scripting",
        description: "We craft high-contrast visuals and compelling copy designed for social feeds.",
      },
      {
        step: "03",
        title: "Campaign Setup & Server-Side Telemetry",
        description: "We structure campaigns with Meta CAPI and dedicated conversion landing pages.",
      },
      {
        step: "04",
        title: "Active Optimization & Scaling",
        description: "We review query reports, cull underperforming ads, and scale profitable creatives.",
      },
    ],
    technicalCapabilities: [
      "Meta Ads Manager Campaign Architecture",
      "Custom Audience & Lookalike Modeling",
      "Dynamic Product Ads & Catalog Feeds",
      "Server-Side Meta Conversions API (CAPI) Telemetry",
      "Ad Creative Angle Testing Framework",
      "Instant Lead Form & WhatsApp Direct Funnels",
    ],
    relatedSolutions: [
      {
        name: "Landing Pages",
        href: "/solutions/landing-pages",
        description: "Dedicated ad landing pages built for high click-to-lead conversions.",
      },
      {
        name: "Ecommerce Websites",
        href: "/solutions/ecommerce-websites",
        description: "Dynamic product catalog ad funnels.",
      },
    ],
    relatedIndustries: [
      {
        name: "Real Estate",
        href: "/industries/real-estate",
        description: "Targeted property buyer campaigns and site visit lead forms.",
      },
      {
        name: "Ecommerce & Retail",
        href: "/industries/ecommerce-retail",
        description: "D2C shopping campaigns driving store orders and retargeting.",
      },
    ],
    relatedServices: [
      {
        name: "Google Ads",
        href: "/services/google-ads",
        description: "Capture high-intent searchers to complement social campaigns.",
      },
      {
        name: "Meta Conversions API",
        href: "/meta-capi",
        description: "Protect your ad attribution from browser blockers.",
      },
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Track verified calls, forms, and purchases.",
      },
    ],
    faqs: [
      {
        question: "How much ad budget do I need to start?",
        answer: "We recommend starting with an ad spend you are comfortable testing over 30 days. We keep management fees completely separate from your ad spend.",
      },
      {
        question: "Do you guarantee a specific number of sales or leads?",
        answer: "No ethical agency can guarantee sales because variables like product pricing and market demand affect outcomes. We guarantee disciplined execution, high-intent targeting, and continuous optimization.",
      },
    ],
  },

  "google-ads": {
    slug: "google-ads",
    category: "REACH",
    title: "Google Ads",
    tagline: "Reach Customers When They Search for What You Offer",
    heroHeadline: "Reach Customers When They Search for What You Offer",
    heroDescription:
      "Connect your business with people actively searching for relevant products and services.",
    includes: [
      "Search campaign setup",
      "Keyword research",
      "Campaign structure",
      "Ad copy",
      "Location targeting",
      "Negative keywords",
      "Conversion tracking",
      "Campaign optimization",
    ],
    problemsSolved: [
      "Wasting ad spend on irrelevant broad-match keywords that never convert.",
      "Sending expensive paid search traffic to a confusing homepage instead of a dedicated landing page.",
      "Lack of negative keyword lists causing clicks from people seeking free advice or unrelated services.",
      "Inability to track phone calls and form submissions back to specific keywords.",
    ],
    whoNeedsThis: [
      {
        audience: "Local Service Providers",
        description: "Lawyers, clinics, repair specialists, and contractors needing immediate phone calls.",
      },
      {
        audience: "B2B & Industrial Firms",
        description: "Companies targeting procurement managers searching for specific machinery or services.",
      },
      {
        audience: "E-Commerce Stores",
        description: "Retailers looking to drive high-margin product sales via Google Shopping.",
      },
    ],
    expectedOutcomes: [
      "Immediate visibility at the top of Google search results for critical commercial keywords.",
      "Drastic reduction in wasted spend through aggressive negative keyword pruning.",
      "Higher Quality Scores leading to lower cost-per-click (CPC) over time.",
      "Accurate lead tracking connecting phone calls and form submissions to winning ads.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Commercial Intent Keyword Discovery",
        description: "We filter thousands of search queries to target only phrases with immediate buying intent.",
      },
      {
        step: "02",
        title: "Persuasive Ad Copy & Extensions",
        description: "We craft targeted search headlines, callouts, and structured snippets that lift CTR.",
      },
      {
        step: "03",
        title: "Focused Landing Page Alignment",
        description: "We ensure ad messaging matches the landing page headline for frictionless conversions.",
      },
      {
        step: "04",
        title: "Query Auditing & Bid Refinement",
        description: "We review search terms weekly, add negative keywords, and adjust device and location bids.",
      },
    ],
    technicalCapabilities: [
      "Google Search, Display & Performance Max Campaigns",
      "Commercial Intent Keyword Architecture",
      "Dynamic Search Ads & Negative Keyword Vaults",
      "Google Ads Enhanced Conversions Integration",
      "Call Tracking & Form Submission Telemetry",
      "Quality Score Optimization & Landing Page Speed Checks",
    ],
    relatedSolutions: [
      {
        name: "Landing Pages",
        href: "/solutions/landing-pages",
        description: "Frictionless campaign landing pages matching search ad intent.",
      },
      {
        name: "Business Websites",
        href: "/solutions/business-websites",
        description: "Commercial websites structured to capture search ad traffic.",
      },
    ],
    relatedIndustries: [
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Capture high-intent searches for medical treatments and clinics.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        description: "Connect with clients searching for specialist legal and financial advice.",
      },
    ],
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "Fast landing pages that turn Google clicks into customers.",
      },
      {
        name: "SEO & Digital Visibility",
        href: "/services/seo-visibility",
        description: "Build long-term organic rankings alongside paid ads.",
      },
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Accurate telemetry for key events and purchase revenue.",
      },
    ],
    faqs: [
      {
        question: "How fast can we see results from Google Ads?",
        answer: "Google Ads campaigns start driving targeted traffic as soon as they are approved and live. We typically see initial enquiries within the first week.",
      },
    ],
  },

  "seo-visibility": {
    slug: "seo-visibility",
    category: "REACH",
    title: "SEO & Digital Visibility",
    tagline: "Help the Right Customers Discover Your Business on Search",
    heroHeadline: "Help the Right Customers Discover Your Business on Search",
    heroDescription:
      "Improve your website's search foundations through technical SEO, content optimization, site architecture and useful search-focused content.",
    includes: [
      "Technical SEO",
      "On-page SEO",
      "Keyword research",
      "Content planning",
      "Internal linking",
      "Metadata",
      "Indexing",
      "Local SEO foundations",
      "Structured data where appropriate",
    ],
    problemsSolved: [
      "Being completely invisible on Google for searches related to your core services.",
      "Total reliance on paid advertising, causing customer acquisition to stop when ad spend halts.",
      "Old, unstructured website pages that search engine crawlers cannot understand or index.",
      "Missing out on AI search experiences like Google AI Overviews.",
    ],
    whoNeedsThis: [
      {
        audience: "Local & Regional Businesses",
        description: "Businesses that serve a city or region and want to establish local search visibility.",
      },
      {
        audience: "Content-Driven Personal Brands",
        description: "Consultants and authors wanting organic search to drive steady newsletter and consulting signups.",
      },
      {
        audience: "B2B & Niche Providers",
        description: "Companies selling specialized solutions with high-value search queries.",
      },
    ],
    expectedOutcomes: [
      "Long-term organic search traffic that delivers inquiries month after month without ad spend.",
      "Clear technical hierarchy: fast Core Web Vitals, clean XML sitemaps, and valid schema.",
      "Accurate Google Business Profile positioning for eligible local markets.",
      "Content structured to answer customer questions directly, positioning your brand for AI search.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Technical Site & Indexing Audit",
        description: "We resolve crawl errors, inspect canonical tags, and optimize Core Web Vitals.",
      },
      {
        step: "02",
        title: "Search Intent & Topic Architecture",
        description: "We identify what your buyers search for and organize your service pages around their questions.",
      },
      {
        step: "03",
        title: "On-Page Semantic Optimization",
        description: "We craft descriptive titles, structured schema markup, and internal linking networks.",
      },
      {
        step: "04",
        title: "Google Search Console Monitoring",
        description: "We monitor impressions, click growth, and query rankings, adjusting content based on actual data.",
      },
    ],
    technicalCapabilities: [
      "Core Web Vitals Optimization (LCP, INP, CLS)",
      "Structured Schema.org (Organization, Service, FAQ, Article)",
      "Robots.txt & XML Sitemap Configuration",
      "Canonical URL Architecture & Redirect Hygiene",
      "Google Search Console Indexing Monitoring",
      "AI Search Readiness & Direct Answer Formatting",
    ],
    relatedSolutions: [
      {
        name: "Business Websites",
        href: "/solutions/business-websites",
        description: "Build an SEO-friendly website engineered from the ground up.",
      },
      {
        name: "Personal Websites",
        href: "/solutions/personal-websites",
        description: "Authority platforms structured for personal search visibility.",
      },
    ],
    relatedIndustries: [
      {
        name: "Real Estate",
        href: "/industries/real-estate",
        description: "Local search and property keyword visibility.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Local clinic SEO and symptom/treatment discovery.",
      },
    ],
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "Build an SEO-friendly website engineered from the ground up.",
      },
      {
        name: "Google Ads",
        href: "/services/google-ads",
        description: "Capture search demand immediately while SEO rankings build.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO is a compound growth strategy. Initial improvements in crawl indexing and impressions typically appear within 4 to 8 weeks, with meaningful ranking growth developing over 3 to 6 months.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No. Google explicitly states that no one can guarantee a #1 ranking. We adhere strictly to search engine guidelines and focus on driving qualified organic traffic that converts.",
      },
    ],
  },

  "conversion-tracking": {
    slug: "conversion-tracking",
    category: "CONVERT & MEASURE",
    title: "Conversion Tracking",
    tagline: "Understand Which Marketing Activities Lead to Customer Actions",
    heroHeadline: "Understand Which Marketing Activities Lead to Customer Actions",
    heroDescription:
      "Measure important website interactions, including enquiries, calls, signups and purchases, using suitable analytics and advertising measurement tools.",
    includes: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Ads conversions",
      "Meta Pixel",
      "Event tracking",
      "Form submissions",
      "WhatsApp click tracking",
      "Purchase events",
      "Tracking validation",
    ],
    problemsSolved: [
      "Ad platforms claiming leads that never showed up in your actual sales records.",
      "Broken tags and missing triggers causing conversions to go completely unrecorded.",
      "Double-counting leads or sales, leading to inflated and misleading ROI reports.",
      "Unable to identify which specific ad channel, keyword, or campaign generated your best customers.",
    ],
    whoNeedsThis: [
      {
        audience: "Any Business Running Paid Ads",
        description: "Anyone spending money on Google or Meta Ads who needs to know their exact return on investment.",
      },
      {
        audience: "E-Commerce Stores",
        description: "Retailers who must track purchases and average order values accurately across multiple channels.",
      },
      {
        audience: "Lead Generation Businesses",
        description: "Companies receiving enquiries via forms, phone calls, calendar bookings, and WhatsApp.",
      },
    ],
    expectedOutcomes: [
      "100% verified conversion telemetry connecting ad spend to actual revenue.",
      "Clean event naming across all platforms with zero duplicate signals.",
      "Direct integration of WhatsApp clicks and phone inquiries into your analytics.",
      "Reliable data feeding back into Google and Meta machine learning to lower acquisition costs.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Conversion Event Audit",
        description: "We map every customer contact point: form submissions, phone clicks, chats, and purchases.",
      },
      {
        step: "02",
        title: "Tag Manager & Event Implementation",
        description: "We configure clean triggers and data layers without slowing down page load speeds.",
      },
      {
        step: "03",
        title: "Testing & Deduplication Verification",
        description: "We trigger live test submissions across browsers to verify tag firing and signal accuracy.",
      },
      {
        step: "04",
        title: "Ad Network Conversion Linking",
        description: "We connect verified events directly into Google Ads and Meta Ads for smart bidding optimization.",
      },
    ],
    technicalCapabilities: [
      "Google Tag Manager (GTM) Container Architecture",
      "Google Analytics 4 Key Event Configuration",
      "Phone Call & WhatsApp Click Telemetry",
      "Multi-Step Form Submission Event Handlers",
      "Google Ads Enhanced Conversions",
      "Server-Side Webhook Event Routing",
    ],
    relatedSolutions: [
      {
        name: "Ecommerce Websites",
        href: "/solutions/ecommerce-websites",
        description: "End-to-end checkout and revenue tracking.",
      },
      {
        name: "Landing Pages",
        href: "/solutions/landing-pages",
        description: "Telemetry on ad campaign landing pages.",
      },
    ],
    relatedIndustries: [
      {
        name: "Ecommerce & Retail",
        href: "/industries/ecommerce-retail",
        description: "Purchase event tracking, average order value, and cart drops.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Track patient appointments and call inquiries.",
      },
    ],
    relatedServices: [
      {
        name: "Meta Conversions API",
        href: "/meta-capi",
        description: "Server-side tracking immune to browser ad blockers.",
      },
      {
        name: "Google Ads",
        href: "/services/google-ads",
        description: "Feed conversion signals back into Google smart bidding.",
      },
    ],
    faqs: [
      {
        question: "Can you fix broken tracking on an existing website?",
        answer: "Yes. We frequently audit and repair broken GTM containers, missing GA4 triggers, and misfiring pixels on existing sites.",
      },
    ],
  },
};

/* ========================================================================= */
/* ALIASES & COMPATIBILITY DATASETS                                          */
/* ========================================================================= */

export const GROWTH_FRAMEWORK_STAGES = HOMEPAGE_APPROACH;
export const PROJECT_SHOWCASE = HOMEPAGE_SELECTED_WORK;

export const DIGITAL_OPPORTUNITY = {
  eyebrow: BUSINESS_PROBLEMS.eyebrow,
  heading: BUSINESS_PROBLEMS.heading,
  leadParagraph: BUSINESS_PROBLEMS.leadParagraph,
  bottlenecks: BUSINESS_PROBLEMS.challenges.map((c) => ({
    id: c.number,
    number: c.number,
    title: c.title,
    description: c.description,
  })),
};

export const CONTACT_METHODS = [
  {
    label: "Email Support",
    value: "contact@dizitalgrow.in",
    href: "mailto:contact@dizitalgrow.in",
    iconName: "Mail",
    description: "Write directly for project inquiries and formal RFPs.",
    badge: "Primary Response",
  },
  {
    label: "WhatsApp Chat",
    value: "+91 91871 26193 (Chat only)",
    href: "https://wa.me/919187126193",
    iconName: "WhatsApp",
    description: "Fast 1-on-1 discovery messages and scope scoping.",
    badge: "Fastest Response",
  },
  {
    label: "WhatsApp Channel",
    value: "DizitalGrow Updates",
    href: "https://whatsapp.com/channel/0029Vb4w2hL0bIdtE14Y8w0s",
    iconName: "WhatsAppChannel",
    description: "Follow for growth insights, tool updates, and case studies.",
    badge: "Broadcast",
  },
  {
    label: "Instagram",
    value: "@dizitalgrow",
    href: "https://instagram.com/dizitalgrow",
    iconName: "Instagram",
    description: "Visual breakdowns, agency news, and tech insights.",
    badge: "Social",
  },
];

export const WHO_WE_HELP_AUDIENCES = [
  {
    id: "individuals",
    number: "01",
    title: "Individuals & Professionals",
    subtitle: "Personal Authority, Portfolios & Consultants",
    audience: "Individuals & Freelancers",
    summary: "Establish personal authority, showcase portfolios, and capture direct inquiries.",
    tag: "Personal Brand",
    problems: [
      "No centralized professional hub to showcase projects and credibility",
      "Relying solely on social platforms with volatile algorithms",
      "Missing automated contact and booking workflows",
    ],
    solution:
      "We design authoritative personal portfolio platforms engineered to showcase your expertise, build credibility, and generate direct inquiries.",
    deliverables: [
      "Custom Personal Portfolio Website",
      "SEO-optimized personal authority profile",
      "Direct WhatsApp and Email inquiry funnel",
    ],
    ctaHref: "/solutions/personal-websites",
    ctaText: "Explore Personal Websites",
  },
  {
    id: "startups",
    number: "02",
    title: "Early-Stage Startups",
    subtitle: "MVPs, Landing Funnels & Conversion Telemetry",
    audience: "Early-Stage Startups",
    summary: "Validate ideas quickly with high-conversion landing pages and scalable web apps.",
    tag: "MVP & Scale",
    problems: [
      "Need rapid MVP deployment without sacrificing code quality",
      "Low initial brand trust and conversion bottlenecks",
      "Lacking server-side attribution for early ad campaigns",
    ],
    solution:
      "We build robust Next.js web applications, validated conversion funnels, and dual-channel telemetry to launch your product fast.",
    deliverables: [
      "Next.js App Router Web Platform",
      "Conversion tracking & Meta CAPI telemetry",
      "Automated lead capture & CRM notification triggers",
    ],
    ctaHref: "/solutions/saas-development",
    ctaText: "Explore Startup Solutions",
  },
  {
    id: "local-businesses",
    number: "03",
    title: "Local & Retail Businesses",
    subtitle: "Google Search Dominance & Local Customers",
    audience: "Local & Retail Businesses",
    summary: "Capture high-intent local searchers and convert foot traffic into online sales.",
    tag: "Local Dominance",
    problems: [
      "Invisible on Google Maps and high-intent local search queries",
      "Competitors winning walk-ins through targeted local Google Ads",
      "Outdated mobile experience leading to instant bounce rates",
    ],
    solution:
      "We engineer fast mobile experiences paired with targeted local Google Search campaigns and click-to-call lead funnels.",
    deliverables: [
      "High-speed mobile website with local schema markup",
      "Targeted Google Search & Maps ad campaigns",
      "One-click phone and WhatsApp lead routing",
    ],
    ctaHref: "/services/google-ads",
    ctaText: "Explore Local Growth",
  },
  {
    id: "b2b-enterprises",
    number: "04",
    title: "B2B & Manufacturing",
    subtitle: "Corporate Platforms & Qualified Procurement RFPs",
    audience: "B2B & Manufacturing",
    summary: "Build corporate credibility, generate high-ticket RFPs, and streamline client portals.",
    tag: "B2B Inquiries",
    problems: [
      "Complex product catalogs presented poorly in outdated PDFs",
      "Low-quality website traffic failing to generate qualified procurement RFPs",
      "Disjointed customer inquiry channels causing lost deals",
    ],
    solution:
      "We build authoritative corporate platforms that position your technical capabilities, host structured catalogs, and generate corporate RFPs.",
    deliverables: [
      "Authoritative corporate platform with downloadable data sheets",
      "Multi-step RFP submission funnels with bot protection",
      "High-intent Search Ads targeting corporate procurement terms",
    ],
    ctaHref: "/industries/manufacturing",
    ctaText: "Explore B2B Solutions",
  },
  {
    id: "ecommerce-brands",
    number: "05",
    title: "E-Commerce & D2C Brands",
    subtitle: "Sub-Second Storefronts & Attribution Recovery",
    audience: "E-Commerce & D2C Brands",
    summary: "Engineer sub-second storefronts and recover lost attribution with Meta CAPI.",
    tag: "E-Commerce",
    problems: [
      "Browser ad blockers and iOS privacy wiping out Meta purchase signals",
      "Slow catalog load times causing checkout abandonment",
      "Poor ROAS from unoptimized ad campaigns",
    ],
    solution:
      "We build high-speed storefronts and implement server-side Meta Conversions API (CAPI) with deduplication to restore ad performance.",
    deliverables: [
      "Fast storefront with optimized checkout ergonomics",
      "Server-side Meta Conversions API with deduplication",
      "Targeted Meta Catalog & Retargeting ad campaigns",
    ],
    ctaHref: "/meta-capi",
    ctaText: "Explore Meta CAPI",
  },
];

export const WHY_DIZITALGROW = {
  eyebrow: "OUR PHILOSOPHY",
  heading: "A Clear, Practical Approach to Digital Growth",
  subheading:
    "We do not believe in hype or generic templates. We build modern, durable digital platforms backed by real telemetry.",
  differentiators: HOMEPAGE_WHY_DIZITALGROW,
};

export const OUTCOME_SECTIONS: OutcomeItem[] = [
  {
    number: "01",
    title: "Fast, Credible Digital Presence",
    summary: "Turn first impressions into confidence with high-speed Next.js platforms.",
    details: "Sub-second load times, structured semantic schemas, and mobile ergonomics that make visitors take your business seriously.",
    impactMetrics: "< 1.0s LCP · 100% Mobile Ready",
  },
  {
    number: "02",
    title: "High-Intent Customer Acquisition",
    summary: "Reach buyers who are actively searching for what you offer.",
    details: "Google Search Ads and Meta campaigns targeted around commercial intent rather than vanity impressions.",
    impactMetrics: "High-Intent Queries · Focused Ad Spend",
  },
  {
    number: "03",
    title: "Server-Side Conversion Telemetry",
    summary: "Bypass browser ad blockers and recover lost attribution signals.",
    details: "Server-side Meta Conversions API (CAPI) and GA4 integration delivering clean event data for machine learning optimization.",
    impactMetrics: "Dual-Channel Routing · Deduplicated",
  },
  {
    number: "04",
    title: "Frictionless Inquiry Pathways",
    summary: "Convert interested visitors into qualified inquiries with zero friction.",
    details: "Fast forms, direct WhatsApp gateways, and clear call-to-action hierarchies tailored to your buyer persona.",
    impactMetrics: "Zero-Friction Forms · Instant WhatsApp",
  },
  {
    number: "05",
    title: "Sustainable Long-Term Growth",
    summary: "Build on clean, modern code that your business owns completely.",
    details: "No proprietary vendor lock-in, no generic site builders. Modern open-source tech stacks built for longevity.",
    impactMetrics: "Modern Next.js · Full Code Ownership",
  },
];

export const CAPABILITIES_PILLARS = [
  {
    id: "build",
    pillarNumber: 1,
    pillar: "BUILD",
    tagline: "High-Performance Digital Platforms",
    description:
      "Modern, sub-second web applications, mobile apps, and business websites engineered on Next.js and React.",
    capabilities: [
      {
        name: "Website Development",
        href: "/services/web-development",
        summary:
          "Modern, fast business websites built on Next.js engineered to explain your value, build trust, and turn visitors into enquiries.",
        solves: "Slow, outdated websites that fail to convert traffic into qualified inquiries.",
      },
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        summary:
          "Custom browser-based applications, client portals, and SaaS tools built around your exact operational workflows.",
        solves: "Manual spreadsheets and fragmented software tools that bottleneck team productivity.",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-apps",
        summary:
          "Cross-platform iOS and Android mobile experiences designed around real user needs, with push alerts and offline capabilities.",
        solves: "Inability to reach mobile-first customers through high-retention app experiences.",
      },
    ],
  },
  {
    id: "reach",
    pillarNumber: 2,
    pillar: "REACH",
    tagline: "High-Intent Customer Acquisition",
    description:
      "Targeted Google Search campaigns, Meta advertising, and organic search optimization connecting with real buyers.",
    capabilities: [
      {
        name: "Meta Ads",
        href: "/services/meta-ads",
        summary:
          "Facebook and Instagram advertising campaigns built around business goals, targeted audiences, and measurable website actions.",
        solves: "Wasted ad spend on low-intent vanity impressions that fail to generate pipeline.",
      },
      {
        name: "Google Ads",
        href: "/services/google-ads",
        summary:
          "High-intent Search, Display, and Shopping campaigns connecting your business with customers actively searching for what you offer.",
        solves: "Missing commercial search intent when prospective buyers look for your exact services.",
      },
      {
        name: "SEO & Digital Visibility",
        href: "/services/seo-visibility",
        summary:
          "Technical search engine optimization, semantic site architecture, and on-page content planning to earn lasting discoverability.",
        solves: "Total dependency on paid ads with zero organic inbound discovery.",
      },
    ],
  },
  {
    id: "convert-measure",
    pillarNumber: 3,
    pillar: "CONVERT & MEASURE",
    tagline: "Attribution & Server Telemetry",
    description:
      "Full-funnel telemetry setups, Google Tag Manager, GA4, and server-side Meta Conversions API.",
    capabilities: [
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        summary:
          "Comprehensive telemetry setups with GA4 and Google Tag Manager to measure form submissions, calls, chats, and purchases.",
        solves: "Blind marketing decisions due to missing or inaccurate event measurement.",
      },
      {
        name: "Meta Conversions API",
        href: "/meta-capi",
        summary:
          "Server-side event integration with deduplication to complement browser pixels and support reliable Meta ad measurement.",
        solves: "Lost purchase data and degraded ad performance caused by iOS privacy and ad blockers.",
      },
    ],
  },
];

