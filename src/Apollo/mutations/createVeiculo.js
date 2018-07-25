import gql from 'graphql-tag';

export default gql`
  mutation CreateVeiculo($veiculo: VeiculoInput!) {
    createVeiculo(data: $veiculo)
  }
`;
