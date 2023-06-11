import { getProjects } from "@/sanity/sanity-utils"
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects"
}

export default async function About() {
  const projects = await getProjects();

  return (
    <>
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
            <Link href="/projects/" className="hover:underline">
              {" "}
              Projects
            </Link>
          </p>
        </div>
      </section>
      {/* End banner Section */}
      {/* Main Content Start */}
      <section className="m-12 sm:mx-32 md:mx-40 lg:mx-52">
        <a
          href="https://github.com/sanjaybora04/customaiassistant"
          target="_blank"
          className="mx-2"
        >
          <div className="m-3 p-3 lg:flex bg-slate-100 rounded-lg shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-200">
            <div className="flex justify-center self-center">
              <div className="w-72">
                <img
                  className="my-3 rounded-lg"
                  src="/img/git.jpg"
                  alt="github icon"
                />
              </div>
            </div>
            <div className="sm:px-10 sm:min-w-min">
              <h3 className="text-2xl font-semibold group-hover:text-indigo-500">
                Custom Ai Assistant
              </h3>
              <p className="text-gray-500 py-3">
                Custom Ai Assistant api using pytorch and flask.
                <br />
                It uses Artificial Neural Networks(ANN) to recognise intent of user
                input,
                <br />
                And it can be customised to give responses or other functionalities
                like fetching data from an api, scheduling meetings etc.
              </p>
              <p className="text-gray-500 py-3">January 5, 2023</p>
            </div>
          </div>
        </a>
        <Link href="license-plate-detection/" className="mx-2">
          <div className="m-3 p-3 lg:flex bg-slate-100 rounded-lg shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-200">
            <div className="flex justify-center self-center">
              <div className="w-72">
                <img
                  className="my-3 rounded-lg"
                  src="/img/git.jpg"
                  alt="github icon"
                />
              </div>
            </div>
            <div className="sm:px-10 sm:min-w-min">
              <h3 className="text-2xl font-semibold group-hover:text-indigo-500">
                License Plate Detection
              </h3>
              <p className="text-gray-500 py-3">
                A python module to detect license plates in a given image.
                <br />
                It takes an image as input and returns cropped image of License
                Plate with wrapped perspective
              </p>
              <p className="text-gray-500 py-3">September 20, 2022</p>
            </div>
          </div>
        </Link>
      </section>
      {/*Main Content End*/}
    </>


  )

}
