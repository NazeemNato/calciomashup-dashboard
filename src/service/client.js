import { ApolloClient,InMemoryCache  } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://football-json.nazeemnato.repl.co/graphql",
  cache: new InMemoryCache(),
});
