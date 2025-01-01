import { TypedObject } from "sanity";

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
  youtube: string,
  body: TypedObject[]
};

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