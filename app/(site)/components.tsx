import Refractor from 'react-refractor'
// Image component
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '@/sanity/config/client-config'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

const ImageComponent = ({ value }) => {
  return (
    <img src={urlFor(value).url()} className='my-5 sm:m-7 rounded-lg' />
  )
}

// Code Component
const CodeComponent = ({ value }) => {
  // console.log(value)
  return (
    <Refractor
      // In this example, `value` is the value of a `code` field
      language={value.language}
      value={value.code}
      markers={value.highlightedLines}
    />
  )
}

const components = {
  types: {
    image: ImageComponent,
    Code: CodeComponent
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold py-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold py-3">{children}</h3>,
    normal: ({ value, children }) => {
      if (value.children[0].marks[0] == 'code') {
        return <p className='bg-black text-white p-2'>{children}</p>
      }
      return <p className="py-2">{children}</p>
    }
  },
  listItem: {
    bullet: ({ children }) => <li className='list-disc list-inside pl-4'>{children}</li>,
    number: ({ children }) => <li className='list-decimal list-inside pl-4'>{children}</li>
  },
  marks: {
    link: ({ value, children }) => {
      return (
        <a href={value?.href} className='text-blue-500 underline'>
          {children}
        </a>
      )
    },
  },
}
export default components