import { createReducer } from 'typesafe-actions';
import { LoginAction, LoginState } from './types';
import { POST_LOG_IN, POST_LOG_IN_SUCCESS, POST_LOG_IN_ERROR } from './actions';

const initialState: LoginState = {
  user: {
    loading: false,
    error: null,
    data: {
      email: '',
      password: '',
      id: '',
      isLoggedIn: false,
    },
  },
};

const login = createReducer<LoginState, LoginAction>(initialState, {
  [POST_LOG_IN]: (state, action) => ({
    ...state,
    userProfile: {
      loading: true,
    },
  }),
  [POST_LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [POST_LOG_IN_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default login;
