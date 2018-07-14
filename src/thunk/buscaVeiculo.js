import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const BUSCA_VEICULO_FILTER = 'buscaVeiculoFilter';
export const BUSCA_VEICULO_NO_FILTER = 'buscaVeiculoNoFilter';


const buildBody = ({
  page, limit, query, type,
}) => `{
  buscaVeiculo (${
  gqlArgumentParser({
    page, limit, query, type,
  })}){
    pageInfo {
      hasPreviousPage
      hasNextPage
      pages
      page
    }
    total
    edges {
      node {
        _id
        marca
        modelo
      }
    }
  }
}`;


export default {
  noFilter: thunkTemplate({
    name: BUSCA_VEICULO_NO_FILTER,
    builder: buildBody,
  }),
  filter: thunkTemplate({
    name: BUSCA_VEICULO_FILTER,
    builder: buildBody,
  }),
};
