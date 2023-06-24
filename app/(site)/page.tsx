import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sanjay Bora | Web Developer",
  description: "I am a freelance web developer, with a passion for deep learning. I specialize in building dynamic and responsive web applications.",
  alternates:{
    canonical:"https://sanjaybora.ml"
  },
  openGraph: {
    type: "website",
    images: ["https://sanjaybora.ml/img/thumbnail.png"],
    title: "Sanjay Bora | Web Developer",
    description: "I am a freelance web developer, with a passion for deep learning. I specialize in building dynamic and responsive web applications.",
    url: `https://sanjaybora.ml`,
  },
  authors: [{ name: "Sanjay Bora" }],
  keywords: ["sanjay bora", "web developer freelance", "freelance web programmer","hire freelance web developer","freelance web developer rates"],

}

const structured_data = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Sanjay Bora",
      "item": "https://sanjaybora.ml"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://sanjaybora.ml/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blogs",
      "item": "https://sanjaybora.ml/blogs"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "About Me",
      "item": "https://sanjaybora.ml/about"
    }
  ]
}

export default async function Home() {
  const structuredData = JSON.stringify(structured_data)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      {/* Start Banner Section */}
      <section className="flex h-[calc(100vh-72px)] items-center justify-between bg-slate-100">
        <div className="p-10 sm:px-20">
          <h5 className="text-xl font-semibold">I am</h5>
          <h1 className="text-3xl font-extrabold mt-3 mb-10">Sanjay Bora</h1>
          <div className="text-gray-500 italic">
            <div className="inline">
              <div className="inline text-blue-400 text-xl">“ </div>
              Code is like humor. When you have to explain it, it&aposs bad.
              <div className="inline text-blue-400 text-xl"> ” </div>
            </div>
            <div className="inline text-blue-400">- CORY HOUSE</div>
          </div>
          <Link
            href="/projects/"
            className="inline-block uppercase px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-400 to-blue-400"
          >
            My Projects
          </Link>
        </div>
        {/* <div class="col-lg-6 col-md-6 col-xs-6 banner-right align-self-center">
			<img src="/Assets/img/github.jpg" class="p-10">
		</div> */}
      </section>
      {/* End banner Section */}
      {/* Start Personal Details Section */}
      <section className="m-10 my-20 sm:m-20">
        <div>
          <div className="row align-items-center justify-content-between personal-details">
            <h2 className="uppercase text-4xl font-bold">Personal Details</h2>
            <blockquote className="p-5 border-l-2 border-indigo-400 text-gray-500">
              <p className="p-3">
                I&apos;m a freelance web developer with a passion for deep learning. I
                specialize in building web applications that leverage the latest
                technologies to provide engaging and dynamic user experiences. In
                addition, I have experience in developing and implementing deep
                learning algorithms to solve complex problems.
              </p>
              <p className="p-3">
                On this blog, I share some of the projects I&apos;ve worked on, both in
                web development and deep learning. My goal is to showcase my skills
                and experience while providing insights into the development process
                and offering practical advice for fellow developers. Whether you&apos;re
                interested in web development, deep learning, or both, I hope you&apos;ll
                find something useful and informative here.
              </p>
              <p className="p-3">
                Thank you for stopping by, and feel free to contact me if you have
                any questions or would like to discuss a potential project. Let&apos;s
                create something amazing together!
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Web Development</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  From frontend design to backend development, I enjoy building
                  dynamic and user-friendly web applications
                </p>
              </div>
            </div>
            <div className="inline-block align-top w-80">
              <div className="m-5 text-center">
                <div className="transition-colors duration-400 hover:text-indigo-400">
                  <div className="p-3 flex justify-center w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Machine Learning</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Using machine learning algorithms to tackle complex problems and
                  improve performance
                </p>
              </div>
            </div>
            <div className="inline-block align-top w-80">
              <div className="m-5 text-center">
                <div className="transition-colors duration-400 hover:text-indigo-400">
                  <div className="p-3 flex justify-center w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <a>
                    <h4 className="p-3 text-xl font-semibold">Computer vision</h4>
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Developing algorithms that can interpret and understand visual
                  data from the world around us
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
                Web Development{" "}
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Mern Stack - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Tailwind Css - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Html, Css, Js - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="w-80">
              <h4 className="text-center pt-5 text-xl font-semibold">
                Machine Learning
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Python - 5</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[100%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Transformers - 3</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Pytorch - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
            <div className="w-80">
              <h4 className="text-center pt-5 text-xl font-semibold">
                {" "}
                Computer vision{" "}
              </h4>
              <div className="p-3">
                <p className="text-gray-500 text-right">Opencv - 4</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">Transfer Learning - 3</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-500 text-right">CNN&apos;s - 3</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full w-[60%]"></div>
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
            <div className="w-80 p-3 m-3 shadow-lg bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <a
                href="https://github.com/sanjaybora04/customaiassistant"
                target="_blank"
              >
                <div className="py-3 h-80 flex justify-center align-middle">
                  <img
                    src="/img/CustomAiAssistant.jpg"
                    width={300}
                    height={300}
                    alt="CustomAiAssistant"
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="text-gray-500 pb-2 pt-4">Jan 05, 2023</div>
                <hr />
                <h4 className="text-xl font-semibold">Custom Ai Assistant </h4>
                <p className="text-gray-500">
                  Custom Ai Assistant api using pytorch and flask.
                  <br />
                  It uses Artificial Neural Networks(ANN) to recognise intent of
                  user input,
                  <br />
                  And it can be customised to give responses or other
                  functionalities like fetching data from an api, scheduling
                  meetings etc.
                </p>
              </a>
            </div>
            <div className="w-80 p-3 m-3 shadow-lg bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <Link href="/projects/license-plate-detection/">
                <div className="py-3 h-80 flex justify-center align-middle">
                  <img
                    src="/projects/license-plate-detection/thumbnail.png"
                    width={300}
                    height={300}
                    alt="LicensePlateDetection"
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="text-gray-500 pb-2 pt-4">Sept 20, 2022</div>
                <hr />
                <h4 className="text-xl font-semibold">License Plate Detection </h4>
                <p className="text-gray-500">
                  A python module to detect license plates in a given image.
                  <br />
                  It takes an image as input and returns cropped image of License
                  Plate with wrapped perspective
                </p>
              </Link>
            </div>
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
          </div>
        </div>
      </section>
      {/* End Other Platforms */}
    </>

  )

}
