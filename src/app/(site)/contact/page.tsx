
import Banner from "@/components/contact/banner";
import { ContactForm } from "@/components/contact/form";
import Socials from "@/components/contact/socials";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Sanjay Bora for web development projects, collaborations, or queries.",
  alternates: {
    canonical: `/contact`,
  },
  openGraph: {
    images: [`/img/contact.jpg`],
    title: "Contact Sanjay Bora | Full Stack Developer",
    description: "Get in touch with Sanjay Bora for web development projects, collaborations, or queries.",
    url: `/contact`,
  },
  twitter: {
    title: "Contact Sanjay Bora | Full Stack Developer",
    description: "Get in touch with Sanjay Bora for web development projects, collaborations, or queries.",
  },
  authors: [{ name: "Sanjay Bora" }],
  keywords: ["contact sanjay bora", "contact"],
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Sanjay Bora | Full Stack Developer",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    "description": "Get in touch with Sanjay Bora for web development projects, collaborations, or queries.",
    "mainEntity": {
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`
    }
  }
  return <div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Banner/>
    <ContactForm/>
    <Socials/>
  </div>

}