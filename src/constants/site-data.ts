export interface AudienceCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problems: string[];
  solution: string;
  deliverables: string[];
  ctaText: string;
  ctaHref: string;
}

export interface OutcomeItem {
  number: string;
  title: string;
  summary: string;
  details: string;
  impactMetrics: string;
}

export interface GrowthFrameworkStage {
  step: string;
  phase: "LEARN" | "BUILD" | "REACH" | "CONVERT" | "GROW";
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
  clientIndustry: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
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
  headline: "The Digital World Has Opportunities. Let's Help You Grow With Them.",
  supportingText:
    "From building your digital presence to reaching the right audience and turning visitors into customers, we help you make the most of the digital world.",
  primaryCTA: { label: "Explore How We Help", href: "#capabilities" },
  secondaryCTA: { label: "Start Your Growth Journey", href: "/contact" },
  trustHighlights: [
    "Websites & Web Apps",
    "Meta & Google Ads",
    "Verified Telemetry & CAPI",
  ],
};

/* ========================================================================= */
/* SECTION 2: THE DIGITAL OPPORTUNITY                                        */
/* ========================================================================= */

export const DIGITAL_OPPORTUNITY = {
  eyebrow: "WHY DIGITAL PRESENCE MATTERS",
  heading: "Your Business Has More Room to Grow.",
  leadParagraph:
    "Most ambitious businesses and professionals hit a growth ceiling when they rely exclusively on offline referrals, outdated websites, or disjointed marketing campaigns.",
  bottlenecks: [
    {
      id: "discoverability",
      number: "01",
      title: "Hard to Find Online",
      description:
        "Potential buyers search on Google and social media daily, but your competitors appear because your digital footprint is fragmented or nonexistent.",
    },
    {
      id: "offline-dependency",
      number: "02",
      title: "100% Offline Dependency",
      description:
        "Relying solely on word-of-mouth or physical foot traffic limits your reach to a tiny geographic radius and leaves revenue vulnerable to footfall fluctuations.",
    },
    {
      id: "silent-websites",
      number: "03",
      title: "Websites That Don't Convert",
      description:
        "You have a website, but it loads slowly, confuses visitors, or lacks clear pathways to contact you—turning valuable traffic into bounced visitors.",
    },
    {
      id: "wasted-ad-spend",
      number: "04",
      title: "Traffic Without Enquiries",
      description:
        "Ad campaigns generate clicks and vanity impressions, but the traffic bounces without taking action because ads do not match visitor intent.",
    },
    {
      id: "unmeasured-marketing",
      number: "05",
      title: "Unmeasured Marketing Spend",
      description:
        "Business owners spend on marketing without knowing which channel, campaign, or keyword generated their best customers due to broken analytics.",
    },
    {
      id: "untapped-expertise",
      number: "06",
      title: "Expertise Without Digital Identity",
      description:
        "Individuals, creators, and consultants possess immense domain authority offline, but lack a polished personal platform to command authority and opportunities online.",
    },
  ],
};

/* ========================================================================= */
/* SECTION 3: WHO WE HELP (5 TARGET AUDIENCES)                              */
/* ========================================================================= */

