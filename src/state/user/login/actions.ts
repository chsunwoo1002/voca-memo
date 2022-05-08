import { createAsyncAction } from 'typesafe-actions';
import { LoginResponse } from '../../../api/auth/login';
import { AxiosError } from 'axios';
import { Response } from '../../../api/auth/type';
import { UserInput } from './types';

export const POST_LOG_IN = 'user/POST_LOG_IN';
export const POST_LOG_IN_SUCCESS = 'user/POST_LOG_IN_SUCCESS';
export const POST_LOG_IN_ERROR = 'user/POST_LOG_IN_ERROR';
export const POST_LOG_IN_FAILURE = 'user/POST_LOG_IN_FAILURE';

export const postLoginAsync = createAsyncAction(
  POST_LOG_IN,
  POST_LOG_IN_SUCCESS,
  POST_LOG_IN_ERROR,
  POST_LOG_IN_FAILURE
)<UserInput, LoginResponse, AxiosError, Response>();

export const POST_SING_UP = 'user/POST_SIGN_UP';
export const POST_SING_UP_SUCCESS = 'user/POST_SIGN_UP_SUCCESS';
export const POST_SING_UP_ERROR = 'user/POST_SIGN_UP_ERROR';
export const POST_SING_UP_FAILURE = 'user/POST_SIGN_UP_FAILURE';

export const postSignupAsync = createAsyncAction(
  POST_LOG_IN,
  POST_LOG_IN_SUCCESS,
  POST_LOG_IN_ERROR,
  POST_LOG_IN_FAILURE
)<UserInput, LoginResponse, AxiosError, Response>();
