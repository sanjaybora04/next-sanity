import { ArrowRightIcon } from "lucide-react";
import Link from "../layout/custom-link";

export default function Banner() {
    return (
        <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-bitter text-white">Contact Me</h1>
                <p className="text-white text-sm pt-3">
                    <Link href="/" className="hover:underline">
                        Home{" "}
                    </Link>
                    <ArrowRightIcon className="inline w-5 h-5" />
                    <Link href="/contact" className="hover:underline">
                        {" "}
                        Contact Me
                    </Link>
                </p>
            </div>
        </section>
    )
}