import axios from 'axios';
import config from '../../config';

export const veiculoDetails = ({ query, operationName, variables }) => axios({
  method: 'get',
  url: `${config.graphql}/veiculo`,
  data: {
    query,
    operationName,
    variables,
  },
});
