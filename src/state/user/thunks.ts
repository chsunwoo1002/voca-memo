import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { LoginAction } from './types';
import { userLoginPost } from '../../api/login';
import { postLoginAsync } from './actions';
import axios from 'axios';

export function getUserProfileThunk(
  email: string,
  password: string
): ThunkAction<void, RootState, null, LoginAction> {
  return async (dispatch) => {
    const { request, success, failure, cancel } = postLoginAsync;
    dispatch(request({ email, password }));
    try {
      const userProfile = await userLoginPost(email, password);
      if (userProfile.status === 'ok') {
        dispatch(success(userProfile));
      } else {
        dispatch(cancel(userProfile));
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        dispatch(failure(e));
      }
    }
  };
}
