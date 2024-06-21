import Blogs from "@/components/blogs";
import categories from "@/sanity/config/categories";
import { getBlogs } from "@/sanity/sanity-utils"
import { Metadata } from "next";
import Link from "next/link";

// Metadata for page
export const metadata: Metadata = {
    title: "Sanjay Bora | Blog",
    description: "Read the latest technology news and tutorials by Sanjay.",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    },
    openGraph: {
        type: "website",
        siteName: "Sanjay",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/img/blog.jpg`],
        title: "Sanjay Bora | Blog",
        description: "Read the latest technology news and tutorials by Sanjay.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: ["sanjay bora blog", "blog"],
}

export default async function Page() {
    const blogs = await getBlogs()

    const jsonLd: any = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Sanjay Bora | Blog",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        "description": "Read the latest technology news and tutorials by Sanjay.",
        "blogPost": blogs.map((blog) => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`,
            "dateModified": new Date(blog._updatedAt).toISOString(),
            "description": blog.description,
            "author": {
                "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`
            },
            "image": blog.thumbnail
        }))
    }
    console.log(blogs)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {/* Start banner Section */}
            <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">Blogs</h1>
                    <p className="text-white text-sm pt-3">
                        <Link href="/" className="hover:underline">
                            Home{" "}
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="inline w-6 h-6"
                        >
                            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <Link href="/blog" className="hover:underline">
                            {" "}
                            Blog
                        </Link>
                    </p>
                </div>
            </section>
            {/* End banner Section */}
            {/* Main Content Start */}
            <Blogs blogs={blogs} />
            {/*Main Content End*/}
        </>
    )
}