export const WHO_WE_HELP_AUDIENCES: AudienceCategory[] = [
  {
    id: "individuals-creators",
    number: "01",
    title: "Individuals & Creators",
    subtitle: "Personal Brands, Consultants & Specialists",
    problems: [
      "Struggling to showcase expertise and portfolio in a professional light.",
      "Dependent on third-party algorithms for audience connection.",
      "Missing inbound consulting leads, speaking gigs, and media inquiries.",
    ],
    solution:
      "We design custom personal brand platforms and portfolio websites that establish authority, showcase your best work, and capture high-value inbound opportunities.",
    deliverables: [
      "High-speed personal authority website",
      "Content publishing & newsletter architecture",
      "Direct consultation booking workflows",
    ],
    ctaText: "Build Your Personal Presence",
    ctaHref: "/contact?goal=build-website",
  },
  {
    id: "entrepreneurs",
    number: "02",
    title: "Entrepreneurs",
    subtitle: "New Ventures & Market Entrants",
    problems: [
      "Having a viable business concept without digital infrastructure.",
      "Uncertainty on whether to build a website, app, or marketing funnel first.",
      "Limited runway requiring lean, high-efficiency execution.",
    ],
    solution:
      "We provide end-to-end launchpad roadmaps—transforming raw concepts into market-ready digital presences with verified lead capture from day one.",
    deliverables: [
      "Rapid market launch websites & landing pages",
      "Initial customer discovery funnels",
      "Lean lead qualification systems",
    ],
    ctaText: "Launch Your Business",
    ctaHref: "/contact?goal=digital-growth-strategy",
  },
  {
    id: "startups",
    number: "03",
    title: "Startups",
    subtitle: "Early-Stage & Funded Companies",
    problems: [
      "Need custom web apps, MVPs, and client portals built rapidly.",
      "Complex technical requirements requiring reliable Next.js and API architecture.",
      "Need clear attribution on early user acquisition channels.",
    ],
    solution:
      "We engineer scalable Next.js web applications, user portals, and cross-platform mobile apps paired with robust telemetry to accelerate product-market fit.",
    deliverables: [
      "Full-stack custom web applications & MVPs",
      "User authentication, databases & APIs",
      "Precision user funnel tracking (GA4 + CAPI)",
    ],
    ctaText: "Develop Your Startup Solution",
    ctaHref: "/contact?goal=develop-app",
  },
  {
    id: "small-local-businesses",
    number: "04",
    title: "Small & Local Businesses",
    subtitle: "Service Providers, Clinics & Stores",
    problems: [
      "Missing out on local customers searching for their exact services nearby.",
      "Older, clunky websites that do not load properly on mobile devices.",
      "Unsure how Google Search and Meta Ads can generate daily customer phone calls.",
    ],
    solution:
      "We build modern mobile-first websites and local search campaigns that put your business directly in front of buyers in your city actively looking to purchase.",
    deliverables: [
      "Mobile-optimized high-converting business website",
      "High-intent Google Search advertising",
      "Verified phone call & WhatsApp inquiry tracking",
    ],
    ctaText: "Grow Your Local Reach",
    ctaHref: "/contact?goal=improve-lead-generation",
  },
  {
    id: "growing-businesses",
    number: "05",
    title: "Growing Businesses",
    subtitle: "Established Enterprises & Scale-Ups",
    problems: [
      "Data discrepancies between ad platforms and actual bank receipts.",
      "Legacy web systems creating friction for both clients and internal teams.",
      "Ad campaigns plateauing in cost-per-acquisition without server-side signals.",
    ],
    solution:
      "We upgrade digital infrastructure with enterprise Next.js architectures, server-side Meta Conversions API pipelines, and automated multi-channel acquisition.",
    deliverables: [
      "Server-side Meta CAPI & GA4 telemetry overhaul",
      "Custom internal workflow software & portals",
      "Cross-channel advertising scaling (Google + Meta)",
    ],
    ctaText: "Scale Your Infrastructure",
    ctaHref: "/contact?goal=explore-growth",
  },
];

/* ========================================================================= */
/* SECTION 4: WHAT WE HELP YOU ACHIEVE (5 OUTCOMES)                         */
/* ========================================================================= */

export const OUTCOME_SECTIONS: OutcomeItem[] = [
  {
    number: "01",
    title: "Establish Your Presence",
    summary: "A permanent, high-performance home for your business online.",
    details:
      "Instead of relying solely on social media algorithms you do not control, you get a fast, modern digital property that represents your brand authentically 24/7.",
    impactMetrics: "Sub-second load times · Mobile responsiveness · Full brand ownership",
  },
  {
    number: "02",
    title: "Get Discovered",
    summary: "Show up when customers are actively searching for your solutions.",
    details:
      "We structure your digital assets with semantic HTML, search engine optimization, and local visibility signals so prospects find you at their moment of need.",
    impactMetrics: "Targeted keyword visibility · Google Business positioning · Structured schema",
  },
  {
    number: "03",
    title: "Reach Your Audience",
    summary: "Connect with your ideal buyers across high-intent channels.",
    details:
      "Precision Google Search Ads and Meta campaigns targeted by real intent and demographics, avoiding wasted spend on generic clicks that never convert.",
    impactMetrics: "High-intent buyer targeting · Visual hook testing · Zero ad spend wastage",
  },
  {
    number: "04",
    title: "Generate Customers",
    summary: "Turn anonymous website visitors into verified enquiries and sales.",
    details:
      "Friction-free inquiry forms, clear value propositions, direct WhatsApp chat gateways, and straightforward checkout flows designed to maximize conversions.",
    impactMetrics: "Frictionless inquiry forms · WhatsApp lead routing · Optimized user journeys",
  },
  {
    number: "05",
    title: "Measure and Improve",
    summary: "Know exactly which marketing efforts produce revenue.",
    details:
      "Reliable server-side tracking that bypasses ad blockers, tracks genuine inquiries and purchases, and gives you clear data to make confident growth decisions.",
    impactMetrics: "Server-side Meta CAPI · GA4 key events · Verified cost-per-lead insights",
  },
];

/* ========================================================================= */
/* SECTION 5: SIGNATURE DIGITAL GROWTH FRAMEWORK                             */
/* ========================================================================= */

