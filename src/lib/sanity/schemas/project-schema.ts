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
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        { type: 'string' }
      ]
    },
  ]
}

export default project;