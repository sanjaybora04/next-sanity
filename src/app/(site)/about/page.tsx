import { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Me",
  description: "I am a freelance web developer, with a passion for deep learning. I specialize in building dynamic and responsive web applications.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`
  },
  openGraph: {
    type: "profile",
    siteName: "Sanjay",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/img/about.jpg`],
    title: "About Sanjay Bora | Full Stack Developer",
    description: "Welcome! I'm Sanjay Bora, a Full Stack Web Developer passionate about creating efficient web applications with React, Next.js, Node.js, and Express.js. Explore my journey and projects.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  authors: [{ name: "Sanjay Bora" }],
  keywords: ["about sanjay bora", "sanjay bora"],
}

export default async function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sanjay Bora | Full Stack Developer",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    "description": "Welcome! I'm Sanjay Bora, a Full Stack Web Developer passionate about creating efficient web applications with React, Next.js, Node.js, and Express.js. Explore my journey and projects.",
    "mainEntity": {
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`
    }
  }

  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1622367531310821" crossOrigin="anonymous"></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Start banner Section */}
      <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
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
            <Link href="/about" className="hover:underline">
              {" "}
              About Me
            </Link>
          </p>
        </div>
      </section>
      {/* End banner Section */}
      {/* Start Personal Details Section */}
      <section className="m-10 sm:mx-20">
        <div className="section-top-border">
          <div className="row align-items-center justify-content-between">
            {/* <div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid" src="Assets/img/crop.jpg" alt="">
						</div> */}
            <div className="">
              <h2 className="uppercase text-4xl font-bold mb-10">
                Personal Details
              </h2>
              <p className="text-gray-500">Here&apos;s some more info about me.</p>
              {/* <a href="about#FAQ" className="inline-block uppercase px-8 py-2 mt-5 text-white bg-gradient-to-r from-indigo-400 to-blue-400">FAQ</a> */}
            </div>
            <div className="py-10">
              <p className="text-gray-500">
                Experienced Full Stack Web Developer specializing in React, Next.js, Node.js, and Express.js. Skilled in AWS, MongoDB, and RESTful APIs. Dedicated to creating seamless, user-centric web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* End Personal Details Section */}
      {/* Start Experience Section */}
      <section className="m-10 my-20 sm;m-20">
        <div className="pb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">My Experience</h2>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
            {/* right */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-4 flex items-center justify-center">
                  <div className="h-full w-[1px] bg-gray-300 pointer-events-none" />
                </div>
                <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 border-2 border-gray-300"></div>
              </div>
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
                <p>JoinYourTrip - Travel Agency</p>
                <p className="text-gray-500">May 2024</p>
                <a href="https://joinyourtrip.com" target="_blank"
                  className="inline-block px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-400 to-blue-400"
                >View</a>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div className="col-start-1 col-end-5 p-4 my-4 mr-auto md:mr-0 md:ml-auto">
                <h4 className="font-semibold text-lg mb-1">Backend Developer(Intern)</h4>
                <p className="leading-tight text-justify">
                  Social Advertize - Digital Marketing Agency
                </p>
                <p className="text-gray-500">August 2023</p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-4 flex items-center justify-center">
                  <div className="h-full w-[1px] bg-gray-300 pointer-events-none"></div>
                </div>
                <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 border-2 border-gray-300"></div>
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-4 flex items-center justify-center">
                  <div className="h-full w-[1px] bg-gray-300 pointer-events-none" />
                </div>
                <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 border-2 border-gray-300"></div>
              </div>
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                <h4 className="text-xl font-bold">Software Developer(Intern)</h4>
                <p>IOTIOT - Artificial Intelligence</p>
                <p className="text-gray-500">November 2022</p>
                <a
                  href="/docs/IOTIOTPI0172_SanjayBora.pdf"
                  className="inline-block px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-400 to-blue-400"
                  target="_blank"
                >
                  Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* End Experience Section */}
      {/* Start FAQ Section */}
      {/* <section className="m-10 my-20 sm:m-20">
		<div className="">
			<div className="flex justify-center">
				<div className="pb-8">
					<div className="text-center">
						<h2 className="text-4xl font-bold mb-10">Any Questions?</h2>
					</div>
				</div>
			</div>
			
			<div className="flex justify-center">
				<div className="col-lg-8">
					
					<details className="cursor-pointer mb-3">
						<summary className="text-lg font-semibold py-5">Why are you interested in Deep Learning</summary>
						<p>
						<p className="text-gray-500 py-3">When i started to study Neural Networks from basics, I was able to
							relate the
							similarity
							between how neural networks work and how human brains work.
						</p>
						<p className="text-gray-500 pb-3">When i used to train a model, i noticed how it sometimes takes the
							wrong route to
							achieve its goal(overfitting),
							and how the environment(input data) affected its accuracy, the same way as humans
							learn.
						</p>
						<p className="text-gray-500 pb-3">Being able to learn with this perspective made the learning
							process very interesting
							for me.</p>
						</p>
					</details>

					<details className="cursor-pointer mb-3">
						<summary className="text-lg  font-semibold py-5">What kind of work do you see yourself doing?</summary>
						<p>
							<p className="text-gray-500 py-3">As the growth of AI is increasing day by day, I want to be a part
							of this
							revolution and contribute to the community.
							</p>
						<p className="text-gray-500 pb-3">Most of my projects are Open-source and you can find them on my 
							<a href="https://github.com/sanjaybora04" target="_blank" >github</a>.
						</p>
						</p>
					</details>

				</div>
			</div>
		</div>
	</section> */}
      {/* End FAQ Section */}
    </>

  )

}
