'use client';
import dynamic from 'next/dynamic';

// Dynamically import the PageReader component
const PageReader = dynamic(() => import('react-page-reader').then(mod => mod.PageReader), {
  // Specify options such as loading indicator and SSR behavior
  loading: () => <p>Loading PageReader...</p>,
  ssr: false // Ensure the component is rendered on the client-side only
});

export default PageReader;