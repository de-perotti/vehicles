import { combineReducers } from 'redux';
import filter from './filter';
import vehicle from './vehicle';
import vehicles from './vehicles';
import requests from './requests';

export default combineReducers({
  filter,
  requests,
  vehicles,
  vehicle,
});
