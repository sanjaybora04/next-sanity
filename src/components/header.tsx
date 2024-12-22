'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function Header(){
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
        <header id="header" className="fixed z-[999] bg-white top-0 flex w-full justify-between p-3 md:px-16 transition-shadow duration-500">
          <Link href='/' className="flex text-2xl font-semibold p-2">
            <div className="inline-block w-8 mr-1">
              <img src="/img/fav.png" alt="logo" />
            </div>
            Sanjay
          </Link>
          <div className="flex px-3">
            <button id="sidebar_button" className="md:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <ul id="sidebar"
              className="uppercase text-sm fixed left-0 top-0 bg-black bg-opacity-95 py-2 w-64 h-full transition-transform -translate-x-full md:translate-x-0 md:static md:flex md:w-auto md:h-auto md:bg-transparent">
              <Link href="/"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 md:inline md:text-xs md:font-semibold md:text-gray-800 md:m-1">
                Home
              </Link>
              <Link href="/about"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 md:inline md:text-xs md:font-semibold md:text-gray-800 md:m-1">
                About Me
              </Link>
              <Link href="/blog"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 md:inline md:text-xs md:font-semibold md:text-gray-800 md:m-1">
                Blog
              </Link>
              <Link href="/projects"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 md:inline md:text-xs md:font-semibold md:text-gray-800 md:m-1">
                Projects
              </Link>
              <Link href="/contact"
                className="flex whitespace-nowrap p-1 px-2 m-2 my-4 text-white transition-colors duration-200 hover:text-blue-400 md:inline md:text-xs md:font-semibold md:text-gray-800 md:m-1">
                Contact
              </Link>
              <a href="/docs/Resume.pdf"
                className="flex whitespace-nowrap p-2 m-2 my-4 text-white transition-colors duration-200 bg-indigo-400 border-blue-400 justify-center md:inline md:m-1 md:px-2 md:py-0 md:text-xs md:font-semibold md:bg-white md:text-blue-400 md:border-blue-400 md:hover:text-white md:hover:bg-blue-400 border rounded-3xl"
                target="_blank">
                Resume
              </a>
            </ul>
          </div>
        </header>
    )
}