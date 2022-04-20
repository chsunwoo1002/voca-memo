import { combineReducers } from 'redux';

import login from './user';

const rootReducer = combineReducers({
  login,
  // add reducers here
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
