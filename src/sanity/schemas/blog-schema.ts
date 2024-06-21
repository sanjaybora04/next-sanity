import categories from "../config/categories";

const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 }
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "slug",
          options: { source: "title" }
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: "string"
    },
    {
      name: 'structured_data',
      title: 'Structured Data',
      type: 'code',
      options: {
        language: "json"
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: categories
      }
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        { type: 'string' }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'markdown',
    }
  ],
  orderings: [
    {
      title: "3d printing",
      name: "3d_printing",
      by: [
        { field: "categories", }
      ]
    }
  ]
}

export default blog;