'use client'

import dynamic from "next/dynamic";

const PageReader = dynamic(() => import("./page-reader"),{ssr:false});

export default PageReader