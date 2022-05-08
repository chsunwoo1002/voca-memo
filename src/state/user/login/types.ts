import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { LoginResponse } from '../../../api/auth/login';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
  user: {
    loading: boolean;
    error: Error | null;
    isLoggedIn: boolean;
    data: {
      email: string;
      password: string;
      id: string;
    };
    accessToken: string;
  };
};

export type UserInput = {
  email: string;
  password: string;
};