export const GROWTH_FRAMEWORK_STAGES: GrowthFrameworkStage[] = [
  {
    step: "01",
    phase: "LEARN",
    title: "Understand Your Opportunity",
    tagline: "Audit, Audience & Goal Alignment",
    description:
      "We study your business model, customer buying behaviors, current digital assets, and competitive landscape. We identify where friction exists and where your highest-leverage growth opportunities lie.",
    activities: [
      "Business model and target audience audit",
      "Analysis of existing website performance and drop-off points",
      "Review of advertising history and search volume demand",
      "Clear, written milestone scope and technical roadmap",
    ],
    deliverable: "Strategic Growth Roadmap & Scoping Document",
  },
  {
    step: "02",
    phase: "BUILD",
    title: "Engineer Your Digital Foundation",
    tagline: "High-Performance Web, Apps & Infrastructure",
    description:
      "We construct modern, fast websites, custom web applications, or digital identity platforms using Next.js, clean TypeScript, and responsive UI. Every page is built to load instantly and guide users to action.",
    activities: [
      "Custom responsive Next.js engineering (desktop, tablet, mobile)",
      "Conversion-focused layout architecture and persuasive copy",
      "Form validation, bot protection, and instant notification pipelines",
      "Structured SEO foundations, sitemaps, and Core Web Vitals optimization",
    ],
    deliverable: "Production-Ready Digital Platform & Experience",
  },
  {
    step: "03",
    phase: "REACH",
    title: "Connect With Your Target Market",
    tagline: "High-Intent Advertising & Search Visibility",
    description:
      "We launch targeted customer acquisition campaigns across Google Ads and Meta (Facebook & Instagram). We focus on search terms and audience segments with verified buying intent.",
    activities: [
      "High-intent Google Search keyword architecture and negative lists",
      "Meta Ads creative direction, ad angles, and hook testing",
      "Audience segmentation (cold acquisition vs. warm retargeting)",
      "Dedicated landing page alignment with specific ad messages",
    ],
    deliverable: "Active Acquisition Funnels Across Search & Social",
  },
  {
    step: "04",
    phase: "CONVERT",
    title: "Turn Visitors Into Inquiries & Buyers",
    tagline: "Conversion Optimization & Lead Routing",
    description:
      "We eliminate friction across user pathways. We test headings, call-to-action placement, mobile page speed, and contact methods like WhatsApp to maximize the percentage of visitors who become inquiries.",
    activities: [
      "Friction audit on mobile forms and checkout steps",
      "Direct 1-on-1 WhatsApp integration for instant communication",
      "Clear value propositions that address customer doubts upfront",
      "A/B testing of landing page variations and call-to-action copy",
    ],
    deliverable: "High-Conversion Lead Generation Workflow",
  },
  {
    step: "05",
    phase: "GROW",
    title: "Measure, Refine & Continuously Scale",
    tagline: "Server-Side Telemetry & Data-Driven Growth",
    description:
      "We configure server-side Meta CAPI and GA4 to accurately record leads and sales. We analyze which campaigns drive actual revenue and continuously optimize performance for sustainable business growth.",
    activities: [
      "Server-side Meta Conversions API (CAPI) installation & event deduplication",
      "Google Tag Manager (GTM) container & GA4 key event setup",
      "Weekly bid and budget reallocation toward profitable channels",
      "Ongoing technical support, security patches, and feature upgrades",
    ],
    deliverable: "Accurate Revenue Reporting & Scalable Growth Engine",
  },
];

/* ========================================================================= */
/* SECTION 6: CAPABILITIES (ORGANIZED IN 3 PILLARS)                          */
/* ========================================================================= */

