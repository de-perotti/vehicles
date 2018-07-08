import { buscaVeiculo } from '../screens/Home/api';
import { actionCreators } from '../reducers/requests';

export const BUSCA_VEICULO = 'buscaVeiculo';

const {
  start,
  finish,
  fail,
  success,
  ongoing,
} = actionCreators(BUSCA_VEICULO);

export default q => async (dispatch, getState) => {
  const state = getState();
  const request = state.requests[BUSCA_VEICULO];
  if (request && request.started && !request.finished) {
    dispatch(ongoing);
    return;
  }

  dispatch(start);

  try {
    dispatch(success(await buscaVeiculo()));
  } catch (err) {
    dispatch(fail(err.message));
  } finally {
    dispatch(finish);
  }
};
