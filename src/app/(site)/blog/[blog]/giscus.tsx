'use client'
// import Giscus from '@giscus/react'
import dynamic from 'next/dynamic'

const Giscus = dynamic(() => import('@giscus/react').then(mod => mod), {
    loading: () => <p>Loading Giscus...</p>,
    ssr: false
})

export default Giscus