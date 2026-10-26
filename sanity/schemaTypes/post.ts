import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Articles',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Article Content',
      default: true,
    },
    {
      name: 'organization',
      title: 'Organization & Publishing',
    },
    {
      name: 'seo',
      title: 'SEO & Social',
    },
  ],
  fields: [
    // ----------------------------------------------------
    // Group: Article Content
    // ----------------------------------------------------
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      group: 'content',
      description: 'The main headline for this blog article (maximum 120 characters).',
      validation: (rule) =>
        rule
          .required()
          .max(120)
          .error('Article title is required and cannot exceed 120 characters.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'URL-friendly identifier generated from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('URL slug is required.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description / Excerpt',
      type: 'text',
      rows: 4,
      group: 'content',
      description: 'A concise summary used for article cards, search results, and social previews (maximum 300 characters).',
      validation: (rule) =>
        rule
          .required()
          .max(300)
          .error('Short description/excerpt is required and cannot exceed 300 characters.'),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      description: 'Primary banner image for the blog article header and list cards.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for accessibility and SEO. Describe what is in the image.',
          validation: (rule) =>
            rule.custom((alt, context) => {
              const parent = context.parent as {asset?: unknown} | undefined
              if (parent?.asset && !alt) {
                return 'Alternative text is required for accessibility and SEO.'
              }
              return true
            }),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption displayed beneath the image.',
        }),
      ],
      validation: (rule) =>
        rule.warning('Adding a featured image is recommended for optimal card and social display.'),
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      group: 'content',
      description: 'Rich portable text content of the article.',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Code', value: 'code'},
              {title: 'Strike', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Inline Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule
                        .uri({
                          scheme: ['http', 'https', 'mailto', 'tel'],
                          allowRelative: true,
                        })
                        .required(),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Alternative text for screen readers and SEO.',
              validation: (rule) =>
                rule.required().error('Alternative text is required for embedded images.'),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption displayed beneath the embedded image.',
            }),
          ],
        },
      ],
    }),

    // ----------------------------------------------------
    // Group: Organization & Publishing
    // ----------------------------------------------------
    defineField({
      name: 'category',
      title: 'Blog Category',
      type: 'string',
      group: 'organization',
      description:
        'Single category for the post. Enter any topic (e.g. SEO, General, Marketing, Social Media, AI & Automation). Free-form editable string field.',
      validation: (rule) => rule.required().error('Blog category is required.'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'organization',
      description: 'Keywords and search tags for this article.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'organization',
      description: 'Author attribution for this article.',
      initialValue: 'Dizital Grow',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      group: 'organization',
      description: 'Date and time when the article is published.',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated Date',
      type: 'datetime',
      group: 'organization',
      description: 'Date and time when the article was last revised or updated.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      group: 'organization',
      description: 'Highlight this article in hero or featured showcases on the website.',
      initialValue: false,
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'organization',
      description: 'Estimated reading time in minutes (e.g., 5).',
      validation: (rule) =>
        rule
          .integer()
          .positive()
          .min(1)
          .error('Reading time must be a positive integer in minutes.'),
    }),

    // ----------------------------------------------------
    // Group: SEO & Social
    // ----------------------------------------------------
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Search engine title tag override (maximum 60 characters).',
      validation: (rule) =>
        rule.max(60).warning('SEO titles longer than 60 characters may be truncated by search engines.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Search engine snippet summary (maximum 160 characters).',
      validation: (rule) =>
        rule
          .max(160)
          .warning('Meta descriptions longer than 160 characters may be truncated by search engines.'),
    }),
    defineField({
      name: 'primaryKeyword',
      title: 'Primary Search Keyword',
      type: 'string',
      group: 'seo',
      description: 'Main focus keyword targeted by this article.',
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
      description: 'Custom Open Graph / Twitter image. If omitted, the featured image is used.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hideFromSearchEngines',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      group: 'seo',
      description: 'Instruct search crawlers not to index this article.',
      initialValue: false,
    }),
  ],

  // ----------------------------------------------------
  // Document Preview Configuration
  // ----------------------------------------------------
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
    },
    prepare({title, category, media, publishedAt}) {
      const formattedDate = publishedAt
        ? new Date(publishedAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'Unpublished'

      return {
        title: title || 'Untitled Article',
        subtitle: `${category ? `[${category}]` : '[No Category]'} • ${formattedDate}`,
        media,
      }
    },
  },
})
