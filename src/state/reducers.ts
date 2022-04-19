import { combineReducers } from 'redux';
import userState from './user/userReducer';

const reducers = combineReducers({
  userState,
  // add reducers here
});

export default reducers;
