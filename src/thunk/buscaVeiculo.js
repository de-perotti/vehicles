import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const BUSCA_VEICULO = 'buscaVeiculo';


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


const options = {
  name: BUSCA_VEICULO,
  builder: buildBody,
};


export default thunkTemplate(options);
