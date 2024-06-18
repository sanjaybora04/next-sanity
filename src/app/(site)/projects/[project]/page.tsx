import { getProject, getProjects } from "@//sanity/sanity-utils";
import { Metadata } from "next";
import Markdown from "react-markdown";

type Props = {
  params: { project: string }
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => {
    if(!project.project_link){
      return {
        project: project.slug,
      }
    }else{
      return
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project = await getProject(slug);
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`
    },
    openGraph: {
      images: [project.thumbnail],
      title: project.title,
      description: project.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
    },
    authors: [{ name: "Sanjay Bora" }],
    keywords: project.keywords,
  };
}

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      {/* Start banner Section */}
      <section className="mt-[72px] h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white p-3">
            {project.title}
          </h1>
        </div>
      </section>
      {/* End banner Section */}

      {/* Start Main Content Section */}
      <section id="content" className="m-8 sm:mx-20 md:mx-32 lg:mx-40 leading-relaxed tracking-wide">
        <Markdown>{project.content}</Markdown>
      </section>
      {/* End Main Content Section */}

    </div>
  )
}

export default Project