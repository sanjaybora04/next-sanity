import { getProjects } from "@//sanity/sanity-utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sanjay Bora | Projects",
  description: "Explore the technology projects and tutorials created by Sanjay.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`
  },
  openGraph: {
    type: "website",
    siteName: "Sanjay",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/img/projects.jpg`],
    title: "Sanjay Bora | Projects",
    description: "Explore the technology projects and tutorials created by Sanjay.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
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
    "mainEntity": projects.map((project)=>({
      "@type": "CreativeWork",
      "name": project.title,
      "url": project.project_link||`${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`,
      "description": project.description,
      "image": project.thumbnail
    }))
  }
  

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Start banner Section */}
      <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
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
        {projects.map((project) => (
          <div key={project._id} className="mx-2">

            {project.project_link ?
              <a href={project.project_link} target="_blank" rel="noreferrer">
                <div className="m-3 p-3 lg:flex bg-slate-100 rounded-lg shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-200">
                  <div className="flex justify-center self-center">
                    <div className="w-72">
                      <img
                        className="my-3 rounded-lg"
                        src={project.thumbnail}
                        alt={project.title}
                      />
                    </div>
                  </div>
                  <div className="sm:px-10 sm:min-w-min">
                    <h3 className="text-2xl font-semibold group-hover:text-indigo-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 py-3">
                      {project.description}
                    </p>
                    <p className="text-gray-500 py-3">{new Date(project._createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </a> :
              <Link href={"/projects/" + project.slug}>
                <div className="m-3 p-3 lg:flex bg-slate-100 rounded-lg shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-200">
                  <div className="flex justify-center self-center">
                    <div className="w-72">
                      <img
                        className="my-3 rounded-lg"
                        src={project.thumbnail}
                        alt={project.title}
                      />
                    </div>
                  </div>
                  <div className="sm:px-10 sm:min-w-min">
                    <h3 className="text-2xl font-semibold group-hover:text-indigo-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 py-3">
                      {project.description}
                    </p>
                    <p className="text-gray-500 py-3">{new Date(project._createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            }
          </div>

        ))}

      </section>
      {/*Main Content End*/}
    </>


  )

}
