export type Blog = {
  _id: string,
  _createdAt: Date,
  _updatedAt: Date,
  title: string,
  slug: string,
  description: string,
  categories: Array<string>,
  keywords:Array<string>,
  thumbnail: string,
  markdown: string,
  content: string
};