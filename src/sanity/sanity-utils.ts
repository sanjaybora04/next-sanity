import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Blog } from "@//types/Blog";
import { Project } from "@//types/Project";


export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      categories,
      "thumbnail": thumbnail.asset->url
    }| order(_updatedAt desc)`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      "thumbnail": thumbnail.asset->url,
      youtube,
      body
    }`,
    { slug }
  )
}


export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      project_link,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      "thumbnail": thumbnail.asset->url,
      content
    }`,
    { slug }
  )
}
