import { ArrowRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page(){
    return <div>
    {/* Start banner Section */}
    <section className="h-72 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-white text-sm pt-3">
            <Link href="/" className="hover:underline">
              Home{" "}
            </Link>
            <ArrowRightIcon className="inline w-5 h-5"/>
            <Link href="/contact" className="hover:underline">
              {" "}
              Contact Me
            </Link>
          </p>
        </div>
      </section>
      {/* End banner Section */}
    <div className="max-w-3xl mx-auto my-14 bg-white shadow-lg rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Section */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <EnvelopeIcon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">Email</h2>
            <p className="text-gray-600">
              <a
                href="mailto:sanjaybora380@gmail.com"
                className="text-blue-500 hover:underline"
              >
                sanjaybora380@gmail.com
              </a>
            </p>
          </div>
        </div>
        {/* Phone Section */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <PhoneIcon className="w-6 h-6 text-white"/>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">
              <a
                href="tel:+919548983448"
                className="text-green-500 hover:underline"
              >
                +91 9548983448
              </a>
            </p>
          </div>
        </div>
        {/* LinkedIn Section */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5C2 8.16 3.34 9.5 4.98 9.5C6.62 9.5 8 8.16 8 6.5C8 4.84 6.62 3.5 4.98 3.5ZM2 22H8V10H2V22ZM22 22H16V14.5C16 13.12 15.06 12.5 14 12.5C13.2 12.5 12.5 13.04 12.34 13.75C12.34 13.83 12.34 14.25 12.34 14.5V22H6V10H11.54V11.5H11.58C12.1 10.59 13.28 9.92 14.64 9.92C17.42 9.92 19.5 11.7 19.5 14.5V22H22V22Z" />
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">LinkedIn</h2>
            <p className="text-gray-600">
              <a
                href="https://www.linkedin.com/in/sanjaybora04"
                className="text-blue-700 hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
}