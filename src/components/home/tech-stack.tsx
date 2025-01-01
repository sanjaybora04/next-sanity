import { AnimatedTooltip } from "../ui/animated-tooltip"

const data = [
  {
    image: '/images/techstack/nextjs.jpg',
    title: 'NextJs',
  },
  {
    image: '/images/techstack/react.png',
    title: 'ReactJs',
  },
  {
    image: '/images/techstack/express.webp',
    title: 'ExpressJs',
  },
  {
    image: '/images/techstack/prisma.png',
    title: 'Prisma',
  },
  {
    image: '/images/techstack/sequelize.png',
    title: 'Sequelize',
  },
  {
    image: '/images/techstack/sanity.webp',
    title: 'Sanity',
  },
  {
    image: '/images/techstack/aws.jpg',
    title: 'AWS',
  },
  {
    image: '/images/techstack/shadcn.png',
    title: 'Shadcn',
  },
  {
    image: '/images/techstack/typescript.png',
    title: 'TypeScript'
  },
  {
    image: '/images/techstack/tailwind.webp',
    title: 'TailwindCss',
  },
  {
    image: '/images/techstack/coolify.png',
    title: 'Coolify'
  }
]

export default function TechStack() {
  return (
    <section className="p-5 py-10 sm:p-20 border-b-2">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-bitter">Tech Stack</h2>
        <p className="mt-2">List of technologies I have worked with</p>
      </div>
      <div className="mt-7">
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {data.map(d =>
            <div key={d.title}>
              <AnimatedTooltip data={d} />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}