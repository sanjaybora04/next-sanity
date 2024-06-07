export type Project = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  description: string,
  project_link: string,
  keywords:Array<string>,
  thumbnail: string,
  content: string
};