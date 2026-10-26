export interface Capability {
  id: string;
  number: string;
  category: "Development" | "Acquisition" | "Tracking";
  title: string;
  description: string;
  deliverables: string[];
}

export interface GrowthStage {
  step: string;
  title: string;
  description: string;
  practicalFocus: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  name: string;
  title: string;
  description: string;
}

export interface AudienceProfile {
  title: string;
  description: string;
  tag: string;
}

export const HERO_CONTENT = {
  eyebrow: "WEB DEVELOPMENT & DIGITAL ADS",
  headline: "Build Your Digital Presence. Turn It Into Growth.",
  subheadline:
    "We build fast business websites, custom web apps, and targeted Google & Meta ad campaigns that bring real customers.",
  valueProposition:
    "Connected websites, customer acquisition ads, and verified tracking.",
  supportingTagline:
    "Build better websites. Reach the right buyers. Measure real results.",
  trustStatement:
    "Practical work. Real measurement. Clear communication.",
  primaryCTA: { label: "Discuss Your Project", href: "/contact" },
  secondaryCTA: { label: "Explore Services", href: "#services" },
};

export const GROWTH_FRAMEWORK_STEPS = [
  {
    step: "01",
    phase: "BUILD",
    title: "Websites & Web Apps",
    description:
      "Fast, mobile-ready websites engineered to turn visitors into real customer inquiries.",
  },
  {
    step: "02",
    phase: "REACH",
    title: "Google & Meta Ads",
    description:
      "Targeted search and social ads that reach people actively looking to buy.",
  },
  {
    step: "03",
    phase: "TRACK",
    title: "Accurate Tracking & CAPI",
    description:
      "Server-side Meta CAPI and GA4 tracking so you know where every lead comes from.",
  },
];

export const GROWTH_JOURNEY_STAGES: GrowthStage[] = [
  {
    step: "01",
    title: "Build a clean foundation",
    description:
      "A fast, modern website that explains what you do clearly and makes it easy for visitors to contact you.",
    practicalFocus: [
      "Mobile-friendly layout that loads fast",
      "Clear, simple words that build trust",
      "Easy contact and inquiry forms",
    ],
  },
  {
    step: "02",
    title: "Reach people looking to buy",
    description:
      "Target active searchers on Google and build customer interest on Facebook and Instagram.",
    practicalFocus: [
      "Target high-intent search keywords",
      "Test engaging ad creative and copy",
      "Clean, focused landing pages",
    ],
  },
  {
    step: "03",
    title: "Measure what works",
    description:
      "Track every inquiry and sale with server-side CAPI and GA4 so you never waste ad spend.",
    practicalFocus: [
      "Track verified phone calls and forms",
      "No lost or duplicate sales data",
      "Clear, simple ROI reports",
    ],
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "business-websites",
    number: "01",
    category: "Development",
    title: "Business & Corporate Websites",
    description:
      "Fast, clean websites built with Next.js that look great on phones and turn visitors into inquiries.",
    deliverables: [
      "Custom responsive design (phone, tablet, desktop)",
      "Next.js speed & easy content management",
      "Built-in Google search SEO foundations",
      "Simple contact forms with instant email alerts",
    ],
  },
  {
    id: "web-applications",
    number: "02",
    category: "Development",
    title: "Custom Web Applications & Portals",
    description:
      "Secure client portals, dashboards, and custom software with user logins and database tools.",
    deliverables: [
      "Client portals and team dashboards",
      "User logins, roles, and secure access",
      "Fast database setup and API connections",
      "Automated business workflows",
    ],
  },
  {
    id: "mobile-apps",
    number: "03",
    category: "Development",
    title: "Mobile App Development (iOS & Android)",
    description:
      "Smooth mobile apps for iPhones and Android phones with notifications and backend sync.",
    deliverables: [
      "Cross-platform iOS and Android apps",
      "Secure backend sync and offline support",
      "Push notification setups",
      "App Store & Google Play launch help",
    ],
  },
  {
    id: "ecommerce-development",
    number: "04",
    category: "Development",
    title: "E-Commerce Development & Stores",
    description:
      "Fast online stores with easy product browsing, safe checkout, and automatic order updates.",
    deliverables: [
      "Fast product pages and simple catalogs",
      "Smooth checkout and secure payment setups",
      "Order tracking and customer email alerts",
      "Server-side purchase tracking",
    ],
  },
  {
    id: "google-ads",
    number: "05",
    category: "Acquisition",
    title: "Google Ads Management",
    description:
      "Search and shopping campaigns that show your business to customers actively searching for your services.",
    deliverables: [
      "High-intent keyword selection and negative lists",
      "Clear, persuasive search ad text",
      "Focused landing pages that lift conversions",
      "Search query reviews and bid adjustments",
    ],
  },
  {
    id: "meta-ads",
    number: "06",
    category: "Acquisition",
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Targeted social ad campaigns that build customer demand, test creative hooks, and generate leads.",
    deliverables: [
      "Audience targeting and interest research",
      "Ad creative direction and visual hook tests",
      "Lead generation and store sales campaigns",
      "Retargeting ads for warm prospects",
    ],
  },
  {
    id: "analytics-tracking-capi",
    number: "07",
    category: "Tracking",
    title: "Analytics, Tracking & Meta CAPI",
    description:
      "Accurate tracking setup with Google Tag Manager, GA4, and server-side Meta CAPI to stop data loss.",
    deliverables: [
      "Google Tag Manager container setup",
      "GA4 key events and lead tracking",
      "Server-side Meta Conversions API (CAPI)",
      "Event deduplication between Pixel and CAPI",
    ],
  },
];

