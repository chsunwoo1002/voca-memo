import { createReducer } from 'typesafe-actions';
import { LoginAction, LoginState } from './types';
import {
  POST_LOG_IN,
  POST_LOG_IN_SUCCESS,
  POST_LOG_IN_ERROR,
  POST_LOG_IN_FAILURE,
} from './actions';

const initialState: LoginState = {
  user: {
    loading: false,
    error: null,
    isLoggedIn: false,
    data: {
      email: '',
      password: '',
      id: '',
    },
    accessToken: '',
  },
};

const login = createReducer<LoginState, LoginAction>(initialState, {
  [POST_LOG_IN]: (state, action) => ({
    user: {
      ...state.user,
      data: {
        ...state.user.data,
        email: action.payload.email,
        password: action.payload.password,
      },
      loading: true,
    },
  }),
  [POST_LOG_IN_SUCCESS]: (state, action) => ({
    user: {
      ...state.user,
      loading: false,
      isLoggedIn: true,
      data: {
        ...state.user.data,
        id: action.payload.data.id,
      },
      accessToken: action.payload.accessToken,
    },
  }),
  [POST_LOG_IN_ERROR]: (state, action) => ({
    user: {
      ...state.user,
      loading: false,
      error: action.payload,
    },
  }),
  [POST_LOG_IN_FAILURE]: (state, action) => ({
    user: {
      ...state.user,
      loading: false,
    },
  }),
});

export default login;
