import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from './config';

export default new ApolloClient({
  link: new HttpLink({ uri: config.graphql.url }),
  cache: new InMemoryCache(),
  dataIdFromObject: object => object._id,
});
