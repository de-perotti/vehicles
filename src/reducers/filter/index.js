import { combineReducers } from 'redux';
import pagination from './pagination';
import value from './value';
import result from './result';

export default combineReducers({
  pagination,
  value,
  result,
});
