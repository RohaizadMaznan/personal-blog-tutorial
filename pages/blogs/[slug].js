import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { gql } from "graphql-request";
import client from "../../graphqlClient";
import { RichText } from "@graphcms/rich-text-react-renderer";
import getFormattedDate from "../../utils/dateFormat";
import Image from "next/image";

export default function Index({ blog }) {
  return (
    <>
      <Head>
        <title>Blog - {blog.title}</title>
        <meta
          name="description"
          content={`Personal blog site by Rohaizad Maznan, ${blog.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Content blog */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl sm:text-4xl font-black text-center mb-4 md:mb-6 capitalize">
            {blog.title}
          </h1>

          <div className="bg-gray-100 w-full h-[400px] overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
            {/* <img
              loading="lazy"
              className="w-full h-full object-cover object-center"
            /> */}
            <div className="w-full h-full relative">
              <Image
                src={blog.image.url}
                alt={"Image -" + blog.title}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex justify-end text-gray-500 sm:text-sm mb-6 md:mb-8">
            <p>{getFormattedDate(blog.createdAt)}</p>
          </div>

          <div className="prose prose-xl">
            <RichText content={blog.content.raw.children} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      blog(where: { slug: $pageSlug }) {
        title
        content {
          raw
          html
        }
        createdAt
        image {
          url
        }
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await client.request(query, variables);
  const blog = data.blog;

  return {
    props: {
      blog,
    },
  };
};
