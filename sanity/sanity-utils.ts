import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url
    }`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url,
      content
    }`,
    { slug }
  )
}

