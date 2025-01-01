export default function PersonalDetails(){
    return (
        <section className="p-5 sm:p-10 lg:px-20 border-b">
        <div className="section-top-border">
          <div className="row align-items-center justify-content-between">
            {/* <div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid" src="Assets/img/crop.jpg" alt="">
						</div> */}
            <div className="">
              <h2 className="uppercase text-3xl sm:text-4xl font-bitter font-bold mb-5">
                Personal Details
              </h2>
              <p className="text-gray-500">Here&apos;s some more info about me.</p>
              {/* <a href="about#FAQ" className="inline-block uppercase px-8 py-2 mt-5 text-white bg-gradient-to-r from-indigo-600 to-blue-600">FAQ</a> */}
            </div>
            <div className="py-2">
              <p className="text-gray-500">
                I am an experienced Full Stack Web Developer specializing in React, Next.js, Node.js, and Express.js. Skilled in AWS, MongoDB, and RESTful APIs. Dedicated to creating seamless, user-centric web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}