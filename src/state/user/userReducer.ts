import { User, UserState, UserAction } from './userStateType';
import type { Action } from 'redux';

const LOG_IN = 'user/LOGIN';
const LOG_OUT = 'user/LOG_OUT';

const initialState: UserState = {
  loggedIn: false,
  loggedUser: { firstName: '', lastName: '', email: '', password: '' },
};

export const userLogIn = (user: User): UserAction => ({
  type: LOG_IN,
  userState: {
    loggedIn: true,
    loggedUser: user,
  },
});

export const userLogOut = (): UserAction => ({
  type: LOG_OUT,
  userState: initialState,
});

export default function setUserState(
  state: UserState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case LOG_OUT:
      return initialState;
    case LOG_IN:
      return {
        loggedIn: false,
        userState: action.userState,
      };
    default:
      return state;
  }
}
