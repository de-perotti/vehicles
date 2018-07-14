import { combineReducers } from 'redux';
import pagination from './pagination';
import list from './vehicles';

export default combineReducers({
  pagination,
  list,
});
