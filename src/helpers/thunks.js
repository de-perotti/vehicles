import axios from 'axios/index';
import { actionCreators } from '../reducers/requests';
import config from '../config';

export default (name, buildBody) => {
  const {
    start,
    finish,
    fail,
    success,
    ongoing,
  } = actionCreators(name);

  return values => async (dispatch, getState) => {
    const state = getState();
    const request = state.requests[name];
    if (request && request.started && !request.finished) {
      dispatch(ongoing);
      return;
    }

    dispatch(start);

    try {
      dispatch(success(await axios({ ...buildBody(values), ...config.graphql })));
    } catch (err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(finish);
    }
  };
};
