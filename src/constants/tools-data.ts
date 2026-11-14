export interface ToolMeta {
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  instructions: string[];
  exampleUseCases: string[];
  relatedToolSlugs: string[];
  relatedServiceSlug: string;
  relatedServiceName: string;
}

export interface ToolCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  toolSlugs: string[];
}

export const TOOL_CATEGORIES: Record<string, ToolCategory> = {
  "career-students": {
    slug: "career-students",
    name: "Career & Students",
    tagline: "Profile builders and career positioning utilities",
    description:
      "Free browser tools designed to help job seekers, students, and professionals craft compelling LinkedIn profiles, resumes, and portfolio outlines.",
    toolSlugs: [
      "linkedin-headline-generator",
      "linkedin-about-builder",
      "resume-summary-builder",
      "portfolio-content-planner",
    ],
  },
  "business-freelancers": {
    slug: "business-freelancers",
    name: "Business & Freelancers",
    tagline: "Commercial calculators, invoices and pricing utilities",
    description:
      "Calculators and document generators to help freelancers, contractors, and business owners calculate profitable rates, create invoices, and build quotations.",
    toolSlugs: [
      "freelance-rate-calculator",
      "service-pricing-calculator",
      "invoice-generator",
      "quotation-generator",
    ],
  },
  "marketing-seo": {
    slug: "marketing-seo",
    name: "Marketing & SEO",
    tagline: "Search previews, UTM builders and metadata generators",
    description:
      "Essential digital marketing utilities to preview Google search snippets, construct clean UTM tracking URLs, generate URL slugs, and audit Open Graph cards.",
    toolSlugs: [
      "meta-title-generator",
      "serp-preview",
      "utm-builder",
      "slug-generator",
      "open-graph-preview",
    ],
  },
  "creators-social-media": {
    slug: "creators-social-media",
    name: "Creators & Social Media",
    tagline: "Bio generators, caption formatters and content calendars",
    description:
      "Streamlined creator tools to format Instagram captions with clean line breaks, craft social bios, generate YouTube descriptions, and plan content calendars.",
    toolSlugs: [
      "instagram-bio-generator",
      "caption-formatter",
      "youtube-description-builder",
      "social-media-content-calendar",
    ],
  },
  "developer-utilities": {
    slug: "developer-utilities",
    name: "Developer Utilities",
    tagline: "Code generators, CSS builders and data formatters",
    description:
      "Client-side developer utilities to validate and format JSON, generate CSS gradients and box shadows, and create high-resolution QR codes with zero server latency.",
    toolSlugs: [
      "json-formatter",
      "css-gradient-generator",
      "box-shadow-generator",
      "qr-code-generator",
    ],
  },
  "everyday-calculators": {
    slug: "everyday-calculators",
    name: "Everyday Calculators",
    tagline: "GST calculators, discount finders and percentage math",
    description:
      "Fast, accurate mathematical calculators for GST tax breakdowns, retail discount savings, and multi-mode percentage calculations with full step-by-step breakdowns.",
    toolSlugs: [
      "percentage-calculator",
      "gst-calculator",
      "discount-calculator",
    ],
  },
};

