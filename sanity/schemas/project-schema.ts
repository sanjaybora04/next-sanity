const project = {
  name: "project",
  title: "Projects",
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
      name: 'project_link',
      title: 'Project link',
      type: 'string'
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
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        { type: 'string' }
      ]
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
        },
        {
          name: 'Code',
          title: 'Code',
          type: 'code',
        },
        {
          name: 'Element',
          title: 'Element',
          type: 'code',
          options: {
            language: 'html'
          }
        }
      ]
    }
  ]
}

export default project;