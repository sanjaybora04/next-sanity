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
          options:{source: "title"}
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string"
            }
          ]
        }
    ]
    }
  ]
}

export default blog;