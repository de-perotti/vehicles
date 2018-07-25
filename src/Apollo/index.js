import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


export default new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.nimble.com.br/veiculoQL/v1/gql',
  }),
  cache: new InMemoryCache({
    dataIdFromObject: o => o._id,
  }),
});
