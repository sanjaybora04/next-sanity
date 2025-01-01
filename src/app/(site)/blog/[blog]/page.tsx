import { getBlog, getBlogs } from "@/lib/sanity/sanity-utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/layout/custom-link";
import Giscus from "./giscus";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/components/portable-text-components";
import PageReader from "@/components/page-reader";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((blog) => ({
    blog: blog.slug,
  }))
}


export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params.blog;
  const blog = await getBlog(slug);

  if (!blog) return notFound()

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blog/${slug}`
    },
    openGraph: {
      images: [blog.thumbnail],
      title: blog.title,
      description: blog.description,
      url: `/blog/${slug}`,
    },
    twitter:{
      title: blog.title,
      description: blog.description,
    }, 
    authors: [{ name: "Sanjay Bora" }],
    keywords: blog.keywords,
  };
}


const BlogPage = async ({ params }: any) => {
  const slug = params.blog;
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
      <section className="mt-[72px] p-5 lg:p-7 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white p-3 font-bitter">
            {blog.title}
          </h1>
          <div className="text-sm">
            <Link href="/" className="!text-white hover:underline">
              Home{" "}
            </Link>
            <ArrowRight className="!text-white inline w-5 h-5" />
            <Link href="/blog" className="!text-white hover:underline">
              {" "}
              Blog
            </Link>
            <ArrowRight className="!text-white inline w-5 h-5" />
            <Link href={`/blog/${blog.slug}`} className="!text-white hover:underline">
              {" "+blog.title}
            </Link>
            <div className="mt-2">
            <PageReader/>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Section */}

      {/* Start Main Content Section */}
      <section id="content" className="mx-auto md:max-w-3xl md:w-3xl p-2 leading-relaxed tracking-wide">
        {blog.youtube?<iframe src={"https://www.youtube.com/embed/"+blog.youtube} className="w-full aspect-video max-h-70vh"/>:
        <img src={blog.thumbnail} alt={blog.title} className="!max-h-[70vh] mx-auto" />
        }

        <PortableText value={blog.body} components={portableTextComponents} />

        <h3 className="text-3xl font-semibold mt-14 mb-5 font-bitter">Support</h3>
        <p>
          Thank you for reading! If you enjoyed this post and want to support my work, consider supporting me by leaving a comment or sharing this post with a friend.
        </p>

        <div className="mt-10">

          <Giscus
            id="comments"
            repo="sanjaybora04/next-sanity"
            repoId="R_kgDOJtdWpw"
            category="General"
            categoryId="DIC_kwDOJtdWp84CgD7K"
            mapping="pathname"
            term="Welcome to the comments section! Have you read the post? What do you think? Let me know in the comments below!"
            reactionsEnabled="1"
            emitMetadata='0'
            inputPosition='bottom'
            theme='light'
            lang='en'
            loading="lazy"
          />
        </div>
      </section>
      {/* End Main Content Section */}


    </div>
  )
}

export default BlogPage