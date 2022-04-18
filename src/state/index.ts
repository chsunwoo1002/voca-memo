import { combineReducers } from 'redux';
import setUserState from './user/userReducer';

const rootReducer = combineReducers({
  setUserState,
  // add reducers here
});

export default rootReducer;
