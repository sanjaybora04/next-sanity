'use client'
import '../globals.css'
import { useEffect } from 'react'
import Link from 'next/link'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {

    // Close sidebar if clicked outside the sidebar

    // Todo : Also add this feature for subscriberform
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.querySelector("#sidebar");
      const sidebarButton = document.querySelector("#sidebar_button");

      if (sidebar && sidebarButton && !sidebar.contains(e.target as Node) && !sidebarButton.contains(e.target as Node)
      ) {
        sidebar.classList.remove("translate-x-0");
      }
    };

    // Toggle sidebar
    const handleSidebarButtonClick = () => {
      const sidebar = document.querySelector("#sidebar");

      if (sidebar) {
        sidebar.classList.toggle("translate-x-0");
      }
    };

    // show shadow when page is scrolled
    const showShadow = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header?.classList.add("shadow-2xl");
      } else {
        header?.classList.remove("shadow-2xl");
      }
    };

    // Toggle subscribe form
    const toggleSubscribeForm = () => {
      document.querySelector("#subscribeForm")?.classList.toggle('hidden');
    }

    document.addEventListener("click", handleClickOutside);
    document.getElementById("sidebar_button")?.addEventListener("click", handleSidebarButtonClick);
    window.addEventListener("scroll", showShadow)


    const toggleButtons = document.querySelectorAll(".toggleSubscribeForm");

    toggleButtons.forEach(button => {
      button.addEventListener("click", toggleSubscribeForm);
    });


    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.getElementById("sidebar_button")?.removeEventListener("click", handleSidebarButtonClick);
      window.removeEventListener("scroll", showShadow)
      toggleButtons.forEach(button => {
        button.removeEventListener("click", toggleSubscribeForm);
      });
    };
  }, []);


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://sanjaybora.tech/img/fav.png" />
        <link to="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        {/* Google Analytics start */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T0C2T89RB7" />
        <script
          id='google-analytics'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-T0C2T89RB7');
            `,
          }}
        />
        {/* Google Analytics end */}
      </head>
      <body>
        <header id="header" className="fixed z-[999] bg-white top-0 flex w-full justify-between p-3 sm:px-16 transition-shadow duration-500">
          <Link to='/' className="flex text-2xl font-semibold p-2">
            <div className="inline-block w-8 mr-1">
              <img src="/img/fav.png" alt="logo" />
            </div>
            Sanjay
          </Link>
          <div className="flex px-3">
            <button id="sidebar_button" className="sm:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <ul id="sidebar"
              className="uppercase text-sm fixed left-0 top-0 bg-black bg-opacity-95 py-2 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 sm:static sm:flex sm:w-auto sm:h-auto sm:bg-transparent">
              <Link to="/"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 sm:inline sm:text-xs sm:font-semibold sm:text-gray-800 sm:m-1">
                Home
              </Link>
              <Link to="/about/"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 sm:inline sm:text-xs sm:font-semibold sm:text-gray-800 sm:m-1">
                About Me
              </Link>
              <Link to="/blogs/"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 sm:inline sm:text-xs sm:font-semibold sm:text-gray-800 sm:m-1">
                Blogs
              </Link>
              <Link to="/projects/"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 sm:inline sm:text-xs sm:font-semibold sm:text-gray-800 sm:m-1">
                Projects
              </Link>
              <a href="/docs/Resume.pdf"
                className="flex whitespace-nowrap p-2 m-2 my-4 text-white transition-colors duration-200 bg-indigo-400 border-blue-400 justify-center sm:inline sm:m-1 sm:px-2 sm:py-0 sm:text-xs sm:font-semibold sm:bg-white sm:text-blue-400 sm:border-blue-400 sm:hover:text-white sm:hover:bg-blue-400 border rounded-3xl"
                target="_blank">
                Resume
              </a>
            </ul>
          </div>
        </header>

        <main className='mt-[72px]'>{children}</main>


        <footer className="bg-indigo-950 text-white p-10 sm:p-16 leading-10">
          <div className="inline-block py-5 w-80 align-top">
            <div className="">
              <div>About This Page</div>
              <div className="text-sm text-gray-400">
                This website was built with nextjs and sanity.io based on a theme from Colorlib.
              </div>
              <div className="text-sm text-gray-400">
                Copyright © 2023 sanjaybora.tech | All Rights Reserved | Content may not be reproduced or used without permission.
              </div>
            </div>
          </div>

          <div className="inline-block py-5 w-80 align-top">
            <div className="single-footer-widget">
              <div>Newsletter</div>
              <div className="text-sm text-gray-400">Stay updated with my latest projects</div>
              <div className="" id="mc_embed_signup">
                <button className="toggleSubscribeForm my-3 px-2 bg-blue-500 rounded">
                  Subscribe
                </button>
                <div id="subscribeForm" className="flex-wrap hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 h-[500px]">
                  <button className="toggleSubscribeForm block bg-red-500 ml-auto rounded-lg p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <iframe src="https://c33f9913.sibforms.com/serve/MUIEABJHmvhD1fEYRHfNqLhnsjQaJptWzxxpZ7weFu01cZYAkVnDcqOxgIZ_LOZGYkYZ7lYUAwFpbrsS2K2tXeMN8RjbTMnmS65-GBQSaJZuLOrtENdKNSu5n004iAANSCplEFQf2j2y8WblHkRJwoPXusLbZ3e2g9kfbJ4M1DtMebCvmw4tETFifsWTZN0W8hhJwrDvgshlv8rH" className="block w-full h-full shadow-lg rounded-lg"></iframe>
                </div>

              </div>
            </div>
          </div>

          <div className="inline-block py-5 w-80 algin-top">
            <div>
              <div>Follow Me</div>
              <div className="text-sm text-gray-400">Let&apos;s be social. </div>
              <div>
                <a href="http://www.linkedin.com/in/sanjay-bora-11710822b" target="_blank">
                  <span className="fa fa-linkedin text-gray-300 p-1 hover:text-gray-500 text-xl"></span>
                </a>
                <a href="https://github.com/sanjaybora04" target="_blank">
                  <span className="fa fa-github text-gray-300 p-1 hover:text-gray-500 text-xl"></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
