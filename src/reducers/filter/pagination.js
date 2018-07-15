import { REQUEST_FAIL, REQUEST_SUCCESS } from '../requests';
import { BUSCA_VEICULO_FILTER } from '../../thunk/buscaVeiculo';


const initialState = {
  hasPreviousPage: null,
  hasNextPage: null,
  pages: null,
  page: 1,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FAIL:
    case REQUEST_SUCCESS:
      if (action.name !== BUSCA_VEICULO_FILTER) return state;
      break;
    default:
      break;
  }

  switch (action.type) {
    case REQUEST_FAIL:
      return initialState;

    case REQUEST_SUCCESS:
      return action.data.pageInfo;

    default:
      return state;
  }
}
