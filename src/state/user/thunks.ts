import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { LoginAction } from './types';
import { userLoginPost } from '../../api/login';
import { postLoginAsync } from './actions';
import axios, { AxiosError } from 'axios';

export function getUserProfileThunk(
  email: string,
  password: string
): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure } = postLoginAsync;
    dispatch(request());
    try {
      const userProfile = await userLoginPost(email, password);
      console.log(userProfile);
      dispatch(success(userProfile));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        dispatch(failure(e));
      }
    }
  };
}
