import { CardBody, CardContainer, CardItem } from "../ui/3d-card"

const data = [
    {
        image: '/images/youtube.jpg',
        url: 'https://www.youtube.com/@sanjaybora04',
        title: 'YouTube',
        description: 'Explore my coding tutorials and tech content on YouTube.'
    },
    {
        image: '/images/github.jpg',
        url: 'https://github.com/sanjaybora04',
        title: 'Github',
        description: 'My base-of-operations for all things i code'
    },
    {
        image: '/images/linkedin.jpg',
        url: 'https://linkedin.com/in/sanjaybora04',
        title: 'LinkedIn',
        description: 'Connect with me on Linkedin for professionsl networking'
    },
]
export default function OtherPlatforms() {
    return (
        <section className="p-5 py-10 sm:p-20 border-b-2">
            <div>
                <div className="text-center pb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold font-bitter">Other Platforms</h2>
                </div>
                <div className="flex flex-wrap gap-5 sm:gap-10 justify-center">
                    {data.map(d =>
                        <a href={d.url} key={d.title} target="_blank">
                            <CardContainer className="w-80 p-3" containerClassName="py-0 sm:py-10">
                                <CardBody className="">
                                    <CardItem
                                        translateZ="100"
                                        rotateX={20}
                                        className="w-full mt-4"
                                    >
                                        <img src={d.image} alt={d.title} />
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        translateY={20}
                                        className="text-xl font-semibold font-bitter my-2"
                                    >
                                        {d.title}
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        translateY={20}
                                        className=""
                                    >
                                        {d.description}
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </a>
                        //     <img
                        //         src={d.image}
                        //         className="pb-5"
                        //         alt="youtube"
                        //     />
                        //     <h4 className="text-xl font-semibold my-2">{d.title}</h4>
                        //     <p className="text-gray-500">{d.description}</p>
                        // </a>
                    )}
                </div>
            </div>
        </section>
    )
}