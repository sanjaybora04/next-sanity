export default function Experience() {
    return (
        <section className="p-5 sm:p-10 lg:p-20">
            <h2 className="text-4xl font-bitter font-bold text-center mb-8">My Experience</h2>
            <div>
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                    {/* right */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-4 flex items-center justify-center">
                                <div className="h-full w-[1px] bg-gray-300 pointer-events-none" />
                            </div>
                            <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 border-2 border-gray-300"></div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                            <h4 className="text-xl font-bold">Full Stack Developer</h4>
                            <p>Webtoils Development</p>
                            <p className="text-gray-500 font-bitter text-sm">July 2024</p>
                            <a href="https://webtoils.com" target="_blank"
                                className="inline-block px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600"
                            >View</a>
                        </div>
                    </div>
                    {/* left */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 my-4 mr-auto md:mr-0 md:ml-auto">
                            <h4 className="font-bold text-xl mb-1">Freelance Project</h4>
                            <p className="leading-tight text-justify">
                                JoinYourTrip -Travel Agency
                            </p>
                            <p className="text-gray-500 font-bitter text-sm">May 2024</p>
                            <a href="https://joinyourtrip.com" target="_blank"
                                className="inline-block px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600"
                            >View</a>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-4 flex items-center justify-center">
                                <div className="h-full w-[1px] bg-gray-300 pointer-events-none"></div>
                            </div>
                            <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 border-2 border-gray-300"></div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-4 flex items-center justify-center">
                                <div className="h-full w-[1px] bg-gray-300 pointer-events-none" />
                            </div>
                            <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 border-2 border-gray-300"></div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto">
                            <h4 className="text-xl font-bold">Software Developer(Intern)</h4>
                            <p>IOTIOT -Artificial Intelligence</p>
                            <p className="text-gray-500 font-bitter text-sm">November 2022</p>
                            <a
                                href="/docs/IOTIOTPI0172_SanjayBora.pdf"
                                className="inline-block px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600"
                                target="_blank"
                            >
                                Certificate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}