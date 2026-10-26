export interface Capability {
  id: string;
  number: string;
  title: string;
  problem: string;
  whoNeedsIt: string;
  firstStep: string;
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

export interface EducationalTopic {
  title: string;
  category: string;
  summary: string;
  readTime: string;
}

export const HERO_CONTENT = {
  eyebrow: "DIGITAL GROWTH, MADE PRACTICAL",
  headline: "Grow your business in the digital world.",
  subheadline:
    "Understand what works, build a stronger online presence, and turn your digital efforts into meaningful business opportunities.",
  trustStatement:
    "Practical guidance. Clear strategy. No unnecessary complexity.",
  primaryCTA: { label: "Get Growth Advice", href: "/contact" },
  secondaryCTA: { label: "Explore Digital Growth Guides", href: "#learn" },
};

export const GROWTH_JOURNEY_STAGES: GrowthStage[] = [
  {
    step: "01",
    title: "Build your presence",
    description:
      "Create a clear website, establish your brand online, and make it easy for people to understand what you offer.",
    practicalFocus: [
      "Clear, benefit-driven messaging",
      "Fast, mobile-optimized experience",
      "Direct contact points and clear calls to action",
    ],
  },
  {
    step: "02",
    title: "Reach the right audience",
    description:
      "Use SEO, useful content, social media, and paid advertising where appropriate to help relevant people discover your business.",
    practicalFocus: [
      "High-intent search engine optimization",
      "Helpful educational articles and guides",
      "Targeted Google and Meta ad campaigns",
    ],
  },
  {
    step: "03",
    title: "Turn attention into action",
    description:
      "Improve landing pages, calls to action, inquiries, conversion tracking, and the customer journey.",
    practicalFocus: [
      "Frictionless inquiry forms",
      "Accurate Google Analytics & conversion tracking",
      "Continuous refinements based on actual results",
    ],
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "website-presence",
    number: "01",
    title: "Website & Online Presence",
    problem:
      "Many websites are outdated, confusing on mobile devices, or fail to explain clearly what the business offers, losing potential customers immediately.",
    whoNeedsIt:
      "Businesses launching a new brand, modernizing an existing site, or needing a fast, trustworthy digital home that converts visitors.",
    firstStep:
      "Audit your core pages: clarify your main headline, simplify navigation, and ensure every page has a single clear call to action.",
  },
  {
    id: "seo",
    number: "02",
    title: "Search Engine Optimization (SEO)",
    problem:
      "Potential customers actively search Google for your services every day, but your website is nowhere to be found on page one.",
    whoNeedsIt:
      "Small businesses, service providers, and local brands looking for steady, compounding organic discovery over time.",
    firstStep:
      "Identify the 5–10 specific search queries your customers use and optimize your page titles, headings, and Google Business profile.",
  },
  {
    id: "content-marketing",
    number: "03",
    title: "Content Marketing & Blogging",
    problem:
      "Without helpful content, customers struggle to evaluate your expertise or find answers to their pre-purchase questions.",
    whoNeedsIt:
      "Founders, service professionals, and creators who want to educate their market, build authority, and rank for informative searches.",
    firstStep:
      "List the top 10 questions prospective customers ask before purchasing and write straightforward, genuinely helpful answers.",
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Strategy & Content",
    problem:
      "Publishing random posts without a strategy consumes valuable time while delivering zero inquiries or meaningful business attention.",
    whoNeedsIt:
      "Brands wanting a consistent, recognizable presence on platforms where their target audience actively spends time.",
    firstStep:
      "Pick one primary social platform, establish 3 consistent content pillars, and commit to publishing 2–3 high-value posts weekly.",
  },
  {
    id: "paid-advertising",
    number: "05",
    title: "Google Ads & Meta Ads",
    problem:
      "Waiting months for organic reach isn't always practical when you need immediate feedback, customer inquiries, or market validation.",
    whoNeedsIt:
      "Businesses with an established offer and a clear budget who want to test demand and reach high-intent buyers promptly.",
    firstStep:
      "Create a targeted search campaign around high-intent keywords or targeted social audiences with a defined daily budget and dedicated landing page.",
  },
  {
    id: "analytics-tracking",
    number: "06",
    title: "Analytics, Tracking & Optimization",
    problem:
      "Running marketing campaigns without conversion tracking means spending money blindly without knowing what produces revenue.",
    whoNeedsIt:
      "Any business investing time or money in digital marketing that wants complete clarity on where inquiries and sales come from.",
    firstStep:
      "Configure Google Analytics 4 key events and Meta conversion tracking for form submissions, phone calls, and key interactions.",
  },
];

export const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    title: "SEO fundamentals for beginners",
    category: "Search Optimization",
    summary:
      "How search engines index content, choose rankings, and how beginners can structure their site for organic discovery.",
    readTime: "6 min read",
  },
  {
    title: "How to plan social media content",
    category: "Social Strategy",
    summary:
      "A sustainable weekly system to plan, draft, and schedule social posts that genuinely connect with your audience.",
    readTime: "5 min read",
  },
  {
    title: "How to turn website visitors into inquiries",
    category: "Conversion Optimization",
    summary:
      "The practical elements of high-converting pages: clear headlines, low friction forms, and authentic trust indicators.",
    readTime: "7 min read",
  },
  {
    title: "Google Ads versus Meta Ads",
    category: "Paid Advertising",
    summary:
      "Understanding search intent vs. interest targeting to choose the right ad channel for your specific business model.",
    readTime: "6 min read",
  },
  {
    title: "Content marketing for small businesses",
    category: "Content Strategy",
    summary:
      "How to create educational guides and case breakdowns that answer real buyer questions without a huge marketing team.",
    readTime: "8 min read",
  },
  {
    title: "How to measure digital marketing performance",
    category: "Analytics & Tracking",
    summary:
      "Ditching vanity metrics like clicks and impressions to focus on qualified leads, cost per inquiry, and business ROI.",
    readTime: "5 min read",
  },
  {
    title: "Website essentials for a new business",
    category: "Web & Presence",
    summary:
      "The 5 foundational pages and structural decisions every small business website needs before launching publicly.",
    readTime: "6 min read",
  },
  {
    title: "Building a practical digital marketing plan",
    category: "Growth Strategy",
    summary:
      "A step-by-step roadmap to assess your budget, select 1–2 key channels, and execute consistently over 90 days.",
    readTime: "9 min read",
  },
];

