import Head from "next/head";
import { Featured, Recently } from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { gql } from "graphql-request";
import client from "../graphqlClient";
import { useEffect } from "react";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Home - My personal blog site</title>
        <meta
          name="description"
          content="Personal blog site by Rohaizad Maznan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Featured blogs={blogs} />

      <Recently blogs={blogs} />

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = gql`
    query {
      blogs(orderBy: createdAt_DESC) {
        title
        content {
          html
          text
        }
        createdAt
        image {
          url
        }
        featured
        slug
      }
    }
  `;

  const blogsData = await client.request(query);
  const blogs = blogsData.blogs;

  return {
    props: {
      blogs,
    },
  };
};
