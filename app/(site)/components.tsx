// Image component
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '@/sanity/config/client-config'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ImageComponent = ({value, isInline}) => {
  return (
    <img src={urlFor(value).url()} className='my-5 sm:m-7 rounded-lg'/>
  )
}

const components = {
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}

export default components