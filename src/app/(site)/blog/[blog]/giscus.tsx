'use client'
// import Giscus from '@giscus/react'
import dynamic from 'next/dynamic'

const Giscus = dynamic(() => import('@giscus/react').then(mod => mod), {
    ssr: false
})

export default Giscus