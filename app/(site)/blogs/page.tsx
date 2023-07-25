import { getBlogs } from "@/sanity/sanity-utils"
import { Metadata } from "next";
import Link from "next/link";

// Metadata for page
export const metadata: Metadata = {
    title: "Blogs",
    description: "Sanjay bora | Blogs Page",
    alternates: {
        canonical: "https://sanjaybora.tech/blogs"
    },
    openGraph: {
        type: "website",
        images: ["https://sanjaybora.tech/img/thumbnail.png"],
        title: "Blogs",
        description: "Sanjay bora | Blogs Page",
        url: `https://sanjaybora.tech/blogs`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: ["sanjay bora blogs", "blogs"],
}

export default async function Blogs() {
    const blogs = await getBlogs()

    return (
        <>
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
                        <Link href="/blogs/" className="hover:underline">
                            {" "}
                            Blogs
                        </Link>
                    </p>
                </div>
            </section>
            {/* End banner Section */}
            {/* Main Content Start */}
            <section className="m-12 sm:mx-32 md:mx-40 lg:mx-52">
                {blogs.map((blog) => (
                    <Link href={"/blogs/" + blog.slug} key={blog._id}>
                        <div className="m-3 p-3 lg:flex bg-slate-100 rounded-lg shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-200">
                            <div className="flex justify-center self-center">
                                <div className="w-72">
                                    <img
                                        className="my-3 rounded-lg"
                                        src={blog.thumbnail}
                                        alt={blog.title}
                                    />
                                </div>
                            </div>
                            <div className="sm:px-10 sm:min-w-min">
                                <h3 className="text-2xl font-semibold group-hover:text-indigo-500">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 py-3">
                                    {blog.description}
                                </p>
                                <p className="text-gray-500 py-3">{new Date(blog._createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
            {/*Main Content End*/}
        </>
    )
}