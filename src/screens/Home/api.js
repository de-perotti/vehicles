import axios from 'axios';
import config from '../../config';

export const buscaVeiculo = ({ query, operationName, variables }) => axios({
  method: 'get',
  url: `${config.graphql}/buscaVeiculo`,
  data: {
    query,
    operationName,
    variables,
  },
});
