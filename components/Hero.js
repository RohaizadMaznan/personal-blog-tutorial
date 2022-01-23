import React from "react";

function Hero() {
  return (
    <div className="h-screen flex px-4 sm:px-6">
      <div className="flex flex-col items-center m-auto">
        <div className="max-w-xl flex flex-col items-center text-center pb-16 lg:pb-48">
          <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
            Get latest news about me
          </p>

          <h1 className="text-gray-800 text-4xl sm:text-5xl font-bold mb-8 md:mb-12">
            Make blogging more easier with GraphCMS
          </h1>

          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <a
              href="#blogs"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              All my blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
