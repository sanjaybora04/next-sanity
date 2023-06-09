import { PortableTextBlock } from "sanity"

export type Blog = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  description: string,
  keywords:Array<string>,
  thumbnail: string,
  content: PortableTextBlock[]
};