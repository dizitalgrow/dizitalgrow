export interface ServiceDetail {
  slug: string;
  name: string;
  headline: string;
  body: string;
  outcome: string;
  benefits: string[];
}

export interface ProcessStep {
  no: string;
  name: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_CONTENT = {
  headline: "Websites, Apps & Ads That Grow Your Business",
  subheadline:
    "We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.",
  primaryCTA: { label: "Start Project", href: "/contact" },
  secondaryCTA: { label: "View Work", href: "/work" },
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    slug: "website-development",
    name: "Website Development",
    headline: "Professional websites designed to convert visitors into customers.",
    body: "Fast, modern websites built to generate leads and sales. We design clean, responsive experiences that load fast on mobile devices and tell your business story clearly.",
    outcome: "Faster loading, better Google ranking, and more customer inquiries",
    benefits: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Stores",
      "SEO Friendly Structure",
      "Mobile Responsive Design",
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    headline: "Custom software built around your workflow.",
    body: "Custom web software that automates your everyday business processes, saves time for your team, and helps you manage clients effortlessly.",
    outcome: "Automated operations and hours saved every week",
    benefits: [
      "CRM Systems",
      "Admin Dashboards",
      "Booking Systems",
      "Inventory Management",
      "Internal Tools",
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    headline: "Native and cross-platform mobile applications.",
    body: "Android and iPhone apps designed for growth, ease of use, and everyday customer engagement.",
    outcome: "Direct customer connection on Android and iOS",
    benefits: [
      "Android Apps",
      "iPhone Apps",
      "Flutter Development",
      "React Native Development",
      "App Store & Play Store Launch",
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    headline: "Advertising on Facebook and Instagram.",
    body: "Targeted Facebook and Instagram advertising campaigns built to bring a steady stream of interested buyers to your business.",
    outcome: "Consistent, measurable customer inquiries and sales",
    benefits: [
      "Campaign Setup",
      "Creative Strategy",
      "Ad Testing & Optimization",
      "Clear Weekly Reporting",
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    headline: "Reach customers actively searching for your services.",
    body: "Put your business in front of customers at the exact moment they search on Google for what you offer.",
    outcome: "High-intent leads who are ready to buy",
    benefits: [
      "Google Search Ads",
      "Display Ads",
      "Performance Max Campaigns",
      "Remarketing Ads",
    ],
  },
  {
    slug: "conversion-tracking",
    name: "Conversion Tracking",
    headline: "Track exactly where leads and sales come from.",
    body: "Track every lead, call, form submission, and purchase accurately so you never waste marketing money.",
    outcome: "100% clarity on which ads generate real revenue",
    benefits: [
      "Google Analytics 4 Setup",
      "Google Tag Manager",
      "Meta Pixel Setup",
      "Meta Conversions API (CAPI)",
    ],
  },
];

export const SERVICES = SERVICES_LIST.map((s) => ({
  slug: s.slug,
  name: s.name,
  overview: s.body,
  benefits: s.benefits,
  useCases: [s.headline, s.outcome],
}));

export const WHY_CHOOSE_US = [
  {
    title: "Fast Delivery",
    desc: "Most websites launch in 2 to 4 weeks with transparent weekly progress updates.",
  },
  {
    title: "Modern Design",
    desc: "Clean, high-converting layouts that build instant trust with your buyers.",
  },
  {
    title: "Mobile-First Development",
    desc: "Built to look and perform flawlessly on phones, where 70%+ of your customers browse.",
  },
  {
    title: "Clear Communication",
    desc: "Plain English updates, direct WhatsApp/email support, and zero confusing tech jargon.",
  },
  {
    title: "Performance-Focused Marketing",
    desc: "We focus on real business metrics: phone calls, form leads, and revenue, not vanity clicks.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    no: "01",
    name: "Discovery",
    title: "Discovery",
    description: "We learn about your business, your ideal customers, and your biggest growth goals.",
  },
  {
    no: "02",
    name: "Planning",
    title: "Planning",
    description: "We create a clear project roadmap, scope, and timeline so you know exactly what to expect.",
  },
  {
    no: "03",
    name: "Design & Development",
    title: "Design & Development",
    description: "We build your website, app, or advertising campaign with modern tools and regular updates.",
  },
  {
    no: "04",
    name: "Launch",
    title: "Launch",
    description: "We thoroughly test everything, connect tracking, and launch your solution smoothly.",
  },
  {
    no: "05",
    name: "Support & Growth",
    title: "Support & Growth",
    description: "We help maintain and optimize performance over time as your business scales.",
  },
];

export const STATS = [
  { value: "100+", label: "Projects Delivered", detail: "Websites, apps, and marketing setups" },
  { value: "50+", label: "Businesses Served", detail: "Local businesses, startups, and growing brands" },
  { value: "$10M+", label: "Advertising Spend Managed", detail: "Profitable Google and Meta campaigns" },
  { value: "4+", label: "Years Experience", detail: "Building technology and growing businesses" },
];

export const CLIENT_LOGOS = [
  { name: "Retail Brands", tag: "E-COMMERCE" },
  { name: "Healthcare Clinics", tag: "HEALTHCARE" },
  { name: "Real Estate Agencies", tag: "REAL ESTATE" },
  { name: "Professional Services", tag: "B2B" },
  { name: "Local Businesses", tag: "LOCAL SERVICES" },
  { name: "Tech Startups", tag: "SOFTWARE" },
];

export const CASE_STUDIES = [
  {
    id: "01",
    featured: true,
    title: "Hospital Appointment App",
    industry: "Healthcare",
    problem: "Patients struggled to find the right specialist and booking over the phone caused long hold times.",
    solution: "A simple symptom-based flow that guides patients to the right medical department before booking online.",
    results: "Faster appointments, zero booking confusion, and 3x more online patient registrations.",
    metricValue: "3x",
    metricLabel: "Faster Bookings",
    techStack: ["Mobile App", "React Native", "Online Booking"],
  },
  {
    id: "02",
    featured: false,
    title: "Real Estate Lead System",
    industry: "Real Estate",
    problem: "New buyer leads were manually assigned on spreadsheets, causing 4-hour delays and missed buyers.",
    solution: "An automated lead routing system connecting instant WhatsApp alerts and website forms directly to agents.",
    results: "Faster response times within 5 minutes and zero lost leads.",
    metricValue: "5 Min",
    metricLabel: "Avg Response Time",
    techStack: ["Web Application", "WhatsApp Alerts", "Lead Routing"],
  },
  {
    id: "03",
    featured: false,
    title: "E-commerce Growth System",
    industry: "Online Retail",
    problem: "Ad tracking issues caused lost sales data and made Facebook ads unprofitable.",
    solution: "Clean server-side tracking setup (Meta Conversions API) and high-converting landing pages.",
    results: "Improved advertising performance with 2.4x higher verified sales.",
    metricValue: "+140%",
    metricLabel: "Sales Increase",
    techStack: ["Website Development", "Meta Ads", "Conversion Tracking"],
  },
];

export const FEATURED_SOLUTIONS = CASE_STUDIES.map((c) => ({
  title: c.title,
  sector: c.industry,
  challenge: c.problem,
  solution: c.solution,
  outcome: c.results,
  services: c.techStack.join(", "),
}));

export const FAQ_LIST: FAQItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "Most websites take 2–4 weeks. Custom web applications and mobile apps usually take 4–12 weeks depending on the complexity.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the project scope and features needed. Contact us for a free, transparent custom quote tailored to your budget.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "Yes. We build fast, intuitive mobile applications for both Android and iPhone (iOS).",
  },
  {
    question: "Do you manage ads?",
    answer:
      "Yes. We set up, manage, and optimize advertising campaigns across Meta (Facebook & Instagram) and Google Ads.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Yes. We can redesign your current site, speed up loading times, optimize for mobile, and make it generate more inquiries.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing technical maintenance, updates, and marketing support to keep everything running smoothly.",
  },
];

export const SERVICES_FAQ = FAQ_LIST.slice(0, 3);
export const CONTACT_FAQ = FAQ_LIST.slice(3);

export const CONTACT_METHODS = [
  {
    iconName: "Instagram",
    label: "Instagram",
    value: "@dizitalgrow",
    href: "https://instagram.com/dizitalgrow",
  },
  {
    iconName: "Facebook",
    label: "Facebook",
    value: "DizitalGrow",
    href: "https://facebook.com/dizitalgrow",
  },
  {
    iconName: "Mail",
    label: "Email",
    value: "hello@dizitalgrow.in",
    href: "mailto:hello@dizitalgrow.in",
  },
];

export const ABOUT_CONTENT = {
  headline: "Helping Businesses Grow Through Technology & Marketing",
  subheadline:
    "We build websites, applications, advertising systems, and tracking infrastructure that help businesses attract customers and increase revenue.",
  body: [
    "DizitalGrow was created to make digital growth simple, transparent, and effective for everyday businesses. Too many agencies deliver flashy designs that fail to bring in paying customers.",
    "We focus on what actually moves the needle: fast websites that turn visitors into phone calls, custom software that saves time, and advertising campaigns that produce a real return on investment.",
    "Whether you are launching a new startup, modernizing an existing business, or scaling your customer acquisition, we are your long-term technology and marketing partner.",
  ],
  mission: "To help businesses use technology to grow faster.",
  principles: [
    {
      title: "Practical Solutions",
      copy: "We build tools that solve real operational problems and generate genuine business revenue.",
    },
    {
      title: "Clear Communication",
      copy: "We explain everything in plain language, keep you updated weekly, and never hide behind jargon.",
    },
    {
      title: "Focus on Business Outcomes",
      copy: "We measure success by your leads, appointments, and sales, not vanity clicks or impressions.",
    },
    {
      title: "Long-Term Partnerships",
      copy: "We support and scale your technology as your business expands, standing by you after launch.",
    },
  ],
};

export const ABOUT_EXPECTATIONS = [
  {
    title: "Clear Timelines & Pricing",
    copy: "Upfront scopes, transparent milestones, and zero hidden surprise costs.",
  },
  {
    title: "Mobile-First Quality",
    copy: "Fast-loading, clean interfaces tested across all smartphones, tablets, and computers.",
  },
  {
    title: "Direct Access",
    copy: "Work directly with the people building your project with quick turnaround times on questions.",
  },
  {
    title: "Dependable Support",
    copy: "Ongoing maintenance, security updates, and marketing adjustments when you need them.",
  },
];

export const TICKER_ITEMS = [
  "WEBSITE DEVELOPMENT",
  "WEB APPLICATIONS",
  "MOBILE APPS",
  "META ADS",
  "GOOGLE ADS",
  "CONVERSION TRACKING",
  "FAST DELIVERY",
  "REAL RESULTS",
];