export const WHO_WE_HELP = [
  {
    title: "Small businesses",
    description:
      "Building a trustworthy online presence, attracting local inquiries, and making marketing decisions that fit realistic budgets.",
    tag: "Local & Service",
  },
  {
    title: "Startups & founders",
    description:
      "Establishing digital foundations, validating product offers, and setting up initial customer acquisition channels.",
    tag: "Early Stage",
  },
  {
    title: "Creators & independent professionals",
    description:
      "Developing visibility, organizing useful content, and turning an audience into direct consulting or project inquiries.",
    tag: "Personal Brands",
  },
  {
    title: "Service businesses",
    description:
      "Improving inquiry quality, streamlining customer intake, and ensuring their website works as an effective sales asset.",
    tag: "B2B & B2C Services",
  },
  {
    title: "Growing teams",
    description:
      "Understanding digital marketing channels better so they can make informed decisions without confusing agency jargon.",
    tag: "In-House Teams",
  },
];

export const ABOUT_SECTION = {
  heading: "Digital growth should be easier to understand.",
  paragraphs: [
    "Dizital Grow exists to make digital growth more practical and accessible. We focus on helping businesses understand their opportunities, choose suitable digital channels, and make informed decisions about their online presence.",
    "We believe good digital marketing starts with understanding the business, the audience, and the problem to solve—not simply using more tools or publishing more content.",
    "Rather than treating marketing as a mysterious black box, we break down strategies into clear, actionable steps that respect your resources and align with your business goals.",
  ],
  commitments: [
    {
      title: "Honest Assessments",
      desc: "We tell you what channels are worth pursuing and which ones you can safely ignore right now.",
    },
    {
      title: "Practical Execution",
      desc: "We focus on building reliable foundations that work sustainably, not temporary gimmicks.",
    },
    {
      title: "Clear Communication",
      desc: "No confusing technical buzzwords, fake authority, or exaggerated guarantees. Plain language always.",
    },
  ],
};

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Understand",
    title: "Understand",
    description:
      "Learn about your business, target audience, current online presence, goals, and constraints to establish a realistic baseline.",
  },
  {
    step: "02",
    name: "Prioritize",
    title: "Prioritize",
    description:
      "Identify the most impactful opportunities and select realistic next steps based on your specific goals and budget.",
  },
  {
    step: "03",
    name: "Implement",
    title: "Implement",
    description:
      "Put the agreed strategy into action through relevant website improvements, SEO structure, content, or targeted advertising.",
  },
  {
    step: "04",
    name: "Measure & improve",
    title: "Measure & improve",
    description:
      "Review meaningful indicators, learn from actual user response, and continuously refine the approach for sustainable growth.",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "What is digital growth?",
    answer:
      "Digital growth is the intentional process of using online channels—such as a well-structured website, search visibility, helpful content, and targeted outreach—to increase awareness, attract relevant visitors, and turn them into paying customers or engaged followers.",
  },
  {
    question: "Where should a small business start?",
    answer:
      "Start with a clear, fast, mobile-friendly website that communicates exactly what you offer and how to contact you. Once that foundation is solid, focus on one or two discovery channels that best match where your target audience looks for solutions.",
  },
  {
    question: "Do I need a website before starting SEO?",
    answer:
      "Yes. Search engine optimization requires digital assets that search engines can index, evaluate, and rank. Having your own website ensures you control your brand presence, content structure, and conversion journey rather than relying solely on rented social platforms.",
  },
  {
    question: "How often should I post on social media?",
    answer:
      "Consistency and relevance matter far more than high frequency. Posting 2 to 3 valuable, well-crafted updates each week that genuinely inform or engage your audience will outperform daily low-effort posts that receive no engagement.",
  },
  {
    question: "Should I invest in SEO or paid advertising first?",
    answer:
      "It depends on your timeline and budget. Paid advertising provides immediate visibility and helps validate your offer quickly, while SEO builds compounding organic visibility over months. Many businesses start with targeted ads to test demand while building foundational SEO in parallel.",
  },
  {
    question: "Can Dizital Grow help a business that is just starting?",
    answer:
      "Absolutely. We frequently help early-stage businesses and solo founders avoid costly mistakes by clarifying their core offer, setting up an effective digital presence, and prioritizing realistic next steps within their budget.",
  },
  {
    question: "How do I know which marketing channel is right for me?",
    answer:
      "The right channel depends on where your potential customers actively look for answers. If they search on Google with specific intent, SEO and search ads work well. If visual storytelling and discovery drive interest, social media and Meta ads are often more effective.",
  },
  {
    question: "How can I contact Dizital Grow?",
    answer:
      "You can submit an inquiry through our contact page or email us directly at contact@dizitalgrow.in. Share a brief overview of your business and goals, and we will follow up with practical advice and recommended next steps.",
  },
];

export const CONTACT_METHODS = [
  {
    iconName: "Mail",
    label: "Direct Email",
    value: "contact@dizitalgrow.in",
    href: "mailto:contact@dizitalgrow.in",
    description: "Send us project details or general inquiries anytime.",
  },
  {
    iconName: "Instagram",
    label: "Instagram",
    value: "@dizitalgrow",
    href: "https://www.instagram.com/dizitalgrow/",
    description: "Follow practical tips and digital growth insights.",
  },
];
