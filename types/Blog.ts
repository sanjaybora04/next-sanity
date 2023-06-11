import { PortableTextBlock } from "sanity"

export type Blog = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  description: string,
  thumbnail: string,
  content: PortableTextBlock[]
};