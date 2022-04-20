import { combineReducers } from 'redux';
import userLogin from './user/login';
const reducers = combineReducers({
  userLogin,
  // add reducers here
});

export default reducers;
