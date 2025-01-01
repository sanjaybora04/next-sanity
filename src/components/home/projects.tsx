import { Project } from "@/lib/types"
import Link from "../layout/custom-link"
import {format} from 'date-fns'

export default function Projects({projects}:{projects:Project[]}){
    return(
        <section className="p-5 py-10 sm:p-20 bg-slate-100 border-b-2">
        <div>
          <div className="flex flex-wrap justify-center text-center">
            <div className="pb-8">
              <h2 className="text-3xl sm:text-4xl font-bold font-bitter mb-5">My Latest Projects</h2>
              <p className="text-gray-500 mb-3">Take a look at my recent work.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center" id="projects">
            {projects.map(project => {
              return <div className="w-80 p-3 m-3 shadow-lg bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl" key={project._id}>
                  <a href={project.project_link} target="_blank" rel="noreferrer">
                    <div className="w-full aspect-video">
                      <img
                        src={project.thumbnail}
                        width={300}
                        height={300}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-gray-500 text-sm font-bitter py-2">{format(project._createdAt,'dd LLL,yyyy')}</div>
                    <hr />
                    <h4 className="text-xl font-semibold font-bitter my-2">{project.title} </h4>
                    <p className="text-gray-500 text-sm">
                      {project.description}
                    </p>
                  </a>
              </div>
            })}
          </div>
        </div>
      </section>
    )
}