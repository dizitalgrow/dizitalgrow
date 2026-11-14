export interface SolutionDetail {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  whoNeedsThis: {
    audience: string;
    description: string;
  }[];
  whyUseful: string[];
  recommendedPages: {
    page: string;
    purpose: string;
  }[];
  designConsiderations: string[];
  technicalConsiderations: string[];
  howWeHelp: {
    step: string;
    title: string;
    description: string;
  }[];
  relatedServices: {
    name: string;
    href: string;
    description: string;
  }[];
  relatedTools: {
    name: string;
    href: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  "personal-websites": {
    slug: "personal-websites",
    title: "Personal Websites",
    eyebrow: "PERSONAL AUTHORITY & IDENTITY",
    h1: "Personal Websites Built to Establish Authority and Create Opportunities",
    metaTitle: "Personal Website Development | DizitalGrow",
    metaDescription:
      "Build a polished personal brand website designed to showcase your domain expertise, attract consulting enquiries, speaking engagements, and career opportunities.",
    heroDescription:
      "A personal website provides a permanent home on the internet that you own completely. We build fast, authoritative personal platforms for consultants, creators, executives, and specialists to showcase their work and capture high-value inbound opportunities.",
    whoNeedsThis: [
      {
        audience: "Consultants & Advisors",
        description: "Subject-matter experts who need an undisputed digital presence to validate credentials and book client discovery calls.",
      },
      {
        audience: "Founders & Executives",
        description: "Company leaders who want a dedicated personal hub for thought leadership, media features, and investor relationships.",
      },
      {
        audience: "Specialists & Creators",
        description: "Professionals seeking to reduce reliance on third-party social algorithms and own their direct audience relationships.",
      },
    ],
    whyUseful: [
      "Establishes immediate credibility before client meetings, investor pitches, or speaking invitations.",
      "Acts as a permanent central hub connecting your published articles, interviews, case studies, and social channels.",
      "Enables direct consultation booking and high-intent inquiry routing without platform commission fees.",
      "Protects your personal name on Google search results with authoritative SEO foundations.",
    ],
    recommendedPages: [
      { page: "Home / Overview", purpose: "Clear personal positioning, key achievements, and primary calls to action." },
      { page: "About / Story", purpose: "Career trajectory, philosophy, verified credentials, and media mentions." },
      { page: "Services / Consulting", purpose: "Structured advisory packages, scope outlines, and engagement models." },
      { page: "Writing / Insights", purpose: "Search-optimized articles, essays, and thought leadership publications." },
      { page: "Contact / Booking", purpose: "Direct calendar booking or inquiry form with qualifying questions." },
    ],
    designConsiderations: [
      "Distinguished, high-contrast typography that conveys intellectual authority.",
      "Generous whitespace and clean layout hierarchy rather than gimmicky animations.",
      "High-resolution portrait photography presentation with responsive aspect ratios.",
      "Mobile ergonomics ensuring smooth readability on handheld devices.",
    ],
    technicalConsiderations: [
      "Sub-second load times via Next.js static rendering for instantaneous page transitions.",
      "Personal Schema.org JSON-LD structured data linking verified social profiles.",
      "Headless CMS integration for effortless article drafting and publishing.",
      "Bot-defended consultation inquiry forms delivering instant notifications.",
    ],
    howWeHelp: [
      { step: "01", title: "Positioning & Architecture", description: "We define your core message, audience segments, and inquiry pathways." },
      { step: "02", title: "Custom Next.js Development", description: "We engineer a lightweight, mobile-first website tailored to your personal aesthetic." },
      { step: "03", title: "Content Publishing Setup", description: "We connect an easy-to-use publishing system so you can write and update articles anytime." },
      { step: "04", title: "Launch & Google Verification", description: "We deploy the website, verify Google Search Console indexing, and test booking funnels." },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/web-development", description: "High-performance web development engineering." },
      { name: "SEO & Digital Visibility", href: "/services/seo-visibility", description: "Rank your personal name and expertise on Google search." },
    ],
    relatedTools: [
      { name: "LinkedIn Headline Generator", href: "/tools/linkedin-headline-generator" },
      { name: "Resume Summary Builder", href: "/tools/resume-summary-builder" },
    ],
    faqs: [
      {
        question: "Can I manage and publish articles on my personal website myself?",
        answer: "Yes. We configure an intuitive headless CMS (like Sanity) that allows you to draft, edit, and publish essays or case studies from any browser with zero coding required.",
      },
      {
        question: "How long does it take to launch a personal website?",
        answer: "Typically 2 to 3 weeks from wireframe alignment to live deployment, provided profile assets and written bio details are available.",
      },
    ],
  },

  "portfolio-websites": {
    slug: "portfolio-websites",
    title: "Portfolio Websites",
    eyebrow: "CREATIVE & TECHNICAL SHOWCASES",
    h1: "Portfolio Websites That Present Your Work With Craft and Clarity",
    metaTitle: "Portfolio Website Development | DizitalGrow",
    metaDescription:
      "Custom portfolio websites engineered for designers, architects, studios, and agencies. Fast visual loading, responsive project galleries, and seamless client enquiry flows.",
    heroDescription:
      "A portfolio website should allow your projects to speak with clarity. We engineer fast, image-optimized portfolio websites for design studios, architects, agencies, and creative professionals who need their craft showcased without layout shifts or slow page loads.",
    whoNeedsThis: [
      {
        audience: "Architects & Interior Designers",
        description: "Studios that need high-resolution spatial photography loaded with speed and precision.",
      },
      {
        audience: "UI/UX & Product Designers",
        description: "Designers presenting in-depth case studies, problem statements, wireframes, and design systems.",
      },
      {
        audience: "Creative Studios & Production Agencies",
        description: "Agencies requiring a polished, modern platform to present commercial client campaigns and pitch reels.",
      },
    ],
    whyUseful: [
      "Delivers a bespoke visual experience that reflects the caliber of your creative output.",
      "Prevents high bounce rates by serving next-gen image formats that load in milliseconds.",
      "Enables prospective clients to filter projects by industry, style, and deliverable type.",
      "Guides impressed visitors directly to project commission and RFP forms.",
    ],
    recommendedPages: [
      { page: "Selected Works", purpose: "Curated grid of flagship projects with high-impact cover imagery." },
      { page: "Project Case Studies", purpose: "Deep dive into client challenge, concept, execution, and deliverables." },
      { page: "Studio / Practice", purpose: "Design philosophy, methodology, awards, and team introductions." },
      { page: "Client Enquiry / RFP", purpose: "Straightforward project brief intake form with timeline options." },
    ],
    designConsiderations: [
      "Strict zero-clutter layout where project imagery and typography take center stage.",
      "Smooth, subtle transition animations that respect user preferences and reduced motion.",
      "Dark and light mode adaptation that preserves visual contrast for diverse photography.",
      "Responsive masonry and grid layouts tested on small phones and ultra-wide displays.",
    ],
    technicalConsiderations: [
      "Automated image optimization pipeline (WebP/AVIF) with zero Cumulative Layout Shift (CLS).",
      "Dynamic filtering and category tagging without full page reloads.",
      "Fast modal and light-box project viewing states with keyboard navigation.",
      "Structured CreativeWork and Organization schema markup for search engines.",
    ],
    howWeHelp: [
      { step: "01", title: "Curation & Visual Hierarchy", description: "We plan project categorization, thumbnail aspect ratios, and case study narrative structures." },
      { step: "02", title: "Performance Engineering", description: "We build the site in Next.js, optimizing CDN assets so full-resolution photography loads effortlessly." },
      { step: "03", title: "Interactive Details", description: "We add responsive project sliders, zoom viewers, and enquiry callouts." },
      { step: "04", title: "Launch & Validation", description: "We test across iOS Safari, Android Chrome, and desktop screens for flawless presentation." },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/web-development", description: "Engineered web development primitives." },
      { name: "Conversion Tracking", href: "/services/conversion-tracking", description: "Track RFP inquiries and client brief submissions." },
    ],
    relatedTools: [
      { name: "Portfolio Content Planner", href: "/tools/portfolio-content-planner" },
      { name: "Open Graph Preview", href: "/tools/open-graph-preview" },
    ],
    faqs: [
      {
        question: "Will high-resolution images slow down my portfolio website?",
        answer: "No. We utilize Next.js automatic image optimization which serves appropriately sized, highly compressed modern WebP and AVIF formats based on each visitor's exact screen dimensions.",
      },
    ],
  },

  "professional-websites": {
    slug: "professional-websites",
    title: "Professional Websites",
    eyebrow: "PRACTICES & LICENSED ADVISORS",
    h1: "Professional Websites Built for Trust, Compliance and Client Confidence",
    metaTitle: "Professional Practice Website Development | DizitalGrow",
    metaDescription:
      "Website development for doctors, medical clinics, chartered accountants, legal advocates, and financial advisors. Engineered for credibility and client consultations.",
    heroDescription:
      "Professional service practices require an elevated standard of trust, dignity, and clarity. We engineer websites for clinics, legal firms, accounting practices, and licensed specialists that communicate competence and guide clients toward an initial consultation.",
    whoNeedsThis: [
      {
        audience: "Medical Clinics & Specialists",
        description: "Doctors, dental practitioners, and clinics needing patient information and appointment inquiries.",
      },
      {
        audience: "Legal Advocates & Law Firms",
        description: "Law firms requiring practice area descriptions, attorney credentials, and confidential consultation intake.",
      },
      {
        audience: "Chartered Accountants & Tax Advisors",
        description: "Accounting firms needing corporate tax advisory, audit service breakdowns, and regulatory compliance info.",
      },
    ],
    whyUseful: [
      "Validates professional qualifications, licenses, and industry accreditations upfront.",
      "Answers common patient and client questions before they ever schedule a consultation.",
      "Eliminates phone tag with clear consultation request forms and direct WhatsApp assistance.",
      "Positions the practice prominently for local geographic search queries.",
    ],
    recommendedPages: [
      { page: "Practice Overview", purpose: "Core focus areas, team credentials, and clear consultation pathways." },
      { page: "Practice Areas / Services", purpose: "Itemized legal, medical, or accounting expertise with FAQs." },
      { page: "Professional Team Profiles", purpose: "Individual bios, qualifications, bar admissions, or medical councils." },
      { page: "Client Knowledge Hub", purpose: "Informative articles explaining legal processes, tax tips, or healthcare." },
      { page: "Appointment / Contact", purpose: "Clinic address, location map, office hours, and booking requests." },
    ],
    designConsiderations: [
      "Conservative, dignified color harmony that inspires confidence and institutional reliability.",
      "High legibility typography with accessible font sizes and generous line heights.",
      "Clear visual indicators for emergency contacts, office locations, and operating hours.",
      "Prominent compliance disclaimers adhering to regulatory and professional council norms.",
    ],
    technicalConsiderations: [
      "Strict data privacy standards with end-to-end encrypted inquiry transmission.",
      "LocalBusiness and MedicalBusiness / LegalService structured schema markup.",
      "Accessibility compliance (WCAG 2.2 AA) for patients and clients of all abilities.",
      "Fast serverless routing with zero third-party tracking scripts that compromise privacy.",
    ],
    howWeHelp: [
      { step: "01", title: "Practice Discovery", description: "We map your practice areas, client concerns, and legal or regulatory boundaries." },
      { step: "02", title: "Content & Trust Architecture", description: "We craft clear service descriptions and format practitioner credentials for maximum clarity." },
      { step: "03", title: "Development & Security", description: "We engineer a high-speed Next.js platform with protected consultation intake." },
      { step: "04", title: "Local Search Optimization", description: "We configure local SEO foundations, Google Business linking, and schema." },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/web-development", description: "Modern practice website engineering." },
      { name: "SEO & Digital Visibility", href: "/services/seo-visibility", description: "Local discovery for professional practices." },
    ],
    relatedTools: [
      { name: "Service Pricing Calculator", href: "/tools/service-pricing-calculator" },
      { name: "Quotation Generator", href: "/tools/quotation-generator" },
    ],
    faqs: [
      {
        question: "Can we include online appointment booking for our clinic or firm?",
        answer: "Yes. We can integrate calendar booking tools or structured multi-step inquiry forms that capture patient/client requirements and send instant alerts to your reception team.",
      },
    ],
  },

  "business-websites": {
    slug: "business-websites",
    title: "Business Websites",
    eyebrow: "COMMERCIAL GROWTH & LEAD GENERATION",
    h1: "Business Websites Engineered to Explain Your Value and Generate Enquiries",
    metaTitle: "Business Website Development | DizitalGrow",
    metaDescription:
      "High-performance business website development designed to turn anonymous visitors into verified commercial enquiries, sales calls, and long-term clients.",
    heroDescription:
      "A commercial business website should not merely exist as an online brochure. It must clearly explain what you offer, build immediate trust, differentiate your company from competitors, and provide frictionless pathways to contact your sales team.",
    whoNeedsThis: [
      {
        audience: "B2B Service Companies",
        description: "Companies selling corporate services, industrial consulting, or logistics to business clients.",
      },
      {
        audience: "Regional & Multi-City Businesses",
        description: "Enterprises seeking to expand their customer reach beyond traditional offline referrals.",
      },
      {
        audience: "Commercial Contractors & Suppliers",
        description: "Contractors requiring qualified RFP submissions, project specifications, and buyer trust.",
      },
    ],
    whyUseful: [
      "Provides a compelling answer to 'Why choose your company over the competition?' within 5 seconds.",
      "Eliminates lost revenue caused by slow loading, mobile errors, and confusing layouts.",
      "Equips your sales team with an authoritative digital asset to share during outbound discussions.",
      "Connects digital advertising spend directly to verified customer phone calls and form submissions.",
    ],
    recommendedPages: [
      { page: "Home", purpose: "Strong value proposition, client challenges solved, core offerings, and proof points." },
      { page: "Services / Solutions", purpose: "Detailed breakdowns of deliverables, methodology, and commercial benefits." },
      { page: "About / Company", purpose: "Company mission, leadership, operational standards, and differentiators." },
      { page: "Case Studies / Work", purpose: "Verified client problem, implemented approach, and tangible business outcomes." },
      { page: "Contact / Request a Quote", purpose: "Multi-field RFP form, verified phone numbers, and WhatsApp gateways." },
    ],
    designConsiderations: [
      "Engineered visual hierarchy guiding visitor eyes directly toward key value messages.",
      "Consistent CTA button styling with high-contrast accenting.",
      "Clear scannability using technical data blocks, bullet points, and distinct cards.",
      "Flawless mobile layout ensuring forms are easily completed using thumb navigation.",
    ],
    technicalConsiderations: [
      "Sub-second Core Web Vitals (LCP < 1.0s, CLS 0) for superior search engine preference.",
      "Organization and Service JSON-LD schema for rich search engine result snippets.",
      "Bot protection (honeypot fields and rate limiting) preventing spam form submissions.",
      "Direct integration with EmailJS and WhatsApp routing for instant sales team alerts.",
    ],
    howWeHelp: [
      { step: "01", title: "Commercial Strategy", description: "We identify your target buyer persona, sales objections, and key conversion actions." },
      { step: "02", title: "Copywriting & Architecture", description: "We write direct, benefit-driven copy that eliminates fluff and explains your value clearly." },
      { step: "03", title: "Next.js Engineering", description: "We develop the site with clean, maintainable TypeScript and responsive Tailwind CSS." },
      { step: "04", title: "Conversion Setup & Testing", description: "We configure GA4 telemetry, test all forms, and verify end-to-end inquiry delivery." },
    ],
    relatedServices: [
      { name: "Website Development", href: "/services/web-development", description: "Custom business web engineering." },
      { name: "Google Ads", href: "/services/google-ads", description: "Target commercial search keywords to drive business traffic." },
      { name: "Conversion Tracking", href: "/services/conversion-tracking", description: "Verify which marketing campaigns drive business inquiries." },
    ],
    relatedTools: [
      { name: "Invoice Generator", href: "/tools/invoice-generator" },
      { name: "Quotation Generator", href: "/tools/quotation-generator" },
    ],
    faqs: [
      {
        question: "How do you ensure our new business website generates more enquiries?",
        answer: "We structure the layout around conversion rate optimization principles: prominent value propositions, clear social proof, concise benefit-driven copy, and frictionless inquiry forms with direct WhatsApp options.",
      },
    ],
  },

  "ecommerce-websites": {
    slug: "ecommerce-websites",
    title: "Ecommerce Websites",
    eyebrow: "ONLINE STOREFRONTS & D2C BRANDS",
    h1: "Ecommerce Websites Engineered for Fast Page Loads and High Checkout Conversion",
    metaTitle: "Ecommerce Website Development | DizitalGrow",
    metaDescription:
      "Fast, conversion-focused e-commerce website development. Streamlined product catalogs, lightning-fast mobile checkouts, and server-side purchase tracking.",
    heroDescription:
      "In online retail, every 100ms delay in page load reduces conversion rates. We engineer fast, clean e-commerce experiences that present product catalogs with clarity, eliminate mobile checkout friction, and record purchase signals with server-side accuracy.",
    whoNeedsThis: [
      {
        audience: "D2C Brands",
        description: "Direct-to-consumer lifestyle, fashion, wellness, and consumer brands scaling digital sales.",
      },
      {
        audience: "Boutique Retailers",
        description: "Independent retail stores moving from physical-only sales into nationwide shipping.",
      },
      {
        audience: "Specialty Product Manufacturers",
        description: "Manufacturers selling proprietary equipment or goods directly to consumers and businesses.",
      },
    ],
    whyUseful: [
      "Sub-second catalog browsing and instant image switches keep shoppers engaged.",
      "Mobile-optimized cart and checkout flows that minimize abandoned cart drop-offs.",
      "Server-side Meta CAPI and GA4 tracking that recovers up to 28% of lost purchase signals.",
      "Clean product schema enabling Google Merchant and organic shopping tab visibility.",
    ],
    recommendedPages: [
      { page: "Storefront Home", purpose: "Featured collections, bestsellers, trust badges, and special promotions." },
      { page: "Category / Collection Pages", purpose: "Fast filtering, sorting, price toggles, and instant product previews." },
      { page: "Product Detail Pages", purpose: "High-res gallery, clear pricing, inventory indicators, specs, and reviews." },
      { page: "Cart & Checkout", purpose: "Frictionless multi-gateway payment, shipping estimator, and order summary." },
      { page: "Order Tracking & Account", purpose: "Customer self-service for delivery status, receipts, and reorders." },
    ],
    designConsiderations: [
      "High-clarity product photography presentation with zoom and gallery swiping.",
      "Prominent, sticky 'Add to Cart' and 'Buy Now' buttons on mobile screens.",
      "Transparent pricing, shipping policies, and delivery timelines displayed upfront.",
      "Accessible trust badges highlighting secure payment, easy returns, and customer care.",
    ],
    technicalConsiderations: [
      "Server-side Meta Conversions API (CAPI) with Purchase event deduplication.",
      "Google Merchant Center product feed integration and schema formatting.",
      "Fast payment gateway integrations (Razorpay, Stripe, UPI, Cash on Delivery).",
      "Dynamic inventory management and automated order confirmation email/SMS alerts.",
    ],
    howWeHelp: [
      { step: "01", title: "Catalog Architecture", description: "We organize product taxonomy, variants, attributes, and filtering logic." },
      { step: "02", title: "Storefront Engineering", description: "We develop a high-speed Next.js shopping interface with instant cart state updates." },
      { step: "03", title: "Payment & Shipping Integration", description: "We connect secure payment providers and automated courier shipping APIs." },
      { step: "04", title: "Telemetry & CAPI Setup", description: "We install server-side purchase tracking to ensure accurate ad attribution." },
    ],
    relatedServices: [
      { name: "Meta Ads", href: "/services/meta-ads", description: "Scale e-commerce sales with catalog sales and retargeting ads." },
      { name: "Meta Conversions API", href: "/meta-capi", description: "Protect your purchase tracking from browser ad blockers." },
      { name: "Conversion Tracking", href: "/services/conversion-tracking", description: "Track average order value, cart adds, and checkout starts." },
    ],
    relatedTools: [
      { name: "GST Calculator", href: "/tools/gst-calculator" },
      { name: "Discount Calculator", href: "/tools/discount-calculator" },
    ],
    faqs: [
      {
        question: "Can you migrate our existing store from Shopify or WooCommerce?",
        answer: "Yes. We can migrate product catalogs, customer histories, and SEO redirects cleanly to ensure zero loss in search engine rankings.",
      },
    ],
  },

  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    eyebrow: "SOFTWARE PRODUCTS & CLOUD PLATFORMS",
    h1: "SaaS Development Built for Scalability, Speed and Market Validation",
    metaTitle: "SaaS Product Development & Web Applications | DizitalGrow",
    metaDescription:
      "Full-stack SaaS application development for founders and enterprises. Next.js engineering, multi-tenant databases, secure authentication, and recurring billing.",
    heroDescription:
      "Turning a software product concept into a market-ready SaaS application requires disciplined architecture. We build scalable SaaS MVPs, customer portals, and cloud applications using modern Next.js and robust cloud backends.",
    whoNeedsThis: [
      {
        audience: "Bootstrapped Founders",
        description: "Entrepreneurs building a software MVP with clean code that can scale as user adoption grows.",
      },
      {
        audience: "Operating Businesses",
        description: "Companies productizing their internal processes into commercial SaaS platforms for their industry.",
      },
      {
        audience: "Early-Stage Startups",
        description: "Ventures requiring rapid, reliable frontend and backend engineering to prove product-market fit.",
      },
    ],
    whyUseful: [
      "Accelerates time-to-market by using modern serverless Next.js and API architecture.",
      "Ensures customer data is protected with enterprise-grade authentication and encryption.",
      "Provides intuitive subscriber dashboards that reduce onboarding churn and support tickets.",
      "Integrates recurring billing and tier management seamlessly.",
    ],
    recommendedPages: [
      { page: "Marketing Landing Page", purpose: "Feature breakdowns, interactive product demos, and pricing tiers." },
      { page: "User Onboarding & Auth", purpose: "Frictionless signup, login, password recovery, and email verification." },
      { page: "Application Dashboard", purpose: "Core product workspace, analytics, and primary tool features." },
      { page: "Billing & Subscription", purpose: "Plan upgrades, payment method updates, invoice downloads, and usage." },
      { page: "Team & Settings", purpose: "Member invitations, role-based access control, and API token management." },
    ],
    designConsiderations: [
      "Clean UI system with predictable navigation and consistent data tables.",
      "Helpful empty states and guided micro-copy to assist first-time users.",
      "Keyboard shortcuts and accessible form controls for power users.",
      "Dark and light theme support designed for extended daily operational use.",
    ],
    technicalConsiderations: [
      "Scalable SQL/NoSQL database architecture with indexed queries and migrations.",
      "Secure session handling (JWT, OAuth 2.0, multi-factor authentication).",
      "Webhook listeners for subscription lifecycle events (trial end, payment success, cancellation).",
      "Telemetry tracking user activation milestones and feature usage metrics.",
    ],
    howWeHelp: [
      { step: "01", title: "Product Blueprint", description: "We define core user personas, minimum viable features, and database schemas." },
      { step: "02", title: "Frontend & API Engineering", description: "We build responsive React interfaces connected to fast serverless endpoints." },
      { step: "03", title: "Billing & Auth Setup", description: "We configure authentication security and recurring subscription billing gateways." },
      { step: "04", title: "Launch & Performance Care", description: "We deploy to global edge infrastructure with automated database backups." },
    ],
    relatedServices: [
      { name: "Web Application Development", href: "/services/web-applications", description: "Custom portals and business software engineering." },
      { name: "Conversion Tracking", href: "/services/conversion-tracking", description: "Track trial signups, active users, and paid conversions." },
    ],
    relatedTools: [
      { name: "JSON Formatter", href: "/tools/json-formatter" },
      { name: "Service Pricing Calculator", href: "/tools/service-pricing-calculator" },
    ],
    faqs: [
      {
        question: "Do we retain complete ownership of the SaaS codebase?",
        answer: "Yes, 100%. All custom code, database schemas, and intellectual property developed for your project belong exclusively to you upon payment completion.",
      },
    ],
  },

  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Pages",
    eyebrow: "PAID CAMPAIGNS & CONVERSION LIFT",
    h1: "High-Converting Landing Pages Engineered for Paid Ad Campaigns",
    metaTitle: "Landing Page Development & Optimization | DizitalGrow",
    metaDescription:
      "Custom landing page development for Google and Meta ad campaigns. Fast loading, message-matched copy, and frictionless lead capture forms.",
    heroDescription:
      "Sending paid traffic to a general homepage wastes ad spend. A high-converting campaign landing page focuses on one specific message, eliminates navigation distractions, and guides visitors directly toward a single conversion action.",
    whoNeedsThis: [
      {
        audience: "Google & Meta Advertisers",
        description: "Businesses running paid ads that need dedicated landing pages matching specific search keywords or ad creatives.",
      },
      {
        audience: "Product & Service Launches",
        description: "Companies launching a new offer, webinar, consultation, or seasonal promotion.",
      },
      {
        audience: "Lead Generation Campaigns",
        description: "Firms requiring high-quality, pre-qualified inbound leads from motivated prospects.",
      },
    ],
    whyUseful: [
      "Achieves higher Google Ads Quality Scores, significantly lowering your cost-per-click (CPC).",
      "Maintains direct message match between ad copy and page headline, stopping immediate visitor bounce.",
      "Removes global navigation menus to prevent visitors from wandering off before converting.",
      "Loads in under 0.8 seconds on mobile networks, capturing impatient ad clickers.",
    ],
    recommendedPages: [
      { page: "Single-Focus Landing Page", purpose: "Hero with hook, problem breakdown, solution, social proof, FAQs, and sticky CTA form." },
      { page: "Thank You / Next Steps Page", purpose: "Confirmation message, next expectations, and conversion tracking triggers." },
    ],
    designConsiderations: [
      "Hero section with immediate value clarity visible above the mobile fold.",
      "Concise benefit bullet points addressing specific customer hesitations.",
      "Clear social proof, testimonials, and verified technical credentials.",
      "Sticky mobile CTA button ensuring contact forms are always one tap away.",
    ],
    technicalConsiderations: [
      "Ultra-lightweight bundle size with zero unnecessary external scripts.",
      "Exact event trigger matching for Google Ads Enhanced Conversions and Meta CAPI.",
      "URL parameter retention passing UTM source, campaign, and keyword data into form submissions.",
      "Instant notification webhook delivering leads directly to your sales team's WhatsApp or CRM.",
    ],
    howWeHelp: [
      { step: "01", title: "Offer & Angle Alignment", description: "We align the landing page headline directly with your winning Google or Meta ad copy." },
      { step: "02", title: "Frictionless Copy & Layout", description: "We craft persuasive copy and design a mobile-optimized layout with zero distractions." },
      { step: "03", title: "Rapid Development", description: "We build the page in Next.js for sub-second speeds and integrate bot-proof forms." },
      { step: "04", title: "Telemetry Validation", description: "We test conversion pixels, thank-you page redirects, and lead notifications." },
    ],
    relatedServices: [
      { name: "Google Ads", href: "/services/google-ads", description: "Connect high-intent search ads with dedicated landing pages." },
      { name: "Meta Ads", href: "/services/meta-ads", description: "High-converting social landing pages." },
      { name: "Conversion Tracking", href: "/services/conversion-tracking", description: "Verify every landing page submission in real time." },
    ],
    relatedTools: [
      { name: "UTM Builder", href: "/tools/utm-builder" },
      { name: "Meta Title Generator", href: "/tools/meta-title-generator" },
    ],
    faqs: [
      {
        question: "Why shouldn't I just send ad traffic to our homepage?",
        answer: "A homepage serves multiple audiences and offers dozens of competing links. A dedicated landing page focuses on one specific promise, delivers message match with your ad, and typically converts at 2x to 4x higher rates.",
      },
    ],
  },

  "web-applications": {
    slug: "web-applications",
    title: "Web Applications",
    eyebrow: "INTERACTIVE BUSINESS SOFTWARE",
    h1: "Web Applications Built Around Your Unique Operational Workflows",
    metaTitle: "Web Application Development | DizitalGrow",
    metaDescription:
      "Custom web application development for client portals, internal dashboards, and automated business workflows. Built on modern Next.js and secure APIs.",
    heroDescription:
      "When standard off-the-shelf software fails to match your business processes, custom web applications bridge the gap. We engineer browser-based platforms that help teams collaborate, automate repetitive tasks, and provide clients with seamless self-service experiences.",
    whoNeedsThis: [
      {
        audience: "Operating Service Firms",
        description: "Companies seeking to replace fragmented spreadsheets with automated, centralized web software.",
      },
      {
        audience: "Client-Facing Practices",
        description: "Firms requiring secure login portals for document exchange, project milestones, and status alerts.",
      },
      {
        audience: "Logistics & Field Operations",
        description: "Businesses managing remote teams, scheduling, and job dispatches in real time.",
      },
    ],
    whyUseful: [
      "Eliminates hours of manual data entry and reduces costly human operational errors.",
      "Provides clients with 24/7 visibility into project deliverables and account statements.",
      "Integrates disparate business tools (accounting, CRM, email) into a single operational interface.",
      "Scales cleanly as your transaction volume and team size expand.",
    ],
    recommendedPages: [
      { page: "Portal Login & Security", purpose: "Role-based authentication with secure session management." },
      { page: "Operational Dashboard", purpose: "Key business metrics, active jobs, pending actions, and team updates." },
      { page: "Job / Record Management", purpose: "Structured data tables, search filters, document uploads, and audit logs." },
      { page: "Reports & Analytics", purpose: "Automated exportable reports, charts, and operational summaries." },
      { page: "System Settings", purpose: "User permissions, webhook configurations, and API integrations." },
    ],
    designConsiderations: [
      "Ergonomic, high-density data tables with sorting, pagination, and multi-filter controls.",
      "Instant visual feedback on user actions (saving states, alerts, progress bars).",
      "Responsive layout allowing supervisors and field teams to access records on tablets and phones.",
      "Accessible contrast and keyboard navigation for rapid daily business usage.",
    ],
    technicalConsiderations: [
      "Robust relational database architecture with clean normalization and indexing.",
      "Role-Based Access Control (RBAC) ensuring strict data isolation between users.",
      "Real-time webhook and WebSocket updates for live status synchronization.",
      "Automated automated database backup routines and audit trail logging.",
    ],
    howWeHelp: [
      { step: "01", title: "Workflow Analysis", description: "We map your actual daily business steps, data inputs, approvals, and bottlenecks." },
      { step: "02", title: "Database & API Design", description: "We design efficient database schemas and RESTful/GraphQL endpoints." },
      { step: "03", title: "Interface Engineering", description: "We build intuitive React interfaces with real-time state management and zero lag." },
      { step: "04", title: "Security & Staging Deployment", description: "We perform penetration and authorization tests before live deployment." },
    ],
    relatedServices: [
      { name: "Web Application Development", href: "/services/web-applications", description: "Our full-stack development service." },
      { name: "Mobile App Development", href: "/services/mobile-apps", description: "Companion mobile apps for your web software." },
    ],
    relatedTools: [
      { name: "JSON Formatter", href: "/tools/json-formatter" },
      { name: "Service Pricing Calculator", href: "/tools/service-pricing-calculator" },
    ],
    faqs: [
      {
        question: "Can our existing team easily learn how to use a custom web app?",
        answer: "Yes. We design interfaces around your team's existing terminology and daily mental models, avoiding unnecessary complexity and providing complete documentation.",
      },
    ],
  },

  "mobile-applications": {
    slug: "mobile-applications",
    title: "Mobile Applications",
    eyebrow: "IOS & ANDROID EXPERIENCES",
    h1: "Mobile Applications Designed Around Real User Needs and High Engagement",
    metaTitle: "Mobile Application Development | DizitalGrow",
    metaDescription:
      "Cross-platform iOS and Android mobile app development. Fast, responsive mobile applications with push notifications, offline storage, and seamless backend synchronization.",
    heroDescription:
      "Mobile applications give your business a permanent place on your customers' most personal devices. We design and build high-performance mobile apps for iOS and Android that engage users with push notifications, load instantly, and operate reliably even offline.",
    whoNeedsThis: [
      {
        audience: "D2C Stores & Retail Brands",
        description: "Brands wanting to boost repeat order frequency and customer lifetime value via dedicated mobile shopping.",
      },
      {
        audience: "On-Demand & Booking Services",
        description: "Platforms connecting service providers with consumers for appointments, ordering, and live status.",
      },
      {
        audience: "SaaS Platforms & Communities",
        description: "Software companies providing on-the-go companion apps for subscribers.",
      },
    ],
    whyUseful: [
      "Engages users directly with timely push notifications for order updates, reminders, and offers.",
      "Delivers superior speed and fluid touch gestures compared to mobile web browsers.",
      "Enables offline data caching so critical information remains accessible without internet access.",
      "Builds lasting brand affinity by keeping your company one tap away on home screens.",
    ],
    recommendedPages: [
      { page: "Onboarding & Auth", purpose: "Fast social login, phone OTP, and biometric Face ID/Fingerprint authentication." },
      { page: "Home Feed / Activity", purpose: "Personalized recommendations, status feeds, and quick action shortcuts." },
      { page: "Core Feature Screen", purpose: "Booking, shopping, task completion, or message workflows." },
      { page: "Notifications Center", purpose: "History of updates, order alerts, and promotional messages." },
      { page: "User Profile & Settings", purpose: "Account details, preferences, addresses, and customer support." },
    ],
    designConsiderations: [
      "Native feel following Apple Human Interface Guidelines and Google Material Design.",
      "Thumb-friendly bottom navigation bar and accessible 48x48px minimum tap targets.",
      "Subtle micro-animations providing satisfying feedback on button taps and swipes.",
      "Fluid transitions with zero stutter or dropped frames during screen switches.",
    ],
    technicalConsiderations: [
      "Cross-platform unified codebase delivering native performance on both iOS and Android.",
      "Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM) integration.",
      "Secure on-device token storage with hardware-backed encryption.",
      "Compliance with Apple App Store and Google Play Store review guidelines.",
    ],
    howWeHelp: [
      { step: "01", title: "Mobile UX Wireframing", description: "We map user journeys, screen flows, and interactive prototypes." },
      { step: "02", title: "Cross-Platform Engineering", description: "We build the mobile application with robust API integration and state management." },
      { step: "03", title: "Push Notification Setup", description: "We configure server-side push alert pipelines and background sync." },
      { step: "04", title: "App Store Publishing", description: "We assist through the complete Apple App Store and Google Play submission process." },
    ],
    relatedServices: [
      { name: "Mobile App Development", href: "/services/mobile-apps", description: "Full mobile development service." },
      { name: "Web Application Development", href: "/services/web-applications", description: "Unified backend powering web and mobile apps." },
    ],
    relatedTools: [
      { name: "Instagram Bio Generator", href: "/tools/instagram-bio-generator" },
      { name: "QR Code Generator", href: "/tools/qr-code-generator" },
    ],
    faqs: [
      {
        question: "How long does the app store review process take?",
        answer: "Apple App Store and Google Play Store reviews typically take 1 to 4 business days once the application is submitted. We guide you through all privacy and policy requirements to prevent rejections.",
      },
    ],
  },
};

