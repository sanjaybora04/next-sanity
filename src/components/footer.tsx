export default function Footer(){
    return (
        <footer className="bg-indigo-950 text-white p-10 md:p-16 leading-10">
          <div className="inline-block py-5 w-80 align-top">
            <div className="">
              <div>About This Page</div>
              <div className="text-sm text-gray-400">
                This website was built with nextjs and sanity.io based on a theme from Colorlib.
              </div>
              <div className="text-sm text-gray-400">
                Copyright © 2024 sanjaybora.vercel.app | All Rights Reserved | Content may not be reproduced or used without permission.
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
                <div id="subscribeForm" className="flex-wrap hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 h-[570px] z-[99999]">
                  <button className="toggleSubscribeForm block bg-red-500 ml-auto rounded-lg p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <iframe src="https://c33f9913.sibforms.com/serve/MUIFAJy5LGzTevCfDmVhCndlyps-im43fhL0feiLLK7Y_RjooFCwl6KjxZhUi96lAqaLbQ1JLv7fl1PHOHvBDBUAL6PtL5nV8FWLLo_4lWaA73FQAXj8UKtBeHWVe2zq1Resp8OpT99TIdGKdEKZAKQndg1YN3GICXDIRvgEy6tOtVZJFNPlNkZLJ81scDlHqgPSbYZZnWaPJ9lm" className="block w-full h-full shadow-lg rounded-lg" ></iframe>
                </div>

              </div>
            </div>
          </div>

          <div className="inline-block py-5 w-80 algin-top">
            <div>
              <div>Follow Me</div>
              <div className="text-sm text-gray-400">Let&apos;s be social. </div>
              <div>
                <a href="https://www.linkedin.com/in/sanjaybora04" target="_blank">
                  <span className="fa fa-linkedin text-gray-300 p-1 hover:text-gray-500 text-xl"></span>
                </a>
                <a href="https://github.com/sanjaybora04" target="_blank">
                  <span className="fa fa-github text-gray-300 p-1 hover:text-gray-500 text-xl"></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
    )
}