export const META_CAPI_FEATURE = {
  eyebrow: "SERVER-SIDE TRACKING",
  title: "Server-Side Meta Conversions API (CAPI)",
  description:
    "Ad blockers can hide up to 30% of sales from standard browser pixels. Meta CAPI sends sales and lead data straight from your server, so your ad data is accurate and never double-counted.",
  keyPoints: [
    {
      title: "Dual-Channel Reliability",
      desc: "Sends data from both browser and server so no lead is missed.",
    },
    {
      title: "No Double Counting",
      desc: "Unique Event IDs make sure each sale or lead is counted only once.",
    },
    {
      title: "Better Ad Results",
      desc: "Helps Meta match sales back to the exact ads that brought them.",
    },
    {
      title: "Privacy Safe",
      desc: "Respects user privacy settings while keeping your reporting accurate.",
    },
  ],
};

export const WHO_WE_HELP: AudienceProfile[] = [
  {
    title: "Small & Local Businesses",
    description:
      "Updating older websites and getting local inquiries through targeted Google Search Ads.",
    tag: "Commercial",
  },
  {
    title: "Startups & Early Founders",
    description:
      "Building MVP web apps and setting up first customer acquisition funnels with clean tracking.",
    tag: "Startups",
  },
  {
    title: "E-Commerce & Retail Brands",
    description:
      "Building fast online stores, running shopping ads, and tracking orders with Meta CAPI.",
    tag: "D2C & Retail",
  },
  {
    title: "B2B & Professional Services",
    description:
      "Creating clean corporate websites, getting high-value leads, and tracking calls and form submissions.",
    tag: "B2B Services",
  },
  {
    title: "Scaling Businesses",
    description:
      "Upgrading custom web portals, fixing underperforming ads, and repairing broken analytics.",
    tag: "Growth Stage",
  },
];

