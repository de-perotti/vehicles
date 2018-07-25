import React from 'react';
import { ApolloProvider, graphql } from 'react-apollo';
import client from '../Apollo/index';

export const withGraphQL = Component => props => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
);
