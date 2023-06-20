import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, Metadata } from "next";
import { PortableText } from '@portabletext/react';
import { getBlog } from "@/sanity/sanity-utils";
import components from "@/app/(site)/components";
import PageReader from "./page-reader";

import { ParsedUrlQuery } from 'querystring';
import { Blog } from "@/types/Blog";


export const getStaticProps: GetStaticProps<{ blog: Blog }> = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
  const slug = context.params?.blog as string;
  const blog = await getBlog(slug);
  return { props: { blog } };
};



export async function generateMetadata({ blog }: InferGetStaticPropsType<typeof getStaticProps>): Promise<Metadata> {
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [blog.thumbnail],
      title: blog.title,
      description: blog.description,
      url: `https://sanjaybora.ml/blogs/${blog.slug}/`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: blog.keywords,
  };
}

export default async function Blog({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {/* Start banner Section */}
      <section className="mt-[72px] h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
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
        <PortableText value={blog.content} components={components} />
      </section>
      {/* End Main Content Section */}

    </div>
  )
} 