import axios from 'axios';
import { actionCreators } from '../reducers/requests';
import config from '../config';

export default ({ name, builder, method }, verifyOnGoing = true) => {
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
    if (request && verifyOnGoing && request.started && !request.finished) {
      dispatch(ongoing);
      return;
    }

    dispatch(start);

    try {
      const query = builder(values).trim();
      const options = { operationName: null, variables: {}, query };

      if (__DEV__) console.log(options);

      const res = await axios.post(config.graphql.url, options);

      dispatch(success({
        ...res,
        data: res.data.data[method || name],
      }));
    } catch (err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(finish);
    }
  };
};
