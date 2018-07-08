import { combineReducers } from 'redux';
import editing from './editing';
import selected from './selected';

export default combineReducers({
  editing,
  selected,
});
