import { combineReducers } from 'redux';
import filter from './filter';
import result from './result';
import vehicle from './vehicle';
import vehicles from './vehicles';
import requests from './requests';

export default combineReducers({
  filter,
  requests,
  result,
  vehicles,
  vehicle,
});
