import { GraphQLClient } from "graphql-request";

const url = process.env.GRAPH_CMS_ENDPOINT;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: process.env.GRAPH_CMS_TOKEN,
  },
});

export default client;
