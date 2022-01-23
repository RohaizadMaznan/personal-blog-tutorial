import React from "react";
import Image from "next/image";

export const FeaturedCard = ({ title, postedOn, image, id, slug }) => {
  return (
    <a
      href={`blogs/${slug}`}
      className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
      key={id}
    >
      <div className="w-full h-full inset-0 group-hover:scale-110 transition duration-200 absolute">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

      <div className="relative p-4 mt-auto">
        <span className="block text-gray-200 text-sm">{postedOn}</span>
        <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
          {title}
        </h2>

        <span className="text-indigo-300 font-semibold">Read more</span>
      </div>
    </a>
  );
};

export const RecentCard = ({ title, description, postedOn, image, slug }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
      <a
        href={`blogs/${slug}`}
        className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        {/* <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        /> */}
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover object-center"
            priority
          />
        </div>
      </a>

      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">{postedOn}</span>

        <h2 className="text-gray-800 text-xl font-bold">
          <a
            href={`blogs/${slug}`}
            className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {title}
          </a>
        </h2>

        <p className="text-gray-500">{description.substring(0, 100)}...</p>

        <div>
          <a
            href={`blogs/${slug}`}
            className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
