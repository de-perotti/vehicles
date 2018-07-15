import { BUSCA_VEICULO_FILTER } from '../../thunk/buscaVeiculo';
import { REQUEST_FAIL, REQUEST_SUCCESS } from '../requests';


const initialState = [];


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
      return action.data.edges.map(n => n.node);

    default:
      return state;
  }
}
