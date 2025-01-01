import '../globals.css'
import Script from 'next/script'
import { Metadata } from 'next'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MyChatBot from '@/components/layout/chatbot'
import { NavigationContainer } from '@/components/layout/navigation';
import { Poppins, Bitter } from 'next/font/google'
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

const bitter = Bitter({
  subsets: ['latin'],  
  weight: ['100','200','300','400','500','600','700','800','900']
})

const poppins = Poppins({
  subsets:['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
});

export const metadata: Metadata = {
  title: "Sanjay Bora | Full Stack Developer",
  description: "Experienced in React, Next.js, Node.js, and Express.js. Specializes in AWS, RESTful APIs, responsive design, and MongoDB. Explore my portfolio and skills.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    type: "website",
    siteName: "Sanjay Bora",
  },
  authors: [{ name: "Sanjay Bora" }],
  twitter: {
    card: "summary_large_image",
    siteId: "@site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sanjay Bora",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#person`,
    "url": process.env.NEXT_PUBLIC_SITEP_URL,
    "sameAs": [
      "https://www.linkedin.com/in/sanjaybora04",
      "https://www.github.com/sanjaybora04",
      "https://www.instagram.com/sanjaybora04",
      "https://www.twitter.com/sanjaybora04"
    ],
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer",
    }
  }

  return (
    <html lang="en" className='scroll-pt-20 scroll-smooth'>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="favicon" href="/favicon.ico" />
        <link rel='apple-touch-icon' href='/favicon.ico' />

        {/* Google site verification */}
        <meta name="google-site-verification" content="_pkFnCexnyNhaYel3eqz1L71RJ41maYnWEzOjT9E3zA" />
        {/* Microsoft clarity */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "opi8s15nru");
      `
        }} />
        {/* Analytics */}
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
        {/* Adsense */}
        <meta name="google-adsense-account" content="ca-pub-1622367531310821"></meta>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1622367531310821"
          crossOrigin='anonymous'
          strategy='lazyOnload'
        />
      </head>
      <body className={cn(poppins.className,bitter.className)}>
        <Header />
        <main className='mt-20'>{children}</main>
        <Footer />
        <MyChatBot/>
        <NavigationContainer/>
        <Toaster/>
      </body>
    </html>
  )
}
