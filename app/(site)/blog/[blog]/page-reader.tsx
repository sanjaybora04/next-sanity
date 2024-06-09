'use client'
import dynamic from 'next/dynamic';
const PageReader = dynamic(() => import('react-page-reader').then(mod => mod.PageReader), {
    // Specify options if needed, such as loading indicator, SSR behavior, etc.
    loading: () => <p>Loading PageReader</p>,
    ssr: false // Ensures the component is rendered on the client-side only
  });
export default PageReader