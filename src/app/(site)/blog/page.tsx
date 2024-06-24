import Blogs from "@/components/blogs";
import categories from "@/sanity/config/categories";
import { getBlogs } from "@/sanity/sanity-utils"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

// Metadata for page
export async function generateMetadata({ searchParams }: { searchParams: any}): Promise<Metadata> {
    const category = categories.find(obj => obj.value == searchParams.category)
    return {
        title: category ? `${category?.title} blog | Sanjay Bora` : 'Blog | Sanjay Bora',
        description: category?.description||"Read the latest technology news and tutorials by Sanjay.",
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog${category ? `?category=${category?.value}` : ''}`,
        },
        openGraph: {
            type: "website",
            siteName: "Sanjay Bora",
            images: [`${process.env.NEXT_PUBLIC_SITE_URL}/img/blog.webp`],
            title: category ? `${category?.title} blog | Sanjay Bora` : 'Blog | Sanjay Bora',
            description: category?.description||"Read the latest technology news and tutorials by Sanjay.",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog${category ? `?category=${category?.value}` : ''}`,
        },
        authors: [{ name: "Sanjay Bora" }],
        keywords: category?.keywords||["sanjay bora blog", "blog"],
    }
}

export default async function Page({ searchParams }: { searchParams: any }) {
    const blogs = await getBlogs()

    const category = categories.find(obj => obj.value == searchParams.category)

    const jsonLd: any = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": category ? `${category?.title} blog | Sanjay Bora` : 'Blog | Sanjay Bora',
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog${category ? `?category=${category?.value}` : ''}`,
        "description": category?.description || "Read the latest technology news and tutorials by Sanjay.",
        "blogPost": blogs.map((blog) => {
            if (!category || blog.categories?.includes(category.value))
                return {
                    "@type": "BlogPosting",
                    "headline": blog.title,
                    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`,
                    "dateModified": new Date(blog._updatedAt).toISOString(),
                    "description": blog.description,
                    "author": {
                        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`
                    },
                    "image": blog.thumbnail
                }
        })
    }

    return (
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1622367531310821" crossOrigin="anonymous"></script>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {/* Start banner Section */}
            <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">{category ? `${category?.title} blog` : 'Blogs'}</h1>
                    <p className="text-white text-sm pt-3">
                        <Link href="/" className="hover:underline">
                            Home{" "}
                        </Link>
                        <ArrowRightIcon className="inline w-5 h-5" />
                        <Link href="/blog" className="hover:underline">
                            {" "}
                            Blog
                        </Link>
                    </p>
                    <p className="text-white text-sm pt-3">{category?.description}</p>
                </div>
            </section>
            {/* End banner Section */}
            {/* Main Content Start */}
            <Blogs blogs={blogs} />
            {/*Main Content End*/}
        </>
    )
}