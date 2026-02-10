import { defineField, defineType } from "sanity";

export const projectFeatureObject = defineType({
  name: "projectFeature",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "description", type: "text", title: "Description" }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Feature" };
    },
  },
});

export const projectType = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Project title (e.g. \"Puffilo : Bites of Cloud-Like Bliss\")",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Short tagline (e.g. \"Reimagining Confectionery\")",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "overview",
      type: "text",
      title: "Description",
      description: "Main description / Our Approach section",
    }),
    defineField({
      name: "client",
      type: "string",
      title: "Client",
    }),
    defineField({
      name: "industry",
      type: "string",
      title: "Industry",
      description: "e.g. Food & Beverage, Health & Tech, Software",
    }),
    defineField({
      name: "services",
      type: "array",
      title: "Services",
      description: "Used for filters and meta (e.g. Visual Identity, Packaging, UI/UX Design)",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "websiteUrl",
      type: "url",
      title: "Website URL",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      options: { hotspot: true },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Hero image",
      description: "Large hero image on project detail page",
      options: { hotspot: true },
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
      description: "Card/listing image. Falls back to hero if empty.",
      options: { hotspot: true },
    }),
    defineField({
      name: "challenge",
      type: "text",
      title: "Challenge",
      description: "Optional text for \"The Challenge\" section",
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Key features",
      of: [{ type: "projectFeature" }],
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Beta", value: "beta" },
          { title: "Alpha", value: "alpha" },
          { title: "Production", value: "production" },
          { title: "Deprecated", value: "deprecated" },
          { title: "Discontinued", value: "discontinued" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "technologies",
      type: "array",
      title: "Technologies",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "Used for \"Year\" on the page",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled project",
        subtitle: subtitle || undefined,
        media,
      };
    },
  },
});