export const TOOLS_DATA: Record<string, ToolMeta> = {
  "linkedin-headline-generator": {
    slug: "linkedin-headline-generator",
    title: "LinkedIn Headline Generator",
    categorySlug: "career-students",
    categoryName: "Career & Students",
    tagline: "Generate high-converting headlines tailored for LinkedIn",
    metaTitle: "Free LinkedIn Headline Generator | DizitalGrow Tools",
    metaDescription:
      "Generate compelling, high-converting LinkedIn profile headlines for founders, engineers, consultants, and job seekers. 100% free and client-side.",
    h1: "LinkedIn Headline Generator",
    description:
      "Your LinkedIn headline is the first thing recruiters and potential clients see in search results. Generate punchy, keyword-optimized headlines that communicate your value proposition within LinkedIn's 220-character limit.",
    instructions: [
      "Enter your target job title or role.",
      "Specify your key skills or domain specialization.",
      "Select your target audience or primary accomplishment.",
      "Choose a tone (Professional, Results-Oriented, Creative, or Founder) and generate multiple variations.",
    ],
    exampleUseCases: [
      "Job seekers wanting recruiter visibility for tech, marketing, and sales roles.",
      "Freelancers attracting inbound client consultations.",
      "Founders and executives building thought leadership authority.",
    ],
    relatedToolSlugs: ["linkedin-about-builder", "resume-summary-builder"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Personal Website Development",
  },

  "linkedin-about-builder": {
    slug: "linkedin-about-builder",
    title: "LinkedIn About Builder",
    categorySlug: "career-students",
    categoryName: "Career & Students",
    tagline: "Craft an authentic, structured LinkedIn summary",
    metaTitle: "Free LinkedIn About Section Builder | DizitalGrow Tools",
    metaDescription:
      "Build a structured, authentic LinkedIn About summary with strong hooks, career highlights, and clear calls to action. Free browser utility.",
    h1: "LinkedIn About Section Builder",
    description:
      "A well-structured LinkedIn About summary turns profile viewers into conversations. Use this builder to organize your personal story, technical achievements, and clear contact instructions with proper paragraph formatting.",
    instructions: [
      "Fill in your opening hook and career passion.",
      "List your top accomplishments and quantifiable results.",
      "Detail your technical skill stack and current mission.",
      "Click generate, edit the preview, and copy directly to LinkedIn.",
    ],
    exampleUseCases: [
      "Career switchers clarifying their transferable skills.",
      "Consultants outlining how they solve specific business challenges.",
      "Students highlighting academic projects and leadership roles.",
    ],
    relatedToolSlugs: ["linkedin-headline-generator", "resume-summary-builder"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Personal Website Development",
  },

  "resume-summary-builder": {
    slug: "resume-summary-builder",
    title: "Resume Summary Builder",
    categorySlug: "career-students",
    categoryName: "Career & Students",
    tagline: "Generate targeted resume summaries that pass ATS screening",
    metaTitle: "Free Resume Summary Builder | DizitalGrow Tools",
    metaDescription:
      "Create high-impact 3-to-4 sentence resume summaries tailored for Applicant Tracking Systems (ATS) and hiring managers. Free browser tool.",
    h1: "Resume Summary Builder",
    description:
      "Craft a concise 3-to-4 sentence professional summary that captures hiring manager attention and includes keywords relevant to Applicant Tracking Systems (ATS).",
    instructions: [
      "Select your experience level (Entry-Level, Mid-Level, Senior, or Executive).",
      "Enter your core professional title and years of experience.",
      "Highlight your biggest quantifiable metric or project outcome.",
      "Generate clean resume-ready summary paragraphs.",
    ],
    exampleUseCases: [
      "Job candidates tailoring their resume for specific job descriptions.",
      "Graduates creating their first professional resume statement.",
    ],
    relatedToolSlugs: ["linkedin-headline-generator", "portfolio-content-planner"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Personal Website Development",
  },

  "portfolio-content-planner": {
    slug: "portfolio-content-planner",
    title: "Portfolio Content Planner",
    categorySlug: "career-students",
    categoryName: "Career & Students",
    tagline: "Plan project case studies with problem, approach and outcomes",
    metaTitle: "Free Portfolio Content Planner | DizitalGrow Tools",
    metaDescription:
      "Structure portfolio case studies with problem statements, methodology, tech stack, and verified outcomes. Free client-side planning tool.",
    h1: "Portfolio Content Planner",
    description:
      "Great portfolio websites don't just show screenshots—they explain the challenge, strategy, and business impact. Use this planner to structure complete project case studies before coding or publishing.",
    instructions: [
      "Input your project name, client type, and industry.",
      "Detail the core problem, constraints, and business objectives.",
      "Outline your implemented solution, architecture, and technology.",
      "List quantifiable results or key learnings and export your structured brief.",
    ],
    exampleUseCases: [
      "UI/UX designers drafting case studies for design studio applications.",
      "Software developers documenting full-stack architecture projects.",
    ],
    relatedToolSlugs: ["linkedin-about-builder", "resume-summary-builder"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Portfolio Website Development",
  },

  "freelance-rate-calculator": {
    slug: "freelance-rate-calculator",
    title: "Freelance Rate Calculator",
    categorySlug: "business-freelancers",
    categoryName: "Business & Freelancers",
    tagline: "Calculate sustainable hourly, daily and monthly rates",
    metaTitle: "Free Freelance Rate Calculator | DizitalGrow Tools",
    metaDescription:
      "Calculate your minimum hourly and project rates based on target annual income, business expenses, taxes, and actual billable hours.",
    h1: "Freelance Rate Calculator",
    description:
      "Most freelancers undercharge because they calculate rates using 40 billable hours per week without factoring in non-billable admin time, software costs, and taxes. This calculator provides accurate hourly, daily, and project minimums based on real-world business economics.",
    instructions: [
      "Enter your desired take-home annual income.",
      "Input your estimated annual business expenses (software, hardware, office).",
      "Enter expected tax percentage and planned vacation weeks.",
      "Select your estimated billable hours per week to see your required minimum rates.",
    ],
    exampleUseCases: [
      "Full-time employees transitioning into independent consulting.",
      "Freelancers auditing whether their current project fees are sustainable.",
    ],
    relatedToolSlugs: ["service-pricing-calculator", "quotation-generator"],
    relatedServiceSlug: "conversion-tracking",
    relatedServiceName: "Conversion Tracking",
  },

  "service-pricing-calculator": {
    slug: "service-pricing-calculator",
    title: "Service Pricing Calculator",
    categorySlug: "business-freelancers",
    categoryName: "Business & Freelancers",
    tagline: "Calculate profitable fixed project pricing with margin & buffer",
    metaTitle: "Free Service Pricing Calculator | DizitalGrow Tools",
    metaDescription:
      "Calculate profitable fixed service prices with labor hours, overhead expenses, target profit margins, and scope-creep buffers.",
    h1: "Service Pricing Calculator",
    description:
      "Price bespoke client projects with confidence. This calculator combines estimated labor hours, direct costs, company overhead, profit margins, and a scope-creep buffer to produce a robust client quote.",
    instructions: [
      "Enter estimated project hours and team hourly rate.",
      "Add any direct third-party costs (licenses, assets, contractor fees).",
      "Set your desired profit margin percentage and scope buffer percentage.",
      "View the breakdown of cost, margin, buffer, and suggested client price.",
    ],
    exampleUseCases: [
      "Agencies and consultants quoting custom digital projects.",
      "Freelancers avoiding unprofitable fixed-scope contracts.",
    ],
    relatedToolSlugs: ["freelance-rate-calculator", "quotation-generator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Business Website Development",
  },

  "invoice-generator": {
    slug: "invoice-generator",
    title: "Invoice Generator",
    categorySlug: "business-freelancers",
    categoryName: "Business & Freelancers",
    tagline: "Generate clean PDF-printable invoices with tax & discounts",
    metaTitle: "Free Invoice Generator with PDF Export | DizitalGrow Tools",
    metaDescription:
      "Create professional invoices with customizable line items, tax rates, discounts, currency selection, and instant browser print/PDF export. 100% client-side.",
    h1: "Free Invoice Generator",
    description:
      "Generate clean, professional invoices directly in your browser. Add your business details, client information, itemized line items, tax (such as GST or VAT), discounts, and payment instructions. Export directly to PDF using your browser's print engine.",
    instructions: [
      "Enter your business name, contact info, and invoice number.",
      "Input client details and payment due date.",
      "Add line items with quantity and unit price.",
      "Set tax percentage or flat discount if applicable, then click Print / Save as PDF.",
    ],
    exampleUseCases: [
      "Freelancers and small businesses needing quick, clean client invoices.",
      "Agencies sending project milestone billing without paid accounting software.",
    ],
    relatedToolSlugs: ["quotation-generator", "gst-calculator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Web Applications",
  },

  "quotation-generator": {
    slug: "quotation-generator",
    title: "Quotation Generator",
    categorySlug: "business-freelancers",
    categoryName: "Business & Freelancers",
    tagline: "Generate formal price quotations and project estimates",
    metaTitle: "Free Quotation Generator with PDF Export | DizitalGrow Tools",
    metaDescription:
      "Build formal project quotations and estimates with itemized scope, terms, validity dates, and browser print-to-PDF export.",
    h1: "Free Quotation Generator",
    description:
      "Send professional price quotations and estimates to prospective clients. Outline proposed project phases, itemized deliverables, validity terms, and payment milestones. Print or download as PDF instantly.",
    instructions: [
      "Enter your company information and quotation reference code.",
      "Fill in client contact information and quotation expiry date.",
      "Itemize deliverables with description, quantity, and cost.",
      "Add terms of engagement and export to PDF via browser print.",
    ],
    exampleUseCases: [
      "Contractors and consultants submitting formal RFP responses.",
      "Service providers providing clear milestone estimates before project commencement.",
    ],
    relatedToolSlugs: ["invoice-generator", "service-pricing-calculator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Business Website Development",
  },

  "meta-title-generator": {
    slug: "meta-title-generator",
    title: "Meta Title Generator",
    categorySlug: "marketing-seo",
    categoryName: "Marketing & SEO",
    tagline: "Generate search-optimized page titles with pixel counter",
    metaTitle: "Free Meta Title Generator & Pixel Counter | DizitalGrow Tools",
    metaDescription:
      "Generate click-worthy SEO meta titles for homepages, services, articles, and products with real-time character and pixel width validation.",
    h1: "Meta Title Generator",
    description:
      "Search engines truncate page titles that exceed approximately 60 characters or 580 pixels. This tool generates high-CTR title variations and includes a real-time pixel counter to ensure your title never gets cut off with an ellipsis in Google search results.",
    instructions: [
      "Enter your primary target keyword.",
      "Enter your brand or company name.",
      "Select your page type (Homepage, Service, Article, Local, or E-commerce).",
      "Review generated options and verify the character and pixel length meters.",
    ],
    exampleUseCases: [
      "Content creators optimizing blog post headlines for search rankings.",
      "Marketers optimizing service and landing page titles for higher organic CTR.",
    ],
    relatedToolSlugs: ["serp-preview", "slug-generator"],
    relatedServiceSlug: "seo-visibility",
    relatedServiceName: "SEO & Digital Visibility",
  },

  "serp-preview": {
    slug: "serp-preview",
    title: "SERP Preview",
    categorySlug: "marketing-seo",
    categoryName: "Marketing & SEO",
    tagline: "Simulate Google desktop and mobile search result snippets",
    metaTitle: "Free Google SERP Snippet Preview Tool | DizitalGrow Tools",
    metaDescription:
      "Simulate how your webpage title, URL breadcrumbs, and meta description will appear on Google desktop and mobile search results.",
    h1: "Google SERP Preview Tool",
    description:
      "Preview exactly how your page will look to searchers on Google desktop and mobile search result pages. Identifies truncated titles, excessive descriptions, and missing URL structures before you publish.",
    instructions: [
      "Enter your page title (aim for 50–60 characters).",
      "Enter your target URL or canonical permalink.",
      "Write your meta description (aim for 120–155 characters).",
      "Toggle between Desktop and Mobile preview modes to check truncation.",
    ],
    exampleUseCases: [
      "SEO specialists testing meta tags before publishing new pages.",
      "Copywriters optimizing snippet copy for maximum search click-through rate.",
    ],
    relatedToolSlugs: ["meta-title-generator", "open-graph-preview"],
    relatedServiceSlug: "seo-visibility",
    relatedServiceName: "SEO & Digital Visibility",
  },

  "utm-builder": {
    slug: "utm-builder",
    title: "UTM Builder",
    categorySlug: "marketing-seo",
    categoryName: "Marketing & SEO",
    tagline: "Generate clean, properly encoded campaign tracking URLs",
    metaTitle: "Free UTM Campaign URL Builder | DizitalGrow Tools",
    metaDescription:
      "Build clean, correctly encoded UTM campaign tracking URLs for Google Analytics. Preserves existing query parameters and hash fragments.",
    h1: "UTM Campaign URL Builder",
    description:
      "Accurately track your marketing campaigns in Google Analytics 4. This tool builds properly URL-encoded campaign tracking links, preserves existing URL parameters, and maintains hash fragments without breaking link structures.",
    instructions: [
      "Enter your destination website URL.",
      "Specify the campaign source (e.g., google, meta, newsletter).",
      "Enter campaign medium (e.g., cpc, email, social) and campaign name.",
      "Add optional term and content parameters, then copy your generated tracking URL.",
    ],
    exampleUseCases: [
      "Marketers tracking paid Google Ads and Meta campaigns in GA4.",
      "Creators tracking newsletter link clicks and partner affiliate links.",
    ],
    relatedToolSlugs: ["serp-preview", "slug-generator"],
    relatedServiceSlug: "conversion-tracking",
    relatedServiceName: "Conversion Tracking",
  },

  "slug-generator": {
    slug: "slug-generator",
    title: "Slug Generator",
    categorySlug: "marketing-seo",
    categoryName: "Marketing & SEO",
    tagline: "Convert titles and text into clean, URL-friendly slugs",
    metaTitle: "Free URL Slug Generator | DizitalGrow Tools",
    metaDescription:
      "Convert titles, headlines, and strings into clean, SEO-friendly URL slugs with customizable separators and character normalization.",
    h1: "URL Slug Generator",
    description:
      "Turn article titles, product names, or phrases into clean, lowercase, URL-friendly slugs. Automatically strips special characters, removes accents, and formats clean hyphens for optimal SEO permalinks.",
    instructions: [
      "Type or paste your page title or phrase into the input field.",
      "Select your preferred separator (hyphen or underscore).",
      "Choose whether to strip stop words (and, the, of, in).",
      "Copy your generated SEO permalink slug with one click.",
    ],
    exampleUseCases: [
      "Web developers setting up URL routes for articles and categories.",
      "E-commerce managers creating clean product URLs.",
    ],
    relatedToolSlugs: ["meta-title-generator", "utm-builder"],
    relatedServiceSlug: "seo-visibility",
    relatedServiceName: "SEO & Digital Visibility",
  },

  "open-graph-preview": {
    slug: "open-graph-preview",
    title: "Open Graph Preview",
    categorySlug: "marketing-seo",
    categoryName: "Marketing & SEO",
    tagline: "Preview social share cards for Facebook, Twitter and LinkedIn",
    metaTitle: "Free Open Graph & Social Card Preview Tool | DizitalGrow Tools",
    metaDescription:
      "Preview how your webpage links and OG images will render when shared across Facebook, Twitter/X, and LinkedIn.",
    h1: "Open Graph Social Card Preview",
    description:
      "When someone shares your link on social media, the Open Graph image, title, and description determine whether people click. Simulate how your link will render on Facebook, Twitter/X, and LinkedIn before sharing.",
    instructions: [
      "Enter your page title and meta description.",
      "Provide an image URL or image file link (1200x630 recommended).",
      "Enter the canonical URL.",
      "Inspect the live simulated card previews across Facebook, Twitter, and LinkedIn.",
    ],
    exampleUseCases: [
      "Content creators verifying featured social card visuals.",
      "Marketers auditing social share appearance before product announcements.",
    ],
    relatedToolSlugs: ["serp-preview", "meta-title-generator"],
    relatedServiceSlug: "meta-ads",
    relatedServiceName: "Meta Ads Management",
  },

  "instagram-bio-generator": {
    slug: "instagram-bio-generator",
    title: "Instagram Bio Generator",
    categorySlug: "creators-social-media",
    categoryName: "Creators & Social Media",
    tagline: "Format aesthetic Instagram bios with line breaks and font styles",
    metaTitle: "Free Instagram Bio Generator & Formatter | DizitalGrow Tools",
    metaDescription:
      "Generate clean, formatted Instagram bios with aesthetic font styles, line breaks, and real-time 150-character limit counter.",
    h1: "Instagram Bio Generator",
    description:
      "Your Instagram bio has only 150 characters to explain who you are and encourage profile visitors to click your link. Generate punchy bio concepts and copy them with clean line breaks that Instagram won't strip.",
    instructions: [
      "Enter your niche or professional title.",
      "Add what you do, who you help, or your unique credential.",
      "Add a call-to-action (e.g., 'Book a call 👇' or 'Read the guide').",
      "Preview character count and copy your formatted bio.",
    ],
    exampleUseCases: [
      "Creators and coaches optimizing their Instagram profile for clicks.",
      "Businesses and local brands updating their social presence.",
    ],
    relatedToolSlugs: ["caption-formatter", "social-media-content-calendar"],
    relatedServiceSlug: "meta-ads",
    relatedServiceName: "Meta Ads Management",
  },

  "caption-formatter": {
    slug: "caption-formatter",
    title: "Caption Formatter",
    categorySlug: "creators-social-media",
    categoryName: "Creators & Social Media",
    tagline: "Fix caption line breaks and clean paragraph spacing",
    metaTitle: "Free Instagram Caption Formatter with Clean Line Breaks | DizitalGrow",
    metaDescription:
      "Format social media captions with clean line breaks, spaced paragraphs, hashtag counts, and character limit indicators without messy dots.",
    h1: "Social Caption Formatter",
    description:
      "Instagram often removes paragraph spacing, turning well-written captions into an unreadable wall of text. This tool converts standard line breaks into invisible space characters, keeping your paragraphs clean without needing awkward periods or dashes.",
    instructions: [
      "Type or paste your caption into the text area.",
      "Add your paragraph breaks where you want them to appear.",
      "Check character count and hashtag count meters.",
      "Click 'Format & Copy' to copy the formatted text directly to your clipboard.",
    ],
    exampleUseCases: [
      "Social media managers scheduling clean Instagram, Facebook, and LinkedIn posts.",
      "Creators publishing long-form storytelling captions.",
    ],
    relatedToolSlugs: ["instagram-bio-generator", "youtube-description-builder"],
    relatedServiceSlug: "meta-ads",
    relatedServiceName: "Meta Ads Management",
  },

  "youtube-description-builder": {
    slug: "youtube-description-builder",
    title: "YouTube Description Builder",
    categorySlug: "creators-social-media",
    categoryName: "Creators & Social Media",
    tagline: "Build structured video descriptions with chapters & links",
    metaTitle: "Free YouTube Description Builder | DizitalGrow Tools",
    metaDescription:
      "Build structured, search-friendly YouTube video descriptions with timestamps, resources, affiliate links, and affiliate/copyright disclaimers.",
    h1: "YouTube Description Builder",
    description:
      "A complete YouTube description improves search ranking in YouTube and Google search while routing viewers to your website. Generate structured descriptions with video summaries, chapter timestamps, social links, and legal disclaimers.",
    instructions: [
      "Enter your video title and 2–3 sentence video overview.",
      "Add chapter timestamps (e.g., 00:00 - Introduction, 02:15 - Step 1).",
      "Include key links (website, resources, tools).",
      "Add affiliate/sponsorship disclaimers and copy your completed description.",
    ],
    exampleUseCases: [
      "YouTubers wanting consistent, professional video description layouts.",
      "Brands uploading educational webinars and tutorials.",
    ],
    relatedToolSlugs: ["caption-formatter", "social-media-content-calendar"],
    relatedServiceSlug: "seo-visibility",
    relatedServiceName: "SEO & Digital Visibility",
  },

  "social-media-content-calendar": {
    slug: "social-media-content-calendar",
    title: "Social Media Content Calendar",
    categorySlug: "creators-social-media",
    categoryName: "Creators & Social Media",
    tagline: "Generate weekly content themes, hook angles and schedules",
    metaTitle: "Free Social Media Content Calendar Generator | DizitalGrow Tools",
    metaDescription:
      "Generate a customized 7-day social media content schedule with content pillars, engaging hook angles, and post formats.",
    h1: "Social Media Content Calendar",
    description:
      "Stop wondering what to post each day. Generate a balanced 7-day social content plan that alternates between authority-building, educational tutorials, behind-the-scenes insights, and commercial offers.",
    instructions: [
      "Select your industry or business niche.",
      "Choose your primary target platform (LinkedIn, Instagram, or X).",
      "Select your core weekly goal (Lead Generation, Audience Growth, or Authority).",
      "Generate your 7-day schedule with hook angles and call-to-action prompts.",
    ],
    exampleUseCases: [
      "Founders and solopreneurs looking for consistent weekly posting structure.",
      "Marketing managers planning campaign schedules.",
    ],
    relatedToolSlugs: ["instagram-bio-generator", "caption-formatter"],
    relatedServiceSlug: "meta-ads",
    relatedServiceName: "Meta Ads Management",
  },

  "json-formatter": {
    slug: "json-formatter",
    title: "JSON Formatter",
    categorySlug: "developer-utilities",
    categoryName: "Developer Utilities",
    tagline: "Validate, beautify, and minify JSON data with error detection",
    metaTitle: "Free Online JSON Formatter & Validator | DizitalGrow Tools",
    metaDescription:
      "Format, beautify, validate, and minify JSON data directly in your browser with clear syntax error diagnostics. 100% client-side.",
    h1: "JSON Formatter & Validator",
    description:
      "Format messy JSON strings into clean, indented, readable structures, or minify JSON for compact network payloads. Includes instant syntax validation and points out the exact character location of parse errors.",
    instructions: [
      "Paste your raw JSON into the input editor.",
      "Click 'Format (Beautify)' for indented 2-space readability, or 'Minify' for compressed single-line output.",
      "Review any syntax error messages with line numbers if invalid.",
      "Copy formatted output or clear the editor with one click.",
    ],
    exampleUseCases: [
      "Developers debugging API responses and webhook payloads.",
      "Engineers validating schema markup and configuration files.",
    ],
    relatedToolSlugs: ["css-gradient-generator", "box-shadow-generator"],
    relatedServiceSlug: "web-applications",
    relatedServiceName: "Web Application Development",
  },

  "css-gradient-generator": {
    slug: "css-gradient-generator",
    title: "CSS Gradient Generator",
    categorySlug: "developer-utilities",
    categoryName: "Developer Utilities",
    tagline: "Interactive CSS linear and radial gradient builder",
    metaTitle: "Free CSS Gradient Generator & CSS Code Export | DizitalGrow Tools",
    metaDescription:
      "Create beautiful CSS linear and radial gradients with interactive angle controls, color stops, and ready-to-use CSS output.",
    h1: "CSS Gradient Generator",
    description:
      "Design subtle, high-performance CSS gradients visually. Adjust angle controls, customize color stops, switch between linear and radial types, and copy clean CSS code compatible with all modern browsers.",
    instructions: [
      "Select gradient type: Linear or Radial.",
      "Adjust the angle slider (0° to 360°).",
      "Pick your start and end colors using the color pickers.",
      "Preview in real-time and copy the generated CSS snippet.",
    ],
    exampleUseCases: [
      "Web designers building modern hero background accents.",
      "Developers creating lightweight CSS background styles without heavy images.",
    ],
    relatedToolSlugs: ["box-shadow-generator", "json-formatter"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Website Development",
  },

  "box-shadow-generator": {
    slug: "box-shadow-generator",
    title: "Box Shadow Generator",
    categorySlug: "developer-utilities",
    categoryName: "Developer Utilities",
    tagline: "Design clean, elevation CSS box shadows visually",
    metaTitle: "Free CSS Box Shadow Generator & Code Export | DizitalGrow Tools",
    metaDescription:
      "Interactive CSS box shadow builder with horizontal/vertical offset, blur, spread, color opacity, and inset controls.",
    h1: "CSS Box Shadow Generator",
    description:
      "Design clean, functional CSS box shadows without guessing pixel offsets. Control X and Y offsets, blur radius, spread, opacity, and inset shadows, then copy cross-browser CSS code.",
    instructions: [
      "Adjust horizontal (X) and vertical (Y) offsets.",
      "Set blur radius and spread distance.",
      "Choose shadow color and alpha transparency.",
      "Toggle inset shadow if desired, and copy the clean CSS rule.",
    ],
    exampleUseCases: [
      "UI developers engineering clean elevation for dropdowns and cards.",
      "Designers testing subtle, accessible shadow depths.",
    ],
    relatedToolSlugs: ["css-gradient-generator", "qr-code-generator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Website Development",
  },

  "qr-code-generator": {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    categorySlug: "developer-utilities",
    categoryName: "Developer Utilities",
    tagline: "Generate clean, downloadable SVG and PNG QR codes",
    metaTitle: "Free QR Code Generator with SVG/PNG Download | DizitalGrow Tools",
    metaDescription:
      "Generate clean, high-resolution QR codes for URLs, text, and contact information with instant SVG and PNG download. 100% client-side.",
    h1: "Free QR Code Generator",
    description:
      "Create high-contrast QR codes for websites, WhatsApp links, menus, or Wi-Fi configurations. Generates cleanly inside your browser with zero external server transmission and allows instant SVG or PNG download.",
    instructions: [
      "Enter your destination URL or text.",
      "Customize QR code foreground and background colors if desired.",
      "Preview the responsive QR code matrix.",
      "Click 'Download SVG' for vector print quality, or 'Download PNG' for digital display.",
    ],
    exampleUseCases: [
      "Businesses printing QR codes on physical business cards, brochures, or packaging.",
      "Restaurants linking tables to digital menus or WhatsApp ordering.",
    ],
    relatedToolSlugs: ["utm-builder", "slug-generator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Website Development",
  },

  "percentage-calculator": {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    categorySlug: "everyday-calculators",
    categoryName: "Everyday Calculators",
    tagline: "Multi-mode percentage calculator with step-by-step breakdown",
    metaTitle: "Free Percentage Calculator with Formula Breakdown | DizitalGrow Tools",
    metaDescription:
      "Calculate percentages easily: What is X% of Y? X is what % of Y? and Percentage increase/decrease with mathematical step-by-step breakdown.",
    h1: "Percentage Calculator",
    description:
      "Solve common percentage math questions in seconds with full mathematical breakdowns. Supports three distinct modes: finding a percentage of a number, calculating what percentage one number is of another, and calculating percentage increase or decrease.",
    instructions: [
      "Select the calculation mode you need from the tabs.",
      "Enter your numbers in the labeled input fields.",
      "View the instant result alongside the step-by-step mathematical formula breakdown.",
    ],
    exampleUseCases: [
      "Business owners calculating profit margins, commission fees, and revenue growth.",
      "Students and professionals solving everyday percentage problems.",
    ],
    relatedToolSlugs: ["gst-calculator", "discount-calculator"],
    relatedServiceSlug: "conversion-tracking",
    relatedServiceName: "Conversion Tracking",
  },

  "gst-calculator": {
    slug: "gst-calculator",
    title: "GST Calculator",
    categorySlug: "everyday-calculators",
    categoryName: "Everyday Calculators",
    tagline: "Calculate GST inclusive & exclusive amounts with tax breakdown",
    metaTitle: "Free GST Calculator (Inclusive & Exclusive) | DizitalGrow Tools",
    metaDescription:
      "Calculate GST inclusive and exclusive amounts with detailed CGST, SGST, IGST tax breakdown. Supports standard rates (5%, 12%, 18%, 28%) and custom rates.",
    h1: "GST Tax Calculator",
    description:
      "Calculate Goods and Services Tax (GST) easily for Indian and global invoices. Quickly switch between GST Exclusive (adding tax to a net base) and GST Inclusive (extracting tax from a gross price) with itemized CGST and SGST breakdowns.",
    instructions: [
      "Enter the base or total monetary amount.",
      "Choose calculation type: 'Add GST (Exclusive)' or 'Remove GST (Inclusive)'.",
      "Select a standard GST slab (5%, 12%, 18%, 28%) or enter a custom rate.",
      "Review the detailed breakdown showing Net Price, Total GST, and Final Gross Amount.",
    ],
    exampleUseCases: [
      "Freelancers and contractors adding GST to their service invoices.",
      "Shoppers and businesses calculating the true pre-tax cost of an item.",
    ],
    relatedToolSlugs: ["invoice-generator", "discount-calculator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Ecommerce Websites",
  },

  "discount-calculator": {
    slug: "discount-calculator",
    title: "Discount Calculator",
    categorySlug: "everyday-calculators",
    categoryName: "Everyday Calculators",
    tagline: "Calculate sale prices, total savings and effective discount rate",
    metaTitle: "Free Discount & Sale Price Calculator | DizitalGrow Tools",
    metaDescription:
      "Calculate final sale prices and total money saved from retail discounts and percentage markdowns with visual savings breakdown.",
    h1: "Discount & Sale Calculator",
    description:
      "Find out exactly how much you save on retail sales, promotions, and clearance discounts. Enter the original price and discount percentage to see the final price, the amount saved, and an optional additional coupon discount.",
    instructions: [
      "Enter the original list price of the item.",
      "Enter the primary discount percentage (e.g., 25%).",
      "Optionally add a secondary coupon or promo code percentage.",
      "See the final discounted price and total cash savings.",
    ],
    exampleUseCases: [
      "E-commerce managers planning promotional sales campaigns.",
      "Consumers checking the real savings on clearance sales.",
    ],
    relatedToolSlugs: ["percentage-calculator", "gst-calculator"],
    relatedServiceSlug: "web-development",
    relatedServiceName: "Ecommerce Websites",
  },
};

