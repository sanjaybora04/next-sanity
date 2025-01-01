'use client'

import categories from "@/lib/sanity/config/categories"
import { Blog } from "@/lib/types"
import Link from "@/components/layout/custom-link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import Routes from "@/lib/routes"

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState<string>()

    function onCategoryChange(val:string) {
        setSelectedCategory(val)
        if(val=='all'){
            router.push(Routes.blog)
        }else{
            router.push(Routes.blog+val ? `?category=${val}` : '')
        }
    }

    useEffect(() => {
        const category = searchParams?.get('category')
        if (category) setSelectedCategory(category)
        else setSelectedCategory('all')
    }, [searchParams])
    return (
        <section className="m-12 sm:mx-32 md:mx-40 lg:mx-52">

            <div className="flex justify-center mb-5">
                <div className="flex items-center gap-2">
                    <div className="font-semibold text-lg">Category:</div>
                    <Select defaultValue="all" value={selectedCategory} onValueChange={onCategoryChange}>
                        <SelectTrigger className="min-w-44">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                {categories.map((category)=>(
                                    <SelectItem key={category.value} value={category.value}>{category.title}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex gap-5 flex-wrap justify-center mt-10">
                {blogs.map((blog) => {
                    if (blog.categories && selectedCategory=='all' || blog.categories?.includes(selectedCategory!))
                        return (
                            <Link href={`/blog/${blog.slug}`} key={blog._id} className="group w-80 shadow-lg rounded-lg">
                                <img src={blog.thumbnail} className="rounded-lg aspect-video object-cover bg-indigo-500" />
                                <div className="p-2">
                                    <h3 className="text-xl font-semibold font-bitter group-hover:text-indigo-600 text-ellipsis line-clamp-2 my-2">{blog.title}</h3>
                                    <p className="text-gray-500 text-ellipsis line-clamp-3">{blog.description}</p>
                                </div>
                            </Link>
                        )
                }
                )}
            </div>
        </section>
    )
}