export const CAPABILITIES_PILLARS = [
  {
    id: "build",
    pillar: "BUILD",
    pillarNumber: "01",
    tagline: "Digital Presence & Infrastructure",
    description:
      "Fast, engineered digital platforms that load in milliseconds, look exceptional on phones, and establish undeniable credibility.",
    capabilities: [
      {
        name: "Website Development",
        href: "/services/web-development",
        summary:
          "Custom Next.js marketing and corporate websites engineered for sub-second speeds, clean SEO, and inquiry generation.",
        solves: "Solves slow loading times, outdated branding, and lack of mobile inquiries.",
      },
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        summary:
          "Interactive client portals, SaaS MVPs, and internal workflow software with secure databases and authentication.",
        solves: "Solves manual business operations and the need for custom customer platforms.",
      },
      {
        name: "Mobile Application Development",
        href: "/services/mobile-apps",
        summary:
          "Cross-platform iOS and Android apps with offline caching, push notifications, and seamless API sync.",
        solves: "Solves the requirement to engage mobile-first users directly on their home screens.",
      },
      {
        name: "Landing Pages & Funnels",
        href: "/services/web-development#landing-pages",
        summary:
          "Single-focus, high-converting campaign landing pages built to maximize ad click-through conversions.",
        solves: "Solves ad traffic bouncing on generic homepages without taking action.",
      },
      {
        name: "Digital Platforms & Portals",
        href: "/services/web-applications#portals",
        summary:
          "Centralized hubs connecting clients, teams, and data through intuitive interfaces and automated alerts.",
        solves: "Solves fragmented spreadsheets and manual customer onboarding friction.",
      },
    ],
  },
  {
    id: "reach",
    pillar: "REACH",
    pillarNumber: "02",
    tagline: "Customer Acquisition & Visibility",
    description:
      "Strategic acquisition campaigns that capture active buyers and build demand without burning budget on vanity impressions.",
    capabilities: [
      {
        name: "Meta Ads (Facebook & Instagram)",
        href: "/services/meta-ads",
        summary:
          "Targeted visual campaigns that reach prospective customers, test compelling creative hooks, and capture leads.",
        solves: "Solves stagnant customer acquisition by tapping massive social attention pools.",
      },
      {
        name: "Google Ads Management",
        href: "/services/google-ads",
        summary:
          "Search and shopping campaigns that place your brand at the exact moment prospects search for your services.",
        solves: "Solves missing out on high-intent buyers ready to purchase right now.",
      },
      {
        name: "SEO and Digital Visibility",
        href: "/services/seo-visibility",
        summary:
          "Semantic website structure, local search indexing, and AI search preparation to build enduring organic traffic.",
        solves: "Solves 100% dependency on paid ads by building organic discoverability.",
      },
      {
        name: "Digital Campaign Strategy",
        href: "/services/meta-ads#campaign-strategy",
        summary:
          "Holistic multi-channel planning coordinating ad messaging, audience tiers, and seasonal promotions.",
        solves: "Solves disconnected ad tactics operating without a unified commercial strategy.",
      },
      {
        name: "Audience Acquisition",
        href: "/services/google-ads#audience-acquisition",
        summary:
          "Audience segmentation connecting cold prospects, engaged visitors, and past buyers into an orderly funnel.",
        solves: "Solves ad fatigue and low return on ad spend (ROAS).",
      },
    ],
  },
  {
    id: "convert-measure",
    pillar: "CONVERT & MEASURE",
    pillarNumber: "03",
    tagline: "Conversion Optimization & Server Telemetry",
    description:
      "Precision tracking and user journey optimization that eliminates lost attribution and lifts conversion rates.",
    capabilities: [
      {
        name: "Conversion Tracking & Telemetry",
        href: "/services/conversion-tracking",
        summary:
          "End-to-end measurement setup tracking form submissions, phone calls, calendar bookings, and online sales.",
        solves: "Solves marketing blindspots where you cannot verify which campaign drove revenue.",
      },
      {
        name: "Google Analytics 4 & GTM",
        href: "/services/ga4-gtm",
        summary:
          "Clean Google Tag Manager container deployment and GA4 event architecture with zero data clutter.",
        solves: "Solves incorrect GA4 configurations, missing events, and duplicate reporting.",
      },
      {
        name: "Meta Pixel & Conversions API (CAPI)",
        href: "/meta-capi",
        summary:
          "Dual-channel browser and server event dispatch with deduplication, immune to iOS privacy blockers.",
        solves: "Solves up to 30% lost sales attribution caused by browser ad blockers.",
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        href: "/services/conversion-optimization",
        summary:
          "UX friction audits, copy testing, and layout refinements that increase the percentage of inquiries from existing traffic.",
        solves: "Solves having good website traffic that fails to convert into paying customers.",
      },
    ],
  },
];

/* ========================================================================= */
/* SECTION 7: WHY DIZITALGROW (HONEST DIFFERENTIATORS)                       */
/* ========================================================================= */

export const WHY_DIZITALGROW = {
  eyebrow: "OUR PHILOSOPHY",
  heading: "Technology Meets Business Understanding.",
  subheading:
    "We do not make unrealistic promises of instant millions or guaranteed viral growth. We deliver disciplined engineering, honest marketing, and continuous optimization.",
  differentiators: [
    {
      number: "01",
      title: "Business-First Thinking",
      description:
        "We prioritize what moves your revenue—inquiries, phone calls, and customer transactions—rather than cosmetic trends or vanity metrics.",
    },
    {
      number: "02",
      title: "Tech & Marketing Under One Roof",
      description:
        "No finger-pointing between developers and ad managers. Your website engineering, ad campaigns, and telemetry work as one harmonized system.",
    },
    {
      number: "03",
      title: "Data-Informed Decisions",
      description:
        "We make campaign and UX changes based on verified server data and user behavior, not subjective agency opinions or guesswork.",
    },
    {
      number: "04",
      title: "Transparent Communication",
      description:
        "Clear scopes, honest timelines, plain language without buzzwords, and complete separation between management fees and your direct ad spend.",
    },
    {
      number: "05",
      title: "Practical Digital Strategies",
      description:
        "We build solutions tailored to your real business capacity. We recommend what works for your stage of growth, not what costs the most.",
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description:
        "Digital growth is not a one-and-done project. We continually audit performance, patch bottlenecks, and optimize funnels for long-term compounding gains.",
    },
  ],
};

/* ========================================================================= */
/* SECTION 8: WORK & PROJECT SHOWCASE (AUTHENTIC EVIDENCE)                   */
/* ========================================================================= */

