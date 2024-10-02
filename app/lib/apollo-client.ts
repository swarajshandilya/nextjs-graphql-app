import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create Apollo Client
export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/", // SpaceX GraphQL API URL
  cache: new InMemoryCache(),
});
