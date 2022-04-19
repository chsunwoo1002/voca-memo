import { UserState } from './userStateType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  loggedIn: false,
  email: '',
  password: '',
} as UserState;

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.loggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: () => {
      initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
