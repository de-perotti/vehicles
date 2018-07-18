import React from 'react';
import { ApolloProvider, graphql } from 'react-apollo';
import client from '../ApolloClient';

export const withGraphQL = Component => props => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
);

export const composeGQL = (factors, Component) => factors
  .map(factor => graphql(factor.query, factor.option))
  .reduce((g, f) => f(g), Component);
