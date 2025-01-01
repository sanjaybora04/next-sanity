import Link from "../layout/custom-link";

export default function Banner() {
  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-72px)] items-center justify-between bg-slate-100 border-b-2">
      <div className="p-5 md:p-10 md:px-20">
        <h5 className="text-xl font-semibold">I am</h5>
        <h1 className="text-3xl font-extrabold mt-3 mb-5 font-bitter">Sanjay Bora</h1>
        <div className="text-gray-500 italic">
          <div className="inline">
            <div className="inline text-blue-600 text-xl">“ </div>
            Crafting Seamless Digital Experiences: Expert Full Stack Web Developer
            <div className="inline text-blue-600 text-xl"> ” </div>
          </div>
        </div>
        <Link
          href="/projects"
          className="inline-block uppercase px-8 py-2 mt-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600"
        >
          My Projects
        </Link>
      </div>
      <div className=" flex-1 overflow-hidden md:flex-auto md:h-full w-full md:w-auto">
        <img src="/images/sanjaybora.png" className="h-full mx-auto object-contain" />
      </div>
    </section>
  )
}