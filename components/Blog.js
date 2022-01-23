import React from "react";
import { blogsContent } from "../constant";
import { FeaturedCard, RecentCard } from "./Card";
import getFormattedDate from "../utils/dateFormat";

export const Featured = ({ blogs }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="blogs">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Featured
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            The fun parts of blogging is you can always keep on sharing your
            knowledge to the others. This tutorial on making a blog site using
            GraphCMS is going to be fun!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {blogs.map(
            (blog, key) =>
              blog.featured === true && (
                <FeaturedCard
                  key={key}
                  title={blog.title}
                  postedOn={getFormattedDate(blog.createdAt)}
                  image={blog.image.url}
                  slug={blog.slug}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export const Recently = ({ blogs }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Recently post
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
          {blogs.map(
            (blog, key) => (
                <RecentCard
                  key={key}
                  title={blog.title}
                  description={blog.content.text}
                  postedOn={getFormattedDate(blog.createdAt)}
                  image={blog.image.url}
                  slug={blog.slug}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