export const PROJECT_SHOWCASE: ProjectShowcaseItem[] = [
  {
    id: "healthcare-diagnostic",
    title: "Diagnostic Center Patient Portal & Local Growth",
    clientIndustry: "Healthcare & Diagnostics",
    overview:
      "A fast, patient-friendly web presence enabling local patients to easily locate test packages, view preparation instructions, and book home sample collections.",
    challenge:
      "The clinic relied heavily on walk-ins and experienced low website engagement due to an outdated, slow platform that was difficult to navigate on mobile devices.",
    solution:
      "Engineered a responsive Next.js web application with structured test catalog schemas, instant WhatsApp appointment routing, and targeted Google Search Ads for local diagnostic queries.",
    technologies: ["Next.js App Router", "Tailwind CSS", "Google Search Ads", "WhatsApp Lead Routing", "GA4"],
    liveHref: "/contact",
    linkText: "Discuss Similar Project",
  },
  {
    id: "d2c-ecommerce-capi",
    title: "D2C Apparel Storefront & Server-Side Telemetry",
    clientIndustry: "E-Commerce & Retail",
    overview:
      "Modern e-commerce platform upgrade focused on lightning-fast product page rendering and server-side conversion tracking to recover lost purchase attribution.",
    challenge:
      "Standard browser pixel tracking was losing up to 28% of purchase signals due to iOS Safari privacy controls and browser ad blockers, causing ad optimization algorithms to underperform.",
    solution:
      "Implemented server-side Meta Conversions API (CAPI) with automatic browser deduplication, combined with a streamlined, mobile-first checkout experience.",
    technologies: ["Next.js", "Meta Conversions API", "Event Deduplication", "Google Tag Manager", "Tailwind CSS"],
    liveHref: "/meta-capi",
    linkText: "View Architecture",
  },
  {
    id: "b2b-consulting-platform",
    title: "Industrial Engineering Corporate Platform & Lead Engine",
    clientIndustry: "B2B Manufacturing & Industrial Consulting",
    overview:
      "A clean, authoritative corporate website built to establish industry credibility and capture qualified RFPs from corporate procurement managers.",
    challenge:
      "The client had extensive technical expertise but no digital presence reflecting their capabilities, leading corporate prospects to favor competitors with polished websites.",
    solution:
      "Built an engineered corporate platform with detailed project case studies, downloadable specification sheets, and a multi-step inquiry form with honeypot bot defense.",
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Semantic SEO", "EmailJS Automation"],
    liveHref: "/services/web-development",
    linkText: "Explore Web Solutions",
  },
  {
    id: "local-home-services",
    title: "Premium Architecture Studio Portfolio & Search Visibility",
    clientIndustry: "Architecture & Interior Design",
    overview:
      "An image-optimized digital portfolio showcasing luxury residential projects with fast CDN delivery and localized Google search visibility.",
    challenge:
      "High-resolution architectural photography was severely slowing down page loads on mobile phones, causing high bounce rates among affluent homeowners.",
    solution:
      "Delivered a modern portfolio using Next.js automatic image optimization, responsive picture formats, and clean typography with zero layout shift.",
    technologies: ["Next.js", "Responsive Image Pipeline", "Google SEO", "Core Web Vitals", "Tailwind CSS"],
    liveHref: "/contact",
    linkText: "Discuss Your Project",
  },
];

/* ========================================================================= */
/* SECTION 10: FAQS (EXACT MASTER PROMPT QUESTIONS)                         */
/* ========================================================================= */

export const MASTER_FAQS: FAQItem[] = [
  {
    question: "What does DizitalGrow do?",
    answer:
      "DizitalGrow is a digital growth partner that unites website development, web applications, targeted advertising (Google & Meta Ads), and server-side tracking (Meta CAPI & GA4). We help businesses establish their digital presence, reach the right buyers, and generate measurable growth.",
  },
  {
    question: "Who can work with DizitalGrow?",
    answer:
      "We work with five distinct audiences: individuals building personal brands, entrepreneurs launching new ventures, startups needing MVPs and web applications, small and local businesses seeking customer enquiries, and growing companies looking to scale their digital infrastructure and ad performance.",
  },
  {
    question: "Do I need a website for my business?",
    answer:
      "Yes. While social media channels are useful, your website is the only digital asset you truly own and control. It serves as your permanent 24/7 storefront where customers can verify your credibility, explore your offerings, and reach out directly without algorithmic interference.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing connects your business with people at the exact moment they are looking for what you offer. Unlike traditional broad advertising, digital channels allow precise targeting by intent, location, and interests—enabling you to track every rupee spent against verified customer enquiries.",
  },
  {
    question: "Can you help me generate more enquiries?",
    answer:
      "Yes. We specialize in conversion-focused funnels: designing fast, mobile-friendly landing pages that remove friction, combined with targeted Google Search and Meta Ads campaigns that reach motivated prospects, and routing inquiries directly to your team via phone or WhatsApp.",
  },
  {
    question: "Do you provide website and application development?",
    answer:
      "Yes. We build high-performance corporate websites, custom web applications, SaaS dashboards, customer portals, e-commerce stores, and cross-platform iOS and Android mobile apps using modern Next.js and React frameworks.",
  },
  {
    question: "Can you manage Google and Meta advertising?",
    answer:
      "Yes. We manage end-to-end advertising across Google (Search, Display, Shopping) and Meta (Facebook and Instagram). This includes keyword research, ad copy and creative direction, audience targeting, conversion tracking, and ongoing bid optimization.",
  },
  {
    question: "Can you track my website visitors and conversions?",
    answer:
      "Yes. We install advanced telemetry including Google Analytics 4, Google Tag Manager, Meta Pixel, and server-side Meta Conversions API (CAPI). We track form submissions, WhatsApp chats, phone clicks, and purchases with full event deduplication to stop data loss.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply share your goals through our consultation form or reach out directly on WhatsApp. We will review your requirements, conduct an initial digital audit, and provide a clear, written proposal with fixed timelines and scopes within one business day.",
  },
];

