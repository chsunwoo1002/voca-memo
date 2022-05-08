import axios from 'axios';
import { Response } from './type';

export async function userLoginPost(email: string, password: string) {
  const response = await axios.post<LoginResponse | Response>(
    'http://localhost:5000/api/userAuth/v1/login',
    {
      email,
      password,
    }
  );
  return response.data;
}

export interface LoginResponse extends Response {
  data: {
    id: string;
  };
  refreshToken: string;
  accessToken: string;
}
