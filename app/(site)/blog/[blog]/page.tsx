
import { getBlog, getBlogs } from "@/sanity/sanity-utils";
import PageReader from "./page-reader";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './blog.css'
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    blog: string
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogs()

  return blogs.map((blog) => ({
    blog: blog.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.blog as string;
  const blog = await getBlog(slug);

  if (!blog) return notFound()

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`
    },
    openGraph: {
      images: [blog.thumbnail],
      title: blog.title,
      description: blog.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: blog.keywords,
  };
}

const BlogPage = async ({ params }: Props) => {
  const slug = params.blog as string;
  const blog = await getBlog(slug);

  if (!blog) return notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": blog.title,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    "dateModified": new Date(blog._updatedAt).toISOString(),
    "description": blog.description,
    "author": {
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`
    },
    "image": blog.thumbnail,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`
    }
  }

  return (
    <div className="blog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Start banner Section */}
      <section className="mt-[72px] h-52 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white p-3">
            {blog.title}
          </h1>
          <PageReader/>
        </div>
      </section>
      {/* End banner Section */}

      {/* Start Main Content Section */}
      <section id="content" className="m-8 sm:mx-20 md:mx-32 lg:mx-40 leading-relaxed tracking-wide">
        <img src={blog.thumbnail} alt={blog.title} className="!max-h-[70vh]"/>
        <Markdown components={{
          a: ({node, ...props}) => {
            if(new URL(props.href!).origin===process.env.NEXT_PUBLIC_SITE_URL) {
              return <Link href={props.href!}/>
            }else{
              return <a {...props} target="_blank"/>
            }
            
          }
        }} remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </section>
      {/* End Main Content Section */}

    </div>
  )
}

export default BlogPage