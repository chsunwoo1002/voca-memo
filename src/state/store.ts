import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(Thunk, logger));

export type RootState = ReturnType<typeof store.getState>;
export default store;
