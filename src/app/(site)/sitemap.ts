
import Routes from '@/lib/routes'
import categories from '@/lib/sanity/config/categories'
import { getBlogs } from '@/lib/sanity/sanity-utils'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs = await getBlogs()

    const sitemap: MetadataRoute.Sitemap = [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.home}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.about}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.projects}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.blog}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.contact}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        }
    ]

    categories.forEach((category) => {
        sitemap.push({
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.blog}?category=${category.value}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        })
    })

    blogs.forEach((blog) => {
        sitemap.push({
            url: `${process.env.NEXT_PUBLIC_SITE_URL!}${Routes.blogPost(blog.slug)}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        })
    })


    return sitemap
}