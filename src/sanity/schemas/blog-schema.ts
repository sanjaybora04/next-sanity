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
      name: "youtube",
      title: "YouTube",
      type: "string"
    },
    {
      name: 'description',
      title: 'Description',
      type: "string"
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
            }
          ]
        }
      ],
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