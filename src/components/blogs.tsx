'use client'

import categories from "@/sanity/config/categories"
import { Blog } from "@/types/Blog"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState<string>()

    function onCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(e.target.value)
        router.push(`/blog${e.target.value ? `?category=${e.target.value}` : ''}`)
    }

    useEffect(() => {
        const category = searchParams?.get('category')
        if (category) setSelectedCategory(category)
    }, [searchParams])
    return (
        <section className="m-12 sm:mx-32 md:mx-40 lg:mx-52">

            <div className="flex justify-center mb-5">
                <div className="flex items-center gap-2">
                    <div>Categories:</div>
                    <select value={selectedCategory} onChange={onCategoryChange} className="w-40 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500">
                        <option value={''}>All</option>
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
                {blogs.map((blog) => {
                    if (blog.categories && !selectedCategory || blog.categories?.includes(selectedCategory!))
                        return (
                            <Link href={`/blog/${blog.slug}`} key={blog._id} className="w-80 shadow-lg rounded-lg">
                                <img src={blog.thumbnail} className="rounded-lg aspect-video object-cover bg-indigo-500" />
                                <div className="p-2">
                                    <h3 className="text-xl font-semibold group-hover:text-indigo-500 text-ellipsis line-clamp-2">{blog.title}</h3>
                                    <p className="text-gray-500 mt-3 text-ellipsis line-clamp-3">{blog.description}</p>
                                </div>
                            </Link>
                        )
                }
                )}
            </div>
        </section>
    )
}