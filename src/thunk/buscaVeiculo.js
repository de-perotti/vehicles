import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


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


export const method = 'buscaVeiculo';


export const BUSCA_VEICULO_NO_FILTER = 'buscaVeiculoNoFilter';
export const noFilter = thunkTemplate({
  name: BUSCA_VEICULO_NO_FILTER,
  builder: buildBody,
  method,
});


export const BUSCA_VEICULO_FILTER = 'buscaVeiculoFilter';
export const filter = thunkTemplate({
  name: BUSCA_VEICULO_FILTER,
  builder: buildBody,
  method,
}, false);
