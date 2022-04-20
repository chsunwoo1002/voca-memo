import axios from 'axios';

export async function userLoginPost(email: string, password: string) {
  const response = await axios.post<LoginResponse>(
    'https://localhost:442/api/userAuth/v1/login',
    { email, password }
  );
  return response.data;
}

export interface loginSuccess {
  status: string;
  data: string;
}

export interface loginFailure {
  status: string;
  error: string;
}

export type LoginResponse = loginFailure | loginSuccess;
