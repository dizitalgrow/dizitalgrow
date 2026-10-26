# Dizital Grow - Sanity Studio

A modern Sanity Studio setup for Dizital Grow managing blog content and website layout/navigation settings.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local studio
```bash
npm run dev
```
Open [http://localhost:3333](http://localhost:3333) in your browser.

### Project Configuration
- **Project ID**: `hlkd9o16`
- **Dataset**: `production`
- **Studio Dev URL**: `http://localhost:3333`

## Studio Schemas

1. **Blog Articles (`post`)**
   - **Article Content**: Title (max 120 chars), URL Slug, Excerpt (max 300 chars), Featured Image (with hotspot & alt text), and Portable Text Body (H2, H3, H4, blockquotes, numbered/bullet lists, formatting, inline links, embedded images).
   - **Organization & Publishing**: Freeform editable `category` string field (e.g., SEO, Marketing, AI & Automation), Tags, Author (defaults to "Dizital Grow"), Publication Date, Last Updated Date, Featured Article flag, Reading Time in minutes.
   - **SEO & Social**: SEO Title (max 60 chars), Meta Description (max 160 chars), Primary Keyword, Social Sharing Image, and Hide from Search Engines (noindex).

2. **Website Layout & Settings (`siteSettings`)**
   - Singleton document with ID `siteSettings` and protected action rules.
   - **Top Strip**: Toggle, announcement copy, contact email, CTA button.
   - **Navbar**: Logo image, alt text, fallback text logo, reorderable navigation links with nested dropdown items, primary CTA, secondary CTA.
   - **Footer**: Logo image, description, email, customizable multi-column link lists, footer CTA, social links (Instagram, Facebook, LinkedIn, YouTube, X), copyright, legal links.
   - **Global SEO**: Default title, default meta description, default social sharing image.
