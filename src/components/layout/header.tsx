import { Button } from "@/components/ui/button";
import Link from "@/components/layout/custom-link";
import MobileNav from "./mobile-nav";
import Routes from "@/lib/routes";
import AnimatedLogo from "@/lib/assets/animated-logo";

export default async function Header() {
    return (
        <header className="h-20 z-[99] fixed top-0 w-screen p-5 flex justify-around items-center bg-white border-b border-gray-300">
            <Link href={Routes.home} className="flex items-center gap-2">
                <AnimatedLogo className="w-11 h-11"/>
            </Link>

            <div className="flex items-center">
                <Link href={Routes.about} className="hidden md:block text-sm hover:text-primary font-semibold px-3" >About me</Link>
                <Link href={Routes.blog} className="hidden md:block text-sm hover:text-primary font-semibold px-3" >Blog</Link>
                <Link href={Routes.projects} className="hidden md:block text-sm hover:text-primary font-semibold px-3" >Projects</Link>
                <Link href={Routes.contact} className="hidden md:block text-sm hover:text-primary font-semibold px-3" >Contact</Link>
            </div>

            <div className="flex sm:gap-2">
                <a href={Routes.resume} target="_blank" className="hidden md:block text-sm bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-semibold px-3 py-2 self-center " >Resume</a>
                <div>
                    <MobileNav/>
                </div>
            </div>

        </header>
    )
}