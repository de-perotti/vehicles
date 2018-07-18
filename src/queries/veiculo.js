import gql from 'graphql-tag';

export default gql`
  query Veiculo ($id: ID!) {
    veiculo (id: $id) {
      _id
      marca
      modelo
      ano_fabricacao
      ano_modelo
      combustivel
      cor
      usado
    }
  }
`;
