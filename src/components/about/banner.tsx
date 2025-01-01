import Link from "../layout/custom-link";

export default function Banner(){
    return (
        <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="text-center">
          <h1 className="text-4xl font-bitter font-bold text-white">About Me</h1>
          <p className="text-white text-sm pt-3">
            <Link href="/" className="hover:underline">
              Home{" "}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline w-6 h-6"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <Link href="/about" className="hover:underline">
              {" "}
              About Me
            </Link>
          </p>
        </div>
      </section>
    )
}