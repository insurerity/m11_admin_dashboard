import type { NormalizedCacheObject } from "@apollo/client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import type { IncomingMessage, ServerResponse } from "http";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

const httpLink = createHttpLink({
  // uri: `${env("HTTP_LINK")}`,
  uri: `https://m11-dashing-blaze.hasura.app/v1/graphql`,
});

const authLink = setContext((_: any, { headers }: { headers: any }) => {
  function returnToken() {
    const token = localStorage.getItem("userAccess");

    const tokenInStorage = localStorage.getItem("userAccess");
    if (tokenInStorage) {
      return {
        authorization: `Bearer ${token}`,
      };
    } else {
      return;
    }
  }

  return {
    headers: {
      ...headers,
      ...returnToken(),
    },
  };
});

const wsLink = httpLink;

// stackoverflow.com/questions/61743153/how-to-use-apollo-graphql-subscriptions-in-the-client-side-nextjs
// const wsLinkOld = () => {
//   return new GraphQLWsLink(
//     createClient({
//       url: 'ws://adapted-termite-34.hasura.app/v1/grahql',
//       connectionParams: {
//         authToken: 'Token',
//       },
//       keepAlive: 5_000,
//       shouldRetry: (_errOrCloseEvent: unknown) => true,
//     })
//   );
// };

// Check is done here to prevent NextJS SSR Errors
const link =
  typeof window !== "undefined"
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        authLink.concat(httpLink)
      )
    : httpLink;

function createApolloClient(_context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo() {
  const store = useMemo(() => initializeApollo(), []);
  return store;
}
