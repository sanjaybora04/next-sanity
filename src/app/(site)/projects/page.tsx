import { getProjects } from "@/lib/sanity/sanity-utils";
import { Metadata } from "next";
import Link from "@/components/layout/custom-link";

export const metadata: Metadata = {
  title: "Sanjay Bora | Projects",
  description: "Explore the technology projects and tutorials created by Sanjay.",
  alternates: {
    canonical: `/projects`
  },
  openGraph: {
    images: [`/img/projects.jpg`],
    title: "Sanjay Bora | Projects",
    description: "Explore the technology projects and tutorials created by Sanjay.",
    url: `/projects`,
  },
  twitter: {
    title: "Sanjay Bora | Projects",
    description: "Explore the technology projects and tutorials created by Sanjay.",
  },
  authors: [{ name: "Sanjay Bora" }],
  keywords: ["sanjay bora projects", "projects"],
}

export default async function Projects() {
  const projects = await getProjects()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sanjay Bora | Projects",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    "description": "Explore the technology projects and tutorials created by Sanjay.",
    "mainEntity": projects.map((project) => ({
      "@type": "CreativeWork",
      "name": project.title,
      "url": project.project_link || `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`,
      "description": project.description,
      "image": project.thumbnail
    }))
  }


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Start banner Section */}
      <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-bitter text-white">Projects</h1>
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
            <Link href="/projects" className="hover:underline">
              {" "}
              Projects
            </Link>
          </p>
        </div>
      </section>
      {/* End banner Section */}
      {/* Main Content Start */}
      <section className="m-12 sm:mx-32 md:mx-40 lg:mx-52">
        <div className="flex gap-5 flex-wrap justify-center mt-10">
          {projects.map((p) =>
            <a href={p.project_link} key={p._id} className="group w-80 shadow-lg rounded-lg">
              <img src={p.thumbnail} className="rounded-lg aspect-video object-cover bg-indigo-500" />
              <div className="p-2">
                <h3 className="text-xl font-semibold font-bitter group-hover:text-indigo-600 text-ellipsis line-clamp-2 my-2">{p.title}</h3>
                <p className="text-gray-500 text-ellipsis line-clamp-3">{p.description}</p>
              </div>
            </a>
          )}
        </div>
      </section>
      {/*Main Content End*/}
    </>


  )

}
