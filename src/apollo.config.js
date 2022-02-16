import { InMemoryCache, ApolloClient } from '@apollo/client';

import { uri } from './consts';

export const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});
