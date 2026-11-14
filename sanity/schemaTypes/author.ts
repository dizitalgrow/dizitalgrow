import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Authors & Contributors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required().error("Author name is required."),
    }),
    defineField({
      name: "slug",
      title: "Profile URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Author slug is required."),
    }),
    defineField({
      name: "designation",
      title: "Designation / Title",
      type: "string",
      description: "e.g. Lead Technical Architect, Founder & Head of Growth, Senior SEO Strategist",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
      description: "Brief professional summary describing expertise, accomplishments, and focus areas.",
      validation: (rule) => rule.required().max(600),
    }),
    defineField({
      name: "photo",
      title: "Profile Photo / Avatar",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Descriptive alt text for the author's portrait.",
        }),
      ],
    }),
    defineField({
      name: "expertise",
      title: "Areas of Expertise",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Key skills, e.g. Full-Stack Web Development, Meta CAPI, Google Ads, Next.js",
    }),
    defineField({
      name: "experience",
      title: "Relevant Experience & Background",
      type: "text",
      rows: 3,
      description: "Detailed industry background, past projects, or credentials establishing authority.",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Profile URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).error("Must be a valid URL."),
    }),
    defineField({
      name: "websiteUrl",
      title: "Personal / Professional Website",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"] }).error("Must be a valid URL."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
      media: "photo",
    },
  },
});
