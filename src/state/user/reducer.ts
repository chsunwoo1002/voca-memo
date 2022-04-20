import { createReducer } from 'typesafe-actions';
import { LoginAction, LoginState } from './types';
import { POST_LOG_IN, POST_LOG_IN_SUCCESS, POST_LOG_IN_ERROR } from './actions';

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
  },
};

const login = createReducer<LoginState, LoginAction>(initialState, {
  [POST_LOG_IN]: (state, action) => ({
    user: {
      ...state.user,
      loading: true,
    },
  }),
  [POST_LOG_IN_SUCCESS]: (state, action) => ({
    user: {
      ...state.user,
      loading: false,
      isLoggedIn: true,
      data: action.payload.data,
    },
  }),
  [POST_LOG_IN_ERROR]: (state, action) => ({
    ...initialState,
    error: action.payload,
  }),
});

export default login;