export const ABOUT_SECTION = {
  heading: "Connecting websites, advertising, and measurement.",
  paragraphs: [
    "Most businesses struggle online because their website, ads, and analytics don't talk to each other. An ad wastes money if the landing page is confusing, and you can't improve without accurate data.",
    "DizitalGrow unites web development, paid ads, and server-side tracking into one connected system built to grow your business.",
  ],
  commitments: [
    {
      title: "Honest Pricing",
      desc: "Clear scopes, fixed timelines, and total separation between management fees and your ad spend.",
    },
    {
      title: "Solid Technical Work",
      desc: "Fast loading speeds, clean code, secure databases, and reliable server-side tracking.",
    },
    {
      title: "Real Business Results",
      desc: "We track real inquiries, phone calls, and purchases—not vanity clicks or views.",
    },
  ],
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "Discovery & Audit",
    title: "Discovery & Audit",
    description:
      "We review your goals, audience, current website, and ad accounts to find what needs improvement.",
  },
  {
    step: "02",
    name: "Strategy & Scope",
    title: "Strategy & Scope",
    description:
      "We plan the technical setup, deliverables, timelines, and ad channels in a simple written plan.",
  },
  {
    step: "03",
    name: "Design & Build",
    title: "Design & Build",
    description:
      "We build the website, web application, or ad campaigns with mobile speed and tracking in place.",
  },
  {
    step: "04",
    name: "Testing & Validation",
    title: "Testing & Validation",
    description:
      "We test forms, checkout, mobile responsiveness, and Meta CAPI tracking before going live.",
  },
  {
    step: "05",
    name: "Launch & Support",
    title: "Launch & Support",
    description:
      "We launch your project, review live performance, optimize ads, and provide ongoing technical care.",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "What services does DizitalGrow offer?",
    answer:
      "We build business websites and web applications, manage Google and Meta Ads, and set up accurate analytics with server-side Meta CAPI. You can hire us for one service or an all-in-one setup.",
  },
  {
    question: "Do you build both business websites and custom web applications?",
    answer:
      "Yes. We build marketing websites to generate leads as well as custom web applications with user logins, dashboards, and automated databases.",
  },
  {
    question: "What is the difference between a website and a web app?",
    answer:
      "A website is primarily informational and designed to bring inquiries. A web application is interactive software where users log in, manage data, and complete tasks.",
  },
  {
    question: "Can you build Android and iOS mobile applications?",
    answer:
      "Yes. We build mobile apps for iOS and Android with secure backend connections, push notifications, and app store deployment.",
  },
  {
    question: "Do you design campaign-specific landing pages?",
    answer:
      "Yes. We build fast, simple landing pages that match your ads and make it easy for visitors to convert.",
  },
  {
    question: "Can you manage our Google Ads and Meta Ads campaigns?",
    answer:
      "Yes. We handle keyword research, ad copy, creative direction, audience targeting, and weekly bid optimization.",
  },
  {
    question: "Can we hire you only for advertising management?",
    answer:
      "Yes. If your website is already converting visitors well, you can hire us strictly to run and scale your Google or Meta Ads.",
  },
  {
    question: "Can we hire you only for website or application development?",
    answer:
      "Yes. Many clients hire us exclusively to build or redesign a website, web app, or online store with built-in speed and SEO.",
  },
  {
    question: "What is Meta Conversions API (CAPI), and do you set it up?",
    answer:
      "Meta CAPI sends sales and lead events straight from your server to Meta, bypassing browser ad blockers. We set it up alongside your pixel with deduplication.",
  },
  {
    question: "Can you fix broken conversion tracking or missing events?",
    answer:
      "Yes. We audit and repair broken GTM tags, missing GA4 events, and untracked form submissions so your data is 100% accurate.",
  },
  {
    question: "Can you track website forms, phone calls, and checkouts?",
    answer:
      "Yes. We connect contact forms, phone calls, calendar bookings, and online sales directly into GA4, Google Ads, and Meta Ads.",
  },
  {
    question: "Do you provide ongoing website maintenance and support?",
    answer:
      "Yes. We offer maintenance plans covering security updates, speed checks, bug fixes, and feature additions.",
  },
  {
    question: "How do project pricing and timelines work?",
    answer:
      "A standard business website takes 2–4 weeks. Ad management is billed as a flat monthly fee separate from your ad spend. We provide fixed-scope proposals before starting.",
  },
  {
    question: "What should we prepare before an initial consultation?",
    answer:
      "A quick summary of your business, your current website URL (if you have one), your primary goal, and your approximate timeline.",
  },
  {
    question: "Can you improve an existing website or underperforming ad campaign?",
    answer:
      "Yes. We audit existing websites for speed and conversion friction, and restructure ad accounts to cut wasted spend.",
  },
  {
    question: "How do we measure whether a digital project is successful?",
    answer:
      "We track real business outcomes: qualified inquiries, cost per customer, and completed sales—never superficial vanity impressions.",
  },
];

export const CONTACT_METHODS = [
  {
    iconName: "Mail",
    label: "Direct Email",
    value: "contact@dizitalgrow.in",
    href: "mailto:contact@dizitalgrow.in",
    badge: "Inquiries",
    description: "Send us project details, RFPs, or general business inquiries.",
  },
  {
    iconName: "WhatsApp",
    label: "WhatsApp Direct (Chat Only)",
    value: "+91 91871 26193",
    href: "https://wa.me/919187126193?text=Hi%20DizitalGrow%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    badge: "1-on-1 Chat",
    description: "Direct 1-on-1 messaging for project scoping and quotes. Strictly WhatsApp chat (voice calls excluded).",
  },
  {
    iconName: "WhatsApp",
    label: "WhatsApp Channel (Broadcast)",
    value: "Follow DizitalGrow Updates",
    href: "https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N",
    badge: "Broadcast",
    description: "Subscribe to our broadcast channel for practical digital tips, web tutorials, and agency announcements.",
  },
  {
    iconName: "Instagram",
    label: "Instagram",
    value: "@dizitalgrow",
    href: "https://www.instagram.com/dizitalgrow/",
    badge: "Social",
    description: "Follow practical tips on web development, advertising, and tracking.",
  },
];


