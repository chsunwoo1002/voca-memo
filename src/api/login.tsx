import axios from 'axios';

export async function userLoginPost(email: string, password: string) {
  const response = await axios.post<LoginResponse>(
    'https://localhost:442/api/userAuth/v1/login',
    { email, password }
  );
  return response.data;
}

export interface LoginResponse {
  status: string;
  error: null | string;
  data: {
    email: string;
    password: string;
    id: string;
  };
}
