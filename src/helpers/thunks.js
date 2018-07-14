import axios from 'axios/index';
import { actionCreators } from '../reducers/requests';
import config from '../config';

export default ({ name, builder }) => {
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
      const query = builder(values).trim();
      const options = { operationName: null, variables: {}, query };
      const res = await axios.post(config.graphql.url, options);

      dispatch(success({
        ...res,
        data: res.data.data[name],
      }));

    } catch (err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(finish);
    }
  };
};
