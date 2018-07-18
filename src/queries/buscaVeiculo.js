import gql from 'graphql-tag';

export default gql`
  query BuscaVeiculo ($page: Int, $limit: Int, $query: String, $type: String) {
    buscaVeiculo (page: $page, limit: $limit, query: $query, type: $type){
      pagination: pageInfo {
        hasPreviousPage
        hasNextPage
        pages
        page
      }
      total
      veiculos: edges {
        veiculo: node {
          _id
          marca
          modelo
        }
      }
    }
  }
`;
