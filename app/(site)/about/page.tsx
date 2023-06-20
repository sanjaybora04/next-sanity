import { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Me"
}

export default async function About() {
  return (
    <>
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
        <Link href="/about/" className="hover:underline">
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
        {/* <div class="col-lg-6 col-md-6 home-about-left">
							<img class="img-fluid" src="Assets/img/crop.jpg" alt="">
						</div> */}
        <div className="">
          <h2 className="uppercase text-4xl font-bold mb-10">
            Personal Details
          </h2>
          <p className="text-gray-500">Here&apos;s some more info about me.</p>
          {/* <a href="about#FAQ" class="inline-block uppercase px-8 py-2 mt-5 text-white bg-gradient-to-r from-indigo-400 to-blue-400">FAQ</a> */}
        </div>
        <div className="py-10">
          <p className="text-gray-500">
            I&apos;m a freelance web developer and deep learning enthusiast, sharing
            my projects and experience through this blog. Follow me on my coding
            journey and discover the possibilities of technology
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
        {/* left */}
        {/* <div class="flex flex-row-reverse md:contents">
					<div class="col-start-1 col-end-5 p-4 my-4 mr-auto sm:mr-0 sm:ml-auto">
						<h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
						<p class="leading-tight text-justify">
							Lorem ipsum dolor
						</p>
					</div>
					<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div class="h-full w-4 flex items-center justify-center">
							<div class="h-full w-[1px] bg-gray-300 pointer-events-none"></div>
						</div>
						<div class="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-400 border-2 border-gray-300"></div>
					</div>
				</div> */}
      </div>
    </div>
  </section>
  <hr />
  {/* End Experience Section */}
  {/* Start FAQ Section */}
  {/* <section class="m-10 my-20 sm:m-20">
		<div class="">
			<div class="flex justify-center">
				<div class="pb-8">
					<div class="text-center">
						<h2 class="text-4xl font-bold mb-10">Any Questions?</h2>
					</div>
				</div>
			</div>
			
			<div class="flex justify-center">
				<div class="col-lg-8">
					
					<details class="cursor-pointer mb-3">
						<summary class="text-lg font-semibold py-5">Why are you interested in Deep Learning</summary>
						<p>
						<p class="text-gray-500 py-3">When i started to study Neural Networks from basics, I was able to
							relate the
							similarity
							between how neural networks work and how human brains work.
						</p>
						<p class="text-gray-500 pb-3">When i used to train a model, i noticed how it sometimes takes the
							wrong route to
							achieve its goal(overfitting),
							and how the environment(input data) affected its accuracy, the same way as humans
							learn.
						</p>
						<p class="text-gray-500 pb-3">Being able to learn with this perspective made the learning
							process very interesting
							for me.</p>
						</p>
					</details>

					<details class="cursor-pointer mb-3">
						<summary class="text-lg  font-semibold py-5">What kind of work do you see yourself doing?</summary>
						<p>
							<p class="text-gray-500 py-3">As the growth of AI is increasing day by day, I want to be a part
							of this
							revolution and contribute to the community.
							</p>
						<p class="text-gray-500 pb-3">Most of my projects are Open-source and you can find them on my 
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
