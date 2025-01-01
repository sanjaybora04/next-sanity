import { ArrowUpRightFromSquare, Github, Linkedin, Youtube } from "lucide-react";
import Link from "./custom-link";
import Routes from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white pt-10 px-5 md:px-16">
      <div className="flex flex-wrap gap-10">
        <div className="max-w-80">
          <div className="">
            <div className="font-bitter text-xl">About This Website</div>
            <div className="text-sm mt-2 text-gray-400">
              This page is a reflection of my journey as a developer, showcasing my skills, projects, and expertise in full-stack development, server management, and DevOps. Explore my work and connect with me for collaboration opportunities!
            </div>
          </div>
        </div>

        <div className="max-w-80 space-y-1">
          <div className="mb-2 text-xl font-bitter">Quick Links</div>
          <Link href={Routes.about} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white hover:underline">
            About me
            <ArrowUpRightFromSquare className="w-3 h-3" />
          </Link>
          <Link href={Routes.projects} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white hover:underline">
            Projects
            <ArrowUpRightFromSquare className="w-3 h-3" />
          </Link>
          <Link href={Routes.blog} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white hover:underline">
            Blog
            <ArrowUpRightFromSquare className="w-3 h-3" />
          </Link>
          <Link href={Routes.contact} className="flex items-center gap-2 text-gray-400 text-sm hover:text-white hover:underline">
            Contact
            <ArrowUpRightFromSquare className="w-3 h-3" />
          </Link>

        </div>

        <div className="max-w-80">

          <div className="font-bitter text-xl">Social Links</div>
          <div className="text-sm mt-2 text-gray-400">Let&apos;s be social. </div>
          <div className="flex gap-2 mt-1 text-gray-400 ">
            <a href="https://www.youtube.com/@sanjaybora04" target="_blank" className="hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sanjaybora04" target="_blank" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sanjaybora04" target="_blank" className="hover:text-white">
              <Github className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>
      <div className="border-t border-white py-3 mt-5 text-center font-bitter">© 2025 Sanjay Bora. All rights reserved.</div>
    </footer>
  )
}