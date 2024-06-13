import { getProjects } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import Link from "next/link"
import { CloudIcon, GlobeAltIcon, ServerStackIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: "Sanjay Bora | Full Stack Developer",
  description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL
  },
  openGraph: {
    type: "profile",
    siteName: "Sanjay",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/img/thumbnail.png`],
    title: "Sanjay Bora | Full Stack Developer",
    description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  authors: [{ name: "Sanjay Bora" }],
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

  const projects = (await getProjects()).slice(0, 3)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Start Banner Section */}
      <section className="flex flex-col md:flex-row h-[calc(100vh-72px)] items-center justify-between bg-slate-100">
        <div className="p-10 sm:pl-20">
          <h5 className="text-xl font-semibold">I am</h5>
          <h1 className="text-3xl font-extrabold mt-3 mb-5">Sanjay Bora</h1>
          <div className="text-gray-500 italic">
            <div className="inline">
              <div className="inline text-blue-400 text-xl">“ </div>
              Crafting Seamless Digital Experiences: Expert Full Stack Web Developer
              <div className="inline text-blue-400 text-xl"> ” </div>
            </div>
          </div>
          <Link
            href="/projects"
            className="inline-block uppercase px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-400 to-blue-400"
          >
            My Projects
          </Link>
        </div>
        <div className=" flex-1 overflow-hidden md:flex-auto md:h-full w-full md:w-auto">
          <img src="/img/me.png" className="h-full mx-auto object-contain" />
        </div>
      </section>
      {/* End banner Section */}
      {/* Start Personal Details Section */}
      <section className="m-10 my-20 sm:m-20">
        <div>
          <div className="row align-items-center justify-content-between personal-details">
            <h2 className="uppercase text-4xl font-bold">Personal Details</h2>
            <blockquote className="p-5 border-l-2 border-indigo-400 text-gray-500">
              <p className="p-3">
              I am a passionate Full Stack Web Developer with extensive experience in designing, developing, and maintaining robust web applications. My expertise lies in leveraging technologies such as React, Next.js, Node.js, and Express.js to create responsive and dynamic interfaces that enhance user engagement and satisfaction. Throughout my career, I have successfully implemented RESTful APIs for smooth client-server communication and utilized MongoDB, SQL, and Sequelize for efficient database management.
              </p>
              <p className="p-3">
              I have a strong background in cloud services, particularly AWS, ensuring scalability and uptime for applications. Collaborating closely with cross-functional teams, including UI/UX designers, I strive to deliver user-friendly interfaces that optimize user experiences. My dedication to continuous learning drives me to explore and integrate new technologies, enhancing development workflows and staying ahead in the ever-evolving tech landscape. Passionate about crafting seamless digital experiences, I am committed to delivering innovative solutions that meet project goals and exceed expectations.
              </p>
            </blockquote>
            <Link
              href="/about/"
              className="inline-block uppercase px-5 py-2 mt-3 text-white bg-indigo-400"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
      <hr />
      {/* End Personal Details Section */}
      {/* Start Services Section */}
      <section className="m-10 my-20 sm:m-20">
        <div>
          <div className="text-center mb-10">
            <h2 className="mb-3 text-4xl font-bold">Areas of Interest</h2>
            <p className="text-sm text-gray-500">
              {" "}
              Take a look at some of the things I love working on.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="inline-block align-top w-80">
              <div className="m-5 text-center">
                <div className="transition-colors duration-400 hover:text-indigo-400">
                  <div className="p-3 flex justify-center w-full">
                    <GlobeAltIcon className="w-8 h-8"/>
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Frontend Development</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                Crafting responsive and engaging user interfaces using React and Next.js, enhancing user experience across devices.
                </p>
              </div>
            </div>
            <div className="inline-block align-top w-80">
              <div className="m-5 text-center">
                <div className="transition-colors duration-400 hover:text-indigo-400">
                  <div className="p-3 flex justify-center w-full">
                    <ServerStackIcon className="w-8 h-8"/>
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Backend Development</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                Building scalable server-side applications with Node.js and Express.js, proficient in MongoDB and SQL for efficient data management.
                </p>
              </div>
            </div>
            <div className="inline-block align-top w-80">
              <div className="m-5 text-center">
                <div className="transition-colors duration-400 hover:text-indigo-400">
                  <div className="p-3 flex justify-center w-full">
                    <CloudIcon className="w-8 h-8" />
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Cloud Computing</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                Leveraging AWS and cloud services for deploying robust, scalable applications, ensuring high performance and global accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* End Services Section */}
      {/* Start Skills Section */}
      <section className="m-10 my-20 sm:m-20">
        <div className="my-10">
          <div className="text-center">
            <h2 className="mb-10 text-4xl font-bold">Skills Expertisse</h2>1 - Basic{" "}
            <span className="inline-block w-[2ch]"> </span>2 - Novice{" "}
            <span className="inline-block w-[2ch]"> </span>3 - Intermediate
            <span className="inline-block w-[2ch]"> </span>
            <p>
              4 - Advanced<span className="inline-block w-[2ch]"> </span>5 - Expert
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center">
            <div className="w-80">
              <h4 className="text-center pt-5 text-xl font-semibold">
                {" "}
                Frontend Development{" "}
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Next.js - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">React - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Responsive Design - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
            </div>
            <div className="w-80">
              <h4 className="text-center pt-5 text-xl font-semibold">
                Backend Development
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Express.js - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Sequelize - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Mongodb - 3</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
            <div className="w-80">
              <h4 className="text-center pt-5 text-xl font-semibold">
                {" "}
                Cloud Computing{" "}
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Aws - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Scalability - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Relaibility - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* End Skills Section */}
      {/* Start Recent-blog Section */}
      <section className="p-10 py-20 sm:p-20 bg-slate-100">
        <div>
          <div className="flex flex-wrap justify-center text-center">
            <div className="pb-8">
              <h2 className="text-4xl font-bold mb-5">My Latest Projects</h2>
              <p className="text-gray-500 mb-3">Take a look at my recent work.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center" id="projects">
            {projects.map(project => {
              return <div className="w-80 p-3 m-3 shadow-lg bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl" key={project._id}>
                {project.project_link ?
                  <a href={project.project_link} target="blank" rel="noreferrer">
                    <div className="py-3 h-80 flex justify-center align-middle">
                      <img
                        src={project.thumbnail}
                        width={300}
                        height={300}
                        alt={project.title}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="text-gray-500 pb-2 pt-4">{new Date(project._createdAt).toLocaleDateString()}</div>
                    <hr />
                    <h4 className="text-xl font-semibold">{project.title} </h4>
                    <p className="text-gray-500">
                      {project.description}
                    </p>
                  </a> :
                  <Link href={"/projects/" + project.slug}>
                    <div className="py-3 h-80 flex justify-center align-middle">
                      <img
                        src={project.thumbnail}
                        width={300}
                        height={300}
                        alt={project.title}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <div className="text-gray-500 pb-2 pt-4">{new Date(project._createdAt).toLocaleDateString()}</div>
                    <hr />
                    <h4 className="text-xl font-semibold">{project.title} </h4>
                    <p className="text-gray-500">
                      {project.description}
                    </p>
                  </Link>
                }
              </div>
            })}
          </div>
        </div>
      </section>
      <hr />
      {/* End Recent-blog Section */}
      {/* Start Other Platforms */}
      <section className="m-10 my-20 sm:m-20">
        <div className="">
          <div className="row d-flex justify-content-center">
            <div className="text-center pb-20">
              <h2 className="text-4xl font-bold">Other Platforms</h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-80 m-3 p-3 shadow-lg flex justify-center transition-all duration-400 hover:scale-110 hover:bg-blue-400">
              <a href="https://github.com/sanjaybora04" target="_blank">
                <div className="text-center">
                  <img
                    src="/img/github.jpg"
                    className="pb-5"
                    width={300}
                    height={300}
                    alt="github"
                  />
                  <h4 className="text-xl font-semibold p-3">GitHub</h4>
                  <p className="text-gray-500">
                    My base-of-operations for all things i code.
                  </p>
                </div>
              </a>
            </div>
            <div className="w-80 m-3 p-3 shadow-lg flex justify-center transition-all duration-400 hover:scale-110 hover:bg-blue-400">
              <a href="https://github.com/sanjaybora04" target="_blank">
                <div className="text-center">
                  <img
                    src="/img/linkedin.jpg"
                    className="pb-5"
                    width={300}
                    height={300}
                    alt="linkedin"
                  />
                  <h4 className="text-xl font-semibold p-3">LinkedIn</h4>
                  <p className="text-gray-500">
                  Connect with me on LinkedIn for professional networking
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Other Platforms */}
    </>

  )

}
