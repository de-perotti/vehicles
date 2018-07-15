import { combineReducers } from 'redux';
import pagination from './pagination';
import list from './list';

export default combineReducers({
  pagination,
  list,
});
