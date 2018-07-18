import gql from 'graphql-tag'''

export default gql`
  mutation UpdateVeiculo($data: JSON!, $id: ID!){
    updateVeiculo (data: $data, id: $id) {
      _id
    }
}`;
