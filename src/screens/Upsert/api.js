import axios from 'axios';
import config from '../../config';

export const createVeiculo = ({ query, operationName, variables }) => axios({
  method: 'post',
  url: `${config.graphql}/createVeiculo`,
  data: {
    query,
    operationName,
    variables,
  },
});

export const updateVeiculo = ({ query, operationName, variables }) => axios({
  method: 'post',
  url: `${config.graphql}/updateVeiculo`,
  data: {
    query,
    operationName,
    variables,
  },
});
