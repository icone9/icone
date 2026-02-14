import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
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
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Hero image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      description: "Used for filters and display (e.g. Design, Technology, Strategy)",
      options: {
        list: [
          { title: "Design", value: "Design" },
          { title: "Strategy", value: "Strategy" },
          { title: "Technology", value: "Technology" },
          { title: "Insights", value: "Insights" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "overview",
      type: "text",
      title: "Excerpt",
      description: "Short summary used in list cards and as hero pull quote",
    }),
    defineField({
      name: "readTime",
      type: "number",
      title: "Read time (minutes)",
      description: "Estimated reading time in minutes (e.g. 6 for '6 min read')",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Body",
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: [author && `by ${author}`, category].filter(Boolean).join(" • "),
      };
    },
  },
});