import { graphql } from 'react-apollo';
import Vehicles from './Vehicles';
import query from '../../queries/buscaVeiculo';

export default Vehicles(graphql(query, {
  options: props => ({
    variables: {
      page: 1,
      limit: 20,
      query: props.filtro,
    },
  }),
}));
