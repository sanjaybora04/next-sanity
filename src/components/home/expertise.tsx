import { Cloud, Globe, Server } from "lucide-react";

const data = [
  {
    icon: <Server className="w-8 h-8" />,
    title: 'FullStack Development',
    description: 'Developing seamless web applications with expertise in React, Next.js, Node.js, and Express.js.'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'DevOps & Cloud Computing',
    description: 'Streamlining deployments with CI/CD pipelines, Docker, Kubernetes, and leveraging AWS and GCP for scalable infrastructure.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Scalable Architecture',
    description: 'Designing modular and scalable system architectures to handle growth and high traffic effectively.'
  }
]

export default function Expertise() {
  return (
    <section className="p-5 py-10 sm:p-20 border-b-2">
      <div>
        <div className="text-center mb-10">
          <h2 className="mb-3 text-3xl sm:text-4xl font-bold font-bitter">Areas of Expertise</h2>
          <p className="text-sm text-gray-500">
            {" "}
            Take a look at some of the things I love working on.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {
            data.map(d => (
              <div key={d.title} className="inline-block align-top w-full sm:w-96">
                <div className="m-5 text-center">
                  <div className="transition-colors duration-400 hover:text-indigo-600">
                    <div className="p-3 flex justify-center w-full">
                      {d.icon}
                    </div>
                    <a>
                      <h4 className="p-3 text-xl font-semibold">{d.title}</h4>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500">{d.description}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}