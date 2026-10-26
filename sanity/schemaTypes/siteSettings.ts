import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website Layout & Settings',
  type: 'document',
  groups: [
    {
      name: 'topStrip',
      title: 'Top Strip',
      default: true,
    },
    {
      name: 'navbar',
      title: 'Navbar',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'seo',
      title: 'Global SEO',
    },
  ],
  fields: [
    // =========================================================================
    // SECTION A: TOP STRIP
    // =========================================================================
    defineField({
      name: 'showTopStrip',
      title: 'Show Top Strip',
      type: 'boolean',
      group: 'topStrip',
      description: 'Toggle the announcement/status bar at the very top of the website.',
      initialValue: true,
    }),
    defineField({
      name: 'topStripAnnouncement',
      title: 'Announcement Text',
      type: 'string',
      group: 'topStrip',
      description: 'Main status or promotional text.',
      initialValue: 'READY TO GROW YOUR BUSINESS? // DISCUSS YOUR PROJECT WITH US',
    }),
    defineField({
      name: 'topStripEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'topStrip',
      description: 'Direct contact email displayed in the top strip.',
      initialValue: 'contact@dizitalgrow.in',
      validation: (rule) =>
        rule.regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          {name: 'email', invert: false}
        ).warning('Please enter a valid email address.'),
    }),
    defineField({
      name: 'topStripButtonLabel',
      title: 'Announcement Button Label',
      type: 'string',
      group: 'topStrip',
      description: 'Optional CTA button label for the top strip.',
      initialValue: 'DISCUSS YOUR PROJECT',
    }),
    defineField({
      name: 'topStripButtonUrl',
      title: 'Announcement Button URL',
      type: 'string',
      group: 'topStrip',
      description: 'Destination URL for the top strip announcement button.',
      initialValue: '/contact',
    }),

    // =========================================================================
    // SECTION B: NAVBAR
    // =========================================================================
    defineField({
      name: 'navbarLogo',
      title: 'Navbar Logo Image',
      type: 'image',
      group: 'navbar',
      description: 'Brand logo image used in the header.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'navbarLogoAlt',
      title: 'Logo Alternative Text',
      type: 'string',
      group: 'navbar',
      description: 'Screen reader accessibility description for the navbar logo.',
      initialValue: 'Dizital Grow Logo',
    }),
    defineField({
      name: 'textLogo',
      title: 'Text Logo / Fallback',
      type: 'string',
      group: 'navbar',
      description: 'Fallback text branding if an image is not uploaded or loading fails.',
      initialValue: 'DizitalGrow',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      group: 'navbar',
      description:
        'Main navbar links. Can include standalone links or dropdown menus with nested children. Reorder by dragging.',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required().error('Navigation label is required.'),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Internal route (e.g. /services, /blog) or full external URL.',
              validation: (rule) => rule.required().error('Navigation URL is required.'),
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in new tab',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'children',
              title: 'Dropdown Children (Nested Links)',
              type: 'array',
              description: 'Optional submenu links displayed inside a dropdown under this item.',
              of: [
                {
                  type: 'object',
                  name: 'dropdownItem',
                  title: 'Dropdown Link',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Dropdown Label',
                      type: 'string',
                      validation: (rule) => rule.required().error('Dropdown label is required.'),
                    }),
                    defineField({
                      name: 'url',
                      title: 'Dropdown URL',
                      type: 'string',
                      validation: (rule) => rule.required().error('Dropdown URL is required.'),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Optional Description',
                      type: 'string',
                      description: 'Short subtitle or explanation shown under the dropdown item.',
                    }),
                    defineField({
                      name: 'openInNewTab',
                      title: 'Open in new tab',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'label',
              url: 'url',
              children: 'children',
            },
            prepare({title, url, children}) {
              const childCount = children?.length || 0
              return {
                title: title || 'Untitled Nav Link',
                subtitle: `${url || '/'} ${childCount > 0 ? `(${childCount} dropdown items)` : ''}`,
              }
            },
          },
        },
      ],
      initialValue: [
        {label: 'SERVICES', url: '/services', openInNewTab: false},
        {label: 'PROCESS', url: '/process', openInNewTab: false},
        {label: 'BLOG', url: '/blog', openInNewTab: false},
        {label: 'ABOUT', url: '/about', openInNewTab: false},
        {label: 'CONTACT', url: '/contact', openInNewTab: false},
      ],
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Button Label',
      type: 'string',
      group: 'navbar',
      description: 'Label for the main highlighted button in the navbar.',
      initialValue: 'DISCUSS YOUR PROJECT',
    }),
    defineField({
      name: 'primaryCtaUrl',
      title: 'Primary CTA Button URL',
      type: 'string',
      group: 'navbar',
      description: 'Destination for the main highlighted button.',
      initialValue: '/contact',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Button Label',
      type: 'string',
      group: 'navbar',
      description: 'Optional secondary button label.',
    }),
    defineField({
      name: 'secondaryCtaUrl',
      title: 'Secondary CTA Button URL',
      type: 'string',
      group: 'navbar',
      description: 'Destination for secondary button.',
    }),

    // =========================================================================
    // SECTION C: FOOTER
    // =========================================================================
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo Image',
      type: 'image',
      group: 'footer',
      description: 'Brand logo image used in the footer. If omitted, navbar logo is used.',
      options: {hotspot: true},
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      group: 'footer',
      description: 'Short company bio / mission statement displayed in footer.',
      initialValue:
        'We build the digital experiences, customer acquisition systems, and tracking infrastructure businesses need to grow online.',
    }),
    defineField({
      name: 'footerContactEmail',
      title: 'Footer Contact Email',
      type: 'string',
      group: 'footer',
      description: 'Primary inquiry email shown in the footer.',
      initialValue: 'contact@dizitalgrow.in',
    }),
    defineField({
      name: 'whatsappChannelUrl',
      title: 'WhatsApp Channel URL',
      type: 'url',
      group: 'footer',
      description: 'Official WhatsApp broadcast channel link.',
      initialValue: 'https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Phone Number (For WhatsApp Chat Only)',
      type: 'string',
      group: 'footer',
      description: 'Direct contact phone number strictly for WhatsApp messaging (e.g. +91 91871 26193). Voice calls are excluded.',
      initialValue: '+91 91871 26193',
    }),
    defineField({
      name: 'footerColumns',
      title: 'Footer Link Columns',
      type: 'array',
      group: 'footer',
      description: 'Organize footer links into distinct columns. Add, reorder, or edit columns freely.',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          title: 'Footer Column',
          fields: [
            defineField({
              name: 'heading',
              title: 'Column Heading',
              type: 'string',
              validation: (rule) => rule.required().error('Column heading is required.'),
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'footerLink',
                  title: 'Footer Link',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Link Label',
                      type: 'string',
                      validation: (rule) => rule.required().error('Link label is required.'),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      validation: (rule) => rule.required().error('Link URL is required.'),
                    }),
                    defineField({
                      name: 'openInNewTab',
                      title: 'Open in new tab',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              links: 'links',
            },
            prepare({title, links}) {
              return {
                title: title || 'Untitled Column',
                subtitle: `${links?.length || 0} links`,
              }
            },
          },
        },
      ],
      initialValue: [
        {
          heading: 'NAVIGATION',
          links: [
            {label: 'Home', url: '/', openInNewTab: false},
            {label: 'Services', url: '/#services', openInNewTab: false},
            {label: 'Meta CAPI', url: '/#tracking', openInNewTab: false},
            {label: 'Process', url: '/process', openInNewTab: false},
            {label: 'Blog', url: '/blog', openInNewTab: false},
            {label: 'About', url: '/about', openInNewTab: false},
            {label: 'FAQ', url: '/#faq', openInNewTab: false},
            {label: 'Contact', url: '/contact', openInNewTab: false},
          ],
        },
        {
          heading: 'SERVICES',
          links: [
            {label: 'Business Websites', url: '/#services', openInNewTab: false},
            {label: 'Web Applications', url: '/#services', openInNewTab: false},
            {label: 'Mobile Apps', url: '/#services', openInNewTab: false},
            {label: 'Google Ads', url: '/#services', openInNewTab: false},
            {label: 'Meta Ads (FB/IG)', url: '/#services', openInNewTab: false},
            {label: 'Meta CAPI & Tracking', url: '/#tracking', openInNewTab: false},
          ],
        },
        {
          heading: 'CONTACT',
          links: [
            {label: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N', openInNewTab: true},
            {label: 'Instagram: @dizitalgrow', url: 'https://instagram.com/dizitalgrow', openInNewTab: true},
            {label: 'Facebook: DizitalGrow', url: 'https://facebook.com/dizitalgrow', openInNewTab: true},
            {label: 'Email: contact@dizitalgrow.in', url: 'mailto:contact@dizitalgrow.in', openInNewTab: false},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerCtaHeading',
      title: 'Footer CTA Heading',
      type: 'string',
      group: 'footer',
      description: 'Call-to-action title above the footer action buttons.',
      initialValue: 'READY TO BUILD & GROW?',
    }),
    defineField({
      name: 'footerCtaButtonLabel',
      title: 'Footer CTA Button Label',
      type: 'string',
      group: 'footer',
      description: 'Label for the footer CTA button.',
      initialValue: 'DISCUSS YOUR PROJECT',
    }),
    defineField({
      name: 'footerCtaButtonUrl',
      title: 'Footer CTA Button URL',
      type: 'string',
      group: 'footer',
      description: 'URL target for the footer CTA button.',
      initialValue: '/contact',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'footer',
      description: 'Social media profile links.',
      of: [
        {
          type: 'object',
          name: 'socialLinkItem',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'WhatsApp Channel', value: 'WhatsApp Channel'},
                  {title: 'WhatsApp (Direct Chat)', value: 'WhatsApp'},
                  {title: 'Instagram', value: 'Instagram'},
                  {title: 'Facebook', value: 'Facebook'},
                  {title: 'YouTube', value: 'YouTube'},
                  {title: 'X (Twitter)', value: 'X'},
                ],
              },
              validation: (rule) => rule.required().error('Platform is required.'),
            }),
            defineField({
              name: 'url',
              title: 'Profile URL',
              type: 'url',
              validation: (rule) =>
                rule
                  .uri({scheme: ['http', 'https']})
                  .required()
                  .error('Valid social URL is required.'),
            }),
            defineField({
              name: 'label',
              title: 'Custom Display Label',
              type: 'string',
              description: 'Optional display label (e.g. @dizitalgrow).',
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
      initialValue: [
        {
          platform: 'WhatsApp Channel',
          url: 'https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N',
          label: 'WhatsApp Channel',
        },
        {
          platform: 'Instagram',
          url: 'https://instagram.com/dizitalgrow',
          label: '@dizitalgrow',
        },
        {
          platform: 'Facebook',
          url: 'https://facebook.com/dizitalgrow',
          label: 'DizitalGrow',
        },
      ],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
      description: 'Legal copyright statement.',
      initialValue: '© 2026 DizitalGrow. All rights reserved. Websites, Apps & Ads That Grow Your Business.',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      group: 'footer',
      description: 'Footer legal links (privacy policy, terms, etc.).',
      of: [
        {
          type: 'object',
          name: 'legalLinkItem',
          title: 'Legal Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in new tab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
      initialValue: [
        {label: 'Privacy Policy', url: '/privacy-policy', openInNewTab: false},
        {label: 'Terms of Service', url: '/terms-of-service', openInNewTab: false},
      ],
    }),

    // =========================================================================
    // SECTION D: GLOBAL SEO
    // =========================================================================
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Fallback website title for search engines when pages do not provide one.',
      initialValue: 'Dizital Grow | High-Impact Websites, Web Apps & Growth Marketing',
      validation: (rule) => rule.max(70).warning('SEO title is ideally under 60-70 characters.'),
    }),
    defineField({
      name: 'defaultMetaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Default search engine snippet describing Dizital Grow.',
      initialValue:
        'We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.',
      validation: (rule) => rule.max(160).warning('Meta descriptions longer than 160 characters may be truncated.'),
    }),
    defineField({
      name: 'defaultSocialImage',
      title: 'Default Social Sharing Image',
      type: 'image',
      group: 'seo',
      description: 'Default Open Graph and Twitter image when a page does not specify one.',
      options: {hotspot: true},
    }),
  ],

  // ----------------------------------------------------
  // Document Preview Configuration
  // ----------------------------------------------------
  preview: {
    prepare() {
      return {
        title: 'Website Layout & Settings',
        subtitle: 'Global navigation, footer, brand assets & SEO configuration',
      }
    },
  },
})