/* ========================================================================= */
/* DEDICATED SERVICE PAGES DATASETS (8 CORE SERVICES)                       */
/* ========================================================================= */

export const SERVICE_DETAIL_PAGES: Record<string, ServiceDetailData> = {
  "web-development": {
    slug: "web-development",
    category: "BUILD",
    title: "Website Development",
    tagline: "High-Performance Business Websites Engineered to Convert",
    heroHeadline: "Websites That Turn Visitors Into Real Enquiries.",
    heroDescription:
      "We design and build fast, mobile-first business websites using modern Next.js architecture. Every page is structured for sub-second speeds, clean search engine indexing, and straightforward customer action.",
    problemsSolved: [
      "Outdated websites that fail to reflect modern business credibility.",
      "Slow loading times that cause mobile visitors to bounce before seeing content.",
      "Complicated navigation and confusing layouts that fail to produce phone calls or leads.",
      "Websites that lack foundational Google SEO architecture and structured metadata.",
    ],
    whoNeedsThis: [
      {
        audience: "Growing Businesses",
        description: "Companies needing a modern, authoritative digital presence to win enterprise clients.",
      },
      {
        audience: "Local Service Providers",
        description: "Clinics, consultants, and firms needing a steady flow of verified local enquiries.",
      },
      {
        audience: "Personal Brands & Experts",
        description: "Founders and professionals establishing an undisputed digital footprint.",
      },
    ],
    expectedOutcomes: [
      "Sub-second page load times across all mobile and desktop devices.",
      "Clear, persuasive value propositions that answer customer questions instantly.",
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
        description: "We develop the site using clean React and Next.js App Router for maximum speed.",
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
    tagline: "Custom Portals, SaaS Tools & Business Software",
    heroHeadline: "Interactive Software Built for Your Business Workflows.",
    heroDescription:
      "We build secure client portals, team dashboards, SaaS applications, and custom business tools. High-reliability Next.js engineering with secure authentication, API integrations, and scalable database architecture.",
    problemsSolved: [
      "Manual spreadsheets and chaotic email chains slowing down client operations.",
      "Off-the-shelf software that fails to fit your unique business workflows.",
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
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "High-converting marketing frontends for your web app.",
      },
      {
        name: "Mobile Application Development",
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
        answer: "A website is primarily informational and designed to explain services and generate enquiries. A web application is interactive software where users log in, manage data, and perform specialized tasks.",
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
    title: "Mobile Application Development",
    tagline: "Cross-Platform iOS & Android Apps",
    heroHeadline: "Put Your Business in Your Customers' Pockets.",
    heroDescription:
      "We design and build fast, responsive mobile applications for iPhones and Android devices. Clean cross-platform architecture with push notifications, offline support, and smooth backend synchronization.",
    problemsSolved: [
      "Inability to engage mobile customers with timely push alerts.",
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
    relatedServices: [
      {
        name: "Web Application Development",
        href: "/services/web-applications",
        description: "Unified backend architecture powering both web and mobile.",
      },
      {
        name: "Meta Advertising",
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
    title: "Meta Ads (Facebook & Instagram)",
    tagline: "High-ROI Social Acquisition Campaigns",
    heroHeadline: "Reach the Right Buyers on Facebook and Instagram.",
    heroDescription:
      "We design and manage targeted Meta ad campaigns that turn passive social attention into qualified leads and sales. We focus on compelling visual hooks, precise audience segmentation, and verified return on ad spend.",
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
    relatedServices: [
      {
        name: "Google Advertising",
        href: "/services/google-ads",
        description: "Capture high-intent searchers to complement social campaigns.",
      },
      {
        name: "Meta Pixel and Conversions API",
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
    title: "Google Ads Management",
    tagline: "High-Intent Search & Shopping Campaigns",
    heroHeadline: "Capture Customers Actively Searching to Buy.",
    heroDescription:
      "We build and manage Google Ads campaigns that place your business at the very top of search results when buyers search for your exact services. Search, Display, and Shopping ads engineered for maximum qualified enquiries.",
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
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "Fast landing pages that turn Google clicks into customers.",
      },
      {
        name: "SEO and Digital Visibility",
        href: "/services/seo-visibility",
        description: "Build long-term organic rankings alongside paid ads.",
      },
      {
        name: "Google Analytics & GTM",
        href: "/services/ga4-gtm",
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
    tagline: "Organic Search, Local Discovery & AI Search Indexing",
    heroHeadline: "Build Enduring Organic Visibility Across Google & AI.",
    heroDescription:
      "We optimize your digital assets for genuine discoverability. Combining semantic website architecture, high-intent content, local search optimization, and AI search indexing so customers find your business wherever they search.",
    problemsSolved: [
      "Being completely invisible on Google for searches related to your core services.",
      "Total reliance on paid advertising, causing customer acquisition to stop when ad spend halts.",
      "Old, unstructured website pages that search engine crawlers cannot understand or index.",
      "Missing out on AI search experiences like Google AI Overviews and AI Mode.",
    ],
    whoNeedsThis: [
      {
        audience: "Local & Regional Businesses",
        description: "Businesses that serve a city or region and want to dominate local search queries.",
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
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "Build an SEO-friendly website engineered from the ground up.",
      },
      {
        name: "Google Advertising",
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
    title: "Conversion Tracking & Telemetry",
    tagline: "Accurate Lead, Phone Call & Sales Attribution",
    heroHeadline: "Know Exactly Which Campaign Generated Every Customer.",
    heroDescription:
      "We design and deploy robust tracking systems that eliminate marketing blindspots. From contact forms and WhatsApp chats to phone calls and e-commerce purchases, we verify that every critical business action is recorded accurately.",
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
    relatedServices: [
      {
        name: "Meta Pixel & Conversions API",
        href: "/meta-capi",
        description: "Server-side tracking immune to browser ad blockers.",
      },
      {
        name: "Google Analytics & GTM",
        href: "/services/ga4-gtm",
        description: "Comprehensive reporting and dashboard setup.",
      },
    ],
    faqs: [
      {
        question: "Can you fix broken tracking on an existing website?",
        answer: "Yes. We frequently audit and repair broken GTM containers, missing GA4 triggers, and misfiring pixels on existing sites.",
      },
    ],
  },

  "ga4-gtm": {
    slug: "ga4-gtm",
    category: "CONVERT & MEASURE",
    title: "Google Analytics 4 & GTM",
    tagline: "Clean Event Architecture & Measurement Strategy",
    heroHeadline: "Actionable Business Data Without the Confusion.",
    heroDescription:
      "We configure Google Analytics 4 (GA4) and Google Tag Manager (GTM) with disciplined event taxonomies. No useless vanity metrics or default event clutter—just clean data on user pathways, inquiries, and customer transactions.",
    problemsSolved: [
      "Default GA4 setups that track millions of page views but zero meaningful business conversions.",
      "Messy GTM containers with outdated tags from past marketing vendors slowing down your website.",
      "Confusion navigating GA4's interface without customized reports tailored to your goals.",
      "Missing user engagement data on key actions like file downloads and video watches.",
    ],
    whoNeedsThis: [
      {
        audience: "Business Owners & Executives",
        description: "Leaders who need simple, accurate reports on website ROI and customer channels.",
      },
      {
        audience: "Marketing Teams",
        description: "Teams needing reliable data to evaluate campaign performance and allocate budgets.",
      },
    ],
    expectedOutcomes: [
      "A streamlined GTM container with clean triggers that load asynchronously without speed impact.",
      "Custom GA4 conversion events tracking form completions, contact actions, and purchase revenue.",
      "Customized GA4 exploration reports tailored to your team's specific commercial questions.",
      "Full privacy compliance respecting user consent and regional regulations.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Container Cleanup & Tag Audit",
        description: "We remove obsolete tags, duplicate triggers, and bloated tracking scripts.",
      },
      {
        step: "02",
        title: "Measurement Strategy & Data Layer",
        description: "We define clean event parameter naming conventions for all business-critical actions.",
      },
      {
        step: "03",
        title: "GA4 Custom Dimensions & Key Events",
        description: "We configure conversion thresholds and custom parameters for deeper analysis.",
      },
      {
        step: "04",
        title: "Executive Dashboard Setup",
        description: "We build intuitive reports so you can check performance in seconds without getting lost.",
      },
    ],
    technicalCapabilities: [
      "Google Tag Manager Container Architecture",
      "GA4 Measurement Protocol & Custom Events",
      "Consent Mode v2 Integration",
      "Cross-Domain Tracking Configuration",
      "Data Layer Push Specifications",
      "Custom Looker Studio Performance Dashboards",
    ],
    relatedServices: [
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Comprehensive multi-channel attribution.",
      },
      {
        name: "Meta Pixel & Conversions API",
        href: "/meta-capi",
        description: "Pair GA4 with server-side social telemetry.",
      },
    ],
    faqs: [
      {
        question: "Why does GA4 feel so different from older Google Analytics?",
        answer: "GA4 is event-based rather than session-based, designed for modern privacy standards. Once properly configured with custom events, it provides far superior insights into user actions.",
      },
    ],
  },

  "conversion-optimization": {
    slug: "conversion-optimization",
    category: "CONVERT & MEASURE",
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Turn More of Your Existing Traffic Into Customers",
    heroHeadline: "Get More Leads Without Spending More on Ads.",
    heroDescription:
      "We identify and remove friction across your website. By refining layouts, headline messaging, mobile tap targets, and contact pathways, we increase the percentage of visitors who take action and become paying customers.",
    problemsSolved: [
      "Getting decent website traffic that never converts into enquiries or sales.",
      "Mobile visitors abandoning contact forms because they are too long or difficult to fill out.",
      "Unclear value propositions that fail to explain why a prospect should choose your business.",
      "Rising advertising costs requiring you to get more revenue from every visitor.",
    ],
    whoNeedsThis: [
      {
        audience: "Businesses With Steady Traffic",
        description: "Companies receiving at least 1,000 monthly visitors that want to double inquiry rates.",
      },
      {
        audience: "High-Spend Advertisers",
        description: "Brands running paid search or social ads that want to lower customer acquisition cost.",
      },
    ],
    expectedOutcomes: [
      "Higher conversion rates turning existing website traffic into tangible revenue.",
      "Drastic reduction in form abandonment through streamlined, mobile-friendly input fields.",
      "Clear, persuasive value messaging that builds immediate trust and overcomes hesitation.",
      "Lower cost-per-lead (CPL) across all paid marketing channels.",
    ],
    ourApproach: [
      {
        step: "01",
        title: "Friction & Drop-Off Audit",
        description: "We analyze visitor behavior, session recordings, and drop-off points to find where users get stuck.",
      },
      {
        step: "02",
        title: "Copywriting & Value Proposition Refinement",
        description: "We clarify headlines, eliminate jargon, and address customer hesitations upfront.",
      },
      {
        step: "03",
        title: "Form & Call-to-Action Redesign",
        description: "We simplify contact inputs, add direct WhatsApp options, and optimize mobile tap areas.",
      },
      {
        step: "04",
        title: "Testing & Validation",
        description: "We compare conversion rates before and after implementation to verify real improvements.",
      },
    ],
    technicalCapabilities: [
      "User Friction & Journey Mapping",
      "Mobile Tap Target & Ergonomics Optimization",
      "High-Conversion Copywriting Frameworks",
      "Form Field Reduction & Autofill Optimization",
      "WhatsApp Instant Communication Gateways",
      "Speed & Core Web Vitals Optimization",
    ],
    relatedServices: [
      {
        name: "Website Development",
        href: "/services/web-development",
        description: "Rebuild your website with conversion principles baked in.",
      },
      {
        name: "Conversion Tracking",
        href: "/services/conversion-tracking",
        description: "Verify conversion rate improvements with accurate data.",
      },
    ],
    faqs: [
      {
        question: "Do I need to rebuild my entire website to do CRO?",
        answer: "Not necessarily. Often, targeted refinements to headings, hero sections, form fields, and call-to-action buttons can generate substantial conversion improvements.",
      },
    ],
  },
};

export interface ContactMethodItem {
  label: string;
  value: string;
  href: string;
  iconName: string;
  badge?: string;
  description?: string;
}

export const CONTACT_METHODS: ContactMethodItem[] = [
  {
    label: "Email",
    value: "contact@dizitalgrow.in",
    href: "mailto:contact@dizitalgrow.in",
    iconName: "mail",
    badge: "Direct",
    description: "For structured project briefs, formal RFPs, and collaboration queries.",
  },
  {
    label: "WhatsApp Chat",
    value: "+91 91871 26193 (Chat only)",
    href: "https://wa.me/919187126193?text=Hi%20DizitalGrow,%20I%20would%20like%20to%20discuss%20a%20project.",
    iconName: "whatsapp",
    badge: "Fastest",
    description: "Quick discussions, discovery chats, and growth scoping.",
  },
  {
    label: "WhatsApp Channel",
    value: "DizitalGrow Growth Broadcast",
    href: "https://whatsapp.com/channel/0029VaF7r7C4tRs4413x9u0B",
    iconName: "whatsapp-channel",
    badge: "Updates",
    description: "Follow for growth frameworks, product teardowns, and tech insights.",
  },
  {
    label: "Instagram",
    value: "@dizitalgrow",
    href: "https://www.instagram.com/dizitalgrow/",
    iconName: "instagram",
    badge: "Social",
    description: "Design breakdowns, digital concepts, and ecosystem stories.",
  },
];
