import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import myConfiguredSanityClient from '@/sanity/config/client-config';
import { PortableTextReactComponents, PortableTextTypeComponent } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source:SanityImageSource) {
  return builder.image(source);
}

const ImageComponent: PortableTextTypeComponent = ({ value }) => {
  return (
    <img src={urlFor(value).url()} alt={value.alt} className='my-5 sm:m-7 rounded-lg' />
  );
};

const CodeComponent: PortableTextTypeComponent = ({ value }) => {
  const code = value.code;

  return (
    <div id='code' className='bg-black text-white p-4'>
      {code.split('\n').map((line:string, index:number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

const ElementComponent: PortableTextTypeComponent = ({ value }) => {
  return (
    <div id='CustomElement' dangerouslySetInnerHTML={{ __html: value.code }} />
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ImageComponent,
    Code: CodeComponent,
    Element: ElementComponent
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold py-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold py-3">{children}</h3>,
    normal: ({ children }) => <p className="py-2">{children}</p>
  },
  listItem: {
    bullet: ({ children }) => <li className='list-disc list-inside pl-4'>{children}</li>,
    number: ({ children }) => <li className='list-decimal list-inside pl-4'>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      return (
        <a href={value?.href} className='text-blue-500 underline'>
          {children}
        </a>
      );
    },
  },
};

export default components
