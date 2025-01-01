import { Metadata } from "next";
import Link from '@/components/layout/custom-link'
import Banner from "@/components/about/banner";
import PersonalDetails from "@/components/about/personal-details";
import Experience from "@/components/about/experience";

export const metadata: Metadata = {
  title: "About Me",
  description: "I am a freelance web developer, with a passion for deep learning. I specialize in building dynamic and responsive web applications.",
  alternates: {
    canonical: `/about`
  },
  openGraph: {
    images: [`/img/about.jpg`],
    title: "About Sanjay Bora | Full Stack Developer",
    description: "Welcome! I'm Sanjay Bora, a Full Stack Web Developer passionate about creating efficient web applications with React, Next.js, Node.js, and Express.js. Explore my journey and projects.",
    url: `/about`,
  },
  twitter:{
    title: "About Sanjay Bora | Full Stack Developer",
    description: "Welcome! I'm Sanjay Bora, a Full Stack Web Developer passionate about creating efficient web applications with React, Next.js, Node.js, and Express.js. Explore my journey and projects.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Banner/>
      <PersonalDetails/>
      {/* Start Experience Section */}
      <Experience/>
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
