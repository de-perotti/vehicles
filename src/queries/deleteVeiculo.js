import gql from 'graphql-tag';

export default gql`
  mutation DeleteVeiculo($id: ID!) {
    deleteVeiculo(id: $id) {
      _id
    }
  }
`;
