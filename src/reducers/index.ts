import { combineReducers } from 'redux';
import { responseReducer } from './responseReducer';

const reducers = combineReducers({
  response: responseReducer
});

export default reducers;
