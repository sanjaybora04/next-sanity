
import { getBlog, getBlogs } from "@/sanity/sanity-utils";
import PageReader from "./page-reader";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './blog.css'
import { Metadata } from "next";

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
  return {
    title: blog.title,
    description: blog.description,
    alternates:{
      canonical:`https://sanjaybora.tech/blogs/${slug}`
    },
    openGraph: {
      images: [blog.thumbnail],
      title: blog.title,
      description: blog.description,
      url: `https://sanjaybora.tech/blogs/${slug}`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: blog.keywords,
  };
}

const BlogPage = async ({ params }: Props) => {
  const slug = params.blog as string;
  const blog = await getBlog(slug);
  return (
    <div className="blog">
      {/* Start banner Section */}
      <section className="mt-[72px] h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white p-3">
            {blog.title}
          </h1>
          {/* <PageReader/> */}
        </div>
      </section>
      {/* End banner Section */}

      {/* Start Main Content Section */}
      <section id="content" className="m-8 sm:mx-20 md:mx-32 lg:mx-40 leading-relaxed tracking-wide">
        <img src={blog.thumbnail} alt={blog.title} className='my-5 sm:m-7 rounded-lg' />
        <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </section>
      {/* End Main Content Section */}

    </div>
  )
}

export default BlogPage