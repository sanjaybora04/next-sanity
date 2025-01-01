import Expertise from "@/components/home/expertise";
import Banner from "@/components/home/banner";
import OtherPlatforms from "@/components/home/other-platforms";
import PersonalDetails from "@/components/home/personal-details";
import Projects from "@/components/home/projects";
import { getProjects } from "@/lib/sanity/sanity-utils";
import { Metadata } from "next";
import TechStack from "@/components/home/tech-stack";

export const metadata: Metadata = {
  title: "Sanjay Bora | Full Stack Developer",
  description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: "Sanjay Bora | Full Stack Developer",
    description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/home.jpg`],
    url: '/',
  },
  twitter: {
    title: "Sanjay Bora | Full Stack Developer",
    description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
  },
  keywords: ["sanjay bora", "web developer freelance", "nextjs developer", "react developer", "fullstack developer"],
}


export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sanjay Bora | Full Stack Developer",
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "description": "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
    "mainEntityOfPage": `${process.env.NEXT_PUBLIC_SITE_URL}#person`,
  }

  const projects = await getProjects()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Banner/>
      <PersonalDetails/>
      <Expertise/>
      <TechStack/>
      <Projects projects={projects.slice(0,3)}/>
      <OtherPlatforms/>
    </>
  )